import React, { useEffect, useState } from "react";
import Layout from "@/src/components/layout";
import LayoutMaster from "../layout";
import { useDispatch, useSelector } from "react-redux";
import { GetPagePolicyRequest } from "../../../redux/action/master/policyAction";

import AddPolicy from "./AddPolicy";
import EditPolicy from "./EditPolicy";
import DeletePolicy from "./DeletePolicy";
import Pagination from "@/src/components/component/Pagination";

export default function Index() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [id, setId] = useState<number>(0);
  const [page, setPage] = useState<number>(1);
  const [refresh, setRefresh] = useState(false);
  const [kebabMenu, setKebabMenu] = useState<boolean>(false);
  const { policyPage } = useSelector((state: any) => state.policyState);

  useEffect(() => {
    const payload = {
      page: page,
    };
    dispatch(GetPagePolicyRequest(payload));
    setRefresh(false);
    setLoading(true);
  }, [dispatch, refresh, page]);

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
            <h2 className="text-center my-5 font-bold text-3xl">Policy</h2>
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
                    className="px-6 py-4 font-medium text-gray-900 text-center"
                  >
                    <AddPolicy setRefresh={setRefresh} />
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 border-t border-gray-100">
                {(policyPage.items || []).map((item: any) => (
                  <tr className="hover:bg-gray-50" key={item.poliId}>
                    <th className="flex gap-3 px-6 py-4 font-normal text-gray-900">
                      <div className="text-sm">
                        <div className="font-medium text-gray-700">
                          {item.poliId}
                        </div>
                      </div>
                    </th>
                    <td className="px-6 py-4">{item.poliName}</td>

                    <td className="px-6 py-4">
                      <div className="flex justify-end gap-4 relative">
                        <button
                          x-data="{ tooltip: 'Edite' }"
                          className="text-coldBlue hover:bg-coldBlue hover:text-white p-2 rounded-full"
                          onClick={() => displayKebabMenu(item.poliId)}
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
                        {item.poliId === id && kebabMenu && (
                          <div className="absolute top-12 border-coldBlue text-coldBlue w-96 z-30">
                            <p className="p-5 bg-white  absolute right-3  border-coldBlue border-solid border-2 rounded-md text-center">
                              {item.poliDescription}
                            </p>
                          </div>
                        )}
                      </div>
                    </td>
                    <td>
                      <div className="text-center py-3">
                        <EditPolicy id={item.poliId} setRefresh={setRefresh} />
                        <DeletePolicy
                          id={item.poliId}
                          name={item.poliName}
                          setRefresh={setRefresh}
                        />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {policyPage.meta && (
              <Pagination
                currentPage={policyPage.meta.currentPage}
                totalPages={policyPage.meta.totalPages}
                setpage={setPage}
                page={page}
                items={policyPage.items}
              />
            )}
          </div>
        )}
      </LayoutMaster>
    </Layout>
  );
}
