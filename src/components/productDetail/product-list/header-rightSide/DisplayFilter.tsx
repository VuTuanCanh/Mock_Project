import { DisplayFilterType } from "../Interface";

export default function DisplayFilter({
  filterDisplay,
  setClosePrice,
  setCloseCategory,
}: DisplayFilterType) {
  if (filterDisplay[0].selected === "" && filterDisplay[1].closeCategory) {
    window.location.reload();
  }
  if (filterDisplay[1].selected === "" && filterDisplay[0].closePrice) {
    window.location.reload();
  }
  if (filterDisplay[0].closePrice && filterDisplay[1].closeCategory) {
    window.location.reload();
  }
  return (
    <>
      <div
        className={` 
          ${
            filterDisplay[0].displayPrice || filterDisplay[1].displayCategory
              ? "flex"
              : "hidden"
          }
         
             justify-start items-center p-2 mt-3 bg-stone-300 w-full columns-6 `}
      >
        <p>Active Filters </p>
        <div
          className={` ${filterDisplay[0].closePrice ? "hidden" : " "} 
            ${filterDisplay[0].displayPrice ? "flex" : "hidden"}
            mx-4 bg-white p-3  justify-start `}
        >
          <div>
            {" "}
            {filterDisplay[0].selectedName}: ${filterDisplay[0].min} -{" "}
            <span className="capitalize"> ${filterDisplay[0].selected}</span>
          </div>
          <div>
            <i
              onClick={() => {
                setClosePrice(true);
              }}
              className="fas fa-times inline-block ml-2 text-stone-500 cursor-pointer"
            ></i>
          </div>
        </div>

        <div
          className={` ${filterDisplay[1].closeCategory ? "hidden" : " "} 
            ${filterDisplay[1].displayCategory ? "flex" : "hidden"}
            mx-4 bg-white p-3  justify-start `}
        >
          <div>
            {" "}
            {filterDisplay[1].selectedName}:{" "}
            <span className="capitalize">{filterDisplay[1].selected}</span>
          </div>
          <div>
            <i
              onClick={() => setCloseCategory(true)}
              className="fas fa-times inline-block ml-2 text-stone-500 cursor-pointer"
            ></i>
          </div>
        </div>
      </div>
    </>
  );
}
