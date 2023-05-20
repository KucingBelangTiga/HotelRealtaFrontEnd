/* eslint-disable @next/next/no-img-element */
import { DelStockPhotoRequest, GetStockPhotoRequest, AddStockPhotoRequest, EditStockPhotoRequest } from '@/src/redux/action/purchasing/stockPhotoAction'
import { useDispatch, useSelector } from 'react-redux'
import { FormikProvider, useFormik } from 'formik'
import React, { useEffect, useRef } from 'react';
import { useState } from 'react';
import 'primeicons/primeicons.css';

const AddStopot = (props: any) => {
    const { stockPhotos } = useSelector((state: any) => state.stopotState)
    const [previewImg, setPreviewImg] = useState<any>();
    const [isUpload, setUpload] = useState(false)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(GetStockPhotoRequest({ stockId: props.stockId }))
    }, [dispatch, props.stockId])
    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            file: '',
            sphoPrimary: 0,
            stockId: props.stockId,
        },
        onSubmit: async (values) => {
            if (!values.file) {
                alert('Mohon isi data dengan benar!')
            } else if (stockPhotos.length >= 3) {
                alert('Jumlah foto mencapai maksimal, mohon hapus foto terlebih dahulu')
            } else {
                let payload = new FormData();
                payload.append("file", values.file);
                payload.append("sphoPrimary", String(values.sphoPrimary));
                payload.append("stockId", String(values.stockId));
                dispatch(AddStockPhotoRequest(payload))
                window.location.reload()
            }
        }
    })
    const uploadConfig = (name: any) => (event: any) => {
        let reader = new FileReader();
        const file = event.target.files[0];
        reader.onload = () => {
            formik.setFieldValue("file", file);
            setPreviewImg(reader.result);
        };
        reader.readAsDataURL(file);
        setUpload(true)
    };
    const onClear = (event: any) => {
        event.preventDefault();
        setPreviewImg(null);
        setUpload(false);
    };
    const handleDelete = (sphoId: number) => {
        const payload = { sphoId: sphoId }
        dispatch(DelStockPhotoRequest(payload))
        window.location.reload()
    }
    const handleEdit = (sphoId: number, sphoPrimary: number) => {
        const payload = { sphoId: sphoId, sphoPrimary: sphoPrimary, stockId : props.stockId }
        dispatch(EditStockPhotoRequest(payload))
        window.location.reload()
    }
    console.log(stockPhotos)
    return (
        <div className="flex items-center justify-center px-2">
            {stockPhotos.map((item: any) => (
                <div key={item.sp_spho_id} className={`max-w-sm overflow-hidden rounded-xl shadow-md duration-200 m-2 ${item.sp_spho_primary === 1 ? 'w-64 h-64 bg-white' : 'w-32 h-32 bg-gray-200'}`}>
                    {item.sp_spho_primary === 0 ? <img src={`http://localhost:3002/purchasing/stock/image/${item.sp_spho_photo_filename}`} alt="Image" style={{ width: 300, height: 90 }} /> : <img src={`http://localhost:3002/purchasing/stock/image/${item.sp_spho_photo_filename}`} alt="Image" style={{ width: 300, height: 180 }} />}
                    {item.sp_spho_primary === 0 ?
                        <div className="flex justify-between p-3">
                            <button onClick={() => handleDelete(item.sp_spho_id)} className="pi pi-times mr-2" />
                            <button onClick={() => handleEdit(item.sp_spho_id, 1)} className="pi pi-heart text-red-500" />
                        </div> :
                        <div className=" flex flex-col items-center justify-center">
                        <h5 className="text-gray-900 font-bold text-sm tracking-tight mb-2 dark:text-white text-center">
                          This is the main photo
                        </h5>
                        <button
                          onClick={() => handleDelete(item.sp_spho_id)}
                          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >Delete</button>
                      </div>}
                </div>
            ))}
            <form onSubmit={formik.handleSubmit}>
                <div className="py-4 px-8">
                    <div className="col-span-full mb-4">
                        <div className="mt-2  rounded-lg border border-dashed border-gray-900/25 px-6 pt-10 pb-4">
                            {isUpload ? <div className="flex justify-center items-center">
                                <img
                                    src={previewImg}
                                    alt="img"
                                    className="max-w-xs"
                                    width={200}
                                />
                            </div> : null}
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
    )
}

export default AddStopot
