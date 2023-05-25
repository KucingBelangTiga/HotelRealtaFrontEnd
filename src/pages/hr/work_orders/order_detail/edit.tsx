/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  FindWodeRequest,
  EditWodeRequest,
} from "../../../../redux/action/hr/work_order_detailAction";
import { useFormik, FormikProvider } from "formik";
import classNames from 'classnames';
import * as Yup from 'yup';
import { Toast } from 'primereact/toast'; 
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog'; 
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from "primereact/inputtextarea";
import { Dropdown, DropdownChangeEvent } from 'primereact/dropdown';
import { GetEmpRequest } from "../../../../redux/action/hr/employeeAction";
import { GetServiceTasksRequest } from "../../../../redux/action/master/serviceTasksAction";
import Facilities from "../../../../api/hotel/facilities";
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primereact/resources/primereact.css';
import 'primeicons/primeicons.css';

export default function Edit(props: any) {
  const [showModal, setShowModal] = useState(false); 
  const [id, setId] = useState<number>(props.id);
  const dispatch = useDispatch();
  const { wode } = useSelector((state: any) => state.wodeState);
  const [submitted, setSubmitted] = useState<boolean>(false);
  const toast = useRef<any>(null);
  const [refresh, setRefresh] = useState(false);
  const [loading, setLoading] = useState(false);
  const { emps } = useSelector((state: any) => state.empState); 
  const { serviceTasks } = useSelector((state: any) => state.serviceTasksState); 

  useEffect(() => {
    dispatch(FindWodeRequest(id));
  }, [dispatch, props.id, showModal]);

  useEffect(() => {
    dispatch(GetEmpRequest());
    setRefresh(false);
    setLoading(true);
  }, [dispatch, refresh]);

  useEffect(() => {
    dispatch(GetServiceTasksRequest());
    setRefresh(false);
    setLoading(true);
  }, [dispatch, refresh]);

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      wodeId: props.id, 
      wodeTaskName: wode.wodeTaskName,
    //   wodeSetaId: wode.wodeSetaId,
      wodeSetaId: wode.wodeSeta?.setaId,  //agar initial values yg tampil sesuai label dropdown
      wodeEmpId: wode.wodeEmp?.empId,
      wodeStatus: wode.wodeStatus,
      wodeNotes: wode.wodeNotes,
      wodeFaciId: wode.wodeFaci?.faciId,
    },
    validationSchema: Yup.object({
        wodeSetaId: Yup.string().required('*Required taskName.'),
        wodeEmpId: Yup.string().required('*Required employee.'),
        wodeStatus: Yup.string().required('*Required status.'),
        wodeFaciId: Yup.string().required('*Required facility.'),
    }),
    onSubmit: async (values) => {
      dispatch(EditWodeRequest(values));
      props.setRefresh(true);
      setShowModal(false);
      toast.current?.show({ severity: 'success', summary: 'Success', life: 3000, detail: 'Task updated successfully.' });
    },   
  });

  const hideDialog = () => {
    props.setRefresh(true);
    setSubmitted(false);
    setShowModal(false);
  };

  const editButton = () => {
    setId(props.id);
    setShowModal(true);
  };

  const modal = () => {
    props.setRefresh(true);
    setShowModal(false);
  };

  //get faci
  const [facilities, setFacis] = useState<any[]>([]);
  const [faci, setFaci] = useState<any[]>([]);

  useEffect(() => {
    const getFaciData = async () => {
      try {
        const result: any = await Facilities.findData();
        setFacis(result);
      } catch (error) {
        console.error(error);
      }
    };
    getFaciData();
  }, []);
  console.log(facilities);
// console.log(faci);
  
  const selectedFacisTemplate = (option: any, props: any) => {
    if (option) {
      return (
        <div className="flex align-items-center">
          <div key={option.faciId}>{option.faciName}</div>
        </div>
      );
    }
    return <span>{props.placeholder}</span>;
  };
  //

  //get taskname
  const [selectedTasks, setSelectedTasks] = useState<typeof serviceTasks | null>(null);
 
  const selectedTaskTemplate = (option: typeof serviceTasks, props: any) => {
    if (option) {
        return (
            <div className="flex align-items-center">
                <div key={option.wodeSeta?.setaId}>{option.wodeSeta?.setaName}</div> 
            </div>
        );
    }
    return <span>{props.placeholder}</span>;
  };
  //

  //get employee
  const [selectedEmps, setSelectedEmps] = useState<typeof emps | null>(null);
 
  const selectedEmpTemplate = (option: typeof emps, props: any) => {
    if (option) {
        return (
            <div className="flex align-items-center">
                <div key={option.wodeEmp?.empId}>{option.wodeEmp?.empUser?.userFullName}</div> 
            </div>
        );
    }
    return <span>{props.placeholder}</span>;
  };
  //

  return (
    <>
            <Button icon="pi pi-pencil" severity="secondary" label="Edit" className="" style={{ paddingRight: '54px' }} onClick={editButton} text />
            <Dialog header="Edit" visible={showModal} modal className="p-dialog" style={{ width: '50%', height: '75vh' }} onHide={() => setShowModal(false)}> 
                <FormikProvider value={formik}>
                <form onSubmit={formik.handleSubmit}>
                <div className="col-12">
                                <div className="card">
                                <div className="p-fluid formgrid grid">
                          <div className="field col-12 md:col-4">
                          <label htmlFor="taskName" className="mr-2">Task Name</label>
                              <Dropdown
                                inputId="taskName"
                                name="wodeSetaId"
                                value={formik.values.wodeSetaId}
                                
                                //simpan data ke wodeTaskName sekaligus
                                onChange={(e: DropdownChangeEvent) => {
                                  const selectedValue = e.value;
                                  const selectedTask = serviceTasks.find((task: any) => task.setaId === selectedValue);
                                  const selectedTaskName = selectedTask ? selectedTask.setaName : "";
                                  formik.setFieldValue("wodeSetaId", selectedValue);
                                  formik.setFieldValue("wodeTaskName", selectedTaskName);
                                  setSelectedTasks(selectedValue);
                                }}
                                options={serviceTasks.map((task: any) => ({
                                  label: task.setaName,
                                  value: task.setaId
                                }))}
                                optionLabel="label"
                                placeholder="Select a Task"
                                filter showClear
                                emptyMessage="No Task found."
                              />
                              {formik.touched.wodeSetaId && formik.errors.wodeSetaId && (
                                  <small className="p-invalid text-red-500">{formik.errors.wodeSetaId.toString()}</small>
                                )}
                          </div>

                            <div className="field col-12 md:col-4">
                                <label htmlFor="wodeEmpId" className="mr-2">Assign To</label> 
                                <Dropdown
                                inputId="wodeEmpId"
                                name="wodeEmpId"
                                value={formik.values.wodeEmpId}
                                onChange={(e: DropdownChangeEvent) => {
                                  formik.setFieldValue("wodeEmpId", e.value); 
                                  setSelectedTasks(e.value); 
                                }}
                                options={emps.map((emp: any) => ({
                                  label: emp.empUser?.userFullName,
                                  value: emp.empId
                                }))}
                                optionLabel="label"
                                placeholder="Select an Employee"
                                filter showClear
                                emptyMessage="No Employee found."
                              />
                              {formik.touched.wodeEmpId && formik.errors.wodeEmpId && (
                                  <small className="p-invalid text-red-500">{formik.errors.wodeEmpId.toString()}</small>
                                )}
                              </div>

                              <div className="field col-12 md:col-4">
                                <label htmlFor="wodeStatus" className="mr-2">Status</label> 
                                <Dropdown
                                inputId="wodeStatus"
                                name="wodeStatus"
                                value={formik.values.wodeStatus}
                                onChange={(e: DropdownChangeEvent) => {
                                  formik.setFieldValue("wodeStatus", e.value); 
                                }}
                                options={[ { label: 'INPROGRESS', value: 'INPROGRESS' },
                                { label: 'COMPLETED', value: 'COMPLETED' },
                                { label: 'CANCELLED', value: 'CANCELLED' },
                              ]}
                                optionLabel="label"
                                placeholder="Select Status"
                              />
                              {formik.touched.wodeStatus && formik.errors.wodeStatus && (
                                  <small className="p-invalid text-red-500">{formik.errors.wodeStatus.toString()}</small>
                                )}
                              </div>

                              <div className="field col-8">
                                <label htmlFor="wodeNotes" className="mr-2">Notes</label> 
                                <InputTextarea 
                                autoResize rows={3} cols={20} 
                                value={formik.values.wodeNotes} 
                                onChange={(e) => formik.setFieldValue("wodeNotes", e.target.value)} 
                                />
                             </div>

                             <div className="field col-4">
                                <label htmlFor="wodeFaciId" className="mr-2">Facilities</label> 
                                <Dropdown
                                inputId="wodeFaciId"
                                name="wodeFaciId"
                                value={formik.values.wodeFaciId}                                                                                                 
                                onChange={(e: DropdownChangeEvent) => {
                                  formik.setFieldValue("wodeFaciId", e.value); 
                                }}  
                                options={facilities.map((faci: any) => ({
                                  label: faci.faciName,
                                  value: faci.faciId,
                                }))}
                                optionLabel="label"
                                filter showClear
                                emptyMessage="No Facility found."
                                placeholder="Select a Facility"
                              />
                              {formik.touched.wodeFaciId && formik.errors.wodeFaciId && (
                                  <small className="p-invalid text-red-500">{formik.errors.wodeFaciId.toString()}</small>
                                )}
                              </div>

                             </div></div></div>

                      <div className="flex justify-end py-6 -mb-5">
          <React.Fragment>
            <Button type="button" label="Cancel" severity="danger" icon="pi pi-times" raised className="mr-2" outlined onClick={hideDialog} />
            <Button label="Save" icon="pi pi-check" />
          </React.Fragment>
          </div>
        </form>
        </FormikProvider>
      </Dialog>

      <Toast ref={toast} position="top-right" />
      </>
  );
 }
