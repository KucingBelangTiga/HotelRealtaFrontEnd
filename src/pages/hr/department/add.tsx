import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux"; 
import { useFormik, FormikProvider } from "formik";
import * as Yup from 'yup';
import classNames from 'classnames';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';
import { Toast } from 'primereact/toast'; 
import { AddDeptRequest } from "../../../redux/action/hr/departmentAction";
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primereact/resources/primereact.css';
import 'primeicons/primeicons.css';

export default function Add(props: any) {
  const [showModal, setShowModal] = useState(false);
  const [submitted, setSubmitted] = useState<boolean>(false);
  const dispatch = useDispatch();
  const toast = useRef<any>(null);

  const formik = useFormik({
    initialValues: {
      deptName: "",
    },
    validationSchema: Yup.object({
        deptName: Yup.string().required('*Required deptName.'),
      }), 
    onSubmit: async (values) => {
      dispatch(AddDeptRequest(values));
      setShowModal(false);
      props.setRefresh(true);
      toast.current.show({ severity: 'success', summary: 'Success', life: 3000, detail: 'Department created successfully.' });
    },
  });

  const hideDialog = () => {
    props.setRefresh(true);
    setSubmitted(false);
    setShowModal(false);
  };

  const saveDept = () => {
    setSubmitted(true);
    setShowModal(false)
  }

  return (
    <>
      <Button icon="pi pi-plus" label="Add" className="p-button-secondary" onClick={() => setShowModal(true)} text />
      <Dialog header="Add" visible={showModal} modal className="p-dialog" onHide={() => setShowModal(false)}> 
      <FormikProvider value={formik}>
        <form onSubmit={formik.handleSubmit}>
            <div className="p-fluid">
              <div className="flex items-center">
                <label htmlFor="deptName" className="mr-2">Department Name</label>
                <InputText
                  id="deptName"
                  name="deptName"
                  value={formik.values.deptName}
                  onChange={formik.handleChange}
                  autoFocus
                  /> 
              </div>
                   {formik.touched.deptName && formik.errors.deptName && (
                  <small className="p-invalid text-red-500">{formik.errors.deptName}</small>
                )}
            </div> 
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
