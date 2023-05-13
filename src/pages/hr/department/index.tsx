import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import Layout from "../../../components/layout";
import { GetDeptRequest } from "../../../redux/action/hr/departmentAction";

import { DataTable, DataTableFilterMeta } from "primereact/datatable";
import { Column } from "primereact/column";
import { FilterMatchMode } from 'primereact/api';
import { InputText } from 'primereact/inputtext';
import { OverlayPanel } from 'primereact/overlaypanel';
import { Button } from 'primereact/button';
import { ProgressSpinner } from 'primereact/progressspinner';
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
    
    useEffect(() => {
      document.title = "Human Resource - Department"; 
    }, []);

    const Dept = (rowData: any) => {
      const deptRef = useRef<OverlayPanel>(null)
      return (
        <div>
            <Button type="button" severity="secondary" icon="pi pi-ellipsis-v" tooltip="Actions Menu" tooltipOptions={{ position: 'top', showDelay: 300 }} onClick={(e) => deptRef.current?.toggle(e)} text />
            <OverlayPanel ref={deptRef} className="p-overlaypanel-rounded">
            <div>
            {rowData && (
            <>
            <ul > 
              <li className="-mx-3 -mt-3 -mb-1">
              <Edit id={rowData.deptId} setRefresh={setRefresh} />
              </li>
              <li className="-mx-3 -mb-3">
              <Delete
                id={rowData.deptId}
                name={rowData.deptName}
                setRefresh={setRefresh}
              />
              </li>
            </ul>
            </>
          )}
        </div> 
            </OverlayPanel>
        </div>
      );
    };    

  const onGlobalFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    let _filters = { ...filters };

    if ('value' in _filters['global']) {
        _filters['global'].value = value;
    }
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
                <div className="p-d-flex p-flex-column p-ai-center p-jc-center" style={{ height: '100vh' }}>
                <ProgressSpinner style={{ width: '50px', height: '50px' }} strokeWidth="4" fill="#16123d" animationDuration="1s" />
                <h1 className="p-mt-4">Loading...</h1>
              </div>
              ) : (
                <div className="min-h-screen">
                  <div className="card">
                  <DataTable
                    value={departments}
                    stripedRows 
                    tableStyle={{ minWidth: "50rem" }} 
                    className="bg-white text-black"
                    paginator
                    paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
                    rows={5}
                    rowsPerPageOptions={[5, 10, 20]}
                    currentPageReportTemplate="Showing {first} to {last} of {totalRecords} entries"
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
