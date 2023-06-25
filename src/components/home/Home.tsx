import * as React from "react";
import Product from "../productDetail/ProductDetail";
import ContactUs from "../contact/ContactUs";
import AboutUs from "../contact/AboutUs";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../call-api/reducer";
import { getProductFetch } from "../../call-api/productSlice";
import { useEffect } from "react";
import SlideHeaderHome from "./slide/slideHeaderHome";
import ImageHeader from "./slide/imageHeader";
import Product1 from "../product-demo/Product1";
import ImageBody from "./imageBody/imageBody";
import Swiper from "swiper";
import LatestBlogs from "../Latest/LatestBlogs";
import { IProductNew } from "../../types/productsnew";
import axios from "axios";
import { Alert } from "@mui/material";
export interface IHomeProps {}

export default function Home(props: IHomeProps) {
  const dispatch = useDispatch();
  const [dataProduct, setDataProduct] = React.useState<IProductNew[]>();

  const { isLoading, error, products } = useSelector((state: RootState) => state.products);

  useEffect(() => {
    dispatch(getProductFetch());
    fetchDataProducts();
  }, []);

  if (isLoading) {
    <div>Loading...</div>;
  }
  if (error) {
    <div>Error: {error.message} </div>;
  }

  const fetchDataProducts = async () => {
    try {
      const products = await axios.get("https://server-mock-dfd4.onrender.com/api/products");
      if (products && products.data) {
        setDataProduct(products.data.products);
      }
    } catch (error) {
      console.log("error: ", error);
      alert(<Alert severity="error">Email hoặc Password không đúng!</Alert>);
    }
  };

  return (
    <div>
      <div className="my-6">
        <SlideHeaderHome />
      </div>

      <div>
        <ImageHeader />
      </div>

      <div>
        <div className="grid justify-items-center p-7 ">
          <div className="grid justify-items-center pb-3">
            <h1 className="text-black font-black text-4xl pb-1 font-serif">Our Product</h1>
            <p className=" font-light text-zinc-500 font-sans">
              Add our products to weekly line up
            </p>
          </div>
          <div className="">
            <button className="bg-slate-50 py-2 px-4 mr-2 border rounded border-solid hover:border-red-500 hover:text-red-500">
              Women Shoes
            </button>
            <button className="bg-slate-50 py-2 px-4 mr-2 border rounded border-solid hover:border-red-500 hover:text-red-500">
              Men Shoes
            </button>
            <button className="bg-slate-50 py-2 px-4 mr-2 border rounded border-solid hover:border-red-500 hover:text-red-500">
              Casual Shoes
            </button>
          </div>
        </div>

        <div className="grid grid-rows-2 grid-cols-5">
          {dataProduct &&
            dataProduct.slice(0, 10).map((product) => {
              return <Product1 product={product} />;
            })}
        </div>
      </div>

      <div>
        <ImageBody />
        <LatestBlogs />
      </div>
    </div>
  );
}
