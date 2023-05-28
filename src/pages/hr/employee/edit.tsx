/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  FindEmpRequest,
  EditEmpRequest,
} from "../../../redux/action/hr/employeeAction";
import { GetJoroRequest } from "../../../redux/action/hr/job_roleAction";
import Users from "../../../api/users/users";
import { useFormik, FormikProvider } from "formik";
import * as Yup from 'yup';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { Calendar, CalendarChangeEvent } from 'primereact/calendar';
import { Dropdown, DropdownChangeEvent } from 'primereact/dropdown';
import { Dialog } from 'primereact/dialog';
import { InputNumber, InputNumberValueChangeEvent, InputNumberChangeEvent } from 'primereact/inputnumber';
import { Fieldset } from 'primereact/fieldset';
import { Toast } from 'primereact/toast';
import { ScrollTop } from 'primereact/scrolltop';
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
  const { emp } = useSelector((state: any) => state.empState);
  const { joros } = useSelector((state: any) => state.joroState);
  const [submitted, setSubmitted] = useState<boolean>(false);
  const toast = useRef<any>(null);
  const [date, setDate] = useState<string | Date | Date[] | null>(null);
  const [inputNumberValue, setInputNumberValue] = useState<number | null>(null);
  const [previewImg, setPreviewImg] = useState<any>()
  const [upload, setUpload] = useState(false)

  useEffect(() => {
    dispatch(FindEmpRequest(id));
  }, [dispatch, props.id, showModal]);
 
  useEffect(() => {
    dispatch(GetJoroRequest());
    setRefresh(false);
    setLoading(true);
  }, [dispatch, refresh]);

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      empId: props.id,
      empNationalId: emp.empNationalId,
      empBirthDate: emp.empBirthDate,
      empMaritalStatus: emp.empMaritalStatus,
      empGender: emp.empGender,
      empHireDate: emp.empHireDate,
      empSalariedFlag: emp.empSalariedFlag,
      empVacationHours: emp.empVacationHours, 
      empSickleaveHourse: emp.empSickleaveHourse,
      empCurrentFlag: emp.empCurrentFlag,
      file: emp.file, 
      empEmpId: emp.empEmpId, 
      empJoroId: emp.empJoro?.joroId, 
      empUserId: emp.empUser?.userId, 
    },
    validationSchema: Yup.object({
      empNationalId: Yup.string().required('*Required empNationalId.'),
      empBirthDate: Yup.string().required('*Required BirthDate.'),
      empMaritalStatus: Yup.string().required('*Required MaritalStatus.'),
      empGender: Yup.string().required('*Required Gender.'),
      empHireDate: Yup.string().required('*Required HireDate.'),
      empSalariedFlag: Yup.string().required('*Required SalariedFlag.'),
      empCurrentFlag: Yup.string().required('*Required CurrentFlag.'),
      empJoroId: Yup.string().required('*Required JobRole.'),
      empUserId: Yup.string().required('*Required FullName.'),
    }),
    onSubmit: async (values) => {
      dispatch(EditEmpRequest(values));
      props.setRefresh(true);
      setShowModal(false);
      toast.current.show({ severity: 'success', summary: 'Success', life: 3000, detail: 'Employee updated successfully.' });
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

  // //upload photo
  const uploadConfig = (name: any) => (event: any) => {
    let reader = new FileReader()
    const file = event.target.files[0]
    console.log(event.target.files);
    reader.onload = () => {
        formik.setFieldValue("file", file)
        setPreviewImg(reader.result)
    }
    reader.readAsDataURL(file)
    setUpload(true)
}

  const onClear = (event: any) => {
    event.preventDefault()
    setPreviewImg(null)
    setUpload(false)
}
//

  //get user
  const [users, setUsers] = useState<any[]>([]);

  useEffect(() => {
    const getUserData = async () => {
      try {
        const result: any = await Users.GetData();
        setUsers(result);
      } catch (error) {
        console.error(error);
      }
    };
    getUserData();
  }, []);
  console.log(users);
  //

  return (
    <>
            <Button severity="secondary" label="Edit" className="" style={{ paddingRight: '163px' }} onClick={editButton} text />
            <Dialog header="Edit" visible={showModal} modal className="p-dialog-fullscreen p-dialog-scrollable" style={{ width: '85%', height: '100vh' }} onHide={() => setShowModal(false)}> 
                <FormikProvider value={formik}>
                <form onSubmit={formik.handleSubmit}>
            <Fieldset legend="General" >
                
                <div className="grid">
                    <div className="col-8">
                        <div className="grid">
                            <div className="col-6">
                                <label htmlFor="empNationalId" style={{ marginRight: '2.6rem' }}>National Id</label> {/* hapus className="mr-5" : margin-right = 5 */}
                                <InputText
                                  className="w-full md:w-12rem"
                                  id="empNationalId"
                                  name="empNationalId"
                                  value={formik.values.empNationalId}
                                  onChange={formik.handleChange}
                                  autoFocus
                                  placeholder="National Id"
                                  />
                                   {formik.touched.empNationalId && formik.errors.empNationalId && (
                                  <small className="p-invalid text-red-500">{formik.errors.empNationalId.toString()}</small>
                                )}
                              </div>
                
                              <div className="col-6">
                            <label htmlFor="FullName" style={{ marginRight: '3.2rem' }}>Full Name</label>
                              <Dropdown
                                className="w-full md:w-12rem"
                                inputId="FullName"
                                name="empUser.userFullName"
                                value={formik.values.empUserId}
                                onChange={(e: DropdownChangeEvent) => {
                                  formik.setFieldValue("empUserId", e.value); 
                                }}
                                options={users.map((user: any, index: number) => ({
                                  key: index,
                                  label: user.userFullName,
                                  value: user.userId
                                }))}
                                optionLabel="label"
                                placeholder="Select a User"
                                filter showClear
                                emptyMessage="No users found."
                              />
                              {formik.touched.empUserId && formik.errors.empUserId && (
                                  <small className="p-invalid text-red-500">{formik.errors.empUserId.toString()}</small>
                                )}
                          </div>
                
                          <div className="col-6">
                                <label htmlFor="empBirthDate" style={{ marginRight: '3.3rem' }}>Birth Date</label> 
                                <Calendar 
                                className="w-full md:w-12rem"
                                id="empBirthDate"
                                name="empBirthDate"
                                value={formik.values.empBirthDate ? new Date(formik.values.empBirthDate) : null}
                                onChange={(e : CalendarChangeEvent) => {
                                  setDate((prevState) => e.value || prevState);
                                  formik.setFieldValue("empBirthDate", e.value);
                                }} 
                                placeholder="mm/dd/yyyy"
                                showButtonBar showIcon />
                                   {formik.touched.empBirthDate && formik.errors.empBirthDate && (
                                  <small className="p-invalid text-red-500">{formik.errors.empBirthDate.toString()}</small>
                                )}
                              </div>
                                    
                              <div className="col-6">
                                <label htmlFor="empHireDate" style={{ marginRight: '3.5rem' }}>Hire Date</label> 
                                <Calendar 
                                className="w-full md:w-12rem"
                                id="empHireDate"
                                name="empHireDate"
                                value={formik.values.empHireDate ? new Date(formik.values.empHireDate) : null}
                                onChange={(e : CalendarChangeEvent) => {
                                  setDate((prevState) => e.value || prevState);
                                  formik.setFieldValue("empHireDate", e.value);
                                }} 
                                placeholder="mm/dd/yyyy"
                                showButtonBar showIcon />
                                   {formik.touched.empHireDate && formik.errors.empHireDate && (
                                  <small className="p-invalid text-red-500">{formik.errors.empHireDate.toString()}</small>
                                )}
                              </div>
                
                              <div className="col-6">
                              <label htmlFor="MarStatus" style={{ marginRight: '1.65rem' }}>Marital Status</label>
                              <Dropdown
                                className="w-full md:w-12rem"
                                inputId="MarStatus"
                                name="empMaritalStatus"
                                value={formik.values.empMaritalStatus}
                                onChange={(e: DropdownChangeEvent) => {
                                  formik.setFieldValue("empMaritalStatus", e.value); 
                                }}
                                options={[ { label: 'Married', value: 'M' },
                                { label: 'Single', value: 'S' },]}
                                optionLabel="label"
                                placeholder="Select Marital Status"
                              />
                              {formik.touched.empMaritalStatus && formik.errors.empMaritalStatus && (
                                  <small className="p-invalid text-red-500">{formik.errors.empMaritalStatus.toString()}</small>
                                )}
                          </div>
                
                          <div className="col-6">
                              <label htmlFor="empGender" style={{ marginRight: '4.4rem' }}>Gender</label>
                              <Dropdown
                                className="w-full md:w-12rem"
                                inputId="empGender"
                                name="empGender"
                                value={formik.values.empGender}
                                onChange={(e: DropdownChangeEvent) => {
                                  formik.setFieldValue("empGender", e.value); 
                                }}
                                options={[ { label: 'Male', value: 'M' },
                                { label: 'Female', value: 'F' },]}
                                optionLabel="label"
                                placeholder="Select Gender"
                              />
                              {formik.touched.empGender && formik.errors.empGender && (
                                  <small className="p-invalid text-red-500">{formik.errors.empGender.toString()}</small>
                                )}
                          </div>
                
                          <div className="col-6">
                              <label htmlFor="empSalariedFlag" style={{ marginRight: '2.1rem' }}>Salaried Flag</label>
                              <Dropdown
                                className="w-full md:w-12rem"
                                inputId="empSalariedFlag"
                                name="empSalariedFlag"
                                value={formik.values.empSalariedFlag}
                                onChange={(e: DropdownChangeEvent) => {
                                  formik.setFieldValue("empSalariedFlag", e.value); 
                                }}
                                options={[ { label: 'Hourly', value: '0' }, 
                                { label: 'Monthly', value: '1' },]}
                                optionLabel="label"
                                placeholder="Select Salaried Flag"
                              />
                              {formik.touched.empSalariedFlag && formik.errors.empSalariedFlag && (
                                  <small className="p-invalid text-red-500">{formik.errors.empSalariedFlag.toString()}</small>
                                )}
                          </div>
                
                          <div className="col-6">
                              <label htmlFor="empCurrentFlag" style={{ marginRight: '2.2rem' }}>Current Flag</label>
                              <Dropdown
                                className="w-full md:w-12rem"
                                inputId="empCurrentFlag"
                                name="empCurrentFlag"
                                value={formik.values.empCurrentFlag}
                                onChange={(e: DropdownChangeEvent) => {
                                  formik.setFieldValue("empCurrentFlag", e.value); 
                                }}
                                options={[ { label: 'Active', value: 1 },
                                { label: 'Inactive', value: 0 },]}
                                optionLabel="label"
                                placeholder="Select Current Flag"
                              />
                              {formik.touched.empCurrentFlag && formik.errors.empCurrentFlag && (
                                  <small className="p-invalid text-red-500">{formik.errors.empCurrentFlag.toString()}</small>
                                )}
                          </div>
                              
                          <div className="col-6">
                              <label htmlFor="empVacationHours" style={{ marginRight: '1rem' }}>Vacation Hours</label>
                              <InputNumber 
                              inputClassName="w-4rem"
                              inputId="empVacationHours"
                              name="empVacationHours"
                              value={formik.values.empVacationHours ? parseInt(formik.values.empVacationHours) : null}
                              onValueChange={(e: InputNumberValueChangeEvent) => {
                                setInputNumberValue(e.value ?? null);
                                formik.setFieldValue("empVacationHours", e.value); 
                              }}
                              showButtons min={0}
                              mode="decimal" /> 
                          </div>
                
                          <div className="col-6">
                              <label htmlFor="empSickleaveHourse" className="mr-2">SickLeave Hours</label>
                              <InputNumber 
                              inputClassName="w-4rem"
                              inputId="empSickleaveHourse"
                              name="empSickleaveHourse"
                              value={formik.values.empSickleaveHourse ? parseInt(formik.values.empSickleaveHourse) : null}
                              onValueChange={(e: InputNumberValueChangeEvent) => {
                                setInputNumberValue(e.value ?? null);
                                formik.setFieldValue("empSickleaveHourse", e.value); 
                              }}
                              showButtons min={0}
                              mode="decimal" /> 
                          </div>
                
                          <div className="col-6">
                          <label htmlFor="JobRole" style={{ marginRight: '4rem' }}>Job Role</label>
                              <Dropdown
                                className="w-full md:w-12rem"
                                inputId="JobRole"
                                name="empJoro.joroName"
                                value={formik.values.empJoroId} 
                                onChange={(e: DropdownChangeEvent) => {
                                  formik.setFieldValue("empJoroId", e.value); 
                                }}
                                options={joros.map((joro: any) => ({
                                  label: joro.joroName,
                                  value: joro.joroId
                                }))}
                                optionLabel="label"
                                placeholder="Select a Job Role"
                                filter showClear
                                emptyMessage="No Job Role found."
                              />
                              {formik.touched.empJoroId && formik.errors.empJoroId && (
                                  <small className="p-invalid text-red-500">{formik.errors.empJoroId.toString()}</small>
                                )}
                          </div>
                          
                          </div>
                    </div>
                
                    <div className="col-4">
                      <div className="upload-form">
                      <label htmlFor="empPhoto">Photo</label>
                        <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                          {
                            upload === false ?
                                <>
                                    <span>Empty file</span></> :
                                <>
                                    <div>
                                        <img src={previewImg} alt='img' className="max-w-xs" width={100} />
                                    </div>
                                    <div>
                                        <button className="text-red-700 hover:text-white text-xs border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-small rounded-md text-sm px-3 py-2.5 text-center mr-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900" onClick={onClear}>Remove</button>
                                    </div>
                                </>
                        }
                    </div>
                    <div>
                        <input className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" aria-describedby="user_avatar_help" id="empPhoto" name="empPhoto" type="file" onChange={uploadConfig("file")} />
                        <div className="mt-1 text-sm text-gray-500 dark:text-gray-300" id="user_avatar_help" > </div>
                    </div>

                     </div>

                          </div>
                          </div>
                
                          </Fieldset>

          <div className="flex justify-end py-6">
          <React.Fragment>
            <Button type="button" icon="pi pi-refresh" rounded outlined tooltip="Reset Form" tooltipOptions={{ position: 'left', showDelay: 300 }} className="mr-7" severity="warning" aria-label="Reset Form" label="Reset" onClick={handleReset} />
            <Button type="button" label="Cancel" severity="danger" icon="pi pi-times" raised className="mr-2" outlined onClick={hideDialog} />
            <Button label="Save" icon="pi pi-check" />
          </React.Fragment>
          </div>
        </form>
        </FormikProvider>
        <ScrollTop target="parent" threshold={100} className="w-2rem h-2rem border-round bg-primary" icon="pi pi-arrow-up text-base" />
      </Dialog>

      <Toast ref={toast} position="top-right" />
      </>
  );
 }
