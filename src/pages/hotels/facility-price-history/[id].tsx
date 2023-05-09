import React, { useEffect, useState } from "react";
import Layout from "@/components/layout";
import { useDispatch, useSelector } from "react-redux";
import { GetFacPriceHistRequest } from "../../../redux/action/hotel/facilityPriceHistoryAction";
import { useRouter } from "next/router";

export default function Index() {
  const dispatch = useDispatch();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [page, setpage] = useState<number>(1);
  const { facPriceHist } = useSelector((state: any) => state.facPriceHistState);

  useEffect(() => {
    const action = {
      id: router.query.id,
      page: page,
    };
    dispatch(GetFacPriceHistRequest(action));

    setLoading(true);
  }, [dispatch, page, router.query.id]);

  return (
    <div>
      <Layout>
        {!loading ? (
          <h1>loading</h1>
        ) : (
          <div className="m-6 min-h-screen">
            <h1 className="text-center my-4 font-bold text-3xl">Hotels</h1>
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
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 border-t border-gray-100">
                {(facPriceHist.items || []).map((item: any) => (
                  <tr className="hover:bg-gray-50" key={item.faphId}>
                    <th className="gap-3 px-6 py-4 font-normal text-gray-900">
                      <div className="text-sm">
                        <div className="font-medium text-gray-700">
                          {item.faphId}
                        </div>
                      </div>
                    </th>
                    <td className="px-6 py-4 ">
                      <p>{item.faphStartdate}</p>
                      <p>{item.faphEnddate}</p>
                    </td>
                    <td className="px-6 py-4">
                      <p>{item.faphLowPrice}</p>
                      <p>{item.faphHighPrice}</p>
                    </td>
                    <td className="px-6 py-4 ">
                      {item.faphRatePrice && item.faphDiscount
                        ? Math.round(
                            Number(item.faphDiscount.replace(/[^0-9]+/g, "")) /
                              (Number(
                                item.faphRatePrice.replace(/[^0-9]+/g, "")
                              ) /
                                100)
                          )
                        : null}
                      %
                    </td>
                    <td className="px-6 py-4 ">{item.faphRatePrice}</td>

                    <td className="px-6 py-4 ">
                      {item.faphRatePrice && item.faphTaxRate
                        ? Math.round(
                            Number(item.faphTaxRate.replace(/[^0-9]+/g, "")) /
                              (Number(
                                item.faphRatePrice.replace(/[^0-9]+/g, "")
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
            {/* <Pagination
              page={page}
              items={[facPriceHist]}
              setPage={setpage}
              currentPage={facPriceHist.meta ? facPriceHist.meta.currentPage : 1}
              totalPages={facPriceHist.meta ? facPriceHist.meta.totalPages : 1}
            /> */}
            {facPriceHist.meta && facPriceHist.meta.totalPages > 1 && (
              <nav
                aria-label="Page navigation example"
                className="flex justify-center items-center"
              >
                <ul className="inline-flex -space-x-px">
                  {facPriceHist.meta.currentPage === 1 ? (
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

                  {(facPriceHist.items || [])
                    .slice(0, facPriceHist.meta.totalPages)
                    .map((item: any, index: number) => (
                      <li key={index}>
                        <a
                          href="#"
                          onClick={() => setpage(index + 1)}
                          className={
                            index === 0 && index === page - 1
                              ? "px-3 py-2 rounded-l-lg text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
                              : index === facPriceHist.meta.totalPages - 1 &&
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
                  {page === facPriceHist.meta.totalPages ? (
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
