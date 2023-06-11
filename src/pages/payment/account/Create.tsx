import React, { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { AddUserAccountRequest } from "@/src/redux/action/payment/userAccountAction";
import { useFormik, FormikProvider } from "formik";
import "react-toastify/dist/ReactToastify.css";
import * as Yup from "yup";
import { Toast } from "primereact/toast";

export default function Create(props: any) {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();
  const [refresh, setRefresh] = useState<boolean>(false);
  const toast = useRef<any>(null);

  useEffect(() => {
    setRefresh(false);
  }, [dispatch, refresh]);

  const formik = useFormik({
    initialValues: {
      usacEntityId: undefined,
      usacUserId: undefined,
      usacAccountNumber: undefined,
      usacSaldo: undefined,
      usacType: undefined,
    },
    validationSchema: Yup.object().shape({
      usacEntityId: Yup.string().min(1, "Too Short!").max(2, "Too Long!").required("Required"),
      usacUserId: Yup.string().min(1, "Too Short!").max(2, "Too Long!").required("Required"),
      usacAccountNumber: Yup.string().min(7, "Too Short!").max(9, "Too Long!").required("Required"),
      usacSaldo: Yup.string().min(3, "Too Short!").max(9, "Too Long!").required("Required"),
      usacType: Yup.string().required("Required"),
    }),
    onSubmit: async (values, { resetForm }) => {
      let payload = {
        usacEntityId: values.usacEntityId,
        usacUserId: values.usacUserId,
        usacAccountNumber: values.usacAccountNumber,
        usacSaldo: values.usacSaldo,
        usacType: values.usacType,
      };
      try {
        showToast("Add Account Successfully", "success");
        setTimeout(() => {
          dispatch(AddUserAccountRequest(payload));
          setRefresh(true);
        }, 900);
        resetForm();
        setRefresh(true);
        setShowModal(false);
      } catch (error) {
        showToast("Add Bank Failed", "error");
        console.log(error);
      }
    },
  });

  const modal = () => {
    props.setRefresh(true);
    setShowModal(false);
  };

  const showToast = (message: string, severity: string) => {
    if (toast.current) {
      toast.current.show({ severity, summary: "Information", detail: message, life: 3000 });
    }
  };

  return (
    <>
      <button
        className="float-right bg-darkBlue text-white active:bg-darkBlue font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Add +
      </button>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">Add Account Number</h3>
                  <button className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none" onClick={() => setShowModal(false)}>
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">×</span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <FormikProvider value={formik}>
                    <form onSubmit={formik.handleSubmit}>
                      <div className="py-4 px-8 ">
                        <div className="flex gap-10 mb-4 ">
                          <label className="text-black  font-bold pr-20 border border-solid w-1/2">
                            Entity Id <span className="text-red-400">&nbsp; * {formik.errors.usacEntityId}</span>
                          </label>
                          <input
                            className=" border rounded w-full py-2 px-3 text-black border-slate-900 "
                            type="number"
                            name="usacEntityId"
                            id="usacEntityId"
                            onChange={formik.handleChange}
                            value={formik.values.usacEntityId}
                            placeholder="Entity Id"
                            autoComplete="off"
                            required
                          />
                        </div>
                        <div className="flex gap-10 mb-4 ">
                          <label className="text-black  font-bold pr-20 border border-solid w-1/2 ">
                            User Id <span className="text-red-400">&nbsp; * {formik.errors.usacUserId}</span>
                          </label>
                          <input
                            className=" border rounded w-full py-2 px-3 text-black border-slate-900 "
                            type="number"
                            min="0"
                            name="usacUserId"
                            id="usacUserId"
                            onChange={formik.handleChange}
                            value={formik.values.usacUserId}
                            placeholder="User Id"
                            autoComplete="off"
                            required
                          />
                        </div>
                        <div className="flex gap-10 mb-4 ">
                          <label className="text-black  font-bold pr-20 border border-solid w-1/2 ">
                            Account Number <span className="text-red-400">&nbsp; * {formik.errors.usacAccountNumber}</span>
                          </label>
                          <input
                            className=" border rounded w-full py-2 px-3 text-black border-slate-900 "
                            type="number"
                            min="0"
                            name="usacAccountNumber"
                            id="usacAccountNumber"
                            onChange={formik.handleChange}
                            value={formik.values.usacAccountNumber}
                            placeholder="Account Number"
                            autoComplete="off"
                            required
                          />
                        </div>
                        <div className="flex gap-10 mb-4 ">
                          <label className="text-black  font-bold pr-20 border border-solid w-1/2 ">
                            Saldo <span className="text-red-400">&nbsp; * {formik.errors.usacSaldo}</span>
                          </label>
                          <input
                            className=" border rounded w-full py-2 px-3 text-black border-slate-900 "
                            type="number"
                            min="0"
                            name="usacSaldo"
                            id="usacSaldo"
                            onChange={formik.handleChange}
                            value={formik.values.usacSaldo}
                            placeholder="Saldo"
                            autoComplete="off"
                            required
                          />
                        </div>
                        <div className="flex gap-10 mb-4 ">
                          <label className="text-black  font-bold pr-20 border border-solid w-1/2 ">
                            Type<span className="text-red-400">&nbsp; *</span>
                          </label>{" "}
                          <select name="usacType" id="usacType" onChange={formik.handleChange} value={formik.values.usacType} onBlur={formik.handleBlur} className=" border rounded w-full py-2 px-3 text-black border-slate-900" required>
                            <option value="" selected disabled hidden className="text-black">
                              Choose Measure Unit
                            </option>
                            <option value={"Debet"}>Debet</option>
                            <option value={"Credit Card"}>Credit Card</option>
                            <option value={"Payment"}>Payment</option>
                          </select>
                        </div>
                      </div>
                      <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                        <button className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button" onClick={modal}>
                          Close
                        </button>
                        <button
                          className="bg-moderateBlue text-white active:bg-moderateBlue hover:bg-coldBlue font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                          type="submit"
                        >
                          Save Changes
                        </button>
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
      <Toast ref={toast} position="top-right" />
    </>
  );
}