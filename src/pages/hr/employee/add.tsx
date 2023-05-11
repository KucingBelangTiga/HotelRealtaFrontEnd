import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetEmpRequest, FindEmpRequest, AddEmpRequest } from "../../../redux/action/hr/employeeAction";
import { AddJoroRequest } from "../../../redux/action/hr/job_roleAction";
import { AddEphiRequest } from "../../../redux/action/hr/employee_pay_historyAction";
import { AddEdhiRequest } from "../../../redux/action/hr/employee_department_historyAction";
import { AddDeptRequest } from "../../../redux/action/hr/departmentAction";
import { AddShiftRequest } from "../../../redux/action/hr/shiftAction";
import Employee from "../../../api/hr/employee";
import { useFormik, FormikProvider } from "formik";
import * as Yup from 'yup';
import classNames from 'classnames';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';
import { Calendar } from 'primereact/calendar';
import { Dropdown, DropdownChangeEvent } from 'primereact/dropdown';
import { Checkbox } from 'primereact/checkbox';
import { FileUpload } from 'primereact/fileupload';
import { Fieldset } from 'primereact/fieldset';
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primereact/resources/primereact.css';
import 'primeicons/primeicons.css';

export default function Add(props: any) {
  const dispatch = useDispatch();
  const [refresh, setRefresh] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [submitted, setSubmitted] = useState<boolean>(false);
  const { emps } = useSelector((state: any) => state.empState);

  useEffect(() => {
    dispatch(GetEmpRequest());
    setRefresh(false);
    setLoading(true);
  }, [dispatch, refresh]);

  const formik = useFormik({
    initialValues: {
      empUserId: ""
    },
    onSubmit: async (values) => {
      dispatch(AddEmpRequest(values));
      setShowModal(false);
      props.setRefresh(true);
    },
  });

  const hideDialog = () => {
    props.setRefresh(true);
    setSubmitted(false);
    setShowModal(false);
  };

  const saveEmp = () => {
    setSubmitted(true);
    setShowModal(false)
  }

  const [selectedEmps, setSelectedEmps] = useState<typeof emps | null>(null);

  const selectedEmpsTemplate = (option: typeof emps, props: any) => {
    if (option) {
        return (
            <div className="flex align-items-center">
                <div>{option.empUser?.userFullName}</div>
            </div>
        );
    }
    return <span>{props.placeholder}</span>;
};

  return (
    <>
      <Button icon="pi pi-plus" label="Add" className="p-button-secondary" onClick={() => setShowModal(true)} />
      <Dialog header="Add" visible={showModal} modal className="p-dialog-fullscreen p-dialog-scrollable" style={{ width: '100%', height: '100vh' }} onHide={() => setShowModal(false)}> 
      <FormikProvider value={formik}>
        <form onSubmit={formik.handleSubmit}>
          <Fieldset legend="General">
            <div className="p-fluid">
            <div className="p-field">
            <label htmlFor="FullName">FullName</label>
            <span className="p-float-label">
              <Dropdown
                className="w-full md:w-14rem"
                inputId="FullName"
                name="empUser.userFullName"
                value={formik.values.empUserId}
                onChange={formik.handleChange}
                options={emps.map((user: any) => ({
                  label: user.empUser?.userFullName,
                  value: user.empUser?.userId
                }))}
                optionLabel="empUser.userFullName"
                placeholder="Select a user."
                filter
                emptyMessage="No users found."
              />
              <label htmlFor="FullName">Select a user.</label>
            </span>
          </div>
          </div>
          </Fieldset>
          <div className="flex justify-end py-6">
          <React.Fragment>
            <Button type="button" label="Cancel" severity="danger" icon="pi pi-times" raised className="mr-2" outlined onClick={hideDialog} />
            <Button label="Save" icon="pi pi-check" />
          </React.Fragment>
          </div>
        </form>
        </FormikProvider>
      </Dialog>
    </>
  );
 }
