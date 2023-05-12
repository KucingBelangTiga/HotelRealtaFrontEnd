import React, { useEffect, useState } from "react";
import Layout from "@/src/components/layout";
import LayoutMaster from "../layout";
import { useDispatch, useSelector } from "react-redux";
import { GetCategoryRequest } from "../../../redux/action/master/categoryAction";

import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.css";
import AddCategory from "./AddCategory";
import DeleteCategory from "./DeleteCategory";
import EditCategory from "./EditCategory";

export default function Index() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [id, setId] = useState<number>(0);
  const [first, setFirst] = useState(0);
  const [refresh, setRefresh] = useState(false);
  const [kebabMenu, setKebabMenu] = useState<boolean>(false);
  const { categories } = useSelector((state: any) => state.categoryState);

  useEffect(() => {
    dispatch(GetCategoryRequest());
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
          onClick={() => displayKebabMenu(rowData.cagroId)}
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
        {rowData.cagroId === id && kebabMenu && (
          <div className="absolute top-12 border-coldBlue text-coldBlue w-96 z-30">
            <p className="p-5 bg-white  absolute right-3  border-coldBlue border-solid border-2 rounded-md text-center">
              {rowData.cagroDescription}
            </p>
          </div>
        )}
      </div>
    );
  };

  const kebabCategory = (rowData: any) => {
    return (
      <div>
        <EditCategory
          id={rowData.cagroId}
          setRefresh={setRefresh}
          category={
            rowData.policyCategoryGroups[0] &&
            rowData.policyCategoryGroups[0].pocaPoli
          }
          policyId={
            rowData.policyCategoryGroups[0] &&
            rowData.policyCategoryGroups[0].pocaId
          }
        />
        <DeleteCategory
          id={rowData.cagroId}
          name={rowData.cagroName}
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
            <h2 className="text-center my-5 font-bold text-3xl">
              Category Group
            </h2>
            <DataTable
              value={categories}
              stripedRows
              tableStyle={{ minWidth: "50rem" }}
              className="bg-white text-black"
              paginator
              rows={5}
              first={first}
            >
              <Column field="cagroId" header="Id"></Column>
              <Column field="cagroName" header="Name"></Column>
              <Column field="cagroType" header="Type"></Column>
              <Column field="cagroDescription" body={popDescription}></Column>
              <Column
                field="poliId"
                header={<AddCategory setRefresh={setRefresh} />}
                body={kebabCategory}
              ></Column>
            </DataTable>
          </div>
        )}
      </LayoutMaster>
    </Layout>
  );
}
