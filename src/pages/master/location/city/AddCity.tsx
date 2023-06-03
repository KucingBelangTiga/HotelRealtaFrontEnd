import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { AddCityRequest } from "../../../../redux/action/master/cityAction";
import { useFormik, FormikProvider } from "formik";
import * as Yup from "yup";

export default function AddCity(props: any) {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();

  const formik: any = useFormik({
    enableReinitialize: true,
    initialValues: {
      addrLine1: "",
      addrLine2: "",
      addrPostalCode: "",
      addrProv: props.province === undefined ? null : props.province.provId,
    },
    validationSchema: Yup.object().shape({
      addrProv: Yup.number().required("Required"),
      addrLine1: Yup.string()
        .min(1, "Too Short!")
        .max(254, "Too Long!")
        .required("Required"),
      addrLine2: Yup.string()
        .min(1, "Too Short!")
        .max(254, "Too Long!")
        .required("Required"),
      addrPostalCode: Yup.string()
        .min(1, "Too Short!")
        .max(5, "Too Long!")
        .required("Required")
        .matches(/^[0-9]*$/, "Max vacant must be a number"),
    }),
    onSubmit: async (values) => {
      dispatch(AddCityRequest(values));
      props.setRefresh(true);
      setShowModal(false);
    },
  });

  const modal = () => {
    props.setRefresh(true);
    setShowModal(false);
  };

  return (
    <>
      <button
        className="bg-coldBlue text-white active:bg-coldBlue font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
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
                  <h3 className="text-3xl font-semibold">Add City</h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <FormikProvider value={formik}>
                    <form onSubmit={formik.handleSubmit}>
                      <div className="py-4 px-8 ">
                        <div className="flex gap-10 ">
                          <label className="py-2 text-black font-bold w-full">
                            Province Name
                            <span className="text-red-400">
                              &nbsp; * {formik.errors.addrProv}
                            </span>
                          </label>
                          <p className=" w-full py-2 text-black border-slate-900">
                            {props.province === undefined
                              ? "[Choose Region]"
                              : props.province.provName}
                          </p>
                        </div>
                      </div>
                      <div className="py-4 px-8 ">
                        <div className="flex gap-10 ">
                          <label className="text-black py-2 font-bold w-full">
                            City Name
                            <span className="text-red-400">
                              &nbsp; * {formik.errors.addrLine2}
                            </span>
                          </label>
                          <input
                            className="border rounded w-full py-2 px-3 text-black border-slate-900 "
                            type="text"
                            name="addrLine2"
                            id="addrLine2"
                            onChange={formik.handleChange}
                            value={formik.values.addrLine2}
                            placeholder="City Name"
                          />
                        </div>
                      </div>
                      <div className="py-4 px-8 ">
                        <div className="flex gap-10 ">
                          <label className="text-black py-2 font-bold w-full">
                            Address
                            <span className="text-red-400">
                              &nbsp; * {formik.errors.addrLine1}
                            </span>
                          </label>
                          <input
                            className="border rounded w-full py-2 px-3 text-black border-slate-900 "
                            type="text"
                            name="addrLine1"
                            id="addrLine1"
                            onChange={formik.handleChange}
                            value={formik.values.addrLine1}
                            placeholder="Address"
                          />
                        </div>
                      </div>
                      <div className="py-4 px-8 ">
                        <div className="flex gap-10 ">
                          <label className="text-black py-2 font-bold w-full">
                            Postal Code
                            <span className="text-red-400">
                              &nbsp; * {formik.errors.addrPostalCode}
                            </span>
                          </label>
                          <input
                            className="border rounded w-full py-2 px-3 text-black border-slate-900 "
                            type="text"
                            name="addrPostalCode"
                            id="addrPostalCode"
                            onChange={formik.handleChange}
                            value={formik.values.addrPostalCode}
                            placeholder="Postal Code"
                          />
                        </div>
                      </div>
                      <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                        <button
                          className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                          type="button"
                          onClick={modal}
                        >
                          Close
                        </button>
                        <button
                          className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
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
          <div className="opacity-75 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
