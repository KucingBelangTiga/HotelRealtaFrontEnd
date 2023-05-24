import React from "react";

export default function Footer(props: any) {
  const pageCount = Math.ceil(props.total / props.limit)
  return (
    <footer className="bg-white dark:bg-gray-900">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="max-w-2xl mx-auto">
          <nav>
            <ul className="inline-flex justify-center -space-x-px">
              <li>
                <button
                  className="bg-white border border-gray-300 text-gray-500 hover:bg-gray-100 hover:text-gray-700 ml-0 rounded-l-lg leading-tight py-2 px-3 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white" onClick={() => props.setPage(Math.max(props.page - 1, 1))}>Previous</button>
              </li>
              {Array.from({ length: pageCount }, (_, index) => (
                <li key={index}>
                  <button
                    className={`bg-white border border-gray-300 text-gray-500 hover:bg-gray-100 hover:text-gray-700 leading-tight py-2 px-3 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white ${props.page === index + 1 ? "font-bold" : ""
                      }`}
                    onClick={() => props.setPage(index + 1)}
                  >{index + 1}</button>
                </li>
              ))}
              <li>
                <button
                  className="bg-white border border-gray-300 text-gray-500 hover:bg-gray-100 hover:text-gray-700 rounded-r-lg leading-tight py-2 px-3 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white" onClick={() => props.setPage(Math.min(props.page + 1, pageCount))}>Next</button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}