import React from 'react'
import { EditStockRequest } from '@/src/redux/action/purchasing/stockAction'
import { useDispatch } from 'react-redux'
import { FormikProvider, useFormik } from 'formik'

const EditStock = (props: any) => {
    const dispatch = useDispatch()
    const formik = useFormik({
        initialValues: {
            stockName: props.stockName,
            stockDescription: props.stockDescription,
            stockQuantity: props.stockQuantity,
            stockReorderPoint: props.stockReorderPoint,
            stockUsed: props.stockUsed,
            stockScrap: props.stockScrap,
            stockSize: props.stockSize,
            stockColor: props.stockColor,
            stockId: props.stockId
        },
        onSubmit: async (values) => {
            dispatch(EditStockRequest(values))
            window.location.reload()
        }
    })
    return (
        <div>
            <FormikProvider value={formik}>
                <form onSubmit={formik.handleSubmit}>
                    <div className="mb-5">
                        <label
                            htmlFor="stockName"
                            className="mb-3 block text-base font-medium text-[#07074D]"
                        >
                            Stock Name
                        </label>
                        <input
                            type="text"
                            name="stockName"
                            id="stockName"
                            value={formik.values.stockName}
                            onChange={formik.handleChange}
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                        />
                    </div>
                    <div className="mb-5">
                        <label
                            htmlFor="stockDescription"
                            className="mb-3 block text-base font-medium text-[#07074D]"
                        >
                            Stock Description
                        </label>
                        <input
                            type="text"
                            name="stockDescription"
                            id="stockDescription"
                            value={formik.values.stockDescription}
                            onChange={formik.handleChange}
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                        />
                    </div>
                    <div className="-mx-3 flex flex-wrap">
                        <div className="w-full px-3 sm:w-1/4">
                            <div className="mb-5">
                                <label
                                    htmlFor="stockQuantity"
                                    className="mb-3 block text-base font-medium text-[#07074D]"
                                >
                                    Stock Quantity
                                </label>
                                <input
                                    type="number"
                                    name="stockQuantity"
                                    id="stockQuantity"
                                    value={formik.values.stockQuantity}
                                    onChange={formik.handleChange}
                                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                />
                            </div>
                        </div>
                        <div className="w-full px-3 sm:w-1/4">
                            <div className="mb-5">
                                <label
                                    htmlFor="stockReorderPoint"
                                    className="mb-3 block text-base font-medium text-[#07074D]"
                                >
                                    Stock Reorder Point
                                </label>
                                <input
                                    type="number"
                                    name="stockReorderPoint"
                                    id="stockReorderPoint"
                                    value={formik.values.stockReorderPoint}
                                    onChange={formik.handleChange}
                                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                />
                            </div>
                        </div>
                        <div className="w-full px-3 sm:w-1/4">
                            <div className="mb-5">
                                <label
                                    htmlFor="stockUsed"
                                    className="mb-3 block text-base font-medium text-[#07074D]"
                                >
                                    Stock Used
                                </label>
                                <input
                                    type="number"
                                    name="stockUsed"
                                    id="stockUsed"
                                    value={formik.values.stockUsed}
                                    onChange={formik.handleChange}
                                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                />
                            </div>
                        </div>
                        <div className="w-full px-3 sm:w-1/4">
                            <div className="mb-5">
                                <label
                                    htmlFor="stockScarp"
                                    className="mb-3 block text-base font-medium text-[#07074D]"
                                >
                                    Stock Scrap
                                </label>
                                <input
                                    type="number"
                                    name="stockScarp"
                                    id="stockScarp"
                                    value={formik.values.stockScrap}
                                    onChange={formik.handleChange}
                                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="-mx-3 flex flex-wrap">
                        <div className="w-full px-3 sm:w-1/2">
                            <div className="mb-5">
                                <label
                                    htmlFor="stockSize"
                                    className="mb-3 block text-base font-medium text-[#07074D]"
                                >
                                    Stock Size
                                </label>
                                <input
                                    type="text"
                                    name="stockSize"
                                    id="stockSize"
                                    value={formik.values.stockSize}
                                    onChange={formik.handleChange}
                                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                />
                            </div>
                        </div>
                        <div className="w-full px-3 sm:w-1/2">
                            <div className="mb-5">
                                <label
                                    htmlFor="stockColor"
                                    className="mb-3 block text-base font-medium text-[#07074D]"
                                >
                                    Stock Color
                                </label>
                                <input
                                    type="text"
                                    name="stockColor"
                                    id="stockColor"
                                    value={formik.values.stockColor}
                                    onChange={formik.handleChange}
                                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
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

export default EditStock
