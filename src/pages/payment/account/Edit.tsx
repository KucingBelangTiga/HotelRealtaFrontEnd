import React, { useEffect, useState } from "react";
import { FormikProvider, useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { EditUserAccountRequest, FindUserAccountRequest } from "@/src/redux/action/payment/userAccountAction";
import * as Yup from "yup";

interface EditFormValues {
  usacEntityId: number;
  usacUserId: number;
  usacAccountNumber: string;
  usacSaldo: string;
  usacType: string;
}

export default function Edit(props: any) {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const [id, setId] = useState<number>();
  const { userAccount } = useSelector((state: any) => state.userAccountState);

  useEffect(() => {
    dispatch(FindUserAccountRequest(id));
  }, [dispatch, id]);

  const formik = useFormik<EditFormValues>({
    enableReinitialize: true,
    initialValues: {
      usacEntityId: userAccount.usacEntityId,
      usacUserId: userAccount.usacUserId,
      usacAccountNumber: userAccount.usacAccountNumber,
      usacSaldo: userAccount.usacSaldo,
      usacType: userAccount.usacType,
    },
    validationSchema: Yup.object().shape({
      usacEntityId: Yup.string().min(1, "Too Short!").max(2, "Too Long!").required("Required"),
      usacUserId: Yup.string().min(1, "Too Short!").max(2, "Too Long!").required("Required"),
      usacAccountNumber: Yup.string().min(7, "Too Short!").max(9, "Too Long!").required("Required"),
      usacSaldo: Yup.string().min(3, "Too Short!").max(9, "Too Long!").required("Required"),
      usacType: Yup.string().required("Required"),
    }),
    onSubmit: async (values) => {
      const payload = {
        usacEntityId: values.usacEntityId,
        usacUserId: values.usacUserId,
        usacAccountNumber: values.usacAccountNumber,
        usacSaldo: values.usacSaldo,
        usacType: values.usacType,
      };
      dispatch(EditUserAccountRequest(payload));
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
      <button className="p-3 hover:bg-coldBlue hover:text-white w-full" type="button" onClick={editButton}>
        Edit
      </button>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto min-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">Edit User Account</h3>
                  <button className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none" onClick={() => setShowModal(false)}>
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">×</span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <FormikProvider value={formik}>
                    <form onSubmit={formik.handleSubmit}>
                      <div className="py-4 px-8">
                        <div className="mb-4">
                          <label className="block text-black text-sm font-bold mb-2">Account Number</label>
                          <input
                            className=" border rounded w-full min-w-3xl py-2 px-3 text-black border-slate-900 "
                            type="text"
                            name="usacAccountNumber"
                            id="usacAccountNumber"
                            onChange={formik.handleChange}
                            value={formik.values.usacAccountNumber}
                            placeholder="Account Number"
                            disabled
                          />
                        </div>
                        <div className="mb-4">
                          <label className="block text-black text-sm font-bold mb-2">
                            Saldo<span className="text-red-400">&nbsp; * {formik.errors.usacSaldo}</span>
                          </label>
                          <input
                            className=" border rounded w-full py-2 px-3 text-black border-slate-900"
                            type="number"
                            name="usacSaldo"
                            id="usacSaldo"
                            onChange={formik.handleChange}
                            value={formik.values.usacSaldo}
                            placeholder="Saldo"
                            autoComplete="off"
                          />
                        </div>
                        <div className="mb-4">
                          <label className="block text-black text-sm font-bold mb-2">
                            Type<span className="text-red-400">&nbsp; *</span>
                          </label>
                          <select name="usacType" id="usacType" onChange={formik.handleChange} value={formik.values.usacType} className=" border rounded w-full py-2 px-3 text-black border-slate-900">
                            <option value="" selected disabled hidden className="text-black">
                              Choose Type Account
                            </option>
                            <option value={"Debet"}>Debet</option>
                            <option value={"Credit Card"}>Credit Card</option>
                            <option value={"Payment"}>Payment</option>
                          </select>
                        </div>
                        <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                          <button className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button" onClick={modal}>
                            Close
                          </button>
                          <button
                            className="bg-coldBlue text-white active:bg-coldBlue font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                            type="submit"
                          >
                            Save Changes
                          </button>
                        </div>
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
