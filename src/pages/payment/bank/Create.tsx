import React, { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { AddBankRequest } from "@/src/redux/action/payment/bankAction";
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
      entityId: undefined,
      bankCode: undefined,
      bankName: undefined,
    },
    validationSchema: Yup.object().shape({
      bankCode: Yup.string()
        .matches(/^(0[0-9]{2}|[1-9][0-9]{0,2})$/, "Invalid bank code")
        .test("maxLength", "Too Long!", (value: any): any => value && value.length <= 3)
        .required("Required"),
      bankName: Yup.string().min(3, "Too Short!").max(20, "Too Long!").required("Required"),
    }),
    onSubmit: async (values, { resetForm }) => {
      let payload = {
        entityId: values.entityId,
        bankCode: values.bankCode,
        bankName: values.bankName,
      };
      try {
        showToast("Add Bank Successfully", "success");
        setTimeout(() => {
          dispatch(AddBankRequest(payload));
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
        className="bg-darkBlue text-white active:bg-darkBlue font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
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
                  <h3 className="text-3xl font-semibold">Add Bank</h3>
                  <button className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none" onClick={() => setShowModal(false)}>
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">×</span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <FormikProvider value={formik}>
                    <form onSubmit={formik.handleSubmit}>
                      <div className="py-4 px-8 ">
                        <div className="flex gap-10 mb-4">
                          <label className="text-black  font-bold border border-solid w-1/2">
                            Bank Code<span className="text-red-400">&nbsp; * {formik.errors.bankCode}</span>
                          </label>
                          <input
                            className=" border rounded w-full py-2 px-3 text-black border-slate-900 "
                            type="text"
                            name="bankCode"
                            id="bankCode"
                            onChange={formik.handleChange}
                            value={formik.values.bankCode}
                            placeholder="Bank Code"
                            autoComplete="off"
                            required
                          />
                        </div>
                        <div className="flex gap-10 mb-4">
                          <label className="text-black  font-bold border border-solid w-1/2">
                            Bank Name<span className="text-red-400">&nbsp; * {formik.errors.bankName}</span>
                          </label>
                          <input
                            className=" border rounded w-full py-2 px-3 text-black border-slate-900 "
                            type="text"
                            name="bankName"
                            id="bankName"
                            onChange={formik.handleChange}
                            value={formik.values.bankName}
                            placeholder="Bank Name"
                            autoComplete="off"
                            required
                          />
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
