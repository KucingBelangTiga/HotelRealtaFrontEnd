import React, { useEffect, useState } from 'react'
import { AddPodetRequest } from '@/src/redux/action/purchasing/purchaseDetailAction'
import { useDispatch, useSelector } from 'react-redux'
import { FormikProvider, useFormik } from 'formik'
import { GetAllStockRequest } from '@/src/redux/action/purchasing/stockAction'
import { AutoComplete } from 'primereact/autocomplete'

const AddPurchasingDetail = (props: any) => {
    const { stocks } = useSelector((state: any) => state.stockState)
    const [items, setItems] = useState([])
    const dispatch = useDispatch()
    useEffect(() => { dispatch(GetAllStockRequest()) }, [dispatch])
    const search = (event: any) => {
        const filteredData = stocks.filter((item: any) =>
            item.stockName.toLowerCase().includes(event.query.toLowerCase())
        );
        setItems(filteredData.map((item: any) => item.stockName))
    }
    const formik = useFormik({
        initialValues: {
            podePoheId: props.podePoheId,
            podeOrderQty: 0,
            podePrice: '',
            podeLineTotal: '',
            podeReceivedQty: '',
            podeRejectedQty: '',
            stockId: 0
        },
        onSubmit: async (values) => {
            const selectedStock = stocks.find((stock: any) => stock.stockName === values.stockId);
            if (selectedStock) {
                values.stockId = selectedStock.stockId;
            }
            dispatch(AddPodetRequest(values))
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
                        <AutoComplete
                            inputId='stockId'
                            name='stockId'
                            value={formik.values.stockId}
                            suggestions={items}
                            completeMethod={search}
                            onChange={formik.handleChange}
                        />
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
                    <div className="-mx-3 flex flex-wrap">
                        <div className="w-full px-3 sm:w-1/2">
                            <div className="mb-5">
                                <label
                                    htmlFor="podePrice"
                                    className="mb-3 block text-base font-medium text-[#07074D]"
                                >
                                    Price
                                </label>
                                <input
                                    type="text"
                                    name="podePrice"
                                    id="podePrice"
                                    value={formik.values.podePrice}
                                    onChange={formik.handleChange}
                                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                />
                            </div>
                        </div>
                        <div className="w-full px-3 sm:w-1/2">
                            <div className="mb-5">
                                <label
                                    htmlFor="podeLineTotal"
                                    className="mb-3 block text-base font-medium text-[#07074D]"
                                >
                                    Line Total
                                </label>
                                <input
                                    type="text"
                                    name="podeLineTotal"
                                    id="podeLineTotal"
                                    value={formik.values.podeLineTotal}
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

export default AddPurchasingDetail
