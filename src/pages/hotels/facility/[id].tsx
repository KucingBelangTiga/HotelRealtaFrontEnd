import React, { useEffect, useState } from "react";
import Layout from "../../../components/layout";
import { useDispatch, useSelector } from "react-redux";
import { FindHotelsRequest } from "../../../redux/action/hotel/hotelsAction";
import { GetFacilitiesRequest } from "../../../redux/action/hotel/facilitiesAction";
import KebabMenuView from "../../../components/layout/KebabMenuView";
import Pagination from "../../../components/component/Pagination";
import { useRouter } from "next/router";

export default function Index() {
  const dispatch = useDispatch();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [page, setpage] = useState<number>(1);
  const [id, setId] = useState<number>();
  const [kebabMenu, setKebabMenu] = useState<boolean>(false);
  const { hotel } = useSelector((state: any) => state.hotelsState);
  const { facilities } = useSelector((state: any) => state.facilitiesState);

  useEffect(() => {
    const action = {
      id: router.query.id,
      page: page,
    };
    dispatch(GetFacilitiesRequest(action));
    dispatch(FindHotelsRequest(router.query.id));

    setLoading(true);
  }, [dispatch, page, router.query.id]);

  const addItem = () => {
    router.push({
      pathname: "/hotels/facility/Add",
      query: { id: router.query.id },
    });
  };

  const displayKebabMenu = (id: number) => {
    setId(id);
    setKebabMenu(!kebabMenu);
  };

  const onEdit = (id: number) => {
    router.push({
      pathname: "/hotels/facility/Edit",
      query: { id: id },
    });
  };

  const onUpload = (id: number) => {
    router.push({
      pathname: "/hotels/upload-photo/[id]",
      query: { id: id },
    });
  };

  const onPriceHistory = (id: number) => {
    router.push({
      pathname: "/hotels/facility-price-history/[id]",
      query: { id: id },
    });
  };

  return (
    <div>
      <Layout>
        {!loading ? (
          <h1>loading</h1>
        ) : (
          <div className="m-6 min-h-screen">
            <h1 className="text-center my-4 font-bold text-3xl">Hotels</h1>
            <div className="flex justify-between mx-8">
              <div>
                <p>{hotel.hotelName}</p>
                {hotel.hotelAddr && (
                  <p>
                    {hotel.hotelId}, {hotel.hotelAddr.addrLine1}
                    {hotel.hotelAddr.postalCode}, {hotel.hotelAddr.addrLine2}
                  </p>
                )}
              </div>
              <div>
                <p>{hotel.hotelPhonenumber}</p>
                <p>
                  <div className="star-rating">
                    {[...Array(5)].map((star, index) => {
                      index += 1;
                      return (
                        <span
                          key={index}
                          className={
                            index <= hotel.hotelRatingStar
                              ? "text-yellow-400"
                              : "off"
                          }
                        >
                          &#9733;
                        </span>
                      );
                    })}
                  </div>
                </p>
              </div>
            </div>
            <h2 className="text-center font-bold text-2xl">Facility</h2>
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
                    Facility Name
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-4 font-medium text-gray-900"
                  >
                    Room Number
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-4 font-medium text-gray-900"
                  >
                    Max Vacant
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-4 font-medium text-gray-900"
                  >
                    Start End Date
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-4 font-medium text-gray-900"
                  >
                    Range Price
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-4 font-medium text-gray-900"
                  >
                    Discount
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-4 font-medium text-gray-900"
                  >
                    Rate Price
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-4 font-medium text-gray-900"
                  >
                    Tax
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
                {(facilities.items || []).map((item: any) => (
                  <tr className="hover:bg-gray-50" key={item.faciId}>
                    <th className="gap-3 px-6 py-4 font-normal text-gray-900">
                      <div className="text-sm">
                        <div className="font-medium text-gray-700">
                          {item.faciId}
                        </div>
                      </div>
                    </th>
                    <td className="px-6 py-4">{item.faciName}</td>
                    <td className="px-6 py-4">{item.faciRoomNumber}</td>
                    <td className="px-6 py-4">
                      {item.faciMaxNumber} {item.faciMeasureUnit}
                    </td>
                    <td className="px-6 py-4 ">
                      <p>{item.faciStartdate}</p>
                      <p>{item.faciEnddate}</p>
                    </td>
                    <td className="px-6 py-4">
                      <p>{item.faciLowPrice}</p>
                      <p>{item.faciHighPrice}</p>
                    </td>
                    <td className="px-6 py-4 ">
                      {item.faciRatePrice && item.faciDiscount
                        ? Math.round(
                            Number(item.faciDiscount.replace(/[^0-9]+/g, "")) /
                              (Number(
                                item.faciRatePrice.replace(/[^0-9]+/g, "")
                              ) /
                                100)
                          )
                        : null}
                      %
                    </td>
                    <td className="px-6 py-4 ">{item.faciRatePrice}</td>

                    <td className="px-6 py-4 ">
                      {item.faciRatePrice && item.faciTaxRate
                        ? Math.round(
                            Number(item.faciTaxRate.replace(/[^0-9]+/g, "")) /
                              (Number(
                                item.faciRatePrice.replace(/[^0-9]+/g, "")
                              ) /
                                100)
                          )
                        : null}
                      %
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex justify-end gap-4 relative">
                        <button
                          x-data="{ tooltip: 'Edite' }"
                          className="text-black hover:bg-black hover:text-white p-2 rounded-full"
                          onClick={() => displayKebabMenu(item.faciId)}
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
                        {item.faciId === id && kebabMenu && (
                          <div className="absolute top-10 border-black text-black w-96">
                            <ul className="bg-white z-40 absolute right-3  border-black border-solid border-2 rounded-md text-center">
                              <li>
                                <button
                                  onClick={() => onEdit(item.faciId)}
                                  className="p-3 hover:bg-black hover:text-white w-full"
                                >
                                  Edit
                                </button>
                              </li>
                              <li>
                                <button
                                  onClick={() => onUpload(item.faciId)}
                                  className="p-3 hover:bg-black hover:text-white w-full"
                                >
                                  Upload Photos
                                </button>
                              </li>
                              <li>
                                <button
                                  onClick={() => onPriceHistory(item.faciId)}
                                  className="p-3 hover:bg-black hover:text-white w-full"
                                >
                                  Price History
                                </button>
                              </li>
                              {/* <li>
                              <button
                                className="p-3 hover:bg-black hover:text-white w-full"
                                onClick={() => onFacility()}
                              >
                                Facility
                              </button>
                            </li>
                            <li>
                              <button className="p-3 hover:bg-black hover:text-white w-full ">
                                Status
                              </button>
                            </li> */}
                            </ul>
                          </div>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {/* <Pagination
              page={page}
              items={[facilities]}
              setPage={setpage}
              currentPage={facilities.meta ? facilities.meta.currentPage : 1}
              totalPages={facilities.meta ? facilities.meta.totalPages : 1}
            /> */}
            {facilities.meta && facilities.meta.totalPages > 1 && (
              <nav
                aria-label="Page navigation example"
                className="flex justify-center items-center"
              >
                <ul className="inline-flex -space-x-px">
                  {facilities.meta.currentPage === 1 ? (
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

                  {(facilities.items || [])
                    .slice(0, facilities.meta.totalPages)
                    .map((item: any, index: number) => (
                      <li key={index}>
                        <a
                          href="#"
                          onClick={() => setpage(index + 1)}
                          className={
                            index === 0 && index === page - 1
                              ? "px-3 py-2 rounded-l-lg text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
                              : index === facilities.meta.totalPages - 1 &&
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
                  {page === facilities.meta.totalPages ? (
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
