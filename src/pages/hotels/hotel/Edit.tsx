import React, { useEffect, useState } from "react";
import { FormikProvider, useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import {
  EditHotelsRequest,
  FindHotelsRequest,
} from "../../../redux/action/hotel/hotelsAction";
import {
  GetAddressRequest,
  FindAddressRequest,
} from "../../../redux/action/master/addressAction";
import { useRouter } from "next/router";

export default function Edit() {
  const dispatch = useDispatch();
  const router = useRouter();
  const { hotel } = useSelector((state: any) => state.hotelsState);
  const { addresses, address } = useSelector(
    (state: any) => state.addressState
  );
  const [city, setCity] = useState<number>(
    hotel.hotelAddr && hotel.hotelAddr.addrId
  );

  useEffect(() => {
    if (router.isReady) {
      dispatch(FindHotelsRequest(router.query.id));
      dispatch(GetAddressRequest());
      dispatch(FindAddressRequest(city));
    }
  }, [dispatch, router.query.id, city, router.isReady]);

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      hotelId: router.query.id,
      hotelName: hotel.hotelName,
      hotelDescription: hotel.hotelDescription,
      hotelPhonenumber: hotel.hotelPhonenumber,
      hotelAddr: hotel.hotelAddr && hotel.hotelAddr.addrId,
    },
    onSubmit: async (values) => {
      const payload = {
        hotelId: values.hotelId,
        hotelName: values.hotelName,
        hotelDescription: values.hotelDescription,
        hotelPhonenumber: values.hotelPhonenumber,
        hotelAddr: city,
      };
      dispatch(EditHotelsRequest(payload));
      window.alert("Data Successfully Insert");
      router.push("/hotels");
    },
  });

  const handleChange = (e: any) => {
    setCity(e.target.value);
  };

  return (
    <div className="bg-grey-500 ">
      <div className="flex items-center justify-center h-screen ">
        <div className="w-96 mx-auto bg-white rounded shadow border-slate-900">
          <div className="mx-16 py-4 px-8 text-black text-xl font-bold border-b border-grey-500 text-center">
            <h1>Product Category</h1>
          </div>
          <FormikProvider value={formik}>
            <form
              name="student_application"
              id="student_application"
              onSubmit={formik.handleSubmit}
            >
              <div className="py-4 px-8">
                <div className="mb-4">
                  <label className="block text-black text-sm font-bold mb-2">
                    Name
                  </label>
                  <input
                    className=" border rounded w-full py-2 px-3 text-black border-slate-900 "
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
                  <p className="border rounded w-full py-2 px-3 text-blue-950 border-slate-900">
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
                <div className="mb-4">
                  <button
                    className="w-full mb-3 rounded-full py-1 px-24 bg-transparent text-slate-900 font-semibold border border-slate-900 hover:bg-slate-900 hover:text-white hover:border-transparent "
                    type="submit"
                  >
                    Save
                  </button>
                </div>
              </div>
            </form>
          </FormikProvider>
          <button
            onClick={() => router.push("/hotels")}
            className="w-full mb-3 rounded-full py-1 px-24 bg-slate-900 text-white font-semibold border border-slate-900 hover:bg-red-800 hover:text-white hover:border-red-800"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
