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
import { GetEdhiRequest } from "../../../../redux/action/hr/employee_department_historyAction";
import { FindEmpRequest, GetEmpRequest } from "../../../../redux/action/hr/employeeAction";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.css";
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';

import LayoutHr from "../../layout";

export default function IndexEdhi() {
    const router = useRouter(); 
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);
    const [id, setId] = useState<number>();
    const [first, setFirst] = useState(0);
    const [refresh, setRefresh] = useState(false);
    const { edhis } = useSelector((state: any) => state.edhiState);
    const { emps } = useSelector((state: any) => state.empState); 
    const { emp } = useSelector((state: any) => state.empState); 

    useEffect(() => {
      if (router.isReady) {
        console.log("router id: ", router.query.id);
        dispatch(GetEdhiRequest(router.query.id)); 
        dispatch(FindEmpRequest(router.query.id)); 
        setLoading(true);
      }else {
        console.log('Invalid Id.');
      }
    }, [dispatch, router.query.id, refresh, router.isReady]);

    useEffect(() => {
      document.title = "Employee - Mutations History"; 
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
                    value={edhis} 
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
                    emptyMessage="No Mutation Histories found."
                  >
                    <Column header="#" sortable style={{ width: '10%' }}
                    body={rowNumberTemplate}
                    ></Column>
                    <Column field="emp.empNationalId" header="NationId" sortable style={{ width: '25%' }}
                    body={(rowData: any) => rowData.edhiEmp.empNationalId}
                    ></Column>
                    <Column field="edhiEmpId" header="Name" sortable style={{ width: '25%' }}
                    body={(rowData: any) => {
                        if (rowData.edhiEmp && rowData.edhiEmp.empId && empUserMapping[rowData.edhiEmp.empId]) {
                          return empUserMapping[rowData.edhiEmp.empId];
                        } else {
                          return null; //null jika empId tidak ditemukan
                        }
                      }}
                    ></Column> 
                    <Column field="emp.status" header="Status" sortable style={{ width: '15%' }}
                    body={(rowData: any) =>
                        rowData.edhiEmp.empCurrentFlag === 1 ? ( 
                          <span className="p-badge p-badge-success">Active</span>
                        ) : (
                          <span className="p-badge p-badge-danger">Inactive</span>
                        )
                      }
                    >
                    </Column>

                    <Column field="edhiDept?.deptName" header="Department" sortable style={{ width: '25%' }}
                    body={(rowData: any) => rowData.edhiDept?.deptName}
                    >
                    </Column>
                    <Column field="edhiDate" header="AssignmentDate" sortable style={{ width: '25%' }}
                    body={(rowData: any) => `${new Date(rowData.edhiStartDate).toLocaleDateString("en-GB", {
                        day: "numeric",
                        month: "short",
                        year: "numeric"
                      })} - ${new Date(rowData.edhiEndDate).toLocaleDateString("en-GB", {
                        day: "numeric",
                        month: "short",
                        year: "numeric"
                      })}`}                      
                    >
                    </Column>
                    <Column field="edhiShift?.shiftName" header="Shift" sortable style={{ width: '15%' }}
                    body={(rowData: any) => rowData.edhiShift?.shiftName}
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
