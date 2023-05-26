import React, { useEffect, useState } from "react";
import Layout from "@/src/components/layouts";
import { useDispatch, useSelector } from "react-redux";
import { GetPaymentGatewayRequest, DeletePaymentGatewayRequest } from "@/src/redux/action/payment/paymentGatewayAction";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { FilterMatchMode } from "primereact/api";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.css";
import Add from "./Create";
import Edit from "./Edit";
import LayoutPayment from "../layout";

export default function Index() {
  const dispatch = useDispatch();
  const { paymentGateways } = useSelector((state: any) => state.paymentGatewayState);
  const [loading, setLoading] = useState(false);
  const [first, setFirst] = useState<number>(0);
  const [search, setSearch] = useState<string>("");
  const [refresh, setRefresh] = useState<boolean>(false);
  const [id, setId] = useState<number>();
  const [kebabMenu, setKebabMenu] = useState<boolean>(false);
  const [filters, setFilters] = useState({
    global: { value: null, matchMode: FilterMatchMode.CONTAINS },
  });

  useEffect(() => {
    dispatch(GetPaymentGatewayRequest());
    setLoading(true);
    setRefresh(false);
  }, [dispatch, refresh]);

  const handleSearch = (e: any) => {
    const value = e.target.value;
    let _filters = { ...filters };
    _filters["global"].value = value;
    setFilters(_filters);
    setSearch(value);
  };

  const displayKebabMenu = (id: number) => {
    setId(id);
    setKebabMenu(!kebabMenu);
  };

  const kebabBank = (rowData: any) => {
    return (
      <div className="flex justify-end gap-4 relative">
        <button x-data="{ tooltip: 'Edite' }" className="text-coldBlue hover:bg-coldBlue hover:text-white p-2 rounded-full" onClick={() => displayKebabMenu(rowData.pagaEntityId)}>
          <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 16 16" width="16" height="16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5">
            <circle cx="8" cy="2.5" r=".75" />
            <circle cx="8" cy="8" r=".75" />
            <circle cx="8" cy="13.5" r=".75" />
          </svg>
        </button>
        {rowData.pagaEntityId === id && kebabMenu && (
          <div className="absolute top-10 border-coldBlue text-coldBlue w-96 ">
            <ul className="bg-white z-40 absolute right-3  border-coldBlue border-solid border-2 rounded-md text-center">
              <li>
                <Edit id={rowData.pagaEntityId} setRefresh={setRefresh} />
              </li>
              <li>
                <button onClick={() => onDelete()} className="p-3 hover:bg-coldBlue hover:text-white w-full">
                  Delete
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
    );
  };

  const onDelete = async () => {
    if (window.confirm("Are you sure you want to delete data?")) {
      deleteDataRequest()
        .then(() => {
          window.alert("Delete Successfully");
        })
        .catch((error) => {
          console.error("There was an error deleting data", error);
        });
    }
  };

  const deleteDataRequest = () => {
    return new Promise((resolve: any, reject: any) => {
      setTimeout(() => {
        dispatch(DeletePaymentGatewayRequest(id));
        setRefresh(true);
        resolve();
      }, 1000);
    });
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
                    onChange={handleSearch}
                    value={search}
                    autoComplete="off"
                  />
                </div>
                <DataTable value={paymentGateways} stripedRows tableStyle={{ minWidth: "50rem" }} className="bg-white text-black" paginator rows={10} first={first} globalFilterFields={["pagaCode", "pagaName"]} filters={filters}>
                  {/* <Column field="pagaEntityId" header="Entity Id"></Column> */}
                  <Column field="pagaCode" header="Code"></Column>
                  <Column field="pagaName" header="Fintech"></Column>
                  <Column field="pagaEntityId" header={<Add setRefresh={setRefresh} />} body={kebabBank}></Column>
                </DataTable>
              </div>
            )}
          </>
        </LayoutPayment>
      </Layout>
    </div>
  );
}
