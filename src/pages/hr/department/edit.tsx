import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  FindDeptRequest,
  EditDeptRequest,
} from "../../../redux/action/hr/departmentAction";
import { useFormik, FormikProvider } from "formik";
import * as Yup from 'yup';
import { Button } from 'primereact/button';
import { Fieldset } from 'primereact/fieldset';
import { InputText } from 'primereact/inputtext';
import classNames from 'classnames';
import 'primeicons/primeicons.css';

export default function Edit(props: any) {
  const [showModal, setShowModal] = useState(false); 
  const [id, setId] = useState<number>(props.id);
  const dispatch = useDispatch();
  const { department } = useSelector((state: any) => state.deptState);

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
    },   
  });

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
      {/* <button
        className="bg-darkBlue text-white active:bg-darkBlue font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={editButton}
      >
        Edit
      </button> */}
      <Button icon="pi pi-pencil" rounded outlined severity="warning" aria-label="Edit" tooltip="Edit" tooltipOptions={{ position: 'top' }} className="mr-2" onClick={editButton} />
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-2xl font-semibold">Edit</h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none pi pi-times"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <FormikProvider value={formik}>
                    <form onSubmit={formik.handleSubmit}>
                      <div className="py-4 px-8 ">
                        <div className="flex gap-10 ">
                          {/* <label className="text-black  font-bold pr-20 border border-solid float-left">
                            Department Name
                          </label>
                          <input
                            className=" border rounded w-full py-2 px-3 text-black border-slate-900 "
                            type="text"
                            name="deptName"
                            id="deptName"
                            onChange={formik.handleChange}
                            value={formik.values.deptName}
                            placeholder="Department Name"
                          /> */}
                          <Fieldset legend="Department Name" className="p-field">
                          <InputText
                            name="deptName"
                            id="deptName"
                            value={formik.values.deptName}
                            onChange={formik.handleChange}
                            className={classNames({ 'p-invalid': formik.touched.deptName && formik.errors.deptName })}
                          />
                        </Fieldset>
                        </div>
                        {formik.touched.deptName && formik.errors.deptName ? (
                        <div className="text-red-500">{formik.errors.deptName.toString()}</div>
                        ) : null}
                      </div>
                      <div className="flex justify-center py-6">
                        <Button label="Cancel" severity="danger" raised className="mr-2" onClick={modal} />
                        <Button label="Save" icon="pi pi-check" iconPos="right" />
                      </div>
                    </form>
                  </FormikProvider> 
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
