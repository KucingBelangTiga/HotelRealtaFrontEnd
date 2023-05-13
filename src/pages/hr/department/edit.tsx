import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  FindDeptRequest,
  EditDeptRequest,
} from "../../../redux/action/hr/departmentAction";
import { useFormik, FormikProvider } from "formik";
import * as Yup from 'yup';
import { Toast } from 'primereact/toast'; 
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primereact/resources/primereact.css';
import 'primeicons/primeicons.css';

export default function Edit(props: any) {
  const [showModal, setShowModal] = useState(false); 
  const [id, setId] = useState<number>(props.id);
  const dispatch = useDispatch();
  const { department } = useSelector((state: any) => state.deptState);
  const [submitted, setSubmitted] = useState<boolean>(false);
  const toast = useRef<any>(null);

  useEffect(() => {
    dispatch(FindDeptRequest(id));
  }, [dispatch, props.id, showModal]);

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      deptId: props.id,
      deptName: department.deptName,
    },
    validationSchema: Yup.object({
      deptName: Yup.string().required('*Required deptName.'),
    }),
    onSubmit: async (values) => {
      dispatch(EditDeptRequest(values));
      props.setRefresh(true);
      setShowModal(false);
      toast.current.show({ severity: 'success', summary: 'Success', life: 3000, detail: 'Department updated successfully.' });
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

  return (
    <>
            <Button icon="pi pi-pencil" severity="secondary" label="Edit" className="" style={{ paddingRight: '54px' }} onClick={editButton} text />
            <Dialog header="Edit" visible={showModal} modal className="p-dialog" onHide={() => setShowModal(false)}> 
                <FormikProvider value={formik}>
                <form onSubmit={formik.handleSubmit}>
                <div className="p-fluid">
                  <div className="flex items-center">
                    <label htmlFor="deptName" className="mr-2">Department Name</label>
                          <InputText
                            name="deptName"
                            id="deptName"
                            value={formik.values.deptName}
                            onChange={formik.handleChange}
                            autoFocus
                            />
                        </div>
                        {formik.touched.deptName && formik.errors.deptName ? (
                        <div className="text-red-500">{formik.errors.deptName.toString()}</div>
                        ) : null}
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
