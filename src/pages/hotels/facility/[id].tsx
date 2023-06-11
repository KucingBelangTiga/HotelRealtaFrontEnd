import React, { useEffect, useState } from "react";
import Layout from "@/src/components/layout";
import { useDispatch, useSelector } from "react-redux";
import { FindHotelsRequest } from "../../../redux/action/hotel/hotelsAction";
import { GetFacilitiesRequest } from "../../../redux/action/hotel/facilitiesAction";
import { useRouter } from "next/router";

import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.css";
import LayoutHotel from "../layout";
import Add from "./Add";
import Edit from "./Edit";
import AddPhoto from "../upload-photo/AddPhoto";

export default function Index() {
  const dispatch = useDispatch();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [first, setFirst] = useState(0);
  const [id, setId] = useState<number>();
  const [kebabMenu, setKebabMenu] = useState<boolean>(false);
  const [refresh, setRefresh] = useState(false);
  const { hotel } = useSelector((state: any) => state.hotelsState);
  const { facilities } = useSelector((state: any) => state.facilitiesState);

  useEffect(() => {
    if (router.isReady) {
      dispatch(GetFacilitiesRequest(router.query.id));
      dispatch(FindHotelsRequest(router.query.id));
      setRefresh(false);
      setLoading(true);
    }
  }, [dispatch, router.query.id, refresh, router.isReady]);

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

  const maxVacantTemplate = (rowData: any) => {
    return (
      <p>
        {rowData.faciMaxNumber} {rowData.faciMeasureUnit}
      </p>
    );
  };

  const startEndTemplate = (rowData: any) => {
    return (
      <div>
        <p>{rowData.faciStartdate.substring(0, 10)}</p>
        <p>{rowData.faciEnddate.substring(0, 10)}</p>
      </div>
    );
  };

  const rangePriceTemplate = (rowData: any) => {
    return (
      <div>
        <p>{rowData.faciLowPrice}</p>
        <p>{rowData.faciHighPrice}</p>
      </div>
    );
  };

  const discountTemplate = (rowData: any) => {
    return (
      <p>
        {rowData.faciRatePrice && rowData.faciDiscount
          ? Math.round(
              Number(rowData.faciDiscount.replace(/[^0-9]+/g, "")) /
                (Number(rowData.faciRatePrice.replace(/[^0-9]+/g, "")) / 100)
            )
          : null}
        %
      </p>
    );
  };

  const taxTemplate = (rowData: any) => {
    return (
      <p>
        {rowData.faciRatePrice && rowData.faciTaxRate
          ? Math.round(
              Number(rowData.faciTaxRate.replace(/[^0-9]+/g, "")) /
                (Number(rowData.faciRatePrice.replace(/[^0-9]+/g, "")) / 100)
            )
          : null}
        %
      </p>
    );
  };

  const kebabFacility = (rowData: any) => {
    return (
      <div className="flex justify-end gap-4 relative">
        <button
          x-data="{ tooltip: 'Edite' }"
          className="text-coldBlue hover:bg-coldBlue hover:text-white p-2 rounded-full"
          onClick={() => displayKebabMenu(rowData.faciId)}
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
        {rowData.faciId === id && kebabMenu && (
          <div className="absolute top-10 border-coldBlue text-coldBlue w-96 z-50 ">
            <ul className="bg-white  absolute right-3  border-coldBlue border-solid border-2 rounded-md text-center">
              <li>
                <Edit id={rowData.faciId} setRefresh={setRefresh} />
              </li>
              <li>
                <AddPhoto id={rowData.faciId} setRefresh={setRefresh} />
              </li>
              <li>
                <button
                  onClick={() => onPriceHistory(rowData.faciId)}
                  className="p-3 hover:bg-coldBlue hover:text-white w-full"
                >
                  Price History
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
    );
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
              <DataTable
                value={facilities}
                stripedRows
                className="bg-white text-black"
                paginator
                rows={10}
                first={first}
              >
                <Column field="faciId" header="Id"></Column>
                <Column field="faciName" header="Name"></Column>
                <Column field="faciRoomNumber" header="Room Number"></Column>
                <Column header="Max Vacant" body={maxVacantTemplate}></Column>
                <Column
                  header="Start End Date"
                  body={startEndTemplate}
                  style={{ width: "130px" }}
                ></Column>
                <Column header="Range Price" body={rangePriceTemplate}></Column>
                <Column header="Discount" body={discountTemplate}></Column>
                <Column field="faciRatePrice" header="Rate Price"></Column>
                <Column header="Tax" body={taxTemplate}></Column>
                <Column
                  field="regionCode"
                  header={<Add setRefresh={setRefresh} id={router.query.id} />}
                  body={kebabFacility}
                ></Column>
              </DataTable>
            </div>
          )}
        </LayoutHotel>
      </Layout>
    </div>
  );
}
