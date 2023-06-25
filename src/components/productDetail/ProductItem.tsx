import { Link } from "react-scroll";
import { star } from "./product-list/smallData";
import { useNavigate } from "react-router-dom";

export default function ProductItem({ product }: any) {
  const navigate = useNavigate();

  return (
    <>
      <div key={product.id} className={newProduct}>
        <Link
          to="top"
          smooth={true}
          duration={500}
          className=" pb-10 hover:cursor-pointer  "
          onClick={() => {
            navigate(`/products/${product?._id}`);
          }}
        >
          <div className="flex justify-between text-white text-[13px] ">
            <div className="bg-red-600 text-white px-1 rounded">New</div>
          </div>
          <div className="flex py-4 place-content-center">
            <img
              className="w-full h-44 object-contain object-center"
              src={product?.imageURL}
              alt={product?.name}
            />
          </div>
        </Link>

        <div
          className="hover:text-red-600 hover:cursor-pointer"
          onClick={() => {
            navigate(`/products/${product?._id}`);
          }}
        >
          {product?.name}
        </div>
        <div className="">
          {star.map((s, i) => (
            <i key={i} className="fas fa-star text-amber-400 mr-2"></i>
          ))}
        </div>
        <div className="flex justify-between items-center">
          <div className="text-[20px]">${product?.price}</div>
          <div className={starWrapper}>
            <i className="fas fa-shopping-cart place-content-center"></i>
          </div>
        </div>

        <div className={iconContainer}>
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
    </>
  );
}

const newProduct =
  "shadow hover:shadow-lg border-solid border-1 border-stone-200 mt-8 p-2 w-1/5 h-auto m-1 relative";

const starWrapper =
  "flex justify-center items-center cursor-pointer w-10 h-10 hover:bg-red-700 bg-stone-200 text-stone-800 rounded-full hover:text-white";

const iconContainer =
  "flex justify-center before:py-12 before:color-stone-900 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 hover:opacity-100 z-index-10";
const icon =
  "flex justify-center items-center w-8 h-8 bg-stone-200 cursor-pointer hover:bg-red-700 rounded-full hover:text-white";
