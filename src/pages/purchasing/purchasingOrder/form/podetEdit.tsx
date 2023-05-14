import React, { useEffect } from 'react'
import { EditPodetRequest } from '@/src/redux/action/purchasing/purchaseDetailAction'
import { useDispatch, useSelector } from 'react-redux'
import { FormikProvider, useFormik } from 'formik'
import { GetStockRequest } from '@/src/redux/action/purchasing/stockAction'

const EditPurchasingDetail = (props: any) => {
    const { stocks } = useSelector((state: any) => state.stockState)
    const dispatch = useDispatch()
    useEffect(() => { dispatch(GetStockRequest()) }, [dispatch])
    const formik = useFormik({
        initialValues: {
            podeId: props.podeId,
            podePoheId: props.podePoheId,
            podeOrderQty: props.podeOrderQty,
            podeReceivedQty: props.podeReceivedQty,
            podeRejectedQty: props.podeRejectedQty,
            stockId: props.stockId
        },
        onSubmit: async (values) => {
            dispatch(EditPodetRequest(values))
            window.location.reload()
        }
    })
    return (
        <div>
            <FormikProvider value={formik}>
                <form onSubmit={formik.handleSubmit}>
                    <div className="mb-5">
                        <label
                            htmlFor="stockId"
                            className="mb-3 block text-base font-medium text-[#07074D]"
                        >
                            Stock Name
                        </label>
                        <select name="stockId" id="stockId" className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" onChange={formik.handleChange}>
                            <option>-Choose-</option>
                            {stocks.map((e: any) =>
                                <option key={e.stockId} value={e.stockId}>{e.stockName}</option>
                            )}
                        </select>
                    </div>
                    <div className="-mx-3 flex flex-wrap">
                        <div className="w-full px-3 sm:w-1/3">
                            <div className="mb-5">
                                <label
                                    htmlFor="podeOrderQty"
                                    className="mb-3 block text-base font-medium text-[#07074D]"
                                >
                                    Order Qty
                                </label>
                                <input
                                    type="number"
                                    name="podeOrderQty"
                                    id="podeOrderQty"
                                    value={formik.values.podeOrderQty}
                                    onChange={formik.handleChange}
                                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                />
                            </div>
                        </div>
                        <div className="w-full px-3 sm:w-1/3">
                            <div className="mb-5">
                                <label
                                    htmlFor="podeReceivedQty"
                                    className="mb-3 block text-base font-medium text-[#07074D]"
                                >
                                    Receive
                                </label>
                                <input
                                    type="text"
                                    name="podeReceivedQty"
                                    id="podeReceivedQty"
                                    value={formik.values.podeReceivedQty}
                                    onChange={formik.handleChange}
                                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                />
                            </div>
                        </div>
                        <div className="w-full px-3 sm:w-1/3">
                            <div className="mb-5">
                                <label
                                    htmlFor="podeLineTotal"
                                    className="mb-3 block text-base font-medium text-[#07074D]"
                                >
                                    Reject
                                </label>
                                <input
                                    type="text"
                                    name="podeRejectedQty"
                                    id="podeRejectedQty"
                                    value={formik.values.podeRejectedQty}
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
        </div>
    )
}

export default EditPurchasingDetail