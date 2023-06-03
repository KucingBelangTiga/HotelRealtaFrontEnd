import React, { useEffect, useState } from "react";
import Layout from "@/src/components/layout";
import LayoutMaster from "../layout";
import { useDispatch, useSelector } from "react-redux";
import { GetPageServiceTasksRequest } from "../../../redux/action/master/serviceTasksAction";

import AddServiceTask from "./AddServiceTask";
import EditServiceTask from "./EditServiceTask";
import DeleteServiceTask from "./DeleteServiceTask";
import Pagination from "@/src/components/component/Pagination";

export default function Index() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState<number>(1);
  const [refresh, setRefresh] = useState(false);

  const { serviceTasksPage } = useSelector(
    (state: any) => state.serviceTasksState
  );

  useEffect(() => {
    const payload = {
      page: page,
    };
    dispatch(GetPageServiceTasksRequest(payload));
    setRefresh(false);
    setLoading(true);
  }, [dispatch, refresh, page]);

  return (
    <Layout>
      <LayoutMaster>
        {!loading ? (
          <h1>loading</h1>
        ) : (
          <div className="min-h-screen">
            <h2 className="text-center my-5 font-bold text-3xl">Service</h2>
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
                  >
                    Sequence Order
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-4 font-medium text-gray-900 text-right"
                  >
                    <AddServiceTask setRefresh={setRefresh} />
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 border-t border-gray-100">
                {(serviceTasksPage.items || []).map((item: any) => (
                  <tr className="hover:bg-gray-50" key={item.setaId}>
                    <th className="flex gap-3 px-6 py-4 font-normal text-gray-900">
                      <div className="text-sm">
                        <div className="font-medium text-gray-700">
                          {item.setaId}
                        </div>
                      </div>
                    </th>
                    <td className="px-6 py-4">{item.setaName}</td>

                    <td className="px-6 py-4">{item.setSeq}</td>
                    <td>
                      <div className="text-center py-3">
                        <EditServiceTask
                          id={item.setaId}
                          setRefresh={setRefresh}
                          name={item.setaName}
                        />
                        <DeleteServiceTask
                          id={item.setaId}
                          name={item.setaName}
                          setRefresh={setRefresh}
                        />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {serviceTasksPage.meta && (
              <Pagination
                currentPage={serviceTasksPage.meta.currentPage}
                totalPages={serviceTasksPage.meta.totalPages}
                setpage={setPage}
                page={page}
                items={serviceTasksPage.items}
              />
            )}
          </div>
        )}
      </LayoutMaster>
    </Layout>
  );
}
