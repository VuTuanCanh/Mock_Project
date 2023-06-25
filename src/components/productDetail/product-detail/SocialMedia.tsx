import React from "react";
import { Link } from "react-router-dom";

export default function SocialMedia() {
  return (
    <>
      <div>
        <span className="text[18px] font-extrabold mr-4">Share</span>
        <Link to="https://www.facebook.com/ ">
          {" "}
          <i className=" hover:text-red-600 mr-3 cursor-pointer text-stone-600 fab fa-facebook-f"></i>
        </Link>
        <Link to="https://twitter.com/ ">
          {" "}
          <i className=" hover:text-red-600 mr-3 cursor-pointer text-stone-600 fab fa-twitter"></i>
        </Link>
        <Link to="https://www.google.com/">
          {" "}
          <i className=" hover:text-red-600 mr-3 cursor-pointer text-stone-600 fab fa-google"></i>
        </Link>
        <Link to="https://www.pinterest.com/">
          {" "}
          <i className=" hover:text-red-600 mr-3 cursor-pointer text-stone-600 fab fa-pinterest-p"></i>
        </Link>
      </div>
    </>
  );
}
