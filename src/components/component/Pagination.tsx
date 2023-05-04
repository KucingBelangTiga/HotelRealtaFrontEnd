import React from "react";

export default function Pagination(props: any) {
  return (
    <div>
      {props.totalPages > 1 && (
        <nav
          aria-label="Page navigation example"
          className="flex justify-center items-center"
        >
          <ul className="inline-flex -space-x-px">
            {props.currentPage === 1 ? (
              ""
            ) : (
              <li>
                <a
                  href="#"
                  onClick={() => props.setpage(props.page - 1)}
                  className="px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  Previous
                </a>
              </li>
            )}

            {(props.items || [])
              .slice(0, props.totalPages)
              .map((item: any, index: number) => (
                <li key={index}>
                  <a
                    href="#"
                    onClick={() => props.setpage(index + 1)}
                    className={
                      index === 0 && index === props.page - 1
                        ? "px-3 py-2 rounded-l-lg text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
                        : index === props.totalPages - 1 &&
                          index === props.page - 1
                        ? "px-3 py-2 rounded-r-lg text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
                        : index === props.page - 1
                        ? "px-3 py-2 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
                        : "px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                    }
                  >
                    {index + 1}
                  </a>
                </li>
              ))}
            {props.page === props.totalPages ? (
              ""
            ) : (
              <li>
                <a
                  href="#"
                  onClick={() => props.setpage(props.page + 1)}
                  className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  Next
                </a>
              </li>
            )}
          </ul>
        </nav>
      )}
    </div>
  );
}
