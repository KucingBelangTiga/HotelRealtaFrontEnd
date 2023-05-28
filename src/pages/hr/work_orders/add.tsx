import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useFormik, FormikProvider } from "formik";
import * as Yup from 'yup';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';
import { Calendar, CalendarChangeEvent } from 'primereact/calendar';
import { Dropdown, DropdownChangeEvent } from 'primereact/dropdown';
import { Toast } from 'primereact/toast'; 
import { AddWoroRequest } from "../../../redux/action/hr/work_ordersAction";
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primereact/resources/primereact.css';
import 'primeicons/primeicons.css';

export default function Add(props: any) {
  const [showModal, setShowModal] = useState(false);
  const [submitted, setSubmitted] = useState<boolean>(false);
  const dispatch = useDispatch();
  const toast = useRef<any>(null);
  const [date, setDate] = useState<string | Date | Date[] | null>(null);

  const formik = useFormik({
    initialValues: {
      woroStartDate: "",
      woroStatus: "",
    //   woroUserId: "", //user yang login saat ini. hanya get data dari user session
    },
    validationSchema: Yup.object({
        woroStartDate: Yup.string().required('*Required startDate.'),
        woroStatus: Yup.string().required('*Required status.'),
      }), 
    onSubmit: async (values) => {
      dispatch(AddWoroRequest(values));
      setShowModal(false);
      props.setRefresh(true);
      toast.current.show({ severity: 'success', summary: 'Success', life: 3000, detail: 'Work Order created successfully.' });
    },
  });

  const hideDialog = () => {
    props.setRefresh(true);
    setSubmitted(false);
    setShowModal(false);
  };

  const saveWoro = () => {
    setSubmitted(true);
    setShowModal(false)
  }

  return (
    <>
      <Button icon="pi pi-plus" label="Add" className="p-button-secondary" onClick={() => setShowModal(true)} text />
      <Dialog header="Add" visible={showModal} modal className="p-dialog" onHide={() => setShowModal(false)}> 
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
                  value={formik.values.woroStartDate}
                  onChange={(e : CalendarChangeEvent) => {
                    setDate((prevState) => e.value || prevState);
                    formik.setFieldValue("woroStartDate", e.value);
                  }} 
                  placeholder="mm/dd/yyyy"
                  showButtonBar showIcon
                  /> 
                  {formik.touched.woroStartDate && formik.errors.woroStartDate && (
                 <small className="p-invalid text-red-500">{formik.errors.woroStartDate}</small>
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
                 <small className="p-invalid text-red-500">{formik.errors.woroStatus}</small>
               )}
              </div>

              {/* hanya get user dari profilnya/session pada value*/}
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
