import { useDispatch, useSelector } from "react-redux";
import _ from "lodash";
import React, { useEffect, useState } from "react";
import { RootState } from "../../call-api/reducer";
import ListProduct from "./product-list/ListProduct";
import { tags } from "./product-list/smallData";
import {
  renderCategoryFilter,
  renderPriceFilter,
  renderTag,
} from "./product-list/FunctionFilter";
import { Link } from "react-router-dom";
import { getProductFetch } from "../../call-api/productSlice";

export default function ProductList() {
  const dispatch = useDispatch();

  const { products } = useSelector((state: RootState) => state.products);

  const [closePrice, setClosePrice] = useState(false);
  const [displayPrice, setDisplayPrice] = useState(false);
  const [rangePrice, setRangePrice] = useState("");

  const [selected, setSelected] = useState("");
  const [closeCategory, setCloseCategory] = useState(false);
  const [displayCategory, setDisplayCategory] = useState(false);

  const [displayGridIcon, setDisplayGridIcon] = useState(false);
  const [displayBlockIcon, setDisplayBlockIcon] = useState(false);
  const [displayGridProduct, setDisplayGridProduct] = useState(false);

  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
  const [sortColumn, setSortColumn] = useState("");

  const [pageIndex, setPageIndex] = useState(0);

  const prices = products.map((p) => p.price);
  const min = Math.min(...prices);
  const max = Math.max(...prices);

  useEffect(() => {
    dispatch(getProductFetch());
  }, []);

  const handlePriceRange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRangePrice(e.target.value);
    setDisplayPrice(true);
    setPageIndex(0);
  };

  const handleCategory = (value: string) => {
    setSelected(value);
    setDisplayCategory(true);
    setPageIndex(0);
  };

  const handleSortProduct = (path: string) => {
    if (sortColumn === path) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortColumn(path);
      setSortOrder("asc");
    }
    setPageIndex(0);
  };

  const filterDisplay = [
    {
      closePrice: closePrice,
      selectedName: "Price",
      selected: rangePrice,
      min: min,
      displayPrice: displayPrice,
    },
    {
      closeCategory: closeCategory,
      selectedName: "Category",
      selected: selected,
      displayCategory: displayCategory,
    },
  ];
  const filterPrice = rangePrice
    ? products.filter((product) => product.price <= Number(rangePrice))
    : products;

  const filterCategory = selected
    ? products.filter((product) => product.category == selected)
    : products;

  const filtered = filterPrice.filter((product) =>
    filterCategory.includes(product)
  );
  const sorted = _.orderBy(filtered, [sortColumn], [sortOrder]);

  const pageSize = 12;
  const totalPages =
    Math.floor(sorted.length / pageSize) +
    (sorted.length % pageSize === 0 ? 0 : 1);
  const start = pageSize * pageIndex;
  const end = pageSize + start;

  const result = sorted.slice(start, end);
  return (
    <>
      <div id="top" className="mx-5 flex items-start my-4">
        <div className="columns-1 w-1/6 mr-5">
          <Link
            to="#"
            className="text-[20px] border-b-2 border-stone-200 mb-8 pb-5 mb-4 block"
          >
            Wallets & Card Holders
          </Link>
          <div>
            <p className=" text-[20px] border-b-2 border-stone-200 mb-8 pb-3">
              Filter By
            </p>
            <div
              onClick={() => window.location.reload()}
              className={`cursor-pointer bg-gray-500  justify-around items-center p-2  hover:bg-red-600 mb-5 rounded text-white 
               ${displayPrice || displayCategory ? "flex" : "hidden"}
              `}
            >
              <i className="fas fa-times inline-block"></i>

              <p> Clear all </p>
            </div>
            {renderPriceFilter({
              displayPrice,
              max,
              rangePrice,
              min,
              handlePriceRange,
            })}
            {renderCategoryFilter({ selected, handleCategory })}

            {renderTag({ data: tags })}
          </div>
        </div>

        <div className="w-full ">
          <ListProduct
            data={result}
            sorted={sorted}
            totalPages={totalPages}
            pageIndex={pageIndex}
            filterDisplay={filterDisplay}
            sortColumn={sortColumn}
            sortOrder={sortOrder}
            displayGridIcon={displayGridIcon}
            displayGridProduct={displayGridProduct}
            displayBlockIcon={displayBlockIcon}
            setDisplayBlockIcon={setDisplayBlockIcon}
            setDisplayGridProduct={setDisplayGridProduct}
            setDisplayGridIcon={setDisplayGridIcon}
            setClosePrice={setClosePrice}
            setCloseCategory={setCloseCategory}
            onSort={handleSortProduct}
            setPageIndex={setPageIndex}
          />
        </div>
      </div>
    </>
  );
}
