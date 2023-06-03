import React from "react";

export default function Pagination(props: any) {
  const pageNumbers = [];

  for (let i = 1; i <= props.totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <nav
      aria-label="Page navigation example"
      className="flex justify-center items-center"
    >
      <ul className="inline-flex -space-x-px">
        <li>
          <button
            disabled={props.currentPage === 1 ? true : false}
            onClick={() => props.setpage(props.page - 1)}
            className="px-3 py-2 ml-0  text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            Previous
          </button>
        </li>

        {(pageNumbers || []).map((number) => (
          <li key={number}>
            <button
              onClick={() => props.setpage(number)}
              className={
                number === props.currentPage
                  ? "px-3 py-2  text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
                  : "px-3 py-2  text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              }
            >
              {number}
            </button>
          </li>
        ))}

        <li>
          <button
            disabled={props.currentPage === props.totalPages ? true : false}
            onClick={() => props.setpage(props.page + 1)}
            className="px-3 py-2  text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
}
