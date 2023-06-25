import { SortType } from "../Interface";
import { sortProduct } from "../smallData";

export default function Sort({ sortColumn, sortOrder, onSort }: SortType) {
  return (
    <>
      <div className="flex items-center">
        <p>Sort by: </p>
        <div className="flex ml-2">
          {sortProduct.map((item) => (
            <div
              key={item.path}
              onClick={() => onSort(item.path)}
              className="bg-white p-1 rounded mx-1 cursor-pointer"
            >
              <span>{item.label} </span>
              {item.path === "" ? (
                ""
              ) : item.path === sortColumn && sortOrder === "asc" ? (
                <i className="fas fa-sort-down"></i>
              ) : (
                <i className="fas fa-sort-up"></i>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
