import React, { useEffect, useState } from "react";
import Layout from "@/src/components/layout";
import LayoutMaster from "../layout";
import { useDispatch, useSelector } from "react-redux";
import { GetPagePriceItemsRequest } from "../../../redux/action/master/priceItemsAction";

import AddPriceItems from "./AddPriceItems";
import EditPriceItems from "./EditPriceItems";
import DeletePriceItems from "./DeletePriceItems";
import Pagination from "@/src/components/component/Pagination";

export default function Index() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const [page, setPage] = useState<number>(1);
  const [name, setName] = useState<string>("");
  const [type, setType] = useState<string>("");
  const [refresh, setRefresh] = useState(false);

  const [id, setId] = useState<number>(0);
  const [kebabMenu, setKebabMenu] = useState<boolean>(false);

  const { priceItemPage } = useSelector((state: any) => state.priceItemsState);

  useEffect(() => {
    const payload = {
      page: page,
      name: name,
      type: type,
    };
    dispatch(GetPagePriceItemsRequest(payload));
    setRefresh(false);
    setLoading(true);
  }, [dispatch, refresh, page, name, type]);

  const displayKebabMenu = (id: number) => {
    setId(id);
    setKebabMenu(!kebabMenu);
  };

  return (
    <Layout>
      <LayoutMaster>
        {!loading ? (
          <h1>loading</h1>
        ) : (
          <div className="min-h-screen">
            <h2 className="text-center my-5 font-bold text-3xl">Price Items</h2>
            <div className="flex gap-4">
              <div className="relative my-5 w-full">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none ">
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5 text-gray-500 dark:text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    ></path>
                  </svg>
                </div>
                <input
                  type="search"
                  id="default-search"
                  className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Search Name"
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                />
              </div>
              <select
                id="countries"
                onChange={(e) => setType(e.target.value)}
                value={type}
                className="w-96 md:w-14rem px-4 md:w-14rem my-5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option selected value={""}>
                  Choose a Type
                </option>
                <option value="SNACK">Snack</option>
                <option value="FACILITY">Facility</option>
                <option value="SOFTDRINK">Softdrink</option>
                <option value="FOOD">Food</option>
                <option value="SERVICE">Service</option>
              </select>
            </div>
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
                    className="px-6 py-4 font-medium text-gray-900"
                  ></th>
                  <th
                    scope="col"
                    className="px-6 py-4 font-medium text-gray-900"
                  >
                    Price
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-4 font-medium text-gray-900"
                  >
                    Type
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-4 font-medium text-gray-900 text-center"
                  >
                    <AddPriceItems setRefresh={setRefresh} />
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 border-t border-gray-100">
                {(priceItemPage.items || []).map((item: any) => (
                  <tr className="hover:bg-gray-50" key={item.pritId}>
                    <th className="flex gap-3 px-6 py-4 font-normal text-gray-900">
                      <div className="text-sm">
                        <div className="font-medium text-gray-700">
                          {item.pritId}
                        </div>
                      </div>
                    </th>
                    <td className="px-6 py-4">{item.pritName}</td>

                    <td className="px-6 py-4">
                      <div className="flex justify-end gap-4 relative">
                        <button
                          x-data="{ tooltip: 'Edite' }"
                          className="text-coldBlue hover:bg-coldBlue hover:text-white p-2 rounded-full"
                          onClick={() => displayKebabMenu(item.pritId)}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                            fill="currentColor"
                            className="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                          >
                            <path d="M470.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 256 265.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160zm-352 160l160-160c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L210.7 256 73.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0z" />
                          </svg>
                        </button>
                        {item.pritId === id && kebabMenu && (
                          <div className="absolute top-12 border-coldBlue text-coldBlue w-96 z-30">
                            <p className="p-5 bg-white  absolute right-3  border-coldBlue border-solid border-2 rounded-md text-center">
                              {item.pritDescription}
                            </p>
                          </div>
                        )}
                      </div>
                    </td>
                    <td className="px-6 py-4">{item.pritPrice}</td>
                    <td className="px-6 py-4">{item.pritType}</td>
                    <td>
                      <div className="text-center py-3">
                        <EditPriceItems
                          id={item.pritId}
                          setRefresh={setRefresh}
                          name={item.pritName}
                        />
                        <DeletePriceItems
                          id={item.pritId}
                          name={item.pritName}
                          setRefresh={setRefresh}
                        />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {priceItemPage.meta && (
              <Pagination
                currentPage={priceItemPage.meta.currentPage}
                totalPages={priceItemPage.meta.totalPages}
                setpage={setPage}
                page={page}
                items={priceItemPage.items}
              />
            )}
          </div>
        )}
      </LayoutMaster>
    </Layout>
  );
}
