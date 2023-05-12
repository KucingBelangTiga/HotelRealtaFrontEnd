import React, { useEffect, useState } from "react";
import Layout from "@/src/components/layout";
import LayoutMaster from "../layout";
import { useDispatch, useSelector } from "react-redux";
import { GetPriceItemsRequest } from "../../../redux/action/master/priceItemsAction";

import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { FilterMatchMode } from "primereact/api";
import { Dropdown } from "primereact/dropdown";

import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.css";
import AddPriceItems from "./AddPriceItems";
import EditPriceItems from "./EditPriceItems";
import DeletePriceItems from "./DeletePriceItems";

export default function Index() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [first, setFirst] = useState(0);
  const [refresh, setRefresh] = useState(false);
  const [search, setSearch] = useState<string>("");
  const [id, setId] = useState<number>(0);
  const [kebabMenu, setKebabMenu] = useState<boolean>(false);
  const [filters, setFilters] = useState({
    global: { value: null, matchMode: FilterMatchMode.CONTAINS },
    pritType: { value: null, matchMode: FilterMatchMode.EQUALS },
  });
  const [statuses] = useState([
    "SOFTDRINK",
    "SNACK",
    "FOOD",
    "FACILITY",
    "SERVICE",
  ]);
  const [selectedType, setSelectedType] = useState(null);
  const { priceItems } = useSelector((state: any) => state.priceItemsState);

  useEffect(() => {
    dispatch(GetPriceItemsRequest());
    setRefresh(false);
    setLoading(true);
  }, [dispatch, refresh]);

  const displayKebabMenu = (id: number) => {
    setId(id);
    setKebabMenu(!kebabMenu);
  };

  const popDescription = (rowData: any) => {
    return (
      <div className="flex justify-end gap-4 relative">
        <button
          x-data="{ tooltip: 'Edite' }"
          className="text-coldBlue hover:bg-coldBlue hover:text-white p-2 rounded-full"
          onClick={() => displayKebabMenu(rowData.pritId)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            fill="currentColor"
            className="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
          >
            <path d="M470.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 256 265.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160zm-352 160l160-160c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L210.7 256 73.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0z" />
          </svg>
        </button>
        {rowData.pritId === id && kebabMenu && (
          <div className="absolute top-12 border-coldBlue text-coldBlue w-96 z-30">
            <p className="p-5 bg-white  absolute right-3  border-coldBlue border-solid border-2 rounded-md text-center">
              {rowData.pritDescription}
            </p>
          </div>
        )}
      </div>
    );
  };

  const kebabPriceItems = (rowData: any) => {
    return (
      <div>
        <EditPriceItems id={rowData.pritId} setRefresh={setRefresh} />
        <DeletePriceItems
          id={rowData.pritId}
          name={rowData.pritName}
          setRefresh={setRefresh}
        />
      </div>
    );
  };

  const handleSearch = (e: any) => {
    const value = e.target.value;
    let _filters = { ...filters };

    _filters["global"].value = value;

    setFilters(_filters);
    setSearch(value);
  };

  const handleDrop = (e: any) => {
    const value = e.target.value;
    let _filters = { ...filters };

    _filters["pritType"].value = value;

    setFilters(_filters);
    setSelectedType(value);
  };

  const selectedTypeTemplate = (option: any, props: any) => {
    if (option) {
      return (
        <div className="flex align-items-center text-gray-400">
          <div>{option}</div>
        </div>
      );
    }

    return <span className="text-gray-400">Type</span>;
  };

  const countryOptionTemplate = (option: any) => {
    return (
      <div className="flex align-items-center ">
        <div>{option}</div>
      </div>
    );
  };

  return (
    <Layout>
      <LayoutMaster>
        {!loading ? (
          <h1>loading</h1>
        ) : (
          <div className="min-h-screen">
            <h2 className="text-center my-5 font-bold text-3xl">Price Items</h2>
            <div className="flex gap-4">
              <div className="relative my-5 w-full">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none ">
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
                  placeholder="Search Name"
                  onChange={handleSearch}
                  value={search}
                />
              </div>
              <Dropdown
                value={selectedType}
                onChange={handleDrop}
                options={statuses}
                optionLabel="pritType"
                placeholder="Type"
                valueTemplate={selectedTypeTemplate}
                itemTemplate={countryOptionTemplate}
                className="w-96 md:w-14rem my-5 "
                style={{
                  background: "#374151",
                  border: "#374151",
                  color: "white",
                }}
                showClear
              />
            </div>

            <DataTable
              value={priceItems}
              stripedRows
              tableStyle={{ minWidth: "50rem" }}
              className="bg-white text-black"
              paginator
              rows={5}
              first={first}
              globalFilterFields={["pritName"]}
              filters={filters}
            >
              <Column field="pritId" header="Id"></Column>
              <Column field="pritName" header="Name"></Column>
              <Column field="pritPrice" header="Price"></Column>
              <Column field="pritType" header="Type"></Column>
              <Column field="pritDescription" body={popDescription}></Column>
              <Column
                field="pritId"
                header={<AddPriceItems setRefresh={setRefresh} />}
                body={kebabPriceItems}
              ></Column>
            </DataTable>
          </div>
        )}
      </LayoutMaster>
    </Layout>
  );
}
