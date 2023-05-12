import React, { useEffect, useState } from "react";
import Layout from "@/src/components/layout";
import { useDispatch, useSelector } from "react-redux";
import { GetFacPriceHistRequest } from "../../../redux/action/hotel/facilityPriceHistoryAction";
import { useRouter } from "next/router";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import LayoutHotel from "../layout";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.css";

export default function Index() {
  const dispatch = useDispatch();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [first, setFirst] = useState(0);

  const { facPriceHist } = useSelector((state: any) => state.facPriceHistState);

  useEffect(() => {
    if (router.isReady) {
      dispatch(GetFacPriceHistRequest(router.query.id));

      setLoading(true);
    }
  }, [dispatch, router.query.id, router.isReady]);

  const maxVacantTemplate = (rowData: any) => {
    return (
      <p>
        {rowData.faphMaxNumber} {rowData.faphMeasureUnit}
      </p>
    );
  };

  const startEndTemplate = (rowData: any) => {
    return (
      <div>
        <p>{rowData.faphStartdate}</p>
        <p>{rowData.faphEnddate}</p>
      </div>
    );
  };

  const rangePriceTemplate = (rowData: any) => {
    return (
      <div>
        <p>{rowData.faphLowPrice}</p>
        <p>{rowData.faphHighPrice}</p>
      </div>
    );
  };

  const discountTemplate = (rowData: any) => {
    return (
      <p>
        {rowData.faphRatePrice && rowData.faphDiscount
          ? Math.round(
              Number(rowData.faphDiscount.replace(/[^0-9]+/g, "")) /
                (Number(rowData.faphRatePrice.replace(/[^0-9]+/g, "")) / 100)
            )
          : null}
        %
      </p>
    );
  };

  const taxTemplate = (rowData: any) => {
    return (
      <p>
        {rowData.faphRatePrice && rowData.faphTaxRate
          ? Math.round(
              Number(rowData.faphTaxRate.replace(/[^0-9]+/g, "")) /
                (Number(rowData.faphRatePrice.replace(/[^0-9]+/g, "")) / 100)
            )
          : null}
        %
      </p>
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
              <h1 className="text-center my-4 font-bold text-3xl">
                Facility Price History
              </h1>

              <DataTable
                value={facPriceHist}
                stripedRows
                className="bg-white text-black"
                paginator
                rows={10}
                first={first}
              >
                <Column field="faphId" header="Id"></Column>
                <Column
                  header="Start End Date"
                  body={startEndTemplate}
                ></Column>
                <Column header="Range Price" body={rangePriceTemplate}></Column>
                <Column header="Discount" body={discountTemplate}></Column>
                <Column field="faphRatePrice" header="Rate Price"></Column>
                <Column header="Tax" body={taxTemplate}></Column>
                <Column
                  field="faphModifiedDate"
                  header="Modified Date"
                ></Column>
              </DataTable>
            </div>
          )}
        </LayoutHotel>
      </Layout>
    </div>
  );
}
