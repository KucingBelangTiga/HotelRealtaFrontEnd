import React, { useEffect, useState } from "react";
import { FormikProvider, useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { EditBankRequest, FindBankRequest } from "../../../redux/action/payment/bankAction";

export default function Edit(props: any) {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const [id, setId] = useState<number>();
  const { bank } = useSelector((state: any) => state.bankState);

  useEffect(() => {
    dispatch(FindBankRequest(id));
  }, [dispatch, id]);

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      entityId: props.id,
      bankCode: bank.bankCode,
      bankName: bank.bankName,
    },
    onSubmit: async (values) => {
      const payload = {
        entityId: values.entityId,
        bankCode: values.bankCode,
        bankName: values.bankName,
      };
      dispatch(EditBankRequest(payload));
      props.setRefresh(!false);
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
                  <h3 className="text-3xl font-semibold">Edit Bank{props.id}</h3>
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
                          <label className="block text-black text-sm font-bold mb-2">Bank Code</label>
                          <input
                            className=" border rounded w-full min-w-3xl py-2 px-3 text-black border-slate-900 "
                            type="text"
                            name="bankCode"
                            id="bankCode"
                            onChange={formik.handleChange}
                            value={formik.values.bankCode}
                            placeholder="Bank Code"
                          />
                        </div>

                        <div className="mb-4">
                          <label className="block text-black text-sm font-bold mb-2">Bank Name</label>
                          <input className=" border rounded w-full py-2 px-3 text-black border-slate-900" type="text" name="bankName" id="bankName" onChange={formik.handleChange} value={formik.values.bankName} placeholder="Bank Name" />
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
