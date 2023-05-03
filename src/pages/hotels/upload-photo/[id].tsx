import React, { useEffect, useState } from "react";
import Layout from "../../../components/layout";
import { useDispatch, useSelector } from "react-redux";
import {
  GetFacilityPhotosRequest,
  AddFacilityPhotosRequest,
  DelFacilityPhotosRequest,
} from "../../../redux/action/hotel/facilityPhotosAction";
import { useRouter } from "next/router";
import DisplayImage from "./DisplayImage";
import { useFormik, FormikProvider } from "formik";

export default function Index() {
  const dispatch = useDispatch();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [previewImg, setPreviewImg] = useState<any>();
  const [upload, setUpload] = useState(false);
  const { facilityPhotos } = useSelector(
    (state: any) => state.facilityPhotosState
  );

  useEffect(() => {
    if (router.isReady) {
      dispatch(GetFacilityPhotosRequest(router.query.id));
    }

    setLoading(true);
  }, [dispatch, router.query.id, router.isReady]);

  const onEdit = (e: any) => {
    const value = e.target.value;
  };

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      faphoPrimary: "false",
      file: "",
      faphoFaci: router.query.id,
    },
    onSubmit: async (values) => {
      let payload = new FormData();
      payload.append("faphoPrimary", values.faphoPrimary);
      payload.append("faphoFaci", String(values.faphoFaci));
      payload.append("file", values.file);

      dispatch(AddFacilityPhotosRequest(payload));
      window.alert("Data Successfully Insert");
    },
  });

  const uploadConfig = (name: any) => (event: any) => {
    let reader = new FileReader();
    const file = event.target.files[0];
    console.log(event.target.files);
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

  const onDelete = async (id: any) => {
    dispatch(DelFacilityPhotosRequest(id));
    window.alert("Data Successfully Delete");
    router.reload();
  };

  return (
    <div>
      <Layout>
        {!loading ? (
          <h1>loading</h1>
        ) : (
          <div className="m-6 min-h-screen">
            <h1 className="text-center my-4 font-bold text-3xl">Hotels</h1>
            <h2 className="text-center font-bold text-2xl">Facility</h2>
            <div className="flex justify-center items-center ">
              <div className="grid grid-cols-3 gap-10 my-5">
                {(facilityPhotos || []).map((item: any) => (
                  <div key={item.faphoId}>
                    <DisplayImage
                      imageSrc={`http://localhost:3002/facility-photos/image/${item.faphoPhotoFilename}`}
                      fallbackImage={"/static/images/default.jpg"}
                    />
                    <p>{item.faphoThumbnailFilename || "Photo"}</p>
                    <div>
                      <input
                        type="checkbox"
                        // value={item.faphoPrimary}
                        // onChange={(e) => onEdit(e)}
                      ></input>
                      <label> Set as Primary</label>
                    </div>

                    <button onClick={() => onDelete(item.faphoId)}>
                      X Remove
                    </button>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-grey-500 ">
              <div className="my-5">
                <div className="w-96 mx-auto bg-white rounded shadow border-slate-900">
                  <div className="py-4 px-8 text-black text-xl font-bold border-b border-grey-500 text-center">
                    <h1>Upload Photos</h1>
                  </div>
                  <form onSubmit={formik.handleSubmit}>
                    <div className="py-4 px-8">
                      <div className="col-span-full mb-4">
                        <div className="mt-2  rounded-lg border border-dashed border-gray-900/25 px-6 pt-10 pb-4">
                          {upload === false ? (
                            <>
                              <span>Kosong</span>
                            </>
                          ) : (
                            <div className="flex justify-center items-center">
                              <img
                                src={previewImg}
                                alt="img"
                                className="max-w-xs"
                                width={200}
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
                </div>
              </div>
            </div>
          </div>
        )}
      </Layout>
    </div>
  );
}
