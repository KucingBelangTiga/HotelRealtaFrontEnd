import React, { useEffect, useState } from "react";
import Layout from "@/src/components/layout";
import LayoutMaster from "../layout";
import { useDispatch, useSelector } from "react-redux";
import { GetPageCategoryRequest } from "../../../redux/action/master/categoryAction";

import AddCategory from "./AddCategory";
import DeleteCategory from "./DeleteCategory";
import EditCategory from "./EditCategory";
import Pagination from "@/src/components/component/Pagination";

export default function Index() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [id, setId] = useState<number>(0);
  const [page, setPage] = useState<number>(1);
  const [refresh, setRefresh] = useState(false);
  const [kebabMenu, setKebabMenu] = useState<boolean>(false);
  const { categoryPage } = useSelector((state: any) => state.categoryState);

  useEffect(() => {
    const payload = {
      page: page,
    };
    dispatch(GetPageCategoryRequest(payload));
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
            <h2 className="text-center my-5 font-bold text-3xl">
              Category Group
            </h2>
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
                    Type
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-4 font-medium text-gray-900"
                  ></th>
                  <th
                    scope="col"
                    className="px-6 py-4 font-medium text-gray-900 text-center"
                  >
                    <AddCategory setRefresh={setRefresh} />
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 border-t border-gray-100">
                {(categoryPage.items || []).map((item: any) => (
                  <tr className="hover:bg-gray-50" key={item.pocaId}>
                    <th className="flex gap-3 px-6 py-4 font-normal text-gray-900">
                      <div className="text-sm">
                        <div className="font-medium text-gray-700">
                          {item.pocaId}
                        </div>
                      </div>
                    </th>
                    <td className="px-6 py-4">{item.pocaCagro.cagroName}</td>

                    <td className="px-6 py-4">{item.pocaCagro.cagroType}</td>
                    <td>
                      <div className="flex justify-end gap-4 relative">
                        <button
                          x-data="{ tooltip: 'Edite' }"
                          className="text-coldBlue hover:bg-coldBlue hover:text-white p-2 rounded-full"
                          onClick={() =>
                            displayKebabMenu(item.pocaCagro.cagroId)
                          }
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
                        {item.pocaCagro.cagroId === id && kebabMenu && (
                          <div className="absolute top-12 border-coldBlue text-coldBlue w-96 z-30">
                            <p className="p-5 bg-white  absolute right-3  border-coldBlue border-solid border-2 rounded-md text-center">
                              {item.pocaCagro.cagroDescription}
                            </p>
                          </div>
                        )}
                      </div>
                    </td>
                    <td>
                      <div className="text-center py-3">
                        <EditCategory
                          id={item.pocaCagro.cagroId}
                          setRefresh={setRefresh}
                          name={item.pocaCagro.cagroName}
                          category={item.pocaPoli}
                          policyId={item.pocaId}
                        />
                        <DeleteCategory
                          id={item.cagroId}
                          name={item.cagroName}
                          setRefresh={setRefresh}
                        />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {categoryPage.meta && (
              <Pagination
                currentPage={categoryPage.meta.currentPage}
                totalPages={categoryPage.meta.totalPages}
                setpage={setPage}
                page={page}
                items={categoryPage.items}
              />
            )}
          </div>
        )}
      </LayoutMaster>
    </Layout>
  );
}
