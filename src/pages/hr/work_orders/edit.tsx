/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  FindWoroRequest,
  EditWoroRequest,
} from "../../../redux/action/hr/work_ordersAction";
import { useFormik, FormikProvider } from "formik";
import * as Yup from 'yup';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';
import { Calendar, CalendarChangeEvent } from 'primereact/calendar';
import { Dropdown, DropdownChangeEvent } from 'primereact/dropdown';
import { Toast } from 'primereact/toast';
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';

export default function Edit(props: any) {
  const [refresh, setRefresh] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false); 
  const [id, setId] = useState<number>(props.id);
  const dispatch = useDispatch();
  const [submitted, setSubmitted] = useState<boolean>(false);
  const toast = useRef<any>(null);
  const { woro } = useSelector((state: any) => state.woroState);
  const [date, setDate] = useState<string | Date | Date[] | null>(null);
  const [time, setTime] = useState<string | Date | Date[] | null>(null);

  useEffect(() => {
    dispatch(FindWoroRequest(id));
  }, [dispatch, props.id, showModal]);
  
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      woroId: props.id,
      woroStartDate: woro.woroStartDate,
      woroStatus: woro.woroStatus,
    },
    validationSchema: Yup.object({
      woroStartDate: Yup.string().required('*Required startDate.'),
      woroStatus: Yup.string().required('*Required status.'),
    }),
    onSubmit: async (values) => {
      dispatch(EditWoroRequest(values));
      props.setRefresh(true);
      setShowModal(false);
      toast.current.show({ severity: 'success', summary: 'Success', life: 3000, detail: 'Work Order updated successfully.' });
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

  const handleReset = () => {
    formik.resetForm(); 
  };

  return ( 
    <>
            <Button severity="secondary" label="Edit" className="" style={{ paddingRight: '165px' }} onClick={editButton} text />
            <Dialog header="Edit" visible={showModal} modal className="p-dialog" onHide={() => setShowModal(false)}> 
                <FormikProvider value={formik}>
                <form onSubmit={formik.handleSubmit}>
                
                <div className="grid">
                        <div className="col-12">
                        <div className="grid justify-center">
                            <div className="col-4">
                <label htmlFor="woroStartDate" className="mr-2">startDate</label>
                <Calendar
                  className="w-full md:w-12rem"
                  id="woroStartDate"
                  name="woroStartDate"
                  value={formik.values.woroStartDate ? new Date(formik.values.woroStartDate) : null} //pada db terbaca string, tapi di form harus terbaca sebagai date
                  onChange={(e : CalendarChangeEvent) => {
                    setDate((prevState) => e.value || prevState);
                    formik.setFieldValue("woroStartDate", e.value);
                  }} 
                  placeholder="mm/dd/yyyy"
                  showButtonBar showIcon
                  /> 
                  {formik.touched.woroStartDate && formik.errors.woroStartDate && (
                 <small className="p-invalid text-red-500">{formik.errors.woroStartDate.toString()}</small>
               )}
              </div>

              <div className="col-4">
                <label htmlFor="woroStatus" className="mr-5">status</label>
                <Dropdown
                  className="w-full md:w-12rem"
                  inputId="woroStatus"
                  name="woroStatus"
                  value={formik.values.woroStatus}
                  onChange={(e: DropdownChangeEvent) => {
                    formik.setFieldValue("woroStatus", e.value); 
                  }}
                  options={[ { label: 'OPEN', value: 'OPEN' },
                             { label: 'CLOSED', value: 'CLOSED' },
                             { label: 'CANCELLED', value: 'CANCELED' },
                            ]}
                                optionLabel="label"
                                placeholder="Select Status"
                  autoFocus
                  /> 
                  {formik.touched.woroStatus && formik.errors.woroStatus && (
                 <small className="p-invalid text-red-500">{formik.errors.woroStatus.toString()}</small>
               )}
              </div>

                    {/* hanya get user dari profilnya/session */}
              {/* <div className="col-4">
                                <label htmlFor="woroUserId" className="mr-2">createdBy</label>
                                <InputText
                                  className="w-full md:w-12rem"
                                  id="woroUserId"
                                  name="woroUserId"
                                  value={formik.values.woroUserId}
                                  autoFocus readOnly
                                  />
                              </div> */}

            </div> </div></div>

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
