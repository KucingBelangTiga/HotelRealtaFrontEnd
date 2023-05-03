import React, { useEffect, useState } from "react";
import Layout from "../../components/layout";
import { useDispatch, useSelector } from "react-redux";
import {
  GetHotelsRequest,
  DelHotelsRequest,
} from "../../redux/action/hotel/hotelsAction";
import KebabMenuView from "../../components/layout/KebabMenuView";
import { useRouter } from "next/router";
import Pagination from "../../components/component/Pagination";

export default function Index() {
  const dispatch = useDispatch();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [page, setpage] = useState<number>(1);
  const [search, setSearch] = useState<string>("");
  const [id, setId] = useState<number>();
  const [kebabMenu, setKebabMenu] = useState<boolean>(false);
  const { hotels } = useSelector((state: any) => state.hotelsState);
  useEffect(() => {
    const action = {
      page: page,
      name: search,
    };
    dispatch(GetHotelsRequest(action));

    setLoading(true);
  }, [dispatch, page, search]);

  const onDelete = async (id: any) => {
    dispatch(DelHotelsRequest(id));
    window.alert("Data Successfully Delete");
  };
  console.log(hotels);

  const addItem = () => {
    router.push("/hotels/hotel/Add");
  };

  const displayKebabMenu = (id: number) => {
    setId(id);
    setKebabMenu(!kebabMenu);
  };

  return (
    <div>
      <Layout>
        {!loading ? (
          <h1>loading</h1>
        ) : (
          <div className="m-6 min-h-screen">
            <h1 className="text-center my-4 font-bold text-3xl">Hotels</h1>

            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 text-gray-500 dark:text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  ></path>
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search Hotel"
                onChange={(e) => setSearch(e.target.value)}
                value={search}
              />
            </div>
            <table className=" w-full border-collapse my-5 rounded-lg border border-gray-200 bg-white text-left text-sm text-gray-500 ">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-4 font-medium text-gray-900"
                  >
                    Id
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-4 font-medium text-gray-900"
                  >
                    Name
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-4 font-medium text-gray-900"
                  >
                    Rating Star
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-4 font-medium text-gray-900"
                  >
                    Phone Number
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-4 font-medium text-gray-900"
                  >
                    Modified Date
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-4 font-medium text-gray-900 text-right"
                  >
                    <button
                      onClick={() => addItem()}
                      className="py-2 px-4 bg-gray-50 text-slate-900 font-semibold border border-gray-50 rounded hover:bg-slate-900 hover:text-white hover:border-white transition ease-in duration-200 transform hover:-translate-y-1 active:translate-y-0"
                    >
                      + Add
                    </button>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 border-t border-gray-100">
                {(hotels.items || []).map((item: any) => (
                  <tr className="hover:bg-gray-50" key={item.hotelId}>
                    <th className="flex gap-3 px-6 py-4 font-normal text-gray-900">
                      <div className="text-sm">
                        <div className="font-medium text-gray-700">
                          {item.hotelId}
                        </div>
                      </div>
                    </th>
                    <td className="px-6 py-4">{item.hotelName}</td>
                    <td className="px-6 py-4">
                      <div className="star-rating">
                        {[...Array(5)].map((star, index) => {
                          index += 1;
                          return (
                            <span
                              key={index}
                              className={
                                index <= item.hotelRatingStar
                                  ? "text-yellow-400"
                                  : "off"
                              }
                            >
                              &#9733;
                            </span>
                          );
                        })}
                      </div>
                    </td>
                    <td className="px-6 py-4">{item.hotelPhonenumber}</td>
                    <td className="px-6 py-4">{item.hotelModifiedDate}</td>
                    <td className="px-6 py-4">
                      <div className="flex justify-end gap-4 relative">
                        <button
                          x-data="{ tooltip: 'Edite' }"
                          className="text-black hover:bg-black hover:text-white p-2 rounded-full"
                          onClick={() => displayKebabMenu(item.hotelId)}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            version="1.1"
                            viewBox="0 0 16 16"
                            width="16"
                            height="16"
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
                          >
                            <circle cx="8" cy="2.5" r=".75" />
                            <circle cx="8" cy="8" r=".75" />
                            <circle cx="8" cy="13.5" r=".75" />
                          </svg>
                        </button>
                        {item.hotelId === id && kebabMenu && (
                          <KebabMenuView id={item.hotelId} />
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {/* <Pagination
              page={page}
              items={[hotels]}
              setPage={setpage}
              currentPage={hotels.meta ? hotels.meta.currentPage : 1}
              totalPages={hotels.meta ? hotels.meta.totalPages : 1}
            /> */}
            {hotels.meta && hotels.meta.totalPages > 1 && (
              <nav
                aria-label="Page navigation example"
                className="flex justify-center items-center"
              >
                <ul className="inline-flex -space-x-px">
                  {hotels.meta.currentPage === 1 ? (
                    ""
                  ) : (
                    <li>
                      <a
                        href="#"
                        onClick={() => setpage(page - 1)}
                        className="px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                      >
                        Previous
                      </a>
                    </li>
                  )}

                  {(hotels.items || [])
                    .slice(0, hotels.meta.totalPages)
                    .map((item: any, index: number) => (
                      <li key={index}>
                        <a
                          href="#"
                          onClick={() => setpage(index + 1)}
                          className={
                            index === 0 && index === page - 1
                              ? "px-3 py-2 rounded-l-lg text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
                              : index === hotels.meta.totalPages - 1 &&
                                index === page - 1
                              ? "px-3 py-2 rounded-r-lg text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
                              : index === page - 1
                              ? "px-3 py-2 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
                              : "px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                          }
                        >
                          {index + 1}
                        </a>
                      </li>
                    ))}
                  {page === hotels.meta.totalPages ? (
                    ""
                  ) : (
                    <li>
                      <a
                        href="#"
                        onClick={() => setpage(page + 1)}
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
        )}
      </Layout>
    </div>
  );
}
