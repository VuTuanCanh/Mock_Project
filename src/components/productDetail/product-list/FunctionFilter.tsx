import { Link } from "react-router-dom";
import {
  renderCategoryFilterType,
  renderPriceFilterType,
  renderTagType,
} from "./Interface";
import { category } from "./smallData";

export function renderPriceFilter({
  displayPrice,
  max,
  rangePrice,
  min,
  handlePriceRange,
}: renderPriceFilterType) {
  return (
    <>
      <div className="mb-8">
        <form className="flex flex-col">
          <label className="text-[20px] mb-3">Price</label>
          <p>
            ${min} - $ {!displayPrice ? max : rangePrice}
          </p>
          <input
            min={min}
            max={max}
            name="priceRange"
            type="range"
            className="rounded "
            onChange={handlePriceRange}
          />
        </form>
      </div>
    </>
  );
}

export function renderCategoryFilter({
  handleCategory,
  selected,
}: renderCategoryFilterType) {
  return (
    <>
      <div className="mb-8">
        <p className="text-[20px] ">Category</p>
        <ul className="list-none border border-stone-500 mt-1">
          {category.map((item, i) => (
            <li
              key={i}
              onClick={() => handleCategory(item.value)}
              className={` ${` ${
                selected === item.value ? " selected" : ""
              }`} p-2 border-t-2 border-stone-300 cursor-pointer `}
            >
              {item.label}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export function renderTag({ data }: renderTagType) {
  return (
    <>
      <div>
        <p className="border-b-2 border-stone-200 mb-3 pb-2">Tags</p>
        {data &&
          data.map((tag) => (
            <Link
              to="#"
              key={tag.value}
              className="rounded-full inline-block hover:bg-red-600 hover:text-white py-1 px-2 m-1 bg-stone-200 "
            >
              {tag.value}
            </Link>
          ))}
      </div>
    </>
  );
}
