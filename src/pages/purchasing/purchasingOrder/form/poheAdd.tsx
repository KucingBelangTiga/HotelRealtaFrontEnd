import React, { useEffect, useState } from 'react'
import { AddPoheRequest } from '@/src/redux/action/purchasing/purchaseHeaderAction'
import { GetAllVendorRequest } from '@/src/redux/action/purchasing/vendorAction'
import { FormikProvider, useFormik } from 'formik'
import { useDispatch, useSelector } from 'react-redux'
import { AutoComplete } from 'primereact/autocomplete'

const AddPurchasingHeader = (props: any) => {
    const { vendors } = useSelector((state: any) => state.vendorState)
    const [items, setItems] = useState([])
    const dispatch = useDispatch()
    useEffect(() => { dispatch(GetAllVendorRequest()) }, [dispatch])
    const search = (event: any) => {
        const filteredData = vendors.filter((item: any) =>
            item.vendorName.toLowerCase().includes(event.query.toLowerCase())
        );
        setItems(filteredData.map((item: any) => item.vendorName))
    }
    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            poheId: props.poheId,
            poheStatus: 0,
            poheOrderDate: "",
            poheSubtotal: "",
            poheTax: "",
            poheTotalAmount: "",
            poheRefund: "",
            poheArrivalDate: "",
            pohePayType: "",
            empId: 0,
            vendorId: 0
        },
        onSubmit: async (values:any) => {
            const selectedVendor = vendors.find((vendor: any) => vendor.vendorName === values.vendorId);
            if (selectedVendor) {
                values.vendorId = selectedVendor.vendorId;
            }
            dispatch(AddPoheRequest(values))
            window.location.reload()
        }
    })
    return (
        <div>
            <FormikProvider value={formik}>
                <form onSubmit={formik.handleSubmit}>
                    <div className="mb-5">
                        <label
                            htmlFor="poheStatus"
                            className="mb-3 block text-base font-medium text-[#07074D]"
                        >
                            Status
                        </label>
                        <select name="poheStatus" id="poheStatus" className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" onChange={formik.handleChange}>
                            <option>-Choose-</option>
                            <option value={1}>Pending</option>
                            <option value={2}>Approve</option>
                            <option value={3}>Rejected</option>
                            <option value={4}>Received</option>
                            <option value={5}>Completed</option>
                        </select>
                    </div>
                    <div className="mb-5">
                        <label
                            htmlFor="poheOrderDate"
                            className="mb-3 block text-base font-medium text-[#07074D]"
                        >
                            Order Date
                        </label>
                        <input
                            type="date"
                            name="poheOrderDate"
                            id="poheOrderDate"
                            value={formik.values.poheOrderDate}
                            onChange={formik.handleChange}
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                        />
                    </div>
                    <div className="mb-5">
                        <label
                            htmlFor="poheArrivalDate"
                            className="mb-3 block text-base font-medium text-[#07074D]"
                        >
                            Arrival Date
                        </label>
                        <input
                            type="date"
                            name="poheArrivalDate"
                            id="poheArrivalDate"
                            value={formik.values.poheArrivalDate}
                            onChange={formik.handleChange}
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                        />
                    </div>
                    <div className="-mx-3 flex flex-wrap">
                        <div className="w-full px-3 sm:w-1/4">
                            <div className="mb-5">
                                <label
                                    htmlFor="poheSubtotal"
                                    className="mb-3 block text-base font-medium text-[#07074D]"
                                >
                                    Sub Total
                                </label>
                                <input
                                    type="text"
                                    name="poheSubtotal"
                                    id="poheSubtotal"
                                    value={formik.values.poheSubtotal}
                                    onChange={formik.handleChange}
                                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                />
                            </div>
                        </div>
                        <div className="w-full px-3 sm:w-1/4">
                            <div className="mb-5">
                                <label
                                    htmlFor="poheTax"
                                    className="mb-3 block text-base font-medium text-[#07074D]"
                                >
                                    Tax
                                </label>
                                <input
                                    type="text"
                                    name="poheTax"
                                    id="poheTax"
                                    value={formik.values.poheTax}
                                    onChange={formik.handleChange}
                                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                />
                            </div>
                        </div>
                        <div className="w-full px-3 sm:w-1/4">
                            <div className="mb-5">
                                <label
                                    htmlFor="poheTotalAmount"
                                    className="mb-3 block text-base font-medium text-[#07074D]"
                                >
                                    Total Amount
                                </label>
                                <input
                                    type="text"
                                    name="poheTotalAmount"
                                    id="poheTotalAmount"
                                    value={formik.values.poheTotalAmount}
                                    onChange={formik.handleChange}
                                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                />
                            </div>
                        </div>
                        <div className="w-full px-3 sm:w-1/4">
                            <div className="mb-5">
                                <label
                                    htmlFor="poheRefund"
                                    className="mb-3 block text-base font-medium text-[#07074D]"
                                >
                                    Refund
                                </label>
                                <input
                                    type="text"
                                    name="poheRefund"
                                    id="poheRefund"
                                    value={formik.values.poheRefund}
                                    onChange={formik.handleChange}
                                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="mb-5">
                        <label
                            htmlFor="pohePayType"
                            className="mb-3 block text-base font-medium text-[#07074D]"
                        >
                            Pay Type
                        </label>
                        <select name="pohePayType" id="pohePayType" className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" onChange={formik.handleChange}>
                            <option>-Choose-</option>
                            <option value='CA'>Cash</option>
                            <option value='TR'>Transfer</option>
                        </select>
                    </div>
                    <div className="-mx-3 flex flex-wrap">
                        <div className="w-full px-3 sm:w-1/2">
                            <div className="mb-5">
                                <label
                                    htmlFor="empId"
                                    className="mb-3 block text-base font-medium text-[#07074D]"
                                >
                                    Emp Id
                                </label>
                                <input
                                    type="number"
                                    name="empId"
                                    id="empId"
                                    value={formik.values.empId}
                                    onChange={formik.handleChange}
                                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                />
                            </div>
                        </div>
                        <div className="w-full px-3 sm:w-1/2">
                            <div className="mb-5">
                                <label
                                    htmlFor="vendorId"
                                    className="mb-3 block text-base font-medium text-[#07074D]"
                                >
                                    Vendor
                                </label>
                                <AutoComplete
                                    inputId='vendorId'
                                    name='vendorId'
                                    value={formik.values.vendorId}
                                    suggestions={items}
                                    completeMethod={search}
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

export default AddPurchasingHeader
