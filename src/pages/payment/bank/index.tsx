import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetBankRequest, DeleteBankRequest } from "@/src/redux/action/payment/bankAction";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { ConfirmDialog, confirmDialog } from "primereact/confirmdialog";
import { Toast } from "primereact/toast";
import { FilterMatchMode } from "primereact/api";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.css";
import "primeicons/primeicons.css";
import Add from "./Create";
import Edit from "./Edit";
import Layout from "@/src/components/layouts";
import LayoutPayment from "../layout";

export default function Index() {
  const dispatch = useDispatch();
  const { banks } = useSelector((state: any) => state.bankState);
  const [loading, setLoading] = useState(false);
  const toast = useRef<any>(null);
  const [first, setFirst] = useState<number>(0);
  const [search, setSearch] = useState<string>("");
  const [refresh, setRefresh] = useState<boolean>(false);
  const [id, setId] = useState<number>();
  const [kebabMenu, setKebabMenu] = useState<boolean>(false);
  const [filters, setFilters] = useState({
    global: { value: null, matchMode: FilterMatchMode.CONTAINS },
  });

  useEffect(() => {
    dispatch(GetBankRequest());
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
        <button x-data="{ tooltip: 'Edite' }" className="text-coldBlue hover:bg-coldBlue hover:text-white p-2 rounded-full" onClick={() => displayKebabMenu(rowData.bankEntityId)}>
          <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 16 16" width="16" height="16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5">
            <circle cx="8" cy="2.5" r=".75" />
            <circle cx="8" cy="8" r=".75" />
            <circle cx="8" cy="13.5" r=".75" />
          </svg>
        </button>
        {rowData.bankEntityId === id && kebabMenu && (
          <div className="absolute top-10 border-coldBlue text-coldBlue w-96 ">
            <ul className="bg-white z-40 absolute right-3  border-coldBlue border-solid border-2 rounded-md text-center">
              <li>
                <Edit id={rowData.bankEntityId} setRefresh={setRefresh} />
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
    );
  };

  const handleDelete = () => {
    confirmDialog({
      message: "Do you want to delete this Bank?",
      header: "Delete Confirmation",
      icon: "pi pi-exclamation-triangle",
      acceptClassName: "p-button-danger",
      acceptLabel: "Yes",
      rejectLabel: "No",
      accept: () => {
        showToast("Delete bank successfully", "success");
        setTimeout(() => {
          dispatch(DeleteBankRequest(id));
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
                    placeholder="Search Bank"
                    onChange={handleSearch}
                    value={search}
                    autoComplete="off"
                  />
                </div>
                <DataTable value={banks} stripedRows tableStyle={{ minWidth: "50rem" }} className="bg-white text-black" paginator rows={10} first={first} globalFilterFields={["bankCode", "bankName"]} filters={filters}>
                  {/* <Column field="bankEntityId" header="Entity Id"></Column> */}
                  <Column field="bankCode" header="Bank Code"></Column>
                  <Column field="bankName" header="Bank Name"></Column>
                  <Column field="bankEntityId" header={<Add setRefresh={setRefresh} />} body={kebabBank}></Column>
                </DataTable>
              </div>
            )}
          </>
        </LayoutPayment>
      </Layout>
    </div>
  );
}
