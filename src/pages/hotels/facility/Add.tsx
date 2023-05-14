import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddFacilitiesRequest } from "../../../redux/action/hotel/facilitiesAction";
import { GetCategoryGroupRequest } from "../../../redux/action/master/categoryGroupAction";
import { useFormik, FormikProvider } from "formik";

export default function Add(props: any) {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();
  const { categoryGroups } = useSelector(
    (state: any) => state.categoryGroupState
  );

  useEffect(() => {
    dispatch(GetCategoryGroupRequest());
  }, [dispatch]);

  const formik = useFormik({
    initialValues: {
      faciName: "",
      faciDescription: "",
      faciMaxNumber: "",
      faciMeasureUnit: "",
      faciRoomNumber: "",
      faciStartdate: "",
      faciEnddate: "",
      faciLowPrice: "",
      faciHighPrice: "",
      faciRatePrice: "",
      faciDiscount: "",
      faciTaxRate: "",
      faciHotel: Number(props.id),
      faciCagro: "",
    },
    onSubmit: async (values) => {
      const payload = {
        faciName: values.faciName,
        faciDescription: values.faciDescription,
        faciMaxNumber: values.faciMaxNumber,
        faciMeasureUnit: values.faciMeasureUnit,
        faciRoomNumber: values.faciRoomNumber,
        faciStartdate: values.faciStartdate,
        faciEnddate: values.faciEnddate,
        faciLowPrice: values.faciLowPrice,
        faciHighPrice: values.faciHighPrice,
        faciRatePrice:
          (parseInt(values.faciHighPrice) + parseInt(values.faciLowPrice)) / 2,
        faciDiscount:
          ((parseInt(values.faciHighPrice) + parseInt(values.faciLowPrice)) /
            2 /
            100) *
          parseInt(values.faciDiscount),
        faciTaxRate:
          ((parseInt(values.faciHighPrice) + parseInt(values.faciLowPrice)) /
            2 /
            100) *
          parseInt(values.faciTaxRate),
        faciHotel: Number(props.id),
        faciCagro: Number(values.faciCagro),
      };
      dispatch(AddFacilitiesRequest(payload));
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
        Add
      </button>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none ">
            <div className="relative w-auto  mx-auto min-w-3xl mt-8">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">Add Facility</h3>
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
                      <div className="flex">
                        <div className="py-4 px-8">
                          <div className="mb-4">
                            <label className="block text-black text-sm font-bold mb-2">
                              Facility Name
                            </label>
                            <input
                              className=" border rounded w-full py-2 px-3 text-black border-slate-900 "
                              type="text"
                              name="faciName"
                              id="faciName"
                              onChange={formik.handleChange}
                              value={formik.values.faciName}
                              placeholder="Name"
                            />
                          </div>
                          <div className="flex gap-3">
                            <div className="mb-4">
                              <label className="block text-black text-sm font-bold mb-2">
                                Room Number
                              </label>
                              <input
                                className=" border rounded w-full py-2 px-3 text-black border-slate-900"
                                type="text"
                                name="faciRoomNumber"
                                id="faciRoomNumber"
                                onChange={formik.handleChange}
                                value={formik.values.faciRoomNumber}
                                placeholder="Room Number"
                              />
                            </div>
                            <div className="mb-4">
                              <label className="block text-black text-sm font-bold mb-2">
                                Max Vacant
                              </label>
                              <input
                                className=" border rounded w-full py-2 px-3 text-black border-slate-900"
                                type="number"
                                min="0"
                                name="faciMaxNumber"
                                id="faciMaxNumber"
                                onChange={formik.handleChange}
                                value={formik.values.faciMaxNumber}
                                placeholder="Max Vacant"
                              />
                            </div>
                          </div>

                          <div className="mb-4">
                            <label className="block text-black text-sm font-bold mb-2">
                              Low Price
                            </label>
                            <input
                              className=" border rounded w-full py-2 px-3 text-black border-slate-900"
                              type="text"
                              name="faciLowPrice"
                              id="faciLowPrice"
                              onChange={formik.handleChange}
                              value={formik.values.faciLowPrice}
                              placeholder="Low Price"
                            />
                          </div>

                          <div className="mb-4">
                            <label className="block text-black text-sm font-bold mb-2">
                              Disc %
                            </label>
                            <input
                              className=" border rounded w-full py-2 px-3 text-black border-slate-900"
                              type="text"
                              name="faciDiscount"
                              id="faciDiscount"
                              onChange={formik.handleChange}
                              value={formik.values.faciDiscount}
                              placeholder="Disc %"
                            />
                          </div>
                          <div className="mb-4">
                            <label className="block text-black text-sm font-bold mb-2">
                              Start Date
                            </label>
                            <input
                              className=" border rounded w-full py-2 px-3 text-black border-slate-900"
                              type="Date"
                              name="faciStartdate"
                              id="faciStartdate"
                              onChange={formik.handleChange}
                              value={formik.values.faciStartdate}
                            />
                          </div>
                          <div className="mb-4">
                            <label className="block text-black text-sm font-bold mb-2">
                              Description
                            </label>
                            <input
                              className=" border rounded w-full py-2 px-3 text-black border-slate-900"
                              type="text"
                              name="faciDescription"
                              id="faciDescription"
                              onChange={formik.handleChange}
                              placeholder="Description"
                              value={formik.values.faciDescription}
                            />
                          </div>
                        </div>
                        <div className="py-4 px-8">
                          <div className="mb-4">
                            <label className="block text-black text-sm font-bold mb-2">
                              Category
                            </label>
                            <select
                              name="faciCagro"
                              id="faciCagro"
                              onChange={formik.handleChange}
                              value={formik.values.faciCagro}
                              onBlur={formik.handleBlur}
                              className="border rounded w-full py-2 px-3 text-blue-950 border-slate-900"
                            >
                              <option
                                value=""
                                selected
                                disabled
                                hidden
                                className="text-black"
                              >
                                Choose Category
                              </option>
                              {categoryGroups.map((item: any) => (
                                <option
                                  key={item.cagroId}
                                  value={item.cagroId}
                                  className="text-black"
                                >
                                  {item.cagroName}
                                </option>
                              ))}
                            </select>
                          </div>
                          <div className="mb-4">
                            <label className="block text-black text-sm font-bold mb-2">
                              Measure Unit
                            </label>
                            <select
                              name="faciMeasureUnit"
                              id="faciMeasureUnit"
                              onChange={formik.handleChange}
                              value={formik.values.faciMeasureUnit}
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
                                Choose Measure Unit
                              </option>
                              <option value={"Room"}>Room</option>
                              <option value={"Beds"}>Beds</option>
                              <option value={"People"}>People</option>
                            </select>
                          </div>
                          <div className="mb-4">
                            <label className="block text-black text-sm font-bold mb-2">
                              High Price
                            </label>
                            <input
                              className=" border rounded w-full py-2 px-3 text-black border-slate-900"
                              type="text"
                              name="faciHighPrice"
                              id="faciHighPrice"
                              onChange={formik.handleChange}
                              value={formik.values.faciHighPrice}
                              placeholder="High Price"
                            />
                          </div>
                          <div className="mb-4">
                            <label className="block text-black text-sm font-bold mb-2">
                              Tax %
                            </label>
                            <input
                              className=" border rounded w-full py-2 px-3 text-black border-slate-900"
                              type="text"
                              name="faciTaxRate"
                              id="faciTaxRate"
                              onChange={formik.handleChange}
                              value={formik.values.faciTaxRate}
                              placeholder="Tax %"
                            />
                          </div>
                          <div className="mb-4">
                            <label className="block text-black text-sm font-bold mb-2">
                              End Date
                            </label>
                            <input
                              className=" border rounded w-full py-2 px-3 text-black border-slate-900"
                              type="Date"
                              name="faciEnddate"
                              id="faciEnddate"
                              onChange={formik.handleChange}
                              value={formik.values.faciEnddate}
                            />
                          </div>
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
                          className="bg-coldBlue text-white active:bg-coldBlue font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
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
