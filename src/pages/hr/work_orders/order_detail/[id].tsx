import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import Layout from "../../../../components/layout";
import { GetWodeRequest, FindWodeRequest } from "../../../../redux/action/hr/work_order_detailAction";
import { FindWoroRequest } from "../../../../redux/action/hr/work_ordersAction";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { FilterMatchMode, FilterOperator, PrimeIcons } from 'primereact/api';
import { Badge } from 'primereact/badge';
import { Dropdown, DropdownChangeEvent } from 'primereact/dropdown';
import { Calendar, CalendarChangeEvent } from 'primereact/calendar';
import { Menu } from 'primereact/menu';
import { ProgressSpinner } from 'primereact/progressspinner';
import { InputText } from 'primereact/inputtext';
import { OverlayPanel } from 'primereact/overlaypanel';
import { Button } from 'primereact/button';
import { GetEmpRequest } from "../../../../redux/action/hr/employeeAction";
import { GetServiceTasksRequest } from "../../../../redux/action/master/serviceTasksAction";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.css";
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';

import Add from "./add";
import Edit from "./edit";
import Delete from "./delete";
import LayoutHr from "../../layout";

export default function IndexWode() {
    const router = useRouter(); 
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);
    const [id, setId] = useState<number>();
    const [first, setFirst] = useState(0);
    const [refresh, setRefresh] = useState(false);
    const { wode } = useSelector((state: any) => state.wodeState);
    const { wodes } = useSelector((state: any) => state.wodeState);
    const { woro } = useSelector((state: any) => state.woroState);
    const { emps } = useSelector((state: any) => state.empState); 
    const { serviceTasks } = useSelector((state: any) => state.serviceTasksState); 

    useEffect(() => {
      dispatch(GetEmpRequest());
      setRefresh(false);
      setLoading(true);
    }, [dispatch, refresh]);

    //mapping user melalui empUser dari employee
    const empUserMapping = emps.reduce((mapping: any, emp: any) => {
      const { empId, empUser } = emp;
      if (empId && empUser) {
        mapping[empId] = empUser.userFullName;
      }
      return mapping;
    }, {});
  
    useEffect(() => {
      dispatch(GetServiceTasksRequest());
      setRefresh(false);
      setLoading(true);
    }, [dispatch, refresh]);

    useEffect(() => {
      if (router.isReady) {
        dispatch(GetWodeRequest(router.query.id)); 
        // dispatch(GetWodeRequest()); 
        dispatch(FindWoroRequest(router.query.id));
        setLoading(true);
      }else {
        console.log('Invalid Id.');
      }
    }, [dispatch, router.query.id, refresh, router.isReady]);

    useEffect(() => {
      document.title = "Human Resource - Work Order Detail"; 
    }, []);

    const Wode = (rowData: any) => {
        const wodeRef = useRef<OverlayPanel>(null)
        return (
          <div>
              <Button type="button" severity="secondary" icon="pi pi-ellipsis-v" tooltip="Actions Menu" tooltipOptions={{ position: 'top', showDelay: 300 }} onClick={(e) => wodeRef.current?.toggle(e)} text />
              <OverlayPanel ref={wodeRef} >
              <div>
            {rowData && (
            <>
            <ul > 
              <li className="-mx-3 -mt-3 -mb-1">
              <Edit id={rowData.wodeId} setRefresh={setRefresh} emp={rowData.wodeEmp?.empId} seta={rowData.wodeSeta?.setaId} faci={rowData.wodeFaci?.faciId} woro={rowData.wodeWoro?.woroId} />
              </li>
              <li className="-mx-3 -mb-3">
              <Delete
                id={rowData.wodeId}
                name={rowData.wodeTaskName}
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

      const renderHeader = () => {
        return (
          <div className="flex justify-content-between align-items-center">
          <div className="flex align-items-center">
            <label htmlFor="date" className="mr-2">WorkOrder Created at:</label>
            <span className="p-input-icon-right">
            <i className="pi pi-calendar" style={{ color: 'var(--primary-color)' }} />
            <InputText
              className="w-full md:w-10rem "
              id="date"
              value={woro.woroStartDate ? new Date(woro.woroStartDate).toLocaleDateString("en-GB", {
                day: "numeric",
                month: "short",
                year: "numeric"
              }) : ''}
              style={{ height: "40px", border: "none" }}
              readOnly
            /></span>
          </div>
          <div className="flex align-items-center">
            <label htmlFor="status" className="mr-2">Status:</label>
            {woro.woroStatus === 'OPEN' && <Badge value="OPEN" severity="success" />}
            {woro.woroStatus === 'CLOSED' && <Badge value="CLOSED" severity="danger" />}
            {woro.woroStatus === 'CANCELED' && <Badge value="CANCELLED" severity="warning" />}
          </div>
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
                    value={wodes} 
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
                    emptyMessage="No Work Order found."
                    header={header}
                  >
                    <Column field="wodeId" header="WorkOrderId" sortable style={{ width: '25%' }}></Column>
                    <Column field="wodeTaskName" header="TaskName" sortable style={{ width: '25%' }}
                    body={(rowData: any) => rowData.wodeSeta?.setaName}
                    ></Column>
                    <Column field="wodeNotes" header="Notes" sortable style={{ width: '25%' }}
                    body={(rowData: any) => (
                      <span>
                        <strong>{rowData.wodeFaci?.faciName}</strong>
                        <strong>{rowData.wodeFaci?.faciName && " : "}</strong><br/>
                        {rowData.wodeNotes}
                      </span>
                    )}
                    >
                    </Column>
                    <Column field="wodeStatus" header="Status" sortable style={{ width: '25%' }}
                    body={(rowData: any) => {
                      let badgeClass = '';
                      let badgeText = '';
                  
                      if (rowData.wodeStatus === 'INPROGRESS') {
                        badgeClass = 'p-badge-warning';
                        badgeText = 'INPROGRESS';
                      } else if (rowData.wodeStatus === 'COMPLETED') {
                        badgeClass = 'p-badge-success';
                        badgeText = 'COMPLETED';
                      } else if (rowData.wodeStatus === 'CANCELLED') {
                        badgeClass = 'p-badge-danger';
                        badgeText = 'CANCELLED';
                      } 
                      return <span className={`p-badge ${badgeClass}`}>{badgeText}</span>;
                    }}
                    ></Column>
                    <Column field="wodeEmpId" header="AssignTo" sortable style={{ width: '25%' }}
                    body={(rowData: any) => {
                      if (rowData.wodeEmp && rowData.wodeEmp.empId && empUserMapping[rowData.wodeEmp.empId]) {
                        return empUserMapping[rowData.wodeEmp.empId];
                      } else {
                        return null; 
                      }
                    }}
                    ></Column>
                    <Column
                      field="wodeWoroId"
                      header={<Add setRefresh={setRefresh} id={router.query.id} />}
                      body={Wode}
                    ></Column>
                    </DataTable></div>
                </div>
              )}
            </LayoutHr>
          {/* </Layout> */}
        </div>
      );
    }
