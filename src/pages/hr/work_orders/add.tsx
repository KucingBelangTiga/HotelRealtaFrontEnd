import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useFormik, FormikProvider } from "formik";
import * as Yup from 'yup';
import classStartDates from 'classnames';
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
    },
    validationSchema: Yup.object({
        woroStartDate: Yup.string().required('*Required startDate.'),
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
                            <div className="col-12">
                <label htmlFor="woroStartDate" className="mr-2">Start Date</label>
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
                  /> <br />
                  {formik.touched.woroStartDate && formik.errors.woroStartDate && (
                 <small className="p-invalid text-red-500">{formik.errors.woroStartDate}</small>
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
