import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetAllPaymentGatewayRequest, DeletePaymentGatewayRequest } from "@/src/redux/action/payment/paymentGatewayAction";
import { ConfirmDialog, confirmDialog } from "primereact/confirmdialog";
import { Toast } from "primereact/toast";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.css";
import "primeicons/primeicons.css";
import Add from "./Create";
import Edit from "./Edit";
import Layout from "@/src/components/layouts";
import LayoutPayment from "../layout";
import Pagination from "@/src/components/component/Pagination";

export default function Index() {
  const dispatch = useDispatch();
  const { paymentGateways } = useSelector((state: any) => state.paymentGatewayState);
  const [loading, setLoading] = useState(false);
  const toast = useRef<any>(null);
  const [page, setpage] = useState<number>(1);
  const [name, setName] = useState<string>("");
  const [refresh, setRefresh] = useState<boolean>(false);
  const [id, setId] = useState<number>();
  const [kebabMenu, setKebabMenu] = useState<boolean>(false);

  useEffect(() => {
    const payload = {
      page: page,
      name: name,
    };
    dispatch(GetAllPaymentGatewayRequest(payload));
    setLoading(true);
    setRefresh(false);
  }, [dispatch, refresh, page, name]);

  const displayKebabMenu = (id: number) => {
    setId(id);
    setKebabMenu(!kebabMenu);
  };

  const handleDelete = () => {
    confirmDialog({
      message: "Do you want to delete this Fintech?",
      header: "Delete Confirmation",
      icon: "pi pi-exclamation-triangle",
      acceptClassName: "p-button-danger",
      acceptLabel: "Yes",
      rejectLabel: "No",
      accept: () => {
        showToast("Delete fintech successfully", "success");
        setTimeout(() => {
          dispatch(DeletePaymentGatewayRequest(id));
          setRefresh(true);
        }, 900);
      },
      reject: () => {
        showToast("Delete Cancelled", "warn");
      },
    });
  };

  const showToast = (message: string, severity: string) => {
    if (toast.current) {
      toast.current.show({ severity, summary: "Information", detail: message, life: 3000 });
    }
  };

  return (
    <div>
      <Layout>
        <LayoutPayment>
          <>
            {!loading ? (
              <h1>loading</h1>
            ) : (
              <div className="m-4 min-h-screen">
                <div className="relative my-4">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-1 pointer-events-none">
                    <svg aria-hidden="true" className="mb-[3px] w-5 h-5 ml-2 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                    </svg>
                  </div>
                  <input
                    type="search"
                    id="default-search"
                    className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Search Fintech"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    autoComplete="off"
                  />
                </div>
                <table className=" w-full border-collapse my-5 rounded-lg border border-gray-200 bg-white text-left text-sm text-gray-500 ">
                  <thead className="bg-gray-50">
                    <tr>
                      <th scope="col" className="px-4 py-2 font-medium text-gray-900">
                        Code
                      </th>
                      <th scope="col" className="px-4 py-2 font-medium text-gray-900">
                        Fintech
                      </th>
                      <th scope="col" className="px-4 py-2 font-medium text-gray-900 text-right">
                        <Add setRefresh={setRefresh} />
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100 border-t border-gray-100">
                    {(paymentGateways.items || []).map((item: any) => (
                      <tr className="hover:bg-gray-50 py-2 h-3" key={item.pagaEntityId}>
                        <td className="px-4 py-3">{item.pagaCode}</td>
                        <td className="px-4 py-3">{item.pagaName}</td>
                        <td className="px-4 py-3">
                          <div className="flex justify-end gap-4 relative">
                            <button x-data="{ tooltip: 'Edite' }" className="text-coldBlue hover:bg-coldBlue hover:text-white p-2 rounded-full" onClick={() => displayKebabMenu(item.pagaEntityId)}>
                              <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 16 16" width="16" height="16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5">
                                <circle cx="8" cy="2.5" r=".75" />
                                <circle cx="8" cy="8" r=".75" />
                                <circle cx="8" cy="13.5" r=".75" />
                              </svg>
                            </button>
                            {item.pagaEntityId === id && kebabMenu && (
                              <div className="absolute top-10 border-coldBlue text-coldBlue w-96 z-30">
                                <ul className="bg-white  absolute right-3  border-coldBlue border-solid border-2 rounded-md text-center">
                                  <li>
                                    <Edit id={item.pagaEntityId} setRefresh={setRefresh} />
                                  </li>
                                  <li>
                                    <Toast ref={toast} className="mt-14" />
                                    <ConfirmDialog />
                                    <button onClick={() => handleDelete()} className="p-3 w-full bg-white text-red-600 hover:bg-red-600 hover:text-white font-semibold">
                                      Delete
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
                {paymentGateways.meta && <Pagination currentPage={paymentGateways.meta.currentPage} totalPages={paymentGateways.meta.totalPages} setpage={setpage} page={page} items={paymentGateways.items} />}
              </div>
            )}
          </>
        </LayoutPayment>
      </Layout>
    </div>
  );
}
