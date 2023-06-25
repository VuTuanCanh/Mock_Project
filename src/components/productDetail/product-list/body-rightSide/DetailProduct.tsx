import { star } from "../smallData";
import { DetailProductType } from "../Interface";
import { useNavigate } from "react-router-dom";

export default function DetailProduct({ data }: DetailProductType) {
  const navigate = useNavigate();

  return (
    <>
      <div className=" p-10 ">
        {data.length > 0 &&
          data?.map((product) => (
            <div
              key={product._id}
              className={`flex justify-center items-start mx-auto pb-8 text-[18px]`}
            >
              <div
                className=" pb-10 mr-8 relative hover:cursor-pointer "
                onClick={() => {
                  navigate(`/products/${product?._id}`);
                }}
              >
                <div className="flex justify-between items-center text-white text-[13px] pb-5">
                  <div className="bg-red-600 text-white px-1 rounded">New</div>
                </div>
                <div className="flex  py-4 place-content-center">
                  <img
                    className="w-full h-44 object-contain object-center"
                    src={product?.imageURL}
                    alt={product?.name}
                  />
                </div>
                <div className="flex justify-center before:py-5 before:color-stone-900 absolute top-1/2 left-1 transform  -translate-x- -translate-y-1/2 opacity-0 hover:opacity-100 z-index-10">
                  <div className={icon}>
                    <i className="far fa-heart"></i>
                  </div>
                  <div className={`${icon} mx-4 `}>
                    <i className="fas fa-random"></i>
                  </div>
                  <div className={icon}>
                    <i className="fas fa-search"></i>
                  </div>
                </div>
              </div>
              <div className="w-1/2 ">
                <div
                  className="hover:text-red-600 hover:cursor-pointer text-[20px]"
                  onClick={() => {
                    navigate(`/products/${product?._id}`);
                  }}
                >
                  {product?.name}
                </div>
                <div className=" my-1">
                  {star.map((s, i) => (
                    <i key={i} className="fas fa-star text-amber-400 mr-2"></i>
                  ))}
                </div>
                <div className="flex justify-between items-center inline my-1">
                  <div>
                    <span className="text-red-700 decoration-4 ml-1 text-[22px]">
                      {" "}
                      ${product?.price}
                    </span>
                  </div>
                </div>
                <div>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Reprehenderit vero sit fugit delectus veritatis est ea
                  quisquam odio repudiandae libero!
                </div>
                <div className="my-2">
                  Available:{" "}
                  <span className="text-green-500">
                    {product?.items_left} In Stock
                  </span>
                </div>
                <div className="bg-gray-900 text-white inline-block p-3 rounded">
                  <span>ADD TO CART</span>
                </div>
              </div>
            </div>
          ))}
      </div>
    </>
  );
}

const icon =
  "flex justify-center items-center w-8 h-8 bg-stone-200 cursor-pointer hover:bg-red-700 rounded-full hover:text-white";
