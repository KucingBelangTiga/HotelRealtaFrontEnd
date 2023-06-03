import React, { useEffect, useState } from "react";
import Layout from "@/src/components/layout";
import { useDispatch, useSelector } from "react-redux";
import { GetPageRegionsRequest } from "../../../redux/action/master/regionsAction";
import { GetPageCountriesRequest } from "../../../redux/action/master/countriesAction";
import { GetPageProvincesRequest } from "../../../redux/action/master/provincesAction";
import { GetPageCityRequest } from "../../../redux/action/master/cityAction";

import Add from "./regions/Add";
import Edit from "./regions/Edit";
import Delete from "./regions/Delete";
import LayoutMaster from "../layout";
import AddCountry from "./countries/AddCountry";
import EditCountry from "./countries/EditCountry";
import DeleteCountry from "./countries/DeleteCountry";
import AddProvince from "./provinces/AddProvince";
import EditProvince from "./provinces/EditProvince";
import DeleteProvince from "./provinces/DeleteProvince";
import AddCity from "./city/AddCity";
import EditCity from "./city/EditCity";
import DeleteCity from "./city/DeleteCity";
import Pagination from "@/src/components/component/Pagination";

export default function Index() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [pageRegion, setPageRegion] = useState<number>(1);
  const [pageCountry, setPageCountry] = useState<number>(1);
  const [pageProvince, setPageProvince] = useState<number>(1);
  const [pageCity, setPageCity] = useState<number>(1);
  const [refresh, setRefresh] = useState(false);

  const { regionPage } = useSelector((state: any) => state.regionsState);
  const { countryPage } = useSelector((state: any) => state.countriesState);
  const { provincePage } = useSelector((state: any) => state.provincesState);
  const { cityPage } = useSelector((state: any) => state.cityState);

  const [selectedRegion, setSelectedRegion] = useState(regionPage[0]);
  const [selectedCountry, setSelectedCountry] = useState(countryPage[0]);
  const [selectedProvince, setSelectedProvince] = useState(provincePage[0]);

  useEffect(() => {
    const payloadRegion = {
      page: pageRegion,
    };
    const payloadCountry = {
      page: pageCountry,
    };
    const payloadProvince = {
      page: pageProvince,
    };
    const payloadCity = {
      page: pageCity,
    };
    dispatch(GetPageRegionsRequest(payloadRegion));
    dispatch(GetPageCountriesRequest(payloadCountry));
    dispatch(GetPageProvincesRequest(payloadProvince));
    dispatch(GetPageCityRequest(payloadCity));
    setRefresh(false);
    setLoading(true);
  }, [dispatch, refresh, pageRegion, pageCountry, pageProvince, pageCity]);

  return (
    <div>
      <Layout>
        <LayoutMaster>
          {!loading ? (
            <h1>loading</h1>
          ) : (
            <div className="min-h-screen">
              <h2 className="text-center my-5 font-bold text-3xl">Regions</h2>
              <table className=" w-full border-collapse my-5 rounded-lg border border-gray-200 bg-white text-left text-sm text-gray-500 ">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 font-medium text-gray-900"></th>
                    <th
                      scope="col"
                      className="px-6 py-4 font-medium text-gray-900"
                    >
                      Code
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-4 font-medium text-gray-900"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-4 font-medium  text-gray-900 text-center"
                    >
                      <Add setRefresh={setRefresh} />
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 border-t border-gray-100">
                  {(regionPage.items || []).map((item: any) => (
                    <tr className="hover:bg-gray-50" key={item.regionCode}>
                      <td>
                        <div className="px-6 py-4">
                          <input
                            id="default-radio-1"
                            type="radio"
                            onClick={() => setSelectedRegion(item)}
                            name="default-radio"
                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                          />
                        </div>
                      </td>

                      <th className="px-6 py-4 font-normal text-gray-900">
                        <div className="text-sm">
                          <div className="font-medium text-gray-700">
                            {item.regionCode}
                          </div>
                        </div>
                      </th>
                      <td className="px-6 py-4">{item.regionName}</td>
                      <td>
                        <div className="text-center py-3">
                          <Edit
                            id={item.regionCode}
                            setRefresh={setRefresh}
                            name={item.regionName}
                          />
                          <Delete
                            id={item.regionCode}
                            name={item.regionName}
                            setRefresh={setRefresh}
                          />
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {regionPage.meta && (
                <Pagination
                  currentPage={regionPage.meta.currentPage}
                  totalPages={regionPage.meta.totalPages}
                  setpage={setPageRegion}
                  page={pageRegion}
                  items={regionPage.items}
                />
              )}

              <h2 className="text-center my-5 font-bold text-3xl">Countries</h2>

              <table className=" w-full border-collapse my-5 rounded-lg border border-gray-200 bg-white text-left text-sm text-gray-500 ">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 font-medium text-gray-900"></th>
                    <th
                      scope="col"
                      className="px-6 py-4 font-medium text-gray-900"
                    >
                      Id
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-4 font-medium text-gray-900"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-4 font-medium  text-gray-900 text-center"
                    >
                      <AddCountry
                        setRefresh={setRefresh}
                        region={selectedRegion}
                      />
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 border-t border-gray-100">
                  {(countryPage.items || []).map((item: any) => (
                    <tr className="hover:bg-gray-50" key={item.countryId}>
                      <td>
                        <div className="px-6 py-4">
                          <input
                            id="default-radio-1"
                            type="radio"
                            onClick={() => setSelectedCountry(item)}
                            name="default-radio"
                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                          />
                        </div>
                      </td>

                      <th className="px-6 py-4 font-normal text-gray-900">
                        <div className="text-sm">
                          <div className="font-medium text-gray-700">
                            {item.countryId}
                          </div>
                        </div>
                      </th>
                      <td className="px-6 py-4">{item.countryName}</td>
                      <td>
                        <div className="text-center py-3">
                          <EditCountry
                            id={item.countryId}
                            setRefresh={setRefresh}
                            region={selectedRegion}
                            name={item.countryName}
                          />
                          <DeleteCountry
                            id={item.countryId}
                            name={item.countryName}
                            setRefresh={setRefresh}
                          />
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {countryPage.meta && (
                <Pagination
                  currentPage={countryPage.meta.currentPage}
                  totalPages={countryPage.meta.totalPages}
                  setpage={setPageCountry}
                  page={pageCountry}
                  items={countryPage.items}
                />
              )}

              <h2 className="text-center my-5 font-bold text-3xl">Provinces</h2>

              <table className=" w-full border-collapse my-5 rounded-lg border border-gray-200 bg-white text-left text-sm text-gray-500 ">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 font-medium text-gray-900"></th>
                    <th
                      scope="col"
                      className="px-6 py-4 font-medium text-gray-900"
                    >
                      Id
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-4 font-medium text-gray-900"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-4 font-medium  text-gray-900 text-center"
                    >
                      <AddProvince
                        setRefresh={setRefresh}
                        country={selectedCountry}
                      />
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 border-t border-gray-100">
                  {(provincePage.items || []).map((item: any) => (
                    <tr className="hover:bg-gray-50" key={item.provId}>
                      <td>
                        <div className="px-6 py-4">
                          <input
                            id="default-radio-1"
                            type="radio"
                            onClick={() => setSelectedProvince(item)}
                            name="default-radio"
                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                          />
                        </div>
                      </td>

                      <th className="px-6 py-4 font-normal text-gray-900">
                        <div className="text-sm">
                          <div className="font-medium text-gray-700">
                            {item.provId}
                          </div>
                        </div>
                      </th>
                      <td className="px-6 py-4">{item.provName}</td>
                      <td>
                        <div className="text-center py-3">
                          <EditProvince
                            id={item.provId}
                            setRefresh={setRefresh}
                            country={selectedCountry}
                          />
                          <DeleteProvince
                            id={item.provId}
                            name={item.provName}
                            setRefresh={setRefresh}
                          />
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {provincePage.meta && (
                <Pagination
                  currentPage={provincePage.meta.currentPage}
                  totalPages={provincePage.meta.totalPages}
                  setpage={setPageProvince}
                  page={pageProvince}
                  items={provincePage.items}
                />
              )}

              <h2 className="text-center my-5 font-bold text-3xl">City</h2>
              <table className=" w-full border-collapse my-5 rounded-lg border border-gray-200 bg-white text-left text-sm text-gray-500 ">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-4 font-medium text-gray-900"
                    >
                      Id
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-4 font-medium text-gray-900"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-4 font-medium  text-gray-900 text-center"
                    >
                      <AddCity
                        setRefresh={setRefresh}
                        province={selectedProvince}
                      />
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 border-t border-gray-100">
                  {(cityPage.items || []).map((item: any) => (
                    <tr className="hover:bg-gray-50" key={item.addrId}>
                      <th className="px-6 py-4 font-normal text-gray-900">
                        <div className="text-sm">
                          <div className="font-medium text-gray-700">
                            {item.addrId}
                          </div>
                        </div>
                      </th>
                      <td className="px-6 py-4">{item.addrLine2}</td>
                      <td>
                        <div className="text-center py-3">
                          <EditCity
                            id={item.addrId}
                            setRefresh={setRefresh}
                            province={selectedProvince}
                          />
                          <DeleteCity
                            id={item.addrId}
                            name={item.addrLine2}
                            setRefresh={setRefresh}
                          />
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {cityPage.meta && (
                <Pagination
                  currentPage={cityPage.meta.currentPage}
                  totalPages={cityPage.meta.totalPages}
                  setpage={setPageCity}
                  page={pageCity}
                  items={cityPage.items}
                />
              )}
            </div>
          )}
        </LayoutMaster>
      </Layout>
    </div>
  );
}
