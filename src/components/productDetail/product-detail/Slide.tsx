import { useEffect, useState } from "react";
import { ProductType } from "../product-list/Interface";
import ProductItem from "../ProductItem";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../call-api/reducer";
import { getProductFetch } from "../../../call-api/productSlice";

export default function Slide({ filtered }: any) {
  const { products } = useSelector((state: RootState) => state.products);
  const dispatch = useDispatch();

  const [pageIndex, setPageIndex] = useState(0);

  useEffect(() => {
    dispatch(getProductFetch());
  }, []);

  const handleNext = () => {
    if (pageIndex < totalPages - 1) setPageIndex(pageIndex + 1);
  };
  const handlePrevious = () => {
    if (pageIndex > 0) setPageIndex(pageIndex - 1);
  };

  const pageSize = 4;

  const totalPages =
    Math.floor(filtered.length / pageSize) +
    (filtered.length % pageSize === 0 ? 0 : 1);

  const start = pageSize * pageIndex;
  const end = pageSize + start;

  const relatedProducts = filtered.slice(start, end);

  return (
    <>
      <div className=" mt-10 relative pb-5">
        <div className="flex justify-around items-center ">
          {products.length > 0 &&
            relatedProducts.map((product: ProductType) => (
              <ProductItem key={product._id} product={product} />
            ))}
        </div>

        <div className="z-10 flex justify-between items-center px-2 absolute top-1/2 left-0 right-0 transform  -translate-x- -translate-y-1/2">
          <div
            onClick={handlePrevious}
            className={` ${
              pageIndex === 0
                ? "text-stone-100 cursor-auto hover:bg-stone-200"
                : ""
            } bg-stone-300 text-[16px] px-4 py-2 rounded-full hover:bg-red-600 hover:text-white cursor-pointer z-50 `}
          >
            <i className="fas fa-chevron-left"></i>
          </div>
          <div
            onClick={handleNext}
            className={`${
              pageIndex === totalPages - 1
                ? "text-stone-100 cursor-auto hover:bg-stone-200 "
                : ""
            }  bg-stone-300 text-[16px] px-4 py-2 rounded-full hover:bg-red-600 hover:text-white cursor-pointer z-50 `}
          >
            <i className="fas fa-chevron-right"></i>
          </div>
        </div>
      </div>
    </>
  );
}
