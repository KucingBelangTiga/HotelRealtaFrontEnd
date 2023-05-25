import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import Layout from "../../../components/layout";
import { GetWoroRequest } from "../../../redux/action/hr/work_ordersAction";

import { DataTable, DataTableFilterMeta } from "primereact/datatable";
import { Column, ColumnFilterElementTemplateOptions } from "primereact/column";
import { FilterMatchMode, FilterOperator, PrimeIcons } from 'primereact/api';
import { Calendar, CalendarChangeEvent } from 'primereact/calendar';
import { Dropdown, DropdownChangeEvent } from 'primereact/dropdown';
import { Button } from 'primereact/button';
import { Menu } from 'primereact/menu';
import { OverlayPanel } from 'primereact/overlaypanel';
import { ProgressSpinner } from 'primereact/progressspinner';
import { InputText } from 'primereact/inputtext';
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.css";
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';

import Add from "./add";
import Edit from "./edit";
import LayoutHr from "../layout";

export default function IndexWoro() {
    const router = useRouter(); const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);
    const [id, setId] = useState<number>();
    const [first, setFirst] = useState(0);
    const [filters, setFilters] = useState<DataTableFilterMeta>({
    woroStartDate: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.DATE_IS }] },
    woroStatus: { value: 'OPEN', matchMode: FilterMatchMode.EQUALS },
    });
    const [globalFilterValue, setGlobalFilterValue] = useState<string>('');
    const [refresh, setRefresh] = useState(false);
    const { woros } = useSelector((state: any) => state.woroState);
    const [dates, setDates] = useState<string | Date | Date[] | null>(null);
    const [startDate, setStartDate] = useState<string | Date | Date[] | null>(null);
    const [endDate, setEndDate] = useState<string | Date | Date[] | null>(null);

    useEffect(() => {
      dispatch(GetWoroRequest());
      setRefresh(false);
      setLoading(true); 
    }, [dispatch, refresh]); 
    
    useEffect(() => {
      document.title = "Human Resource - Work Order"; 
    }, []);

    const Woro = (rowData: any) => {
        const woroRef = useRef<OverlayPanel>(null)
        return (
          <div>
              <Button type="button" severity="secondary" icon="pi pi-ellipsis-v" tooltip="Actions Menu" tooltipOptions={{ position: 'top', showDelay: 300 }} onClick={(e) => woroRef.current?.toggle(e)} text />
              <OverlayPanel ref={woroRef} >
              <div>
            {rowData && (
            <> 
            <ul > 
              <li className="-mx-3 -mt-3 -mb-2">
              <Edit id={rowData.woroId} setRefresh={setRefresh} user={rowData.woroUser?.userId} />
              </li>
              <li className="-mx-3 -mb-3">
                <Button severity="secondary" label="WorkOrder Detail" className="" style={{ paddingBottom: '10px', paddingRight: '61px' }} onClick={() => onWode(rowData.woroId)} text />
              </li> 
            </ul>
            </>
          )} 
        </div> 
              </OverlayPanel>
          </div>
        );
      };   

      const onWode = (id: number) => {
        const urlWithoutOrderDetail = router.asPath.replace("/order_detail", "");
        router.push({
          pathname: "/hr/work_orders/order_detail/[id]",
          query: { id: id },
        }).then(() => {
          const urlWithId = urlWithoutOrderDetail + `?id=${id}`;
          window.history.replaceState({}, "", urlWithId);
        });
      };      

const onStatusFilterChange = (e: DropdownChangeEvent) => {
    const value = e.value;
    let _filters = { ...filters };
  
    if ('value' in _filters['woroStatus']) {
      _filters['woroStatus'].value = value;
    }
    setFilters(_filters);
  }; 

  //

  const handleStartDateChange = (e: any) => {
    setStartDate(e.value);
  };
  const handleEndDateChange = (e: any) => {
    setEndDate(e.value);
  };

  const onDateFilterChange = () => {
    const newFilters = { ...filters };
  
    if (startDate && endDate) {
      newFilters['woroStartDate'] = {
        matchMode: FilterMatchMode.DATE_IS,
        value: [startDate, endDate],
      };
    } else {
      newFilters['woroStartDate'] = {
        operator: FilterOperator.AND,
        constraints: [{ value: null, matchMode: FilterMatchMode.DATE_IS }],
      };
    }
    setFilters(newFilters);
  };

  const renderHeader = () => {
    return (
      <div className="flex justify-content-between align-items-center">
      <div className="flex align-items-center">
          <label htmlFor="dateFilter" className="search-label mr-2">Date Range: </label>
            <div>
            <Calendar className="w-full md:w-10rem" value={startDate} onChange={handleStartDateChange} dateFormat="dd/mm/yy" placeholder="dd/mm/yyyy" showButtonBar />
            <span className="mx-2">to</span>
            <Calendar className="w-full md:w-10rem" value={endDate} onChange={handleEndDateChange} dateFormat="dd/mm/yy" placeholder="dd/mm/yyyy" showButtonBar /> 

             <React.Fragment>
             <Button className="ml-2" severity="secondary" type="button" tooltip="Filter Date" tooltipOptions={{ position: 'right', showDelay: 300 }} icon="pi pi-filter" outlined rounded onClick={onDateFilterChange} />
             </React.Fragment>
           </div> 
          </div>

            <div className="flex align-items-center">
            <label htmlFor="statusFilter" className="search-label ml-4 mr-2">Status: </label>
                <Dropdown
                style={{ height: "45px" }}
                id="statusFilter"
                value={'value' in filters['woroStatus'] ? filters['woroStatus'].value : null}
                onChange={onStatusFilterChange}
                options={[{ label: 'All', value: null },
                { label: 'OPEN', value: 'OPEN' },
                { label: 'CLOSED', value: 'CLOSED' },
                { label: 'CANCELLED', value: 'CANCELED' },
            ]}
              />
        </div></div>
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
                    value={woros}
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
                    emptyMessage="No Work Order found."
                    globalFilterFields={['woroStartDate', 'woroStatus']}
                    header={header}
                  >
                    <Column 
                    field="woroStartDate" 
                    header="WorkOrder Date" 
                    sortable 
                    style={{ width: '25%' }}
                    body={(rowData: any) =>
                      new Date(rowData.woroStartDate).toLocaleDateString("en-GB", {
                        day: "numeric",
                        month: "short", 
                        year: "numeric"
                      })
                    }
                    />
                    <Column 
                    field="woroStatus" 
                    header="Status" 
                    sortable style={{ width: '25%' }}
                    body={(rowData: any) => {
                      let badgeClass = '';
                      let badgeText = '';
                  
                      if (rowData.woroStatus === 'OPEN') {
                        badgeClass = 'p-badge-success';
                        badgeText = 'OPEN';
                      } else if (rowData.woroStatus === 'CANCELED') {
                        badgeClass = 'p-badge-warning';
                        badgeText = 'CANCELLED';
                      } else if (rowData.woroStatus === 'CLOSED') {
                        badgeClass = 'p-badge-danger';
                        badgeText = 'CLOSED';
                      }
                      return <span className={`p-badge ${badgeClass}`}>{badgeText}</span>;
                    }}
                    ></Column>
                    <Column field="woroUser.userFullName" header="Created By" sortable style={{ width: '25%' }}></Column>
                    <Column
                      field="woroId"
                      header={<Add setRefresh={setRefresh} />}
                      body={Woro}
                    ></Column>
                    </DataTable></div>
                </div>
              )}
            </LayoutHr>
          {/* </Layout> */}
        </div>
      );
    }
