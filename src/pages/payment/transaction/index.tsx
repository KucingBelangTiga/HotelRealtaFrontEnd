import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetAllPaymentTransactionRequest } from "@/src/redux/action/payment/paymentTransactionAction";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.css";
import "primeicons/primeicons.css";
import Layout from "@/src/components/layouts";
import LayoutPayment from "../layout";
import Pagination from "@/src/components/component/Pagination";

export default function Index() {
  const dispatch = useDispatch();
  const { paymentTransactions } = useSelector((state: any) => state.paymentTransactionState);
  const [loading, setLoading] = useState(false);
  const [page, setpage] = useState<number>(1);
  const [name, setName] = useState<string>("");
  const [type, setType] = useState<string>("");

  useEffect(() => {
    const payload = {
      type: type,
      page: page,
      name: name,
    };
    dispatch(GetAllPaymentTransactionRequest(payload));
    setLoading(true);
  }, [dispatch, page, type, name]);

  return (
    <div>
      <Layout>
        <LayoutPayment>
          <>
            {!loading ? (
              <h1>loading</h1>
            ) : (
              <div className="min-h-screen ">
                <div className="flex gap-2">
                  <div className="relative my-5 w-full">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none ">
                      <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                      </svg>
                    </div>
                    <input
                      type="search"
                      id="default-search"
                      className="block w-full p-3.5 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Search Name"
                      onChange={(e) => setName(e.target.value)}
                      value={name}
                      autoComplete="off"
                    />
                  </div>
                  <div className="relative text-lg">
                    <select
                      id="paymenttrx"
                      onChange={(e) => setType(e.target.value)}
                      value={type}
                      className="w-[15%] md:w-14rem pr-4 pl-3 md:w-14rem my-5 bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-sm cursor-pointer"
                      style={{ minWidth: "12rem", height: "3.15rem" }}
                    >
                      <option disabled value="">
                        Choose a Type
                      </option>
                      <option value="TP">Top Up</option>
                      <option value="TRB">Transfer Booking</option>
                      <option value="RPY">Repayment</option>
                      <option value="RF">Refund</option>
                      <option value="ORM">Order Menu</option>
                    </select>
                    {type && (
                      <button className="absolute top-1/2 right-2 transform -translate-y-1/2 text-gray-500 focus:outline-none" onClick={() => setType("")}>
                        <svg className="w-5 h-5 mr-3" viewBox="0 0 20 20" fill="currentColor">
                          <path
                            fillRule="evenodd"
                            d="M11.414 10l4.293-4.293a1 1 0 00-1.414-1.414L10 8.586 5.707 4.293a1 1 0 00-1.414 1.414L8.586 10l-4.293 4.293a1 1 0 001.414 1.414L10 11.414l4.293 4.293a1 1 0 001.414-1.414L11.414 10z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </button>
                    )}
                  </div>
                </div>
                <div className="max-w-full overflow-x-auto mb-4">
                  <table className="w-full border-collapse rounded-lg border border-gray-200 bg-white text-left text-xs text-gray-500 table-auto">
                    <thead className="bg-gray-50">
                      <tr>
                        <th scope="col" className="px-4 py-2 font-medium text-gray-900">
                          Transaction Number
                        </th>
                        <th scope="col" className="px-4 py-2 font-medium text-gray-900">
                          Trx Date
                        </th>
                        <th scope="col" className="px-4 py-2 font-medium text-gray-900">
                          Debet
                        </th>
                        <th scope="col" className="px-4 py-2 font-medium text-gray-900">
                          Credit
                        </th>
                        <th scope="col" className="px-4 py-2 font-medium text-gray-900">
                          Note
                        </th>
                        <th scope="col" className="px-4 py-2 font-medium text-gray-900">
                          Order Number
                        </th>
                        <th scope="col" className="px-4 py-2 font-medium text-gray-900">
                          Source
                        </th>
                        <th scope="col" className="px-4 py-2 font-medium text-gray-900">
                          Target
                        </th>
                        <th scope="col" className="px-4 py-2 font-medium text-gray-900">
                          Trx Ref
                        </th>
                        <th scope="col" className="px-4 py-2 font-medium text-gray-900">
                          Type
                        </th>
                        <th scope="col" className="px-4 py-2 font-medium text-gray-900">
                          User
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100 border-t border-gray-100">
                      {(paymentTransactions.items || []).map((item: any) => (
                        <tr className="hover:bg-gray-50" key={item.patrId}>
                          <td className="px-4 py-2">{item.patrTrxId}</td>
                          <td className="px-4 py-2">{item.patrModifiedDate}</td>
                          <td className="px-4 py-2">{item.patrDebet}</td>
                          <td className="px-4 py-2">{item.patrCredit}</td>
                          <td className="px-4 py-2">{item.patrNote}</td>
                          <td className="px-4 py-2">{item.patrOrderNumber}</td>
                          <td className="px-4 py-2">{item.patrSourceId}</td>
                          <td className="px-4 py-2">{item.patrTargetId}</td>
                          <td className="px-4 py-2">{item.patrTrxNumberRef}</td>
                          <td className="px-4 py-2">{item.patrType}</td>
                          <td className="px-4 py-2">{item.patrUser ? item.patrUser.userFullName : null}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                {paymentTransactions.meta && <Pagination currentPage={paymentTransactions.meta.currentPage} totalPages={paymentTransactions.meta.totalPages} setpage={setpage} page={page} items={paymentTransactions.items} />}
              </div>
            )}
          </>
        </LayoutPayment>
      </Layout>
    </div>
  );
}
