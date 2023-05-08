import React, { useEffect, useState } from "react";
import Layout from "@/src/components/layout";
import LayoutMaster from "../layout";
import { useDispatch, useSelector } from "react-redux";
import { GetServiceTasksRequest } from "../../../redux/action/master/serviceTasksAction";

import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.css";
import AddServiceTask from "./AddServiceTask";
import EditServiceTask from "./EditServiceTask";
import DeleteServiceTask from "./DeleteServiceTask";

export default function Index() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [id, setId] = useState<number>(0);
  const [first, setFirst] = useState(0);
  const [refresh, setRefresh] = useState(false);

  const { serviceTasks, max } = useSelector(
    (state: any) => state.serviceTasksState
  );

  useEffect(() => {
    dispatch(GetServiceTasksRequest());
    setRefresh(false);
    setLoading(true);
  }, [dispatch, refresh]);

  // console.log(max);
  // console.log(serviceTasks);

  // const maxObj = serviceTasks
  //   ? serviceTasks.reduce((accumulator: any, current: any) => {
  //       return accumulator.setaId > current.setaId ? accumulator : current;
  //     })
  //   : null;
  // console.log(priceItems);
  // console.log(maxObj);

  const kebabPriceItems = (rowData: any) => {
    return (
      <div>
        <EditServiceTask
          id={rowData.setaId}
          setRefresh={setRefresh}
          // maxId={maxObj.setaId}
        />
        <DeleteServiceTask
          id={rowData.setaId}
          name={rowData.setaName}
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
              value={serviceTasks}
              stripedRows
              tableStyle={{ minWidth: "50rem" }}
              className="bg-white text-black"
              paginator
              rows={5}
              first={first}
            >
              <Column field="setaId" header="Id"></Column>
              <Column field="setaName" header="Name"></Column>
              <Column field="setSeq" header="Sequence Order"></Column>
              <Column
                field="pritId"
                header={<AddServiceTask setRefresh={setRefresh} />}
                body={kebabPriceItems}
              ></Column>
            </DataTable>
          </div>
        )}
      </LayoutMaster>
    </Layout>
  );
}
