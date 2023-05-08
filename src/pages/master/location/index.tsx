import React, { useEffect, useState } from "react";
import Layout from "@/src/components/layout";
import { useDispatch, useSelector } from "react-redux";
import { GetRegionsRequest } from "../../../redux/action/master/regionsAction";
import { GetCountriesRequest } from "../../../redux/action/master/countriesAction";
import { GetProvincesRequest } from "../../../redux/action/master/provincesAction";
import { GetCityRequest } from "../../../redux/action/master/cityAction";

import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.css";

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

export default function Index() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [id, setId] = useState<number>(0);
  const [first, setFirst] = useState(0);
  const [refresh, setRefresh] = useState(false);

  const { regions } = useSelector((state: any) => state.regionsState);
  const { countries } = useSelector((state: any) => state.countriesState);
  const { provinces } = useSelector((state: any) => state.provincesState);
  const { cities } = useSelector((state: any) => state.cityState);

  const [selectedRegion, setSelectedRegion] = useState(regions[0]);
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);

  useEffect(() => {
    dispatch(GetRegionsRequest());
    dispatch(GetCountriesRequest());
    dispatch(GetProvincesRequest());
    dispatch(GetCityRequest());
    setRefresh(false);
    setLoading(true);
  }, [dispatch, refresh]);

  const kebabRegion = (rowData: any) => {
    return (
      <div>
        <Edit id={rowData.regionCode} setRefresh={setRefresh} />
        <Delete
          id={rowData.regionCode}
          name={rowData.regionName}
          setRefresh={setRefresh}
        />
      </div>
    );
  };

  const kebabCountry = (rowData: any) => {
    return (
      <div>
        <EditCountry
          id={rowData.countryId}
          setRefresh={setRefresh}
          region={selectedRegion}
        />
        <DeleteCountry
          id={rowData.countryId}
          name={rowData.countryName}
          setRefresh={setRefresh}
        />
      </div>
    );
  };

  const kebabProvince = (rowData: any) => {
    return (
      <div>
        <EditProvince
          id={rowData.provId}
          setRefresh={setRefresh}
          country={selectedCountry}
        />
        <DeleteProvince
          id={rowData.provId}
          name={rowData.provName}
          setRefresh={setRefresh}
        />
      </div>
    );
  };

  return (
    <div>
      <Layout>
        <LayoutMaster>
          {!loading ? (
            <h1>loading</h1>
          ) : (
            <div className="min-h-screen">
              <h2 className="text-center my-5 font-bold text-3xl">Regions</h2>
              <DataTable
                value={regions}
                stripedRows
                tableStyle={{ minWidth: "50rem" }}
                className="bg-white text-black"
                paginator
                rows={5}
                first={first}
                selectionMode="single"
                selection={selectedRegion}
                onSelectionChange={(e) => setSelectedRegion(e.value)}
              >
                {/* <Column
                  selectionMode="single"
                  headerStyle={{ width: "3rem" }}
                ></Column> */}
                <Column field="regionCode" header="Code"></Column>
                <Column field="regionName" header="Name"></Column>
                <Column
                  field="regionCode"
                  header={<Add setRefresh={setRefresh} />}
                  body={kebabRegion}
                ></Column>
              </DataTable>
              <h2 className="text-center my-5 font-bold text-3xl">Countries</h2>

              <DataTable
                value={countries}
                stripedRows
                tableStyle={{ minWidth: "50rem" }}
                className="bg-white text-black"
                paginator
                rows={5}
                first={first}
                selectionMode="single"
                selection={selectedCountry}
                onSelectionChange={(e) => setSelectedCountry(e.value)}
              >
                {/* <Column
                  selectionMode="single"
                  headerStyle={{ width: "3rem" }}
                ></Column> */}
                <Column field="countryId" header="Id"></Column>
                <Column field="countryName" header="Name"></Column>
                <Column
                  field="countryId"
                  header={
                    <AddCountry
                      setRefresh={setRefresh}
                      region={selectedRegion}
                    />
                  }
                  body={kebabCountry}
                ></Column>
              </DataTable>

              <h2 className="text-center my-5 font-bold text-3xl">Provinces</h2>

              <DataTable
                value={provinces}
                stripedRows
                tableStyle={{ minWidth: "50rem" }}
                className="bg-white text-black"
                paginator
                rows={5}
                first={first}
              >
                <Column field="provId" header="Id"></Column>
                <Column field="provName" header="Name"></Column>
                <Column
                  field="provId"
                  header={
                    <AddProvince
                      setRefresh={setRefresh}
                      country={selectedCountry}
                    />
                  }
                  body={kebabProvince}
                ></Column>
              </DataTable>

              <h2 className="text-center my-5 font-bold text-3xl">City</h2>

              <DataTable
                value={cities}
                stripedRows
                tableStyle={{ minWidth: "50rem" }}
                className="bg-white text-black"
                paginator
                rows={5}
                first={first}
              >
                <Column field="addrId" header="Id"></Column>
                <Column field="addrLine2" header="Name"></Column>
                {/* <Column
    field="addrId"
    header={<Add setRefresh={setRefresh} />}
    body={kebab}
  ></Column> */}
              </DataTable>
            </div>
          )}
        </LayoutMaster>
      </Layout>
    </div>
  );
}
