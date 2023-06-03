import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  EditFacilitiesRequest,
  FindFacilitiesRequest,
  GetAllFacilitiesRequest,
} from "../../../redux/action/hotel/facilitiesAction";
import { GetCategoryGroupRequest } from "../../../redux/action/master/categoryGroupAction";
import { AddFacPriceHistRequest } from "../../../redux/action/hotel/facilityPriceHistoryAction";
import { useFormik, FormikProvider } from "formik";
import * as Yup from "yup";

export default function Edit(props: any) {
  const [showModal, setShowModal] = useState(false);
  const [id, setId] = useState<number>();
  const [room, setRoom] = useState<string>("");
  const dispatch = useDispatch();
  const { facility, allFacilities } = useSelector(
    (state: any) => state.facilitiesState
  );
  const { categoryGroups } = useSelector(
    (state: any) => state.categoryGroupState
  );

  useEffect(() => {
    dispatch(FindFacilitiesRequest(props.id));
    dispatch(GetAllFacilitiesRequest());
    dispatch(GetCategoryGroupRequest());
  }, [dispatch, props.id]);

  const formik: any = useFormik({
    enableReinitialize: true,
    initialValues: {
      faciId: props.id,
      faciName: facility.faciName,
      faciDescription: facility.faciDescription,
      faciMaxNumber: facility.faciMaxNumber,
      faciMeasureUnit: facility.faciMeasureUnit,
      faciRoomNumber: facility.faciRoomNumber,
      faciStartdate:
        facility.faciStartdate && facility.faciStartdate.substring(0, 10),
      faciEnddate:
        facility.faciEnddate && facility.faciEnddate.substring(0, 10),
      faciLowPrice:
        facility.faciLowPrice &&
        Number(facility.faciLowPrice.replace(/[^0-9]+/g, "") / 100),
      faciHighPrice:
        facility.faciHighPrice &&
        Number(facility.faciHighPrice.replace(/[^0-9]+/g, "") / 100),
      faciDiscount:
        facility.faciDiscount &&
        Math.round(
          Number(facility.faciDiscount.replace(/[^0-9]+/g, "")) /
            (Number(facility.faciRatePrice.replace(/[^0-9]+/g, "")) / 100)
        ),
      faciTaxRate:
        facility.faciTaxRate &&
        Math.round(
          Number(facility.faciTaxRate.replace(/[^0-9]+/g, "")) /
            (Number(facility.faciRatePrice.replace(/[^0-9]+/g, "")) / 100)
        ),
      faciCagro: facility.faciCagro && facility.faciCagro.cagroId,
    },
    validationSchema: Yup.object().shape({
      faciName: Yup.string()
        .min(2, "Too Short!")
        .max(123, "Too Long!")
        .required("Required"),
      faciDescription: Yup.string()
        .min(2, "Too Short!")
        .max(254, "Too Long!")
        .required("Required"),
      faciMaxNumber: Yup.string()
        .min(1, "Too Short!")
        .max(5, "Too Long!")
        .required("Required")
        .matches(/^[0-9]*$/, "Max vacant must be a number"),
      faciRoomNumber: Yup.string()
        .min(1, "Too Short!")
        .max(6, "Too Long!")
        .required("Required")
        .test("unique", "Number is already in use", function (value: any) {
          if (
            !allFacilities.some((item: any) => item.faciRoomNumber === value) ||
            props.room === value
          ) {
            return true;
          }
        }),
      faciLowPrice: Yup.string()
        .min(3, "Too Short!")
        .max(10, "Too Long!")
        .required("Required")
        .matches(/^[0-9]*$/, "Price must be a number"),
      faciHighPrice: Yup.string()
        .min(3, "Too Short!")
        .max(10, "Too Long!")
        .required("Required")
        .matches(/^[0-9]*$/, "Price must be a number"),
      faciDiscount: Yup.number()
        .min(0, "Only 0 - 100")
        .max(100, "Only 0 - 100")
        .required("Required")
        .typeError("Discount must be a number"),
      // .matches(/^[0-9]*$/, "Discount must be a number"),
      faciTaxRate: Yup.number()
        .min(0, "Only 0 - 100")
        .max(100, "Only 0 - 100")
        .required("Required")
        .typeError("Tax must be a number"),
      // .matches(/^[0-9]*$/, "Tax must be a number"),
    }),
    onSubmit: async (values) => {
      const payload = {
        faciId: props.id,
        faciName: values.faciName,
        faciDescription: values.faciDescription,
        faciMaxNumber: values.faciMaxNumber,
        faciMeasureUnit: values.faciMeasureUnit,
        faciRoomNumber: values.faciRoomNumber,
        faciStartdate: values.faciStartdate,
        faciEnddate: values.faciEnddate,
        faciLowPrice: values.faciLowPrice,
        faciHighPrice: values.faciHighPrice,
        faciModifiedDate: new Date(),
        faciRatePrice:
          (parseInt(values.faciHighPrice) + parseInt(values.faciLowPrice)) / 2,
        faciDiscount:
          (Math.floor(
            (parseInt(values.faciHighPrice) + parseInt(values.faciLowPrice)) / 2
          ) /
            100) *
          parseInt(values.faciDiscount),
        faciTaxRate:
          Math.floor(
            (parseInt(values.faciHighPrice) + parseInt(values.faciLowPrice)) /
              2 /
              100
          ) * parseInt(values.faciTaxRate),
        faciCagro: values.faciCagro,
      };
      if (
        Number(values.faciLowPrice) !==
          Number(facility.faciLowPrice.toString().replace(/[^0-9]+/g, "")) /
            100 ||
        Number(values.faciHighPrice) !==
          Number(facility.faciHighPrice.toString().replace(/[^0-9]+/g, "")) /
            100
      ) {
        const priceHistPayload = {
          faphFaci: facility.faciId,
          faphStartdate:
            facility.faciStartdate && facility.faciStartdate.substring(0, 10),
          faphEnddate:
            facility.faciEnddate && facility.faciEnddate.substring(0, 10),
          faphLowPrice: facility.faciLowPrice,
          faphHighPrice: facility.faciHighPrice,
          faphDiscount: facility.faciDiscount,
          faphTaxRate: facility.faciTaxRate,
          faphRatePrice: facility.faciRatePrice,
          faphModifiedDate: new Date(),
          faphUserId: 1,
        };
        dispatch(EditFacilitiesRequest(payload));
        dispatch(AddFacPriceHistRequest(priceHistPayload));
        props.setRefresh(true);
        setShowModal(false);
      } else {
        dispatch(EditFacilitiesRequest(payload));
        props.setRefresh(true);
        setShowModal(false);
      }
    },
  });

  const editButton = () => {
    setId(props.id);
    setRoom(props.room);
    setShowModal(true);
  };

  const modal = () => {
    props.setRefresh(true);
    setShowModal(false);
  };
  return (
    <>
      <button
        className="p-3 hover:bg-coldBlue hover:text-white w-full"
        type="button"
        onClick={editButton}
      >
        Edit
      </button>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none ">
            <div className="relative w-2/4  mx-auto min-w-3xl ">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">Edit Facility</h3>
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
                      <div className="flex text-left">
                        <div className="py-4 px-8 ">
                          <div className="mb-4">
                            <label className="block text-black text-sm font-bold mb-2">
                              Facility Name
                              <span className="text-red-400">
                                &nbsp; * {formik.errors.faciName}
                              </span>
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
                                <span className="text-red-400">
                                  &nbsp; * {formik.errors.faciRoomNumber}
                                </span>
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
                                <span className="text-red-400">
                                  &nbsp; * {formik.errors.faciMaxNumber}
                                </span>
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
                              <span className="text-red-400">
                                &nbsp; * {formik.errors.faciLowPrice}
                              </span>
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
                              <span className="text-red-400">
                                &nbsp; * {formik.errors.faciDiscount}
                              </span>
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
                              Start Date <span className="text-red-400">*</span>
                            </label>
                            <input
                              className=" border rounded w-full py-2 px-3 text-black border-slate-900"
                              type="Date"
                              name="faciStartdate"
                              id="faciStartdate"
                              required
                              onChange={formik.handleChange}
                              value={formik.values.faciStartdate}
                            />
                          </div>
                          <div className="mb-4">
                            <label className="block text-black text-sm font-bold mb-2">
                              Description
                              <span className="text-red-400">
                                &nbsp; * {formik.errors.faciDescription}
                              </span>
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
                              Category <span className="text-red-400">*</span>
                            </label>
                            <select
                              name="faciCagro"
                              id="faciCagro"
                              required
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
                              Measure Unit{" "}
                              <span className="text-red-400">*</span>
                            </label>
                            <select
                              name="faciMeasureUnit"
                              id="faciMeasureUnit"
                              required
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
                              <span className="text-red-400">
                                &nbsp; * {formik.errors.faciHighPrice}
                              </span>
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
                              <span className="text-red-400">
                                &nbsp; * {formik.errors.faciTaxRate}
                              </span>
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
                              End Date <span className="text-red-400">*</span>
                            </label>
                            <input
                              className=" border rounded w-full py-2 px-3 text-black border-slate-900"
                              type="Date"
                              name="faciEnddate"
                              id="faciEnddate"
                              required
                              onChange={formik.handleChange}
                              value={formik.values.faciEnddate}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center justify-end p-3 border-t border-solid border-slate-200 rounded-b">
                        <button
                          className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                          type="button"
                          onClick={modal}
                        >
                          Close
                        </button>
                        <button
                          className="bg-coldBlue text-white active:bg-coldBlue font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1  ease-linear transition-all duration-150"
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
  // return (
  //   <div className="bg-grey-500 ">
  //     <div className="flex items-center justify-center my-10">
  //       <div className=" mx-auto bg-white rounded shadow border-slate-900">
  //         <div className="mx-16 py-4 px-8 text-black text-xl font-bold border-b border-grey-500 text-center">
  //           <h1>Facility {router.query.id}</h1>
  //         </div>
  //         <FormikProvider value={formik}>
  //           <form
  //             name="student_application"
  //             id="student_application"
  //             onSubmit={formik.handleSubmit}
  //           >
  //             <div className="flex">
  //               <div className="py-4 px-8">
  //                 <div className="mb-4">
  //                   <label className="block text-black text-sm font-bold mb-2">
  //                     Facility Name
  //                   </label>
  //                   <input
  //                     className=" border rounded w-full py-2 px-3 text-black border-slate-900 "
  //                     type="text"
  //                     name="faciName"
  //                     id="faciName"
  //                     onChange={formik.handleChange}
  //                     value={formik.values.faciName}
  //                     placeholder="Name"
  //                   />
  //                 </div>
  //                 <div className="flex gap-3">
  //                   <div className="mb-4">
  //                     <label className="block text-black text-sm font-bold mb-2">
  //                       Room Number
  //                     </label>
  //                     <input
  //                       className=" border rounded w-full py-2 px-3 text-black border-slate-900"
  //                       type="text"
  //                       name="faciRoomNumber"
  //                       id="faciRoomNumber"
  //                       onChange={formik.handleChange}
  //                       value={formik.values.faciRoomNumber}
  //                       placeholder="Room Number"
  //                     />
  //                   </div>
  //                   <div className="mb-4">
  //                     <label className="block text-black text-sm font-bold mb-2">
  //                       Max Vacant
  //                     </label>
  //                     <input
  //                       className=" border rounded w-full py-2 px-3 text-black border-slate-900"
  //                       type="number"
  //                       min="0"
  //                       name="faciMaxNumber"
  //                       id="faciMaxNumber"
  //                       onChange={formik.handleChange}
  //                       value={formik.values.faciMaxNumber}
  //                       placeholder="Max Vacant"
  //                     />
  //                   </div>
  //                 </div>

  //                 <div className="mb-4">
  //                   <label className="block text-black text-sm font-bold mb-2">
  //                     Low Price
  //                   </label>
  //                   <input
  //                     className=" border rounded w-full py-2 px-3 text-black border-slate-900"
  //                     type="text"
  //                     name="faciLowPrice"
  //                     id="faciLowPrice"
  //                     onChange={formik.handleChange}
  //                     value={formik.values.faciLowPrice}
  //                     placeholder="Low Price"
  //                   />
  //                 </div>

  //                 <div className="mb-4">
  //                   <label className="block text-black text-sm font-bold mb-2">
  //                     Disc %
  //                   </label>
  //                   <input
  //                     className=" border rounded w-full py-2 px-3 text-black border-slate-900"
  //                     type="text"
  //                     name="faciDiscount"
  //                     id="faciDiscount"
  //                     onChange={formik.handleChange}
  //                     value={formik.values.faciDiscount}
  //                     placeholder="Disc %"
  //                   />
  //                 </div>
  //                 <div className="mb-4">
  //                   <label className="block text-black text-sm font-bold mb-2">
  //                     Start Date
  //                   </label>
  //                   <input
  //                     className=" border rounded w-full py-2 px-3 text-black border-slate-900"
  //                     type="Date"
  //                     name="faciStartdate"
  //                     id="faciStartdate"
  //                     onChange={formik.handleChange}
  //                     value={formik.values.faciStartdate}
  //                   />
  //                 </div>
  //                 <div className="mb-4">
  //                   <label className="block text-black text-sm font-bold mb-2">
  //                     Description
  //                   </label>
  //                   <input
  //                     className=" border rounded w-full py-2 px-3 text-black border-slate-900"
  //                     type="text"
  //                     name="faciDescription"
  //                     id="faciDescription"
  //                     onChange={formik.handleChange}
  //                     placeholder="Description"
  //                     value={formik.values.faciDescription}
  //                   />
  //                 </div>
  //               </div>
  //               <div className="py-4 px-8">
  //                 <div className="mb-4">
  //                   <label className="block text-black text-sm font-bold mb-2">
  //                     Category
  //                   </label>
  //                   <select
  //                     name="faciCagro"
  //                     id="faciCagro"
  //                     onChange={formik.handleChange}
  //                     value={formik.values.faciCagro}
  //                     onBlur={formik.handleBlur}
  //                     className="border rounded w-full py-2 px-3 text-blue-950 border-slate-900"
  //                   >
  //                     <option
  //                       value=""
  //                       selected
  //                       disabled
  //                       hidden
  //                       className="text-black"
  //                     >
  //                       Choose Category
  //                     </option>
  //                     {categoryGroups.map((item: any) => (
  //                       <option
  //                         key={item.cagroId}
  //                         value={item.cagroId}
  //                         className="text-black"
  //                       >
  //                         {item.cagroName}
  //                       </option>
  //                     ))}
  //                   </select>
  //                 </div>
  //                 <div className="mb-4">
  //                   <label className="block text-black text-sm font-bold mb-2">
  //                     Measure Unit
  //                   </label>
  //                   <select
  //                     name="faciMeasureUnit"
  //                     id="faciMeasureUnit"
  //                     onChange={formik.handleChange}
  //                     value={formik.values.faciMeasureUnit}
  //                     onBlur={formik.handleBlur}
  //                     className=" border rounded w-full py-2 px-3 text-black border-slate-900"
  //                   >
  //                     <option
  //                       value=""
  //                       selected
  //                       disabled
  //                       hidden
  //                       className="text-black"
  //                     >
  //                       Choose Measure Unit
  //                     </option>
  //                     <option value={"Room"}>Room</option>
  //                     <option value={"Beds"}>Beds</option>
  //                     <option value={"People"}>People</option>
  //                   </select>
  //                 </div>
  //                 <div className="mb-4">
  //                   <label className="block text-black text-sm font-bold mb-2">
  //                     High Price
  //                   </label>
  //                   <input
  //                     className=" border rounded w-full py-2 px-3 text-black border-slate-900"
  //                     type="text"
  //                     name="faciHighPrice"
  //                     id="faciHighPrice"
  //                     onChange={formik.handleChange}
  //                     value={formik.values.faciHighPrice}
  //                     placeholder="High Price"
  //                   />
  //                 </div>
  //                 <div className="mb-4">
  //                   <label className="block text-black text-sm font-bold mb-2">
  //                     Tax %
  //                   </label>
  //                   <input
  //                     className=" border rounded w-full py-2 px-3 text-black border-slate-900"
  //                     type="text"
  //                     name="faciTaxRate"
  //                     id="faciTaxRate"
  //                     onChange={formik.handleChange}
  //                     value={formik.values.faciTaxRate}
  //                     placeholder="Tax %"
  //                   />
  //                 </div>
  //                 <div className="mb-4">
  //                   <label className="block text-black text-sm font-bold mb-2">
  //                     End Date
  //                   </label>
  //                   <input
  //                     className=" border rounded w-full py-2 px-3 text-black border-slate-900"
  //                     type="Date"
  //                     name="faciEnddate"
  //                     id="faciEnddate"
  //                     onChange={formik.handleChange}
  //                     value={formik.values.faciEnddate}
  //                   />
  //                 </div>
  //               </div>
  //             </div>
  //             <div className="mb-4 mx-5">
  //               <button
  //                 className="w-full mb-3 rounded-full py-1 px-24 bg-transparent text-slate-900 font-semibold border border-slate-900 hover:bg-slate-900 hover:text-white hover:border-transparent "
  //                 type="submit"
  //               >
  //                 Save
  //               </button>
  //             </div>
  //           </form>
  //         </FormikProvider>

  //         <button
  //           onClick={() => router.back()}
  //           className="w-full mb-3  rounded-full py-1 px-24 bg-slate-900 text-white font-semibold border border-slate-900 hover:bg-red-800 hover:text-white hover:border-red-800"
  //         >
  //           Cancel
  //         </button>
  //       </div>
  //     </div>
  //   </div>
  // );
}
