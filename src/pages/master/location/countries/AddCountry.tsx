import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  AddCountriesRequest,
  GetCountriesRequest,
} from "../../../../redux/action/master/countriesAction";
import { useFormik, FormikProvider } from "formik";
import * as Yup from "yup";

export default function AddCountry(props: any) {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();

  const { countries } = useSelector((state: any) => state.countriesState);

  useEffect(() => {
    dispatch(GetCountriesRequest());
  }, [dispatch]);

  const formik: any = useFormik({
    enableReinitialize: true,
    initialValues: {
      countryName: "",
      countryRegion:
        props.region === undefined ? null : props.region.regionCode,
    },
    validationSchema: Yup.object().shape({
      countryRegion: Yup.number().required("Required"),
      countryName: Yup.string()
        .min(1, "Too Short!")
        .max(54, "Too Long!")
        .required("Required")
        .test(
          "unique",
          "Country Name is already in use",
          function (value: any) {
            if (
              !countries.some(
                (item: any) =>
                  item.countryName.toLowerCase() === value.toLowerCase()
              )
            ) {
              return true;
            }
          }
        ),
    }),
    onSubmit: async (values) => {
      dispatch(AddCountriesRequest(values));
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
                  <h3 className="text-3xl font-semibold">Add Country</h3>
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
                            Region Name
                            <span className="text-red-400">
                              &nbsp; * {formik.errors.countryRegion}
                            </span>
                          </label>
                          <p className=" w-full py-2 text-black border-slate-900">
                            {props.region === undefined
                              ? "[Choose Region]"
                              : props.region.regionName}
                          </p>
                        </div>
                      </div>
                      <div className="py-4 px-8 ">
                        <div className="flex gap-10 ">
                          <label className="text-black py-2 font-bold w-full">
                            Country Name
                            <span className="text-red-400">
                              &nbsp; * {formik.errors.countryName}
                            </span>
                          </label>
                          <input
                            className="border rounded w-full py-2 px-3 text-black border-slate-900 "
                            type="text"
                            name="countryName"
                            id="countryName"
                            onChange={formik.handleChange}
                            value={formik.values.countryName}
                            placeholder="Country Name"
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
