import React, { useEffect, useState } from "react";
import Layout from "@/src/components/layout";
import LayoutMaster from "../layout";
import { useDispatch, useSelector } from "react-redux";
import { GetPolicyRequest } from "../../../redux/action/master/policyAction";

import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { InputSwitch } from "primereact/inputswitch";

import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.css";
import AddPolicy from "./AddPolicy";
import EditPolicy from "./EditPolicy";
import DeletePolicy from "./DeletePolicy";

export default function Index() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [id, setId] = useState<number>(0);
  const [first, setFirst] = useState(0);
  const [refresh, setRefresh] = useState(false);

  const { policies } = useSelector((state: any) => state.policyState);

  useEffect(() => {
    dispatch(GetPolicyRequest());
    setRefresh(false);
    setLoading(true);
  }, [dispatch, refresh]);

  const kebabPolicy = (rowData: any) => {
    return (
      <div>
        <EditPolicy id={rowData.poliId} setRefresh={setRefresh} />
        <DeletePolicy
          id={rowData.poliId}
          name={rowData.poliName}
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
            <h2 className="text-center my-5 font-bold text-3xl">Policy</h2>
            <DataTable
              value={policies}
              stripedRows
              tableStyle={{ minWidth: "50rem" }}
              className="bg-white text-black"
              paginator
              rows={5}
              first={first}
            >
              <Column field="poliId" header="Id"></Column>
              <Column field="poliName" header="Name"></Column>
              <Column
                field="poliId"
                header={<AddPolicy setRefresh={setRefresh} />}
                body={kebabPolicy}
              ></Column>
            </DataTable>
          </div>
        )}
      </LayoutMaster>
    </Layout>
  );
}
