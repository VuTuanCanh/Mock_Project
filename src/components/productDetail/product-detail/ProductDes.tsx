export default function ProductDes(props: any) {
  return (
    <>
      <div className="border-2 border-stone-100 p-10  ">
        <div>Logo</div>
        <div className="my-3">
          <span className="font-black ">Reference</span> <span>demo</span>
        </div>
        <div>
          <span className="font-black">In stock</span>{" "}
          <span>{props.currentProduct?.rating?.count}</span>
        </div>
        <p className="mt-5 mb-2 ">Data Sheet</p>
        <div>
          <div className="flex justify-between items-center mb-2 ">
            <span className="w-1/2  p-2  mr-2 bg-red-100  text-stone-700 ">
              Compositions
            </span>
            <span className="w-1/2  p-2 mr-2  bg-red-100 text-stone-700">
              Cotton
            </span>
          </div>
          <div className="flex justify-between items-center mb-2 ">
            <span className="w-1/2  p-2 bg-green-100  mr-2 text-stone-700">
              Paper Type
            </span>
            <span className="w-1/2  p-2 bg-green-100  mr-2 text-stone-700">
              Doted
            </span>
          </div>
          <div className="flex justify-between items-center mb-2 ">
            <span className=" w-1/2  p-2 bg-red-100 mr-2 text-stone-700">
              Color
            </span>
            <span className=" w-1/2  p-2 bg-red-100 mr-2 text-stone-700">
              Black
            </span>
          </div>
          <div className="flex justify-between items-center mb-2  ">
            <span className="w-1/2  p-2 bg-green-100 mr-2 text-stone-700">
              Size
            </span>
            <span className="w-1/2  p-2 bg-green-100 mr-2 text-stone-700">
              L
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className=" w-1/2 p-2 bg-red-100 mr-2 text-stone-700">
              Frame Size
            </span>
            <span className=" w-1/2  p-2 bg-red-100 mr-2 text-stone-700">
              40x60cm
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
