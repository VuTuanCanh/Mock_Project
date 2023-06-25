import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { RootState } from "../../call-api/reducer";
import ProductDes from "./product-detail/ProductDes";
import Description from "./product-detail/Description";
import Review from "./product-detail/Review";
import Modal from "./product-detail/ReviewModal";
import Security from "./product-detail/Security";
import SocialMedia from "./product-detail/SocialMedia";
import ImageDisplay from "./product-detail/ImageDisplay";
import { des, star } from "./product-list/smallData";
import Slide from "./product-detail/Slide";
import { ProductType } from "./product-list/Interface";
import { Link } from "react-scroll";
import { getProductFetch } from "../../call-api/productSlice";

export default function ProductDetail() {
  const { products } = useSelector((state: RootState) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductFetch());
  }, []);

  const { id } = useParams();
  const currentProduct = products.find((p) => p._id === id);

  const [displayReview, setDisplayReview] = useState(false);
  const [displayDefaultDes, setDisplayDefaultDes] = useState(true);
  const [displayDes, setDisplayDes] = useState("");

  const [reviewCount, setReviewCount] = useState(0);
  const [customerReview, setCustomerReview] = useState([
    {
      customerName: "",
      customerTitleReview: "",
      customerContentReview: "",
      date: "",
      countStar: 0,
    },
  ]);

  const youMightAlsoLike = products?.filter(
    (p: ProductType) => p?.category === currentProduct?.category
  );

  const otherProduct = products;

  return (
    <>
      <div id="top" className=" ">
        <div className="grid  sm:grid-cols-1 md:grid-cols-2  p-4 gap-4 ">
          {/* IMG */}
          <ImageDisplay currentProduct={currentProduct} />
          {/* DES */}
          <div className=" ml-10">
            <p className="text-[24px]">{currentProduct?.name}</p>
            <div className="flex justify-start items-center  flex-wrap">
              <div className=" my-1 mr-2">
                {star.map((_s, i) => (
                  <i key={i} className="fas fa-star text-amber-400 mr-2"></i>
                ))}
              </div>
              <div className="mr-3 hover:text-red-600 cursor-pointer">
                <i className="far fa-comment-dots"></i>
                <Link
                  to="review"
                  smooth={true}
                  duration={500}
                  onClick={() => {
                    setDisplayDes("Reviews");
                    setDisplayDefaultDes(false);
                  }}
                >
                  {" "}
                  Read reviews({reviewCount})
                </Link>
              </div>
              <div className="hover:text-red-600 cursor-pointer">
                <i className="far fa-edit"></i>
                <span onClick={() => setDisplayReview(true)}>
                  {" "}
                  Write a review
                </span>
              </div>
            </div>
            <div className="flex flex-wrap justify-start items-center inline my-6">
              <div className="text-[24px] mr-5 ">
                <span className="text-black-700  decoration-4 ml-1 font-extrabold  mr-2">
                  {" "}
                  ${currentProduct?.price}
                </span>
              </div>
            </div>
            <div className="my-5">
              Available: <span className="text-green-500"></span>
            </div>
            {/*  ADD TO CART */}
            <div className="flex flex-wrap">
              <form className="  w-20 mr-5">
                <input
                  type="number"
                  name="quantity"
                  id=""
                  className="py-3 px-3 w-20 border border-stone-500 rounded"
                  min={0}
                  placeholder="0"
                />
              </form>
              <div className="bg-gray-900 hover:bg-red-600 text-white inline-block p-3 rounded  cursor-pointer">
                <span>ADD TO CART</span>
              </div>
            </div>
            {/* Add to wishlist */}
            <div className="flex flex-wrap justify-start">
              <div className="hover:text-red-600 py-4 pr-2 mr-5 cursor-pointer">
                <i className="far fa-heart mr-2"></i>
                <span>Add to wishlist </span>
              </div>
              <div className="hover:text-red-600 py-4 pr-2  cursor-pointer">
                <i className="fas fa-random mr-2"></i>
                <span>Add to compare </span>
              </div>
            </div>
            {/* SHARE */}
            <SocialMedia />
            <hr className="my-5" />
            {/*  Security  */}
            <Security />
          </div>
        </div>
        {/* Description  + Product Details + Reviews*/}
        <div className="mt-16">
          <div className=" mx-auto text-center  flex flex-wrap justify-center items-center">
            {des.map((d: string) => (
              <div
                key={d}
                id={displayDes === "Reviews" ? "review" : ""}
                className={` ${
                  displayDes === d ? "dis-active" : ""
                } cursor-pointer text-[30px] mx-5 hover:border-red-600 border-b-2 border-white`}
                onClick={() => {
                  setDisplayDes(d);
                  setDisplayDefaultDes(false);
                }}
              >
                {d}
              </div>
            ))}
          </div>
          {/* Description */}
          {displayDefaultDes ? <Description /> : null}
          {displayDes === "Description" && <Description />}

          {/* Product Details */}
          {displayDes === "Product Details" ? (
            <ProductDes currentProduct={currentProduct} />
          ) : null}
          {/* Reviews */}
          {displayDes === "Reviews" ? (
            <Review
              id="review"
              customerReview={customerReview}
              reviewCount={reviewCount}
            />
          ) : null}
          {/* Review Modal */}
          {displayReview ? (
            <Modal
              currentProduct={currentProduct}
              setDisplayReview={setDisplayReview}
              reviewCount={reviewCount}
              setReviewCount={setReviewCount}
              setCustomerReview={setCustomerReview}
              customerReview={customerReview}
              setDisplayDes={setDisplayDes}
              setDisplayDefaultDes={setDisplayDefaultDes}
            />
          ) : null}
        </div>
        <div>
          {/* You Might Also Like  */}
          <div>
            <div className="text-center mt-10">
              <p className="text-[30px]">You Might Also Like </p>
              <p>Add Related products to weekly line up </p>
            </div>

            <Slide products={products} filtered={youMightAlsoLike} />
          </div>
          {/* Other Products   */}
          <div>
            <div className="text-center mt-10">
              <p className="text-[30px]">Other Products </p>
              <p>{otherProduct.length} other products in the same category: </p>
            </div>

            <Slide products={products} filtered={otherProduct} />
          </div>
        </div>
      </div>
    </>
  );
}
