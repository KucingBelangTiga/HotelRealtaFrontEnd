import React, { useEffect, useState } from 'react'
import { GetAllPoheRequest } from '@/src/redux/action/purchasing/purchaseHeaderAction'
import { AddStodetRequest } from '@/src/redux/action/purchasing/stockDetailAction'
import { GetFacilityRequest } from '@/src/redux/action/hotel/facilityAction'
import { useDispatch, useSelector } from 'react-redux'
import { FormikProvider, useFormik } from 'formik'
import { AutoComplete } from 'primereact/autocomplete'

const AddStockDetail = (props: any) => {
    const { pohes } = useSelector((state: any) => state.poheState)
    const { facilitys } = useSelector((state: any) => state.facilityState)
    const [items, setItems] = useState([])
    const dispatch = useDispatch()
    useEffect(() => { dispatch(GetAllPoheRequest()) }, [dispatch])
    useEffect(() => { dispatch(GetFacilityRequest()) }, [dispatch])
    const searchpohe = (event: any) => {
        const filteredData = pohes.filter((item: any) =>
            item.poheNumber.toLowerCase().includes(event.query.toLowerCase())
        );
        setItems(filteredData.map((item: any) => item.poheNumber))
    }
    const searchfaci = (event: any) => {
        const filteredData = facilitys.filter((item: any) =>
            item.faciName.toLowerCase().includes(event.query.toLowerCase())
        );
        setItems(filteredData.map((item: any) => item.faciName))
    }
    const formik = useFormik({
        initialValues: {
            stockId: props.stockId,
            stodStatus: '',
            stodBarcodeNumber: '',
            stodNotes: '',
            poheId: 0,
            faciId: 0,
        },
        onSubmit: async (values) => {
            const selectedVendor = pohes.find((pohe: any) => pohe.poheNumber === values.poheId);
            if (selectedVendor) {
                values.poheId = selectedVendor.poheId;
            }
            const selectedFaci = facilitys.find((facility: any) => facility.faciName === values.faciId);
            if (selectedFaci) {
                values.faciId = selectedFaci.faciId;
            }
            dispatch(AddStodetRequest(values))
            window.location.reload()
        }
    })
    return (
        <div>
            <FormikProvider value={formik}>
                <form onSubmit={formik.handleSubmit}>
                    <div className="mb-5">
                        <label
                            htmlFor="stodBarcodeNumber"
                            className="mb-3 block text-base font-medium text-[#07074D]"
                        >
                            Barcode Number
                        </label>
                        <input
                            type="text"
                            name="stodBarcodeNumber"
                            id="stodBarcodeNumber"
                            value={formik.values.stodBarcodeNumber}
                            onChange={formik.handleChange}
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                        />
                    </div>
                    <div className="mb-5">
                        <label
                            htmlFor="stodStatus"
                            className="mb-3 block text-base font-medium text-[#07074D]"
                        >
                            Status
                        </label>
                        <select name="stodStatus" id="stodStatus" className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" onChange={formik.handleChange}>
                            <option>-Choose-</option>
                            <option value={1}>Stocked</option>
                            <option value={2}>Expired</option>
                            <option value={3}>Broken</option>
                            <option value={4}>Used</option>
                        </select>
                    </div>
                    <div className="-mx-3 flex flex-wrap">
                        <div className="w-full px-3 sm:w-1/3">
                            <div className="mb-5">
                                <label
                                    htmlFor="stodNotes"
                                    className="mb-3 block text-base font-medium text-[#07074D]"
                                >
                                    Stock Notes
                                </label>
                                <input
                                    type="text"
                                    name="stodNotes"
                                    id="stodNotes"
                                    value={formik.values.stodNotes}
                                    onChange={formik.handleChange}
                                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                />
                            </div>
                        </div>
                        <div className="w-full px-3 sm:w-1/3">
                            <div className="mb-5">
                                <label
                                    htmlFor="poheId"
                                    className="mb-3 block text-base font-medium text-[#07074D]"
                                >
                                    PO Number
                                </label>
                                <AutoComplete
                                    inputId='poheId'
                                    name='poheId'
                                    value={formik.values.poheId}
                                    suggestions={items}
                                    completeMethod={searchpohe}
                                    onChange={formik.handleChange}
                                />
                            </div>
                        </div>
                        <div className="w-full px-3 sm:w-1/3">
                            <div className="mb-5">
                                <label
                                    htmlFor="faciId"
                                    className="mb-3 block text-base font-medium text-[#07074D]"
                                >
                                    Used In
                                </label>
                                <AutoComplete
                                    inputId='faciId'
                                    name='faciId'
                                    value={formik.values.faciId}
                                    suggestions={items}
                                    completeMethod={searchfaci}
                                    onChange={formik.handleChange}
                                />
                            </div>
                        </div>
                    </div>
                    <button type="submit" className="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-base font-semibold text-white outline-none">
                        Submit
                    </button>
                </form>
            </FormikProvider>
        </div >
    )
}

export default AddStockDetail
