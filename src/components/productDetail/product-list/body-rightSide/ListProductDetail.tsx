import { ListProductDetailType } from "../Interface";
import ProductItem from "../../ProductItem";

export default function ListProductDetail({ data }: ListProductDetailType) {
  return (
    <>
      <div
        className={`flex justify-around items-start fex-col  flex-wrap relative `}
      >
        {data.length > 0 &&
          data?.map((product) => (
            <ProductItem key={product._id} product={product} />
          ))}
      </div>
    </>
  );
}
