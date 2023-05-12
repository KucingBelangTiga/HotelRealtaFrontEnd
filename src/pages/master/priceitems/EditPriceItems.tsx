import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  EditPriceItemsRequest,
  FindPriceItemsRequest,
} from "../../../redux/action/master/priceItemsAction";
import { useFormik, FormikProvider } from "formik";

export default function EditPriceItems(props: any) {
  const [showModal, setShowModal] = useState(false);
  const [id, setId] = useState<number>();
  const dispatch = useDispatch();
  const { priceItem } = useSelector((state: any) => state.priceItemsState);

  useEffect(() => {
    dispatch(FindPriceItemsRequest(id));
  }, [dispatch, id, showModal]);

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      pritId: props.id,
      pritName: priceItem.pritName,
      pritDescription: priceItem.pritDescription,
      pritPrice: priceItem.pritPrice,
      pritType: priceItem.pritType,
    },
    onSubmit: async (values) => {
      dispatch(EditPriceItemsRequest(values));
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
      <button
        className="bg-emerald-700 text-white active:bg-emerald-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={editButton}
      >
        Edit
      </button>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">Edit Price Item</h3>
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
                            Item Name
                          </label>
                          <input
                            className="border rounded w-full py-2 px-3 text-black border-slate-900 "
                            type="text"
                            name="pritName"
                            id="pritName"
                            onChange={formik.handleChange}
                            value={formik.values.pritName}
                            placeholder="Item Name"
                          />
                        </div>
                      </div>
                      <div className="py-4 px-8 ">
                        <div className="flex gap-10 ">
                          <label className="text-black py-2 font-bold w-full">
                            Item price
                          </label>
                          <select
                            name="pritType"
                            id="pritType"
                            onChange={formik.handleChange}
                            value={formik.values.pritType}
                            onBlur={formik.handleBlur}
                            className=" border rounded w-full py-2 px-3 text-black border-slate-900"
                          >
                            <option
                              value=""
                              selected
                              disabled
                              hidden
                              className="text-black"
                            >
                              Choose Type
                            </option>
                            <option value={"SOFTDRINK"}>Softdrink</option>
                            <option value={"SNACK"}>Snack</option>
                            <option value={"FOOD"}>Food</option>
                            <option value={"FACILITY"}>Facility</option>
                            <option value={"SERVICE"}>Service</option>
                          </select>
                        </div>
                      </div>
                      <div className="py-4 px-8 ">
                        <div className="flex gap-10 ">
                          <label className="text-black py-2 font-bold w-full">
                            Item price
                          </label>

                          <input
                            className="border rounded w-full py-2 px-3 text-black border-slate-900 "
                            name="pritPrice"
                            id="pritPrice"
                            onChange={formik.handleChange}
                            value={formik.values.pritPrice}
                          />
                        </div>
                      </div>
                      <div className="py-4 px-8 ">
                        <div className="flex gap-10 ">
                          <label className="text-black py-2 font-bold w-full">
                            Description
                          </label>
                        </div>
                        <textarea
                          className="border rounded w-full py-4 px-3 text-black border-slate-900 "
                          name="pritDescription"
                          id="pritDescription"
                          onChange={formik.handleChange}
                          value={formik.values.pritDescription}
                        />
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
