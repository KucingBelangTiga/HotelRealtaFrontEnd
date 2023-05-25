import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import Layout from "../../../../components/layout";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Badge } from 'primereact/badge';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { ProgressSpinner } from 'primereact/progressspinner';
import { GetEphiRequest } from "../../../../redux/action/hr/employee_pay_historyAction";
import { FindEmpRequest, GetEmpRequest } from "../../../../redux/action/hr/employeeAction";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.css";
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';

import LayoutHr from "../../layout";

export default function IndexEphi() {
    const router = useRouter(); 
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);
    const [id, setId] = useState<number>();
    const [first, setFirst] = useState(0);
    const [refresh, setRefresh] = useState(false);
    const { ephis } = useSelector((state: any) => state.ephiState);
    const { emps } = useSelector((state: any) => state.empState); 
    const { emp } = useSelector((state: any) => state.empState); 

    useEffect(() => {
      if (router.isReady) {
        console.log("router id: ", router.query.id);
        dispatch(GetEphiRequest(router.query.id)); 
        dispatch(FindEmpRequest(router.query.id)); 
        setLoading(true);
      }else {
        console.log('Invalid Id.');
      }
    }, [dispatch, router.query.id, refresh, router.isReady]);

    useEffect(() => {
      document.title = "Employee - Pay History"; 
    }, []);

    //mapping user melalui empUser dari employee
    useEffect(() => {
        dispatch(GetEmpRequest());
        setRefresh(false);
        setLoading(true);
      }, [dispatch, refresh]);

    const empUserMapping = emps.reduce((mapping: any, emp: any) => {
        const { empId, empUser } = emp;
        if (empId && empUser) {
          mapping[empId] = empUser.userFullName;
        }
        return mapping;
      }, {});
      //

      //record number
      const rowNumberTemplate = (rowData: any, column: any) => {
        return column.rowIndex + 1;
      };
      //

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
                    value={ephis} 
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
                    emptyMessage="No Pay Histories found."
                  >
                    <Column header="#" sortable style={{ width: '10%' }}
                    body={rowNumberTemplate}
                    ></Column>
                    <Column field="emp.empNationalId" header="NationId" sortable style={{ width: '25%' }}
                    body={(rowData: any) => rowData.ephiEmp.empNationalId}
                    ></Column>
                    <Column field="ephiEmpId" header="Name" sortable style={{ width: '25%' }}
                    body={(rowData: any) => {
                        if (rowData.ephiEmp && rowData.ephiEmp.empId && empUserMapping[rowData.ephiEmp.empId]) {
                          return empUserMapping[rowData.ephiEmp.empId];
                        } else {
                          return null;
                        }
                      }}
                    ></Column> 
                    <Column field="emp.status" header="Status" sortable style={{ width: '15%' }}
                    body={(rowData: any) =>
                        rowData.ephiEmp.empCurrentFlag === 1 ? ( 
                          <span className="p-badge p-badge-success">Active</span>
                        ) : (
                          <span className="p-badge p-badge-danger">Inactive</span>
                        )
                      }
                    >
                    </Column>

                    <Column field="ephiRateChangeDate" header="PayChangeDate" sortable style={{ width: '25%' }}
                    body={(rowData: any) =>
                      new Date(rowData.ephiRateChangeDate).toLocaleDateString("en-GB", {
                        day: "numeric",
                        month: "short", 
                        year: "numeric"
                      })
                    }
                    >
                    </Column>
                    <Column field="ephiRateSalary" header="Salary" sortable style={{ width: '25%' }}
                    body={(rowData: any) => rowData.ephiRateSalary}
                    >
                    </Column>
                    <Column field="ephiPayFrequence" header="Pay Frequencies" sortable style={{ width: '25%' }}
                    body={(rowData: any) => {
                        if (rowData.ephiPayFrequence === 1) {
                          return 'Monthly';
                        } else if (rowData.ephiPayFrequence === 0) {
                          return 'Hourly';
                        } else {
                          return '';
                        }
                      }}
                    >
                    </Column>
                    
                    </DataTable></div>
                </div>
              )}
            </LayoutHr>
          {/* </Layout> */}
        </div>
      );
    }
