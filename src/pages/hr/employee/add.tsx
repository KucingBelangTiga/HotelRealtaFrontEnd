/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetEmpRequest, FindEmpRequest, AddEmpRequest } from "../../../redux/action/hr/employeeAction";
import { GetJoroRequest, AddJoroRequest } from "../../../redux/action/hr/job_roleAction";
import { GetEphiAllRequest, AddEphiRequest } from "../../../redux/action/hr/employee_pay_historyAction";
import { GetEdhiAllRequest, AddEdhiRequest } from "../../../redux/action/hr/employee_department_historyAction";
import { GetDeptRequest, AddDeptRequest } from "../../../redux/action/hr/departmentAction";
import { GetShiftRequest, AddShiftRequest } from "../../../redux/action/hr/shiftAction";
import Employee from "../../../api/hr/employee";
import Users from "../../../api/users/users";
import Shift from "../../../api/hr/shift";
import { useFormik, FormikProvider } from "formik";
import * as Yup from 'yup';
import classNames from 'classnames';
import { Calendar, CalendarChangeEvent } from 'primereact/calendar';
import { Dropdown, DropdownChangeEvent } from 'primereact/dropdown';
import { InputText } from 'primereact/inputtext';
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import { InputNumber, InputNumberValueChangeEvent, InputNumberChangeEvent } from 'primereact/inputnumber';
import { Checkbox } from 'primereact/checkbox';
import { FileUpload } from 'primereact/fileupload';
import { Fieldset } from 'primereact/fieldset';
import { Tooltip } from 'primereact/tooltip';
import { Tag } from 'primereact/tag';
import { ProgressBar } from 'primereact/progressbar';
import { Badge } from 'primereact/badge';
import { Toast } from 'primereact/toast';
import { ScrollTop } from 'primereact/scrolltop';
import { ScrollPanel } from 'primereact/scrollpanel';
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';

export default function Add(props: any) {
  const dispatch = useDispatch();
  const [refresh, setRefresh] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [submitted, setSubmitted] = useState<boolean>(false);
  const { emps } = useSelector((state: any) => state.empState);
  const { joros } = useSelector((state: any) => state.joroState);
  const { ephis } = useSelector((state: any) => state.ephiState);
  const { departments } = useSelector((state: any) => state.deptState);
  const { shifts } = useSelector((state: any) => state.shiftState);
  const { edhis } = useSelector((state: any) => state.edhiState);
  const toast = useRef<any>(null);
  const [totalSize, setTotalSize] = useState(0);
  const fileUploadRef = useRef(null);
  const [date, setDate] = useState<string | Date | Date[] | null>(null);
  const [time, setTime] = useState<string | Date | Date[] | null>(null);
  const [inputNumberValue, setInputNumberValue] = useState<number | null>(null);
  const [previewImg, setPreviewImg] = useState<any>()
  const [upload, setUpload] = useState(false)

  useEffect(() => {
    dispatch(GetEmpRequest());
    setRefresh(false);
    setLoading(true);
  }, [dispatch, refresh]); 
  console.log("emps:", emps);

  useEffect(() => {
    dispatch(GetJoroRequest());
    setRefresh(false);
    setLoading(true);
  }, [dispatch, refresh]);
  console.log("joros:", joros);

  useEffect(() => {
    dispatch(GetEphiAllRequest());
    setRefresh(false);
    setLoading(true);
  }, [dispatch, refresh]);
 
  useEffect(() => {
    dispatch(GetEdhiAllRequest());
    setRefresh(false);
    setLoading(true);
  }, [dispatch, refresh]);

  useEffect(() => {
    dispatch(GetDeptRequest());
    setRefresh(false);
    setLoading(true);
  }, [dispatch, refresh]);
  console.log("depts:", departments);

  useEffect(() => {
    dispatch(GetShiftRequest());
    setRefresh(false);
    setLoading(true);
  }, [dispatch, refresh]);
  console.log("shifts:", shifts);

  const formik = useFormik({
    initialValues: {
      empNationalId: "",
      empBirthDate: "",
      empMaritalStatus: "",
      empGender: "",
      empHireDate: "",
      empSalariedFlag: "",
      empVacationHours: "",
      empSickleaveHourse: "",
      empCurrentFlag: "",
      file: "", //empPhoto
      empEmpId: "", 
      empJoroId: "",
      empUserId: "", 
      ephiRateSalary: "",
      ephiPayFrequence: "",
      edhiStartDate: "",
      edhiEndDate: "",
      edhiDeptId: "",
      edhiShiftId: "",
    },
    validationSchema: Yup.object({
      empNationalId: Yup.string().required('*Required NationalId.'),
      empBirthDate: Yup.string().required('*Required BirthDate.'),
      empMaritalStatus: Yup.string().required('*Required MaritalStatus.'),
      empGender: Yup.string().required('*Required Gender.'),
      empHireDate: Yup.string().required('*Required HireDate.'),
      empSalariedFlag: Yup.string().required('*Required SalariedFlag.'),
      empCurrentFlag: Yup.string().required('*Required CurrentFlag.'),
      empJoroId: Yup.string().required('*Required JobRole.'),
      ephiRateSalary: Yup.string().required('*Required RateSalary.'),
      ephiPayFrequence: Yup.string().required('*Required PayFrequence.'),
    }),
    onSubmit: async (values) => {
      let payload = new FormData();
      payload.append('empNationalId', values.empNationalId)
      payload.append('empBirthDate', values.empBirthDate)
      payload.append('empMaritalStatus', values.empMaritalStatus)
      payload.append('empGender', values.empGender)
      payload.append('empHireDate', values.empHireDate)
      payload.append('empSalariedFlag', values.empSalariedFlag)
      payload.append('empVacationHours', values.empVacationHours)
      payload.append('empSickleaveHourse', values.empSickleaveHourse)
      payload.append('empCurrentFlag', values.empCurrentFlag)
      payload.append('file', values.file)
      payload.append('empEmpId', values.empEmpId)
      payload.append('empJoroId', values.empJoroId)
      payload.append('empUserId', values.empUserId)
      payload.append('ephiRateSalary', values.ephiRateSalary)
      payload.append('ephiPayFrequence', values.ephiPayFrequence)

      dispatch(AddEmpRequest(values));
      setShowModal(false);
      props.setRefresh(true);
      toast.current.show({ severity: 'success', summary: 'Success', life: 3000, detail: 'Employee created successfully.' });
    },
  });

  //photo berhasil
  const uploadConfig = (name: any) => (event: any) => {
    let reader = new FileReader()
    const file = event.target.files[0]
    console.log(event.target.files);
    reader.onload = () => {
        formik.setFieldValue('file', file)
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

  const hideDialog = () => {
    props.setRefresh(true);
    setSubmitted(false);
    setShowModal(false);
  };

  const saveEmp = () => {
    setSubmitted(true);
    setShowModal(false)
  }

  const handleReset = () => {
    formik.resetForm(); 
  };

 //get userfullname
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
 
 const selectedUsersTemplate = (option: any, props: any) => {
   if (option) {
     return (
       <div className="flex align-items-center">
         <div key={option.userId}>{option.userFullName}</div>
       </div>
     );
   }
   return <span>{props.placeholder}</span>;
 };
  
  //get joroname
  const [selectedJoros, setSelectedJoros] = useState<typeof joros | null>(null);
 
  const selectedJoroTemplate = (option: typeof joros, props: any) => {
    if (option) {
        return (
            <div className="flex align-items-center">
                <div key={option.empJoro?.joroId}>{option.empJoro?.joroName}</div> 
            </div>
        );
    }
    return <span>{props.placeholder}</span>;
  };
  //

  //get dept
  const [selectedDepts, setSelectedDepts] = useState<typeof departments | null>(null);

  const selectedDeptTemplate = (option: typeof departments, props: any) => {
    if (option) {
        return (
            <div className="flex align-items-center">
                <div key={option.edhiDept?.deptId}>{option.edhiDept?.deptName}</div>
            </div>
        );
    }
    return <span>{props.placeholder}</span>;
  };
  //

  //get shift
  const [selectedShifts, setSelectedShifts] = useState<typeof shifts | null>(null);

  const selectedShiftTemplate = (option: typeof shifts, props: any) => {
    if (option) {
        return (
            <div className="flex align-items-center">
                <div key={option.edhiShift?.shiftId}>{option.edhiShift?.shiftName}</div>
            </div>
        );
    }
    return <span>{props.placeholder}</span>;
  };

  //get shifttime
  const [shiftID, setShiftID] = useState(0);

  const [shift, setShift] = useState({
    shiftId: 0,
    shiftStartTime: "00:00",
    shiftEndTime: "00:00",
  });

  const handleChangeShift = (e: DropdownChangeEvent) => {
    const selectedShiftId = e.value;
    const selectedShift = shifts.find((shift: any) => shift.shiftId === selectedShiftId);
    if (selectedShift) {
      setShift({
        shiftId: selectedShift.shiftId,
        shiftStartTime: selectedShift.shiftStartTime,
        shiftEndTime: selectedShift.shiftEndTime,
      });
      formik.setFieldValue("edhiShiftId", selectedShiftId);
    } else {
      setShift({
        shiftId: 0,
        shiftStartTime: "00:00",
        shiftEndTime: "00:00",
      });
      formik.setFieldValue("edhiShiftId", null);
    }
  };  
  //
  //

  return (
    <>
      <Button icon="pi pi-plus" label="Add" className="p-button-secondary" onClick={() => setShowModal(true)} text />
      {/* modal biasa: className = "p-fluid" */}
      <Dialog header="Add" visible={showModal} modal className="p-dialog-fullscreen p-dialog-scrollable" style={{ width: '85%', height: '100vh' }} onHide={() => setShowModal(false)}> 
      <FormikProvider value={formik}>
        <form onSubmit={formik.handleSubmit}>
        <Fieldset legend="General" toggleable>
                
                <div className="grid">
                    <div className="col-8">
                        <div className="grid">
                            <div className="col-6">{/* tambah p-fluid: label di atas form */}
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
                                  <small className="p-invalid text-red-500">{formik.errors.empNationalId}</small>
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
                          </div>
                
                          <div className="col-6">
                                <label htmlFor="empBirthDate" style={{ marginRight: '3.3rem' }}>Birth Date</label> 
                                <Calendar 
                                className="w-full md:w-12rem"
                                id="empBirthDate"
                                name="empBirthDate"
                                value={formik.values.empBirthDate}
                                onChange={(e : CalendarChangeEvent) => {
                                  setDate((prevState) => e.value || prevState);
                                  formik.setFieldValue("empBirthDate", e.value);
                                }} 
                                placeholder="mm/dd/yyyy"
                                showButtonBar showIcon />
                                   {formik.touched.empBirthDate && formik.errors.empBirthDate && (
                                  <small className="p-invalid text-red-500">{formik.errors.empBirthDate}</small>
                                )}
                              </div>
                                    
                              <div className="col-6">
                                <label htmlFor="empHireDate" style={{ marginRight: '3.5rem' }}>Hire Date</label> 
                                <Calendar 
                                className="w-full md:w-12rem"
                                id="empHireDate"
                                name="empHireDate"
                                value={formik.values.empHireDate}
                                onChange={(e : CalendarChangeEvent) => {
                                  setDate((prevState) => e.value || prevState);
                                  formik.setFieldValue("empHireDate", e.value);
                                }} 
                                placeholder="mm/dd/yyyy"
                                showButtonBar showIcon />
                                   {formik.touched.empHireDate && formik.errors.empHireDate && (
                                  <small className="p-invalid text-red-500">{formik.errors.empHireDate}</small>
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
                                  <small className="p-invalid text-red-500">{formik.errors.empMaritalStatus}</small>
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
                                  <small className="p-invalid text-red-500">{formik.errors.empGender}</small>
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
                                  <small className="p-invalid text-red-500">{formik.errors.empSalariedFlag}</small>
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
                                options={[ { label: 'Active', value: 1 }, //kalau error, 1 ganti jadi '1'(string). pastiin, cek tipe data di backend
                                { label: 'Inactive', value: 0 },]}
                                optionLabel="label"
                                placeholder="Select Current Flag"
                              />
                              {formik.touched.empCurrentFlag && formik.errors.empCurrentFlag && (
                                  <small className="p-invalid text-red-500">{formik.errors.empCurrentFlag}</small>
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
                                  <small className="p-invalid text-red-500">{formik.errors.empJoroId}</small>
                                )}
                          </div>
                          
                          </div>
                    </div>
                
                    <div className="col-4">
                      <div className="upload-form">
                      <label htmlFor="file">Photo</label>
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
                                        <button className="text-red-700 hover:text-white text-xs border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900" onClick={onClear}>Remove</button>
                                    </div>
                                </>
                        }
                    </div>
                    <div>
                        <input className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" aria-describedby="user_avatar_help" id="user_avatar" type="file" onChange={uploadConfig('file')} />
                        <div className="mt-1 text-sm text-gray-500 dark:text-gray-300" id="user_avatar_help"> </div>
                    </div>

                                </div> 

                          </div>
                          </div>
                
                          </Fieldset>

                          <Fieldset legend="Salary" className="mt-3" toggleable>
                          <div className="grid">
                        <div className="col-12">
                        <div className="grid justify-center">
                            <div className="col-4 mr-7">
                                <label htmlFor="ephiRateSalary" className="mr-2">Salary Rate</label> 
                                <InputNumber 
                                inputClassName="w-10rem"
                                inputId="ephiRateSalary"
                                name="ephiRateSalary"
                                onValueChange={(e: InputNumberValueChangeEvent) => {
                                  setInputNumberValue(e.value ?? null);
                                  formik.setFieldValue("ephiRateSalary", e.value); 
                                }}
                                showButtons min={0}
                                mode="currency" currency="IDR" /> 
                                {formik.touched.ephiRateSalary && formik.errors.ephiRateSalary && (
                                  <small className="p-invalid text-red-500">{formik.errors.ephiRateSalary}</small>
                                )}
                          </div>
                
                              <div className="col-4">
                              <label htmlFor="ephiPayFrequence" style={{ marginRight: '0.8rem' }}>Frequency</label>
                              <Dropdown
                                className="w-full md:w-12rem mr-2"
                                inputId="ephiPayFrequence"
                                name="ephiPayFrequence"
                                value={formik.values.ephiPayFrequence}
                                onChange={(e: DropdownChangeEvent) => {
                                  formik.setFieldValue("ephiPayFrequence", e.value); 
                                }}
                                options={[ { label: 'Hourly', value: 0 },  //kalau error, 0 ganti jadi '0'(string). pastiin, cek tipe data di backend
                                { label: 'Monthly', value: 1 },]}
                                optionLabel="label"
                                placeholder="Select Frequency"
                              />
                              {formik.touched.ephiPayFrequence && formik.errors.ephiPayFrequence && (
                                  <small className="p-invalid text-red-500">{formik.errors.ephiPayFrequence}</small>
                                )}
                          </div>
                          </div></div></div>
                          </Fieldset>

                          <Fieldset legend="Assignment" className="mt-3" toggleable>
                          <div className="grid">
                        <div className="col-12">
                        <div className="grid">
                          <div className="col-4">
                          <label htmlFor="Department" className="mr-2">Department</label>
                              <Dropdown
                                className="w-full md:w-12rem"
                                inputId="Department"
                                name="edhiDept.deptName"
                                value={formik.values.edhiDeptId}
                                onChange={(e: DropdownChangeEvent) => {
                                  formik.setFieldValue("edhiDeptId", e.value); 
                                  setSelectedDepts(e.value); 
                                }}
                                options={departments.map((dept: any) => ({
                                  label: dept.deptName,
                                  value: dept.deptId
                                }))}
                                optionLabel="label"
                                placeholder="Select a Department"
                                filter showClear
                                emptyMessage="No Department found."
                              />
                          </div>

                            <div className="col-4">
                                <label htmlFor="edhiStartDate" className="mr-2">Start Date</label> 
                                <Calendar 
                                className="w-full md:w-12rem"
                                id="edhiStartDate"
                                name="edhiStartDate"
                                value={formik.values.edhiStartDate}
                                onChange={(e : CalendarChangeEvent) => {
                                  setDate((prevState) => e.value || prevState);
                                  formik.setFieldValue("edhiStartDate", e.value);
                                }} 
                                placeholder="mm/dd/yyyy"
                                showButtonBar showIcon />
                              </div>

                              <div className="col-4">
                                <label htmlFor="edhiEndDate" className="mr-2">End Date</label> 
                                <Calendar 
                                className="w-full md:w-12rem"
                                id="edhiEndDate"
                                name="edhiEndDate"
                                value={formik.values.edhiEndDate}
                                onChange={(e : CalendarChangeEvent) => {
                                  setDate((prevState) => e.value || prevState);
                                  formik.setFieldValue("edhiEndDate", e.value);
                                }} 
                                placeholder="mm/dd/yyyy"
                                showButtonBar showIcon />
                              </div>

                          </div></div></div>

                          </Fieldset>

                          <Fieldset legend="Shift" className="mt-3" toggleable>
                          <div className="grid">
                        <div className="col-12">
                        <div className="grid">
                          <div className="col-4">
                          <label htmlFor="Shift" style={{ marginRight: '3.79rem' }}>Shift</label>
                              <Dropdown
                                className="w-full md:w-12rem"
                                inputId="Shift"
                                name="edhiShift.shiftName"
                                value={formik.values.edhiShiftId}
                                onChange={(e: DropdownChangeEvent) => {
                                  formik.setFieldValue("edhiShiftId", e.value); 
                                  setSelectedShifts(e.value); 
                                  handleChangeShift(e);
                                }}
                                options={shifts.map((shift: any) => ({
                                  label: shift.shiftName,
                                  value: shift.shiftId
                                }))}
                                optionLabel="label"
                                placeholder="Select a Shift"
                                filter showClear
                                emptyMessage="No Shift found."
                              />
                          </div>

                              {selectedShifts && (
                              <div className="col-4">
                                <label htmlFor="shiftStartTime" className="mr-2">Start Time</label> 
                                {/* <Calendar  */}
                                <span className="p-input-icon-right">
                                <i className="pi pi-clock" />
                                <InputText
                                  className="w-full md:w-12rem"
                                  id="shiftStartTime"
                                  name="edhiShift.shiftStartTime"
                                  value={shift.shiftStartTime} readOnly
                                />
                                </span>
                              </div>
                            )}

                              {selectedShifts && (
                                <div className="col-4">
                                  <label htmlFor="shiftEndTime" className="mr-2">End Time</label> 
                                <span className="p-input-icon-right">
                                <i className="pi pi-clock" />
                                <InputText
                                  className="w-full md:w-12rem"
                                  id="shiftEndTime"
                                  name="edhiShift.shiftEndTime"
                                  value={shift.shiftEndTime} readOnly
                                />
                                </span>

                                </div>
                              )}

                          </div></div></div>
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
