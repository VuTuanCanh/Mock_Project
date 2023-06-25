import { Link } from "react-scroll";
import { PaginationType } from "../Interface";

export default function Pagination({
  pageIndex,
  totalPages,
  setPageIndex,
}: PaginationType) {
  const pagination = [];
  for (let i = 0; i < totalPages; i++) {
    pagination.push(i);
  }

  return (
    <>
      <div className="flex items-center justify-center mt-5">
        {pagination.map((number) => (
          <Link
            to="top"
            smooth={true}
            duration={500}
            key={number}
            onClick={() => setPageIndex(number)}
            className={` ${
              pageIndex === number ? "selected" : ""
            }  py-2 px-3  border-2 border-blue-500  cursor-pointer m-2 rounded`}
          >
            {number + 1}
          </Link>
        ))}
      </div>
    </>
  );
}
