export default () => {
  return (
    <div className="my-5">
      <div className="md:grid md:grid-cols-3 mx-8 mb-14 ">
        <div className="overflow-hidden group/zoom mb-5 relative md:mr-10 ">
          <img
            src="https://demo2.posthemes.com/pos_junno/img/cms/4_1.jpg"
            alt="giaynam"
            className="group-hover/zoom:scale-110 duration-500 w-full"
          />
          <button className="absolute top-1/2 left-1/2 -translate-x-1/2 border rounded bg-slate-100 px-3 py-3 hover:bg-red-500">
            Men's Shoes
          </button>
        </div>

        <div className="overflow-hidden group/zoom mb-5 relative md:mr-10">
          <img
            src="https://demo2.posthemes.com/pos_junno/img/cms/5_1.jpg"
            alt="giaynu"
            className="group-hover/zoom:scale-110 duration-500 w-full"
          />
          <button className="absolute top-1/2 left-1/2 -translate-x-1/2 border rounded bg-slate-100 px-3 py-3 hover:bg-red-500 ">
            Women's Shoes
          </button>
        </div>

        <div className="md:grid md:grid-rows-2 ">
          <div className="overflow-hidden group/zoom mb-5 relative md:mr-10">
            <img
              src="https://demo2.posthemes.com/pos_junno/img/cms/6_1.jpg"
              alt="giaynu"
              className="group-hover/zoom:scale-110 duration-500 w-full"
            />
            <button className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/3 border rounded bg-slate-100 px-3 py-3 hover:bg-red-500 ">
              Running
            </button>
          </div>
          <div className="overflow-hidden group/zoom mb-5 relative md:mr-10">
            <img
              src="https://demo2.posthemes.com/pos_junno/img/cms/7_1.jpg"
              alt="giaynu"
              className="group-hover/zoom:scale-110 duration-500 w-full"
            />
            <button className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/3 border rounded bg-slate-100 px-3 py-3 hover:bg-red-500 ">
              Accessories
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
