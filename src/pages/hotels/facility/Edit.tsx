import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  EditFacilitiesRequest,
  FindFacilitiesRequest,
} from "../../../redux/action/hotel/facilitiesAction";
import { GetCategoryGroupRequest } from "../../../redux/action/master/categoryGroupAction";
import { AddFacPriceHistRequest } from "../../../redux/action/hotel/facilityPriceHistoryAction";
import { useFormik, FormikProvider } from "formik";
import { useRouter } from "next/router";

export default function Edit() {
  const dispatch = useDispatch();
  const router = useRouter();
  const { facility } = useSelector((state: any) => state.facilitiesState);
  const { categoryGroups } = useSelector(
    (state: any) => state.categoryGroupState
  );

  useEffect(() => {
    dispatch(FindFacilitiesRequest(router.query.id));
    dispatch(GetCategoryGroupRequest());
  }, [dispatch, router.query.id]);

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      faciId: router.query.id,
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
    onSubmit: async (values) => {
      const payload = {
        faciId: router.query.id,
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

      const priceHistPayload = {
        faphFaci: router.query.id,
        faphStartdate:
          facility.faciStartdate && facility.faciStartdate.substring(0, 10),
        faphEnddate:
          facility.faciEnddate && facility.faciEnddate.substring(0, 10),
        faphLowPrice: facility.faciLowPrice,
        faphHighPrice: facility.faciHighPrice,
        faphDiscount: facility.faciDiscount,
        faphTaxRate: facility.faciTaxRate,
        faphRatePrice: facility.faciRatePrice,
        faphUserId: 1,
      };
      dispatch(EditFacilitiesRequest(payload));
      console.log(priceHistPayload);

      dispatch(AddFacPriceHistRequest(priceHistPayload));
      window.alert("Data Successfully Insert");
      router.back();
    },
  });
  return (
    <div className="bg-grey-500 ">
      <div className="flex items-center justify-center my-10">
        <div className=" mx-auto bg-white rounded shadow border-slate-900">
          <div className="mx-16 py-4 px-8 text-black text-xl font-bold border-b border-grey-500 text-center">
            <h1>Facility {router.query.id}</h1>
          </div>
          <FormikProvider value={formik}>
            <form
              name="student_application"
              id="student_application"
              onSubmit={formik.handleSubmit}
            >
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
              <div className="mb-4 mx-5">
                <button
                  className="w-full mb-3 rounded-full py-1 px-24 bg-transparent text-slate-900 font-semibold border border-slate-900 hover:bg-slate-900 hover:text-white hover:border-transparent "
                  type="submit"
                >
                  Save
                </button>
              </div>
            </form>
          </FormikProvider>

          <button
            onClick={() => router.back()}
            className="w-full mb-3  rounded-full py-1 px-24 bg-slate-900 text-white font-semibold border border-slate-900 hover:bg-red-800 hover:text-white hover:border-red-800"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
