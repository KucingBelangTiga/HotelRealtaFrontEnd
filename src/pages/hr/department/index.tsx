import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import Layout from "../../../components/layout";
import { GetDeptRequest } from "../../../redux/action/hr/departmentAction";

import { DataTable, DataTableFilterMeta } from "primereact/datatable";
import { Column } from "primereact/column";
import { FilterMatchMode, FilterOperator } from 'primereact/api';
import { InputText } from 'primereact/inputtext';

import { OverlayPanel } from 'primereact/overlaypanel';
import { Dropdown } from 'primereact/dropdown';
import { Menubar } from 'primereact/menubar';
import { Button } from 'primereact/button';
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
    
    //asli
    // const dept = (rowData: any) => {
    //   return (
    //     <div>
    //       <Edit id={rowData.deptId} setRefresh={setRefresh} />
    //       <Delete
    //         id={rowData.deptId}
    //         name={rowData.deptName}
    //         setRefresh={setRefresh}
    //       />
    //     </div>
    //   );
    // };

    const Dept = (rowData: any) => {
      // const deptRef = useRef(null);
      const deptRef = useRef<OverlayPanel>(null)
      return (
        <div>
          {/* <button type="button" className="p-link">
            <i className="pi pi-ellipsis-v"></i> */}
            <Button type="button" severity="secondary" icon="pi pi-ellipsis-v" tooltip="Actions Menu" tooltipOptions={{ position: 'top', showDelay: 300 }} onClick={(e) => deptRef.current?.toggle(e)} text />
            {/* <OverlayPanel appendTo={document.body} trigger="click" position="bottom"> */}
            <OverlayPanel ref={deptRef} >
            <div>
          {rowData && (
            <>
              <Edit id={rowData.deptId} setRefresh={setRefresh} />
              <Delete
                id={rowData.deptId}
                name={rowData.deptName}
                setRefresh={setRefresh}
              />
            </>
          )}
        </div>
            </OverlayPanel>
          {/* </button> */}
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
        <div className="flex justify-content-end align-items-center">
          <label htmlFor="globalFilter" className="search-label mr-2">Search: </label>
            <span className="p-input-icon-left">
                <i className="pi pi-search" />
                <InputText id="globalFilter" value={globalFilterValue} onChange={onGlobalFilterChange} placeholder="department name" style={{ height: "40px" }}/>
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
                      body={Dept}
                    ></Column>
                    </DataTable></div>
                </div>
              )}
            </LayoutHr>
          {/* </Layout> */}
        </div>
      );
    }
