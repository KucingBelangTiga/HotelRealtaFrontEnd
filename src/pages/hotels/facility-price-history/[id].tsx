import React, { useEffect, useState } from "react";
import Layout from "@/src/components/layout";
import { useDispatch, useSelector } from "react-redux";
import { GetPageFacPriceHistRequest } from "../../../redux/action/hotel/facilityPriceHistoryAction";
import { useRouter } from "next/router";
import LayoutHotel from "../layout";
import Pagination from "@/src/components/component/Pagination";

export default function Index() {
  const dispatch = useDispatch();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [page, setpage] = useState<number>(1);

  const { facPriceHistPage } = useSelector(
    (state: any) => state.facPriceHistState
  );

  useEffect(() => {
    if (router.isReady) {
      const payload = {
        id: router.query.id,
        page: page,
      };
      dispatch(GetPageFacPriceHistRequest(payload));

      setLoading(true);
    }
  }, [dispatch, router.query.id, router.isReady, page]);

  return (
    <div>
      <Layout>
        <LayoutHotel>
          {!loading ? (
            <h1>loading</h1>
          ) : (
            <div className="m-6 min-h-screen">
              <h1 className="text-center my-4 font-bold text-3xl">
                Facility Price History
              </h1>
              <table className=" w-full border-collapse my-5 rounded-lg border border-gray-200 bg-white text-left text-sm text-gray-500 ">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-4 font-medium text-gray-900 text-center"
                    >
                      Id
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-4 font-medium text-gray-900 text-center"
                    >
                      Start End Date
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-4 font-medium text-gray-900 text-center"
                    >
                      Range Price
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-4 font-medium text-gray-900 text-center"
                    >
                      Discount
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-4 font-medium text-gray-900 text-center"
                    >
                      Rate Price
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-4 font-medium text-gray-900 text-center"
                    >
                      Tax
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 border-t border-gray-100">
                  {(facPriceHistPage.items || []).map((item: any) => (
                    <tr className="hover:bg-gray-50" key={item.faphId}>
                      <th className=" px-6 py-4 font-normal text-gray-900">
                        <div className="text-sm">
                          <div className="font-medium text-gray-700">
                            {item.faphId}
                          </div>
                        </div>
                      </th>
                      <td className="px-6 py-4 ">
                        <p>
                          {item.faphStartdate &&
                            item.faphStartdate.substring(0, 10)}
                        </p>
                        <p>
                          {item.faphEnddate &&
                            item.faphEnddate.substring(0, 10)}
                        </p>
                      </td>
                      <td className="px-6 py-4">
                        <p>{item.faphLowPrice}</p>
                        <p>{item.faphHighPrice}</p>
                      </td>
                      <td className="px-6 py-4 ">
                        {item.faphRatePrice && item.faphDiscount
                          ? Math.round(
                              Number(
                                item.faphDiscount
                                  .toString()
                                  .replace(/[^0-9]+/g, "")
                              ) /
                                (Number(
                                  item.faphRatePrice
                                    .toString()
                                    .replace(/[^0-9]+/g, "")
                                ) /
                                  100)
                            )
                          : 0}
                        %
                      </td>
                      <td className="px-6 py-4 ">{item.faphRatePrice}</td>

                      <td className="px-6 py-4 ">
                        {item.faphRatePrice && item.faphTaxRate
                          ? Math.round(
                              Number(
                                item.faphTaxRate
                                  .toString()
                                  .replace(/[^0-9]+/g, "")
                              ) /
                                (Number(
                                  item.faphRatePrice
                                    .toString()
                                    .replace(/[^0-9]+/g, "")
                                ) /
                                  100)
                            )
                          : null}
                        %
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {facPriceHistPage.meta && (
                <Pagination
                  currentPage={facPriceHistPage.meta.currentPage}
                  totalPages={facPriceHistPage.meta.totalPages}
                  setpage={setpage}
                  page={page}
                  items={facPriceHistPage.items}
                />
              )}
            </div>
          )}
        </LayoutHotel>
      </Layout>
    </div>
  );
}
