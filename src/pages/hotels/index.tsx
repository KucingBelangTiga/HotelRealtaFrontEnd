import React, { useEffect, useState } from "react";
import Layout from "@/src/components/layout";
import { useDispatch, useSelector } from "react-redux";
import { GetHotelsRequest } from "../../redux/action/hotel/hotelsAction";

import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { FilterMatchMode } from "primereact/api";

import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.css";

import { useRouter } from "next/router";
import Add from "./hotel/Add";
import Edit from "./hotel/Edit";
import LayoutHotel from "./layout";

export default function Index() {
  const dispatch = useDispatch();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [first, setFirst] = useState(0);
  const [search, setSearch] = useState<string>("");
  const [refresh, setRefresh] = useState(false);
  const [id, setId] = useState<number>();
  const [kebabMenu, setKebabMenu] = useState<boolean>(false);
  const { hotels } = useSelector((state: any) => state.hotelsState);
  const [filters, setFilters] = useState({
    global: { value: null, matchMode: FilterMatchMode.CONTAINS },
  });

  useEffect(() => {
    dispatch(GetHotelsRequest());
    setLoading(true);
  }, [dispatch, refresh]);

  const ratingStarTemplate = (rowData: any) => {
    return (
      <div className="star-rating">
        {[...Array(5)].map((star, index) => {
          index += 1;
          return (
            <span
              key={index}
              className={
                index <= rowData.hotelRatingStar ? "text-yellow-400" : "off"
              }
            >
              &#9733;
            </span>
          );
        })}
      </div>
    );
  };

  const displayKebabMenu = (id: number) => {
    setId(id);
    setKebabMenu(!kebabMenu);
  };

  const kebabHotel = (rowData: any) => {
    return (
      <div className="flex justify-end gap-4 relative">
        <button
          x-data="{ tooltip: 'Edite' }"
          className="text-coldBlue hover:bg-coldBlue hover:text-white p-2 rounded-full"
          onClick={() => displayKebabMenu(rowData.hotelId)}
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
        {rowData.hotelId === id && kebabMenu && (
          <div className="absolute top-10 border-coldBlue text-coldBlue w-96 ">
            <ul className="bg-white z-40 absolute right-3  border-coldBlue border-solid border-2 rounded-md text-center">
              <li>
                <Edit
                  id={rowData.hotelId}
                  setRefresh={setRefresh}
                  address={rowData.hotelAddr.addrId}
                />
              </li>
              <li>
                <button
                  onClick={() => onFacility(rowData.hotelId)}
                  className="p-3 hover:bg-coldBlue hover:text-white w-full"
                >
                  Add Facilities
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
    );
  };

  const onFacility = (id: number) => {
    router.push({
      pathname: "/hotels/facility/[id]",
      query: { id: id },
    });
  };

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
        <LayoutHotel>
          {!loading ? (
            <h1>loading</h1>
          ) : (
            <div className="m-6 min-h-screen">
              <h1 className="text-center my-4 font-bold text-3xl">Hotels</h1>

              <div className="relative my-5">
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
                  placeholder="Search Hotel"
                  onChange={handleSearch}
                  value={search}
                />
              </div>
              <DataTable
                value={hotels}
                stripedRows
                tableStyle={{ minWidth: "50rem" }}
                className="bg-white text-black"
                paginator
                rows={10}
                first={first}
                globalFilterFields={["hotelName"]}
                filters={filters}
              >
                <Column field="hotelId" header="Id"></Column>
                <Column field="hotelName" header="Name"></Column>
                <Column
                  field="hotelRatingStar"
                  header="Rating Star"
                  body={ratingStarTemplate}
                ></Column>
                <Column field="hotelPhonenumber" header="Phone Number"></Column>
                <Column
                  field="hotelModifiedDate"
                  header="Modified Date"
                ></Column>
                <Column
                  field="regionCode"
                  header={<Add setRefresh={setRefresh} />}
                  body={kebabHotel}
                ></Column>
              </DataTable>
            </div>
          )}
        </LayoutHotel>
      </Layout>
    </div>
  );
}
