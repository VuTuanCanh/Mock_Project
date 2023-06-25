import { useState } from "react";
import _ from "lodash";

export default function ImageDisplay(props: any) {
  const [image, setImage] = useState("");

  return (
    <>
      <div className=" ">
        <div className="bg-red-600 text-white float-right   rounded text-[13px] p-2 w-12">
          New
        </div>
        <div className="flex  place-content-center hover:ease-in-out hover:scale-150 mb-12 cursor-pointer">
          <img
            className="w-full h-44  object-contain object-center my-10"
            src={image === "" ? props.currentProduct?.imageURL : image}
            alt={props.currentProduct?.name}
          />
        </div>
        <div className="flex justify-center border-red-500">
          {Array("", "", "", "")
            .fill(props.currentProduct?.imageURL)
            .map((img, i) => (
              <div
                key={i}
                className="flex mr-2  place-content-center hover:cursor-pointer border-shoes"
                onClick={() => {
                  setImage(img);
                }}
              >
                <img
                  className="w-full h-30 object-contain object-center"
                  src={image !== "" ? image : props.currentProduct?.imageURL}
                />
              </div>
            ))}
        </div>
      </div>
    </>
  );
}
