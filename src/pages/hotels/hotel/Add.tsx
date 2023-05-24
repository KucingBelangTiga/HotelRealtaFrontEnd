import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddHotelsRequest } from "../../../redux/action/hotel/hotelsAction";
import {
  GetAddressRequest,
  FindAddressRequest,
} from "../../../redux/action/master/addressAction";
import { useFormik, FormikProvider } from "formik";
import * as Yup from "yup";

export default function Add(props: any) {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();
  const [city, setCity] = useState<number>();
  const { addresses, address } = useSelector(
    (state: any) => state.addressState
  );

  useEffect(() => {
    dispatch(GetAddressRequest());
    dispatch(FindAddressRequest(city));
  }, [dispatch, city]);

  const formik = useFormik({
    initialValues: {
      hotelName: "",
      hotelDescription: "",
      hotelPhonenumber: "",
      hotelAddr: city,
    },
    validationSchema: Yup.object().shape({
      hotelName: Yup.string()
        .min(2, "Too Short!")
        .max(84, "Too Long!")
        .required("Required"),
      hotelDescription: Yup.string()
        .min(2, "Too Short!")
        .max(499, "Too Long!")
        .required("Required"),
      hotelPhonenumber: Yup.string()
        .min(3, "Too Short!")
        .max(24, "Too Long!")
        .required("Required")
        .matches(/^\+?[1-9][0-9]{3,14}$/, "Phone number is not valid"),
    }),
    onSubmit: async (values) => {
      const payload = {
        hotelName: values.hotelName,
        hotelDescription: values.hotelDescription,
        hotelPhonenumber: values.hotelPhonenumber,
        hotelModifiedDate: new Date(),
        hotelAddr: city,
      };

      dispatch(AddHotelsRequest(payload));
      props.setRefresh(true);
      setShowModal(false);
    },
  });

  const handleChange = (e: any) => {
    setCity(e.target.value);
  };

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
            <div className="relative w-2/4 my-6 mx-auto min-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">Add Hotel</h3>
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
                      <div className="py-4 px-8">
                        <div className="mb-4">
                          <label className="block text-black text-sm font-bold mb-2">
                            Name
                            <span className="text-red-400">
                              &nbsp; * {formik.errors.hotelName}
                            </span>
                          </label>
                          <input
                            className=" border rounded w-full min-w-3xl py-2 px-3 text-black border-slate-900 "
                            type="text"
                            name="hotelName"
                            id="hotelName"
                            onChange={formik.handleChange}
                            value={formik.values.hotelName}
                            placeholder="Name"
                          />
                        </div>

                        <div className="mb-4">
                          <label className="block text-black text-sm font-bold mb-2">
                            Description
                            <span className="text-red-400">
                              &nbsp; * {formik.errors.hotelDescription}
                            </span>
                          </label>
                          <input
                            className=" border rounded w-full py-2 px-3 text-black border-slate-900"
                            type="text"
                            name="hotelDescription"
                            id="hotelDescription"
                            onChange={formik.handleChange}
                            value={formik.values.hotelDescription}
                            placeholder="Description"
                          />
                        </div>

                        <div className="mb-4">
                          <label className="block text-black text-sm font-bold mb-2">
                            PhoneNumber
                            <span className="text-red-400">
                              &nbsp; * {formik.errors.hotelPhonenumber}
                            </span>
                          </label>
                          <input
                            className=" border rounded w-full py-2 px-3 text-black border-slate-900"
                            type="text"
                            name="hotelPhonenumber"
                            id="hotelPhonenumber"
                            onChange={formik.handleChange}
                            value={formik.values.hotelPhonenumber}
                            placeholder="Phone Number"
                          />
                        </div>
                        <div className="mb-4">
                          <label className="block text-black text-sm font-bold mb-2">
                            City
                          </label>
                          <select
                            name="hotelAddr"
                            id="hotelAddr"
                            required
                            onChange={handleChange}
                            value={city}
                            onBlur={formik.handleBlur}
                            className="border rounded w-full py-2 px-3 text-blue-950 border-slate-900"
                          >
                            <option
                              value=""
                              selected
                              disabled
                              hidden
                              className="text-black "
                            >
                              Search City
                            </option>

                            {addresses.map((item: any) => (
                              <option
                                key={item.addrId}
                                value={item.addrId}
                                className="text-black"
                              >
                                {item.addrLine2}
                              </option>
                            ))}
                          </select>
                        </div>
                        <div className="mb-4 text-black">
                          <p className="block text-black text-sm font-bold mb-2">
                            Description
                          </p>
                          <p className="border rounded w-full py-2 px-3 text-blue-950 border-slate-900 break-words">
                            {city === undefined
                              ? "Description"
                              : `${address.addrLine1}, ${address.addrLine2}, ${
                                  address.addrProv && address.addrProv.provName
                                }, ${address.addrPostalCode}, ${
                                  address.addrProv &&
                                  address.addrProv.provCountry &&
                                  address.addrProv.provCountry.countryName
                                }`}
                          </p>
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
