import React from 'react'
import { AddVendorRequest } from '@/src/redux/action/purchasing/vendorAction'
import { useDispatch } from 'react-redux'
import { FormikProvider, useFormik } from 'formik'

const AddVendor = (props: any) => {
    const dispatch = useDispatch()
    const formik = useFormik({
        initialValues: {
            vendorId: props.vendorId,
            vendorName:'',
            vendorPriority:0,
            vendorRegisterDate:'',
            vendorActive:0,
            vendorWeburl:''
        },
        onSubmit: async (values) => {
            dispatch(AddVendorRequest(values))
            window.location.reload()
        }
    })
    return (
        <div>
            <FormikProvider value={formik}>
                <form onSubmit={formik.handleSubmit}>
                <div className="mb-5">
                    <label
                        htmlFor="vendorName"
                        className="mb-3 block text-base font-medium text-[#07074D]"
                    >
                        Vendor Name
                    </label>
                    <input
                        type="text"
                        name="vendorName"
                        id="vendorName"
                        value={formik.values.vendorName}
                        onChange={formik.handleChange}
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                </div>
                <div className="mb-5">
                    <label
                        htmlFor="vendorActive"
                        className="mb-3 block text-base font-medium text-[#07074D]"
                    >
                        Vendor Status
                    </label>
                    <select name="vendorActive" id="vendorActive" className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" onChange={formik.handleChange}>
                        <option>-Choose-</option>
                        <option value={1}>Active</option>
                        <option value={0}>InActive</option>
                    </select>
                </div>
                <div className="mb-5">
                    <label
                        htmlFor="vendorWeburl"
                        className="mb-3 block text-base font-medium text-[#07074D]"
                    >
                        Site
                    </label>
                    <input
                        type="text"
                        name="vendorWeburl"
                        id="vendorWeburl"
                        value={formik.values.vendorWeburl}
                        onChange={formik.handleChange}
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                </div>
                <div>
                <label
                    htmlFor="vendorRegisterDate"
                    className="mb-3 block text-base font-medium text-[#07074D]"
                >
                    Register Date
                </label>
                <input
                    type="date"
                    name="vendorRegisterDate"
                    id="vendorRegisterDate"
                    value={formik.values.vendorRegisterDate}
                    onChange={formik.handleChange}
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
                </div>
                <div className="mb-5">
                    <label
                        htmlFor="vendorPriority"
                        className="mb-3 block text-base font-medium text-[#07074D]"
                    >
                        Priority
                    </label>
                    <select name="vendorPriority" id="vendorPriority" className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" onChange={formik.handleChange}>
                        <option>-Choose-</option>
                        <option value={1}>Highest</option>
                        <option value={0}>Lowest</option>
                    </select>
                </div>
                    <button type="submit" className="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-base font-semibold text-white outline-none">
                        Submit
                    </button>
                </form>
            </FormikProvider>
        </div >
    )
}

export default AddVendor
