import { GridAndBlockIconType } from "../Interface";
import Sort from "./Sort";

export default function GridAndBlockIcon({
  displayGridIcon,
  displayGridProduct,
  displayBlockIcon,
  sorted,
  sortColumn,
  sortOrder,
  setDisplayGridIcon,
  setDisplayBlockIcon,
  setDisplayGridProduct,
  onSort,
}: GridAndBlockIconType) {
  return (
    <>
      <div className="flex justify-between items-center p-4 bg-gray-100 ">
        <div>
          <i
            className={` ${
              displayGridIcon || !displayGridProduct ? "text-red-600" : ""
            }  fas fa-th  cursor-pointer text-[20px]  mr-5`}
            onClick={() => {
              setDisplayGridIcon(true);
              setDisplayBlockIcon(false);
              setDisplayGridProduct(false);
            }}
          ></i>
          <i
            className={` ${
              displayBlockIcon ? "text-red-600" : ""
            }  fas fa-th-large cursor-pointer text-[20px] `}
            onClick={() => {
              setDisplayGridIcon(false);
              setDisplayBlockIcon(true);
              setDisplayGridProduct(true);
            }}
          ></i>
        </div>
        <div>
          There Are <span className="font-bold">{sorted.length}</span> products.
        </div>
        <Sort sortColumn={sortColumn} sortOrder={sortOrder} onSort={onSort} />
      </div>
    </>
  );
}
