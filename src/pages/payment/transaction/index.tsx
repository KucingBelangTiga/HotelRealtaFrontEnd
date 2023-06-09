import React, { useEffect, useState } from "react";
import Layout from "../../../components/layouts";
import { useDispatch, useSelector } from "react-redux";
import { GetPaymentTransactionRequest } from "../../../redux/action/payment/paymentTransactionAction";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { FilterMatchMode } from "primereact/api";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.css";
import LayoutPayment from "../layout";

export default function Index() {
  const dispatch = useDispatch();
  const { paymentTransactions } = useSelector((state: any) => state.paymentTransactionState);
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
    dispatch(GetPaymentTransactionRequest());
    setLoading(true);
  }, [dispatch, search]);

  const handleSearch = (e: any) => {
    const value = e.target.value;
    let _filters = { ...filters };

    _filters["global"].value = value;

    setFilters(_filters);
    setSearch(value);
  };

  return (
    <div>
      <Layout>
        <LayoutPayment>
          <>
            {!loading ? (
              <h1>loading</h1>
            ) : (
              <div className="min-h-screen">
                <div className="relative my-4">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-1 pointer-events-none">
                    <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                    </svg>
                  </div>
                  <input
                    type="search"
                    id="default-search"
                    className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Search Transaction"
                    onChange={handleSearch}
                    value={search}
                  />
                </div>
                <DataTable
                  value={paymentTransactions}
                  stripedRows
                  tableStyle={{ minWidth: "55rem" }}
                  size={"small"}
                  className="bg-white text-black w-full"
                  paginator
                  rows={10}
                  first={first}
                  globalFilterFields={["patrTrxId", "patrModifiedDate", "patrNote", "patrOrderNumber", "patrSourceId", "patrTargetId", "patrType", "patrUserId"]}
                  filters={filters}
                >
                  <Column field="patrTrxId" header="Transaction Number"></Column>
                  <Column field="patrModifiedDate" header="Trx Date"></Column>
                  <Column field="patrDebet" header="Debet"></Column>
                  <Column field="patrCredit" header="Credit"></Column>
                  <Column field="patrNote" header="Note"></Column>
                  <Column field="patrOrderNumber" header="Order Number"></Column>
                  <Column field="patrSourceId" header="Source"></Column>
                  <Column field="patrTargetId" header="Target"></Column>
                  <Column field="patrTrxNumberRef" header="Transaction Ref"></Column>
                  <Column field="patrType" header="Type"></Column>
                  <Column field="patrUserId" header="User"></Column>
                </DataTable>
              </div>
            )}
          </>
        </LayoutPayment>
      </Layout>
    </div>
  );
}
