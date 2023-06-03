import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  EditCategoryRequest,
  EditCategoryPolicyRequest,
  FindCategoryRequest,
  GetCategoryRequest,
} from "../../../redux/action/master/categoryAction";
import { GetPolicyRequest } from "../../../redux/action/master/policyAction";
import { useFormik, FormikProvider } from "formik";
import {
  AutoComplete,
  AutoCompleteCompleteEvent,
} from "primereact/autocomplete";
import { Toast } from "primereact/toast";
import * as Yup from "yup";

interface Policy {
  poliId: number;
  poliName: string;
  poliDescription: string;
}

export default function EditCategory(props: any) {
  const [showModal, setShowModal] = useState(false);
  const [id, setId] = useState<number>();
  const [previewImg, setPreviewImg] = useState<any>();
  const [upload, setUpload] = useState(false);
  const [items, setItems] = useState<Policy[]>([]);
  const [name, setName] = useState<string>("");
  const toast = useRef(null);
  const dispatch = useDispatch();
  const { policies } = useSelector((state: any) => state.policyState);
  const { category, categories } = useSelector(
    (state: any) => state.categoryState
  );
  const [selectedPolicy, setSelectedPolicy] = useState<Policy>(null);

  useEffect(() => {
    dispatch(GetCategoryRequest());
    dispatch(FindCategoryRequest(id));
  }, [dispatch, id, showModal]);

  const formik: any = useFormik({
    enableReinitialize: true,
    initialValues: {
      cagroId: props.id,
      cagroName: category.cagroName,
      cagroDescription: category.cagroDescription,
      cagroType: category.cagroType,
      pocaPoli:
        category.policyCategoryGroups && category.policyCategoryGroups.pocaId,
      file: category.cagroIcon,
    },
    validationSchema: Yup.object().shape({
      cagroName: Yup.string()
        .min(1, "Too Short!")
        .max(25, "Too Long!")
        .required("Required")
        .test("unique", "Name is already in use", function (value: any) {
          if (
            !categories.some(
              (item: any) =>
                item.cagroName.toLowerCase() === value.toLowerCase()
            ) ||
            props.name.toLowerCase() === value.toLowerCase()
          ) {
            return true;
          }
        }),
      cagroDescription: Yup.string()
        .min(1, "Too Short!")
        .max(254, "Too Long!")
        .required("Required"),
      cagroType: Yup.string().required("Required"),
      file: Yup.mixed()
        .required("A file is required")
        .test(
          "FILE_SIZE",
          "Uploaded file is too big.",
          (value: any) => !value || (value && value.size <= 1000000)
        )
        .test(
          "FILE_FORMAT",
          "Uploaded file has unsupported format.",
          (value: any) => {
            if (value) {
              return (
                value.type === "image/jpeg" ||
                value.type === "image/jpg" ||
                value.type === "image/png"
              );
            } else {
              return true;
            }
          }
        ),
    }),
    onSubmit: async (values) => {
      let payload = new FormData();
      payload.append("cagroId", values.cagroId);
      payload.append("cagroName", values.cagroName);
      payload.append("cagroDescription", values.cagroDescription);
      payload.append("cagroType", values.cagroType);
      payload.append("file", values.file);
      const payloadPolicy = {
        pocaId: props.policyId,
        poliId: selectedPolicy.poliId,
      };
      dispatch(EditCategoryRequest(payload));
      dispatch(EditCategoryPolicyRequest(payloadPolicy));
      props.setRefresh(true);
      setShowModal(false);
    },
  });

  const editButton = () => {
    setId(props.id);
    setName(props.name);
    setSelectedPolicy(props.category);
    setShowModal(true);
  };

  const modal = () => {
    props.setRefresh(true);
    setShowModal(false);
  };

  const uploadConfig = (name: any) => (event: any) => {
    let reader = new FileReader();
    const file = event.target.files[0];
    reader.onload = () => {
      formik.setFieldValue("file", file);
      setPreviewImg(reader.result);
    };
    reader.readAsDataURL(file);
    setUpload(true);
  };
  const onClear = (event: any) => {
    event.preventDefault();
    setPreviewImg(null);
    setUpload(false);
  };

  const search = (event: AutoCompleteCompleteEvent) => {
    setTimeout(() => {
      let _filteredPolicies;

      if (!event.query.trim().length) {
        _filteredPolicies = [...policies];
      } else {
        _filteredPolicies = policies.filter((item: any) => {
          return item.poliName
            .toLowerCase()
            .startsWith(event.query.toLowerCase());
        });
      }

      setItems(_filteredPolicies);
    }, 250);
  };

  const itemTemplate = (item: any) => {
    return (
      <div className="flex align-items-center">
        <div>{item.poliName}</div>
      </div>
    );
  };

  return (
    <>
      <button
        className="bg-emerald-700 text-white active:bg-emerald-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={editButton}
      >
        Edit
      </button>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">Edit Category</h3>
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
                            Category Name
                            <span className="text-red-400">
                              &nbsp; * {formik.errors.cagroName}
                            </span>
                          </label>
                          <input
                            className="border rounded w-full py-2 px-3 text-black border-slate-900 "
                            type="text"
                            name="cagroName"
                            id="cagroName"
                            onChange={formik.handleChange}
                            value={formik.values.cagroName}
                            placeholder="Category Name"
                          />
                        </div>
                      </div>
                      <div className="py-4 px-8 ">
                        <div className="flex gap-10 ">
                          <label className="text-black py-2 font-bold w-full">
                            Type
                            <span className="text-red-400">
                              &nbsp; * {formik.errors.cagroType}
                            </span>
                          </label>
                          <select
                            name="cagroType"
                            id="cagroType"
                            onChange={formik.handleChange}
                            value={formik.values.cagroType}
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
                              Choose Type
                            </option>
                            <option value={"Facility"}>Facility</option>
                            <option value={"Category"}>Category</option>
                            <option value={"Service"}>Service</option>
                          </select>
                        </div>
                      </div>
                      <div className="py-4 px-8 ">
                        <div className="flex gap-10 ">
                          <label className="py-2 text-black font-bold w-full">
                            Policy Rules
                            <span className="text-red-400">&nbsp; *</span>
                          </label>
                          <Toast ref={toast} />
                          <AutoComplete
                            minLength={1}
                            id="pocaPoli"
                            name="pocaPoli"
                            field="poliName"
                            value={selectedPolicy}
                            suggestions={items}
                            completeMethod={search}
                            onChange={(e: any) => setSelectedPolicy(e.value)}
                            itemTemplate={itemTemplate}
                          />
                        </div>
                      </div>
                      <div className="py-3 px-8">
                        <div className="gap-10">
                          <label className="text-black py-2 font-bold w-full ">
                            Description
                            <span className="text-red-400">
                              &nbsp; * {formik.errors.cagroDescription}
                            </span>
                          </label>

                          <textarea
                            className="border rounded w-full py-2 px-3 mt-4 text-black border-slate-900 "
                            name="cagroDescription"
                            id="cagroDescription"
                            onChange={formik.handleChange}
                            value={formik.values.cagroDescription}
                          />
                        </div>
                      </div>
                      <div className="py-4 px-8">
                        <label
                          htmlFor="cover-photo"
                          className="text-black py-2 font-bold w-full"
                        >
                          Photo
                          <span className="text-red-400">
                            &nbsp; * {formik.errors.file}
                          </span>
                        </label>
                        <div className="mt-2  rounded-lg border border-dashed border-gray-900/25 px-1 py-1 ">
                          {upload === false ? (
                            <>
                              <span className="flex justify-center items-center">
                                Empty
                              </span>
                            </>
                          ) : (
                            <div className="flex justify-center items-center">
                              <img
                                src={previewImg}
                                alt="img"
                                className="max-w-xs"
                                width={100}
                              />
                            </div>
                          )}
                          <div className="text-center flex justify-center items-center">
                            <div className="mt-4 flex text-sm leading-6 text-gray-600">
                              <label
                                htmlFor="file-upload"
                                className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                              >
                                <span>Upload a file</span>
                                <input
                                  id="file-upload"
                                  name="file-upload"
                                  type="file"
                                  className="sr-only"
                                  onChange={uploadConfig("file")}
                                />
                              </label>
                            </div>
                          </div>
                          <span
                            onClick={onClear}
                            className="text-red-500 text-center flex justify-center items-center pt-2 cursor-pointer"
                          >
                            Remove
                          </span>
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
