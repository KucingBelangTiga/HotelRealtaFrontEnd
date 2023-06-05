import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import Layout from "../../../components/layout";
import { GetEmpRequest } from "../../../redux/action/hr/employeeAction";

import { DataTable, DataTableFilterMeta } from "primereact/datatable";
import { Column } from "primereact/column";
import { FilterMatchMode, FilterOperator } from 'primereact/api';
import { Dropdown, DropdownChangeEvent } from 'primereact/dropdown';
import { OverlayPanel } from 'primereact/overlaypanel';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { ProgressSpinner } from 'primereact/progressspinner'; 
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.css";
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css'; 

import Add from "./add";  
import Edit from "./edit";
import LayoutHr from "../layout";

export default function IndexEmp() {
    const router = useRouter();
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);
    const [id, setId] = useState<number>();
    const [first, setFirst] = useState(0);
    const [filters, setFilters] = useState<DataTableFilterMeta>({
      global: { value: null, matchMode: FilterMatchMode.CONTAINS },
      'empUser.userFullName': { value: null, matchMode: FilterMatchMode.STARTS_WITH },
      empCurrentFlag: { value: '1', matchMode: FilterMatchMode.EQUALS },
    });
    const [globalFilterValue, setGlobalFilterValue] = useState<string>('');
    const [refresh, setRefresh] = useState(false);
    const { emps } = useSelector((state: any) => state.empState);

    useEffect(() => {
      dispatch(GetEmpRequest());
      setRefresh(false);
      setLoading(true);
    }, [dispatch, refresh]);
    // console.log("emps: ", emps);

    useEffect(() => {
      document.title = "Human Resource - Employee";
    }, []);

    const Emp = (rowData: any) => {
        const empRef = useRef<OverlayPanel>(null)
        return (
          <div>
              <Button type="button" severity="secondary" icon="pi pi-ellipsis-v" tooltip="Actions Menu" tooltipOptions={{ position: 'top', showDelay: 300 }} onClick={(e) => empRef.current?.toggle(e)} text />
              <OverlayPanel ref={empRef} >
              <div>
            {rowData && (
            <>
            <ul > 
              <li className="-mx-3 -mt-3 -mb-2">
              <Edit id={rowData.empId} setRefresh={setRefresh} emp={rowData.empEmp?.empId} joro={rowData.empJoro?.joroId} user={rowData.empUser?.userId} />
              </li>
              <li className="-mx-3 -mb-2">
               <Button severity="secondary" label="Salary History" className="" style={{ paddingRight: '86px' }} onClick={() => onEphi(rowData.empId)} text />
               </li> 
              <li className="-mx-3 -mb-3">
                <Button severity="secondary" label="Department History" className="" style={{ paddingRight: '41px' }} onClick={() => onEdhi(rowData.empId)} text />
              </li>
            </ul>
            </>
          )} 
        </div> 
              </OverlayPanel>
          </div>
        );
      };   

      const onEphi = (id: number) => {
        router.push({
          pathname: "/hr/employee/pay_history/[id]",
          query: { id: id }, 
        });
      }; 
 
      const onEdhi = (id: number) => {
        router.push({
          pathname: "/hr/employee/department_history/[id]",
          query: { id: id },
        });
      };

    //name filter
    const onGlobalFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      let _filters = { ...filters };
  
      if ('value' in _filters['global']) {
          _filters['global'].value = value;
      }
  
      setFilters(_filters);
      setGlobalFilterValue(value);
  }; 
  // 

    //status filter
    const onStatusFilterChange = (e: DropdownChangeEvent) => {
      const value = e.value;
      let _filters = { ...filters };
    
      if ('value' in _filters['empCurrentFlag']) {
        _filters['empCurrentFlag'].value = value;
      }
      setFilters(_filters);
    };  
    //  

    const renderHeader = () => {
        return (
            <div className="flex justify-content-center align-items-center">
              <label htmlFor="nameFilter" className="search-label mr-2">Search: </label>
                <span className="p-input-icon-left">
                    <i className="pi pi-search" />
                    <InputText id="nameFilter" value={globalFilterValue} onChange={onGlobalFilterChange} placeholder="employee name" style={{ height: "40px" }}/>
                </span>
                <label htmlFor="statusFilter" className="search-label ml-4 mr-2">Status: </label>
                <Dropdown
                id="statusFilter"
                value={'value' in filters['empCurrentFlag'] ? filters['empCurrentFlag'].value : null}
                onChange={onStatusFilterChange}
                options={[{ label: 'All', value: null },
                { label: 'Active', value: '1' },
                { label: 'Inactive', value: '0' },]}
              />
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
                    value={emps}
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
                    emptyMessage="No Employee found."
                    globalFilterFields={['empUser.userFullName', 'empCurrentFlag']}
                    header={header}
                  >
                    <Column field="empId" header="ID" sortable style={{ width: '25%' }}></Column>
                    <Column field="empNationalId" header="NationalID" sortable style={{ width: '25%' }}></Column>
                    <Column
                    field="empUser.userFullName"
                    header="FullName"
                    sortable
                    style={{ width: "25%" }}
                    body={(rowData: any) => rowData.empUser?.userFullName}
                  />
                    <Column
                    field="empBirthDate"
                    header="BirthDate"
                    sortable
                    style={{ width: "25%" }}
                    body={(rowData: any) =>
                      new Date(rowData.empBirthDate).toLocaleDateString("en-GB", {
                        day: "numeric",
                        month: "short", //nama bulan lengkap pakai: long
                        year: "numeric"
                      })
                    }
                  />
                    <Column 
                    field="empHireDate" 
                    header="HireDate" 
                    sortable 
                    style={{ width: '25%' }}
                    body={(rowData: any) => (
                      <span>
                        {new Date(rowData.empHireDate).toLocaleDateString("en-GB", {
                          day: "numeric",
                          month: "short",
                          year: "numeric"
                        })}
                      </span>
                    )}
                    />
                    <Column
                      field="empCurrentFlag"
                      header="Status"
                      sortable
                      style={{ width: "25%" }}
                      body={(rowData: any) =>
                        rowData.empCurrentFlag === 1 ? ( 
                          <span className="p-badge p-badge-success">Active</span>
                        ) : (
                          <span className="p-badge p-badge-danger">Inactive</span>
                        )
                      }
                    ></Column>
                    <Column
                      field="empId"
                      header={<Add setRefresh={setRefresh} />}
                      body={Emp}
                    ></Column>
                    </DataTable></div>
                </div>
              )}
            </LayoutHr>
          {/* </Layout> */}
        </div>
      );
}
