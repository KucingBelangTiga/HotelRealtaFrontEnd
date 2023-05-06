import React, { useEffect, useState } from "react";
import Layout from "../../../components/layout";
import { useDispatch, useSelector } from "react-redux";
import { GetDeptRequest } from "../../../redux/action/hr/departmentAction";

import { DataTable, DataTableFilterMeta } from "primereact/datatable";
import { Column } from "primereact/column";
import { FilterMatchMode, FilterOperator } from 'primereact/api';
import { InputText } from 'primereact/inputtext';

import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.css";
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';

import Add from "./add";
import Edit from "./edit";
import Delete from "./delete";
import LayoutHr from "../layout";

export default function IndexDept() {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);
    const [id, setId] = useState<number>();
    const [first, setFirst] = useState(0);
    const [filters, setFilters] = useState<DataTableFilterMeta>({
      global: { value: null, matchMode: FilterMatchMode.CONTAINS },
      deptName: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
    });
    const [globalFilterValue, setGlobalFilterValue] = useState<string>('');
    const [refresh, setRefresh] = useState(false);
    const { departments } = useSelector((state: any) => state.deptState);

    useEffect(() => {
      dispatch(GetDeptRequest());
      setRefresh(false);
      setLoading(true);
    }, [dispatch, refresh]);
  
    const dept = (rowData: any) => {
      return (
        <div>
          <Edit id={rowData.deptId} setRefresh={setRefresh} />
          <Delete
            id={rowData.deptId}
            name={rowData.deptName}
            setRefresh={setRefresh}
          />
        </div>
      );
    };

    const onGlobalFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      let _filters = { ...filters };

      _filters['global'].value = value;

      setFilters(_filters);
      setGlobalFilterValue(value);
  };

  const renderHeader = () => {
    return (
        <div className="flex justify-content-end">
          {/* <label className="search-label text-base font-normal">Search: </label> */}
            <span className="p-input-icon-left">
                <i className="pi pi-search" />
                <InputText value={globalFilterValue} onChange={onGlobalFilterChange} placeholder="department name" />
            </span>
        </div>
    );
};
const header = renderHeader();
    return (
        <div>
          {/* <Layout> */}
            <LayoutHr>
              {!loading ? (
                <h1>loading...</h1>
              ) : (
                <div className="min-h-screen">
                  <h2 className="text-center my-5 font-bold text-3xl">Department</h2>
                  <div className="card">
                  <DataTable
                    value={departments}
                    stripedRows
                    tableStyle={{ minWidth: "50rem" }}
                    className="bg-white text-black"
                    paginator
                    rows={5}
                    first={first}
                    removableSort
                    filters={filters}
                    emptyMessage="No Department found."
                    globalFilterFields={['deptName']}
                    header={header}
                  >
                    <Column field="deptId" header="ID" sortable style={{ width: '25%' }}></Column>
                    <Column field="deptName" header="Name" sortable style={{ width: '25%' }}></Column>
                    <Column
                      field="deptId"
                      header={<Add setRefresh={setRefresh} />}
                      body={dept}
                    ></Column>
                  </DataTable></div>
                </div>
              )}
            </LayoutHr>
          {/* </Layout> */}
        </div>
      );
    }
