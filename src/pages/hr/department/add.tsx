import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddDeptRequest } from "../../../redux/action/hr/departmentAction";
import { useFormik, FormikProvider } from "formik";
import * as Yup from 'yup';
import { Button } from 'primereact/button';
import { Fieldset } from 'primereact/fieldset';
import { InputText } from 'primereact/inputtext';
import classNames from 'classnames';
import 'primeicons/primeicons.css';

export default function Add(props: any) {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();

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
    },
  });

  const modal = () => {
    props.setRefresh(true);
    setShowModal(false);
  };

  return (
    <>
      {/* <button
        className="bg-darkBlue text-white active:bg-darkBlue font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Add +
      </button> */}
      <Button icon="pi pi-plus" label="Add" severity="secondary" onClick={() => setShowModal(true)} text />
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-2xl font-semibold">Add</h3>
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
                          {/* <label className="text-black font-bold pr-20 border border-solid float-left">
                            Department Name
                          </label>
                          <input
                            className=" border rounded w-full py-2 px-3 text-black border-slate-900 "
                            type="text"
                            name="deptName"
                            id="deptName"
                            onChange={formik.handleChange}
                            value={formik.values.deptName}
                            placeholder="deptName"
                          /> */}
                          <Fieldset legend="Department Name" className="p-field">
                          <InputText
                            name="deptName"
                            id="deptName"
                            value={formik.values.deptName}
                            onChange={formik.handleChange}
                            placeholder="deptName"
                            className={classNames({ 'p-invalid': formik.touched.deptName && formik.errors.deptName })}
                          />
                        </Fieldset>
                        </div>
                        {formik.touched.deptName && formik.errors.deptName ? (
                        <div className="text-red-500">{formik.errors.deptName}</div>
                        ) : null}
                      </div>
                      {/* <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                        <button
                          className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                          type="button"
                          onClick={modal}
                        >
                          Cancel
                        </button>
                        <Button
                        label="Save"
                        className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        icon="pi pi-check"
                        iconPos="right"
                      />
                      </div> */}
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
