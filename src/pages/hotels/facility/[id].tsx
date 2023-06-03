import React, { useEffect, useState } from "react";
import Layout from "@/src/components/layout";
import { useDispatch, useSelector } from "react-redux";
import { FindHotelsRequest } from "../../../redux/action/hotel/hotelsAction";
import { GetFacilitiesRequest } from "../../../redux/action/hotel/facilitiesAction";
import { useRouter } from "next/router";

import LayoutHotel from "../layout";
import Add from "./Add";
import Edit from "./Edit";
import AddPhoto from "../upload-photo/AddPhoto";
import Pagination from "@/src/components/component/Pagination";

export default function Index() {
  const dispatch = useDispatch();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [page, setpage] = useState<number>(1);
  const [id, setId] = useState<number>();
  const [kebabMenu, setKebabMenu] = useState<boolean>(false);
  const [refresh, setRefresh] = useState(false);
  const { hotel } = useSelector((state: any) => state.hotelsState);
  const { facilities } = useSelector((state: any) => state.facilitiesState);

  useEffect(() => {
    if (router.isReady) {
      const payload = {
        id: router.query.id,
        page: page,
      };
      dispatch(GetFacilitiesRequest(payload));
      dispatch(FindHotelsRequest(router.query.id));
      setRefresh(false);
      setLoading(true);
    }
  }, [dispatch, router.query.id, refresh, router.isReady, page]);

  const displayKebabMenu = (id: number) => {
    setId(id);
    setKebabMenu(!kebabMenu);
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
        <LayoutHotel>
          {!loading ? (
            <h1>loading</h1>
          ) : (
            <div className="m-6 min-h-screen">
              <h1 className="text-center my-4 font-bold text-3xl">Hotels</h1>
              <div className="flex justify-between  bg-coldBlue p-6 rounded-lg">
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
              <h2 className="text-center font-bold text-2xl my-5">Facility</h2>
              <div className="overflow-x ">
                <table className=" w-full border-collapse my-5 rounded-lg border border-gray-200 bg-white text-left text-sm text-gray-500 table-auto overflow-scroll ">
                  <thead className="bg-gray-50 text-center">
                    <tr>
                      <th
                        scope="col"
                        className="px-2 py-4 font-medium text-gray-900 text-center"
                      >
                        Id
                      </th>
                      <th
                        scope="col"
                        className="px-2 py-4 font-medium text-gray-900 text-center"
                      >
                        Facility Name
                      </th>
                      <th
                        scope="col"
                        className="px-2 py-4 font-medium text-gray-900 text-center"
                      >
                        Room Number
                      </th>
                      <th
                        scope="col"
                        className="px-2 py-4 font-medium text-gray-900 text-center"
                      >
                        Max Vacant
                      </th>
                      <th
                        scope="col"
                        className="px-2 py-4 font-medium text-gray-900 text-center"
                      >
                        Start End Date
                      </th>
                      <th
                        scope="col"
                        className="px-2 py-4 font-medium text-gray-900 text-center"
                      >
                        Range Price
                      </th>
                      <th
                        scope="col"
                        className="px-2 py-4 font-medium text-gray-900 text-center"
                      >
                        Discount
                      </th>
                      <th
                        scope="col"
                        className="px-2 py-4 font-medium text-gray-900 text-center"
                      >
                        Rate Price
                      </th>
                      <th
                        scope="col"
                        className="px-2 py-4 font-medium text-gray-900 text-center"
                      >
                        Tax
                      </th>
                      <th
                        scope="col"
                        className="px-2 py-4 font-medium text-gray-900 text-center"
                      >
                        <Add setRefresh={setRefresh} id={router.query.id} />
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100 border-t border-gray-100">
                    {(facilities.items || []).map((item: any) => (
                      <tr className="hover:bg-gray-50" key={item.faciId}>
                        <th className="px-6 py-4 font-normal text-gray-900">
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
                          <p>
                            {item.faciStartdate &&
                              item.faciStartdate.substring(0, 10)}
                          </p>
                          <p>
                            {item.faciEnddate &&
                              item.faciEnddate.substring(0, 10)}
                          </p>
                        </td>
                        <td className="px-6 py-4">
                          <p>{item.faciLowPrice}</p>
                          <p>{item.faciHighPrice}</p>
                        </td>
                        <td className="px-6 py-4 ">
                          {item.faciRatePrice && item.faciDiscount
                            ? Math.round(
                                Number(
                                  item.faciDiscount
                                    .toString()
                                    .replace(/[^0-9]+/g, "")
                                ) /
                                  (Number(
                                    item.faciRatePrice
                                      .toString()
                                      .replace(/[^0-9]+/g, "")
                                  ) /
                                    100)
                              )
                            : 0}
                          %
                        </td>
                        <td className="px-6 py-4 ">{item.faciRatePrice}</td>

                        <td className="px-6 py-4 ">
                          {item.faciRatePrice && item.faciTaxRate
                            ? Math.round(
                                Number(
                                  item.faciTaxRate
                                    .toString()
                                    .replace(/[^0-9]+/g, "")
                                ) /
                                  (Number(
                                    item.faciRatePrice
                                      .toString()
                                      .replace(/[^0-9]+/g, "")
                                  ) /
                                    100)
                              )
                            : 0}
                          %
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex justify-end gap-4 relative">
                            <button
                              x-data="{ tooltip: 'Edite' }"
                              className="text-coldBlue hover:bg-coldBlue hover:text-white p-2 rounded-full"
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
                              <div className="absolute top-10 border-coldBlue text-coldBlue w-96">
                                <ul className="bg-white z-40 absolute right-3  border-coldBlue border-solid border-2 rounded-md text-center">
                                  <li>
                                    <Edit
                                      id={item.faciId}
                                      setRefresh={setRefresh}
                                      room={item.faciRoomNumber}
                                    />
                                  </li>
                                  <li>
                                    <AddPhoto
                                      id={item.faciId}
                                      setRefresh={setRefresh}
                                    />
                                  </li>
                                  <li>
                                    <button
                                      onClick={() =>
                                        onPriceHistory(item.faciId)
                                      }
                                      className="p-3 hover:bg-coldBlue hover:text-white w-full"
                                    >
                                      Price History
                                    </button>
                                  </li>
                                </ul>
                              </div>
                            )}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                {facilities.meta && (
                  <Pagination
                    currentPage={facilities.meta.currentPage}
                    totalPages={facilities.meta.totalPages}
                    setpage={setpage}
                    page={page}
                    items={facilities.items}
                  />
                )}
              </div>
            </div>
          )}
        </LayoutHotel>
      </Layout>
    </div>
  );
}
