import React, { useEffect, useState } from "react";
import Layout from "@/src/components/layout";
import LayoutMaster from "../layout";
import { useDispatch, useSelector } from "react-redux";
import { GetPriceItemsRequest } from "../../../redux/action/master/priceItemsAction";

import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.css";
import AddPriceItems from "./AddPriceItems";
import EditPriceItems from "./EditPriceItems";
import DeletePriceItems from "./DeletePriceItems";

export default function Index() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [id, setId] = useState<number>(0);
  const [first, setFirst] = useState(0);
  const [refresh, setRefresh] = useState(false);

  const { priceItems } = useSelector((state: any) => state.priceItemsState);

  useEffect(() => {
    dispatch(GetPriceItemsRequest());
    setRefresh(false);
    setLoading(true);
  }, [dispatch, refresh]);

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

  return (
    <Layout>
      <LayoutMaster>
        {!loading ? (
          <h1>loading</h1>
        ) : (
          <div className="min-h-screen">
            <h2 className="text-center my-5 font-bold text-3xl">Regions</h2>
            <DataTable
              value={priceItems}
              stripedRows
              tableStyle={{ minWidth: "50rem" }}
              className="bg-white text-black"
              paginator
              rows={5}
              first={first}
            >
              <Column field="pritId" header="Id"></Column>
              <Column field="pritName" header="Name"></Column>
              <Column field="pritPrice" header="Price"></Column>
              <Column field="pritType" header="Type"></Column>
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
