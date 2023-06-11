import React, {useEffect} from 'react'
import { AddVeproRequest } from '@/src/redux/action/purchasing/vendorProductAction'
import { useDispatch, useSelector } from 'react-redux'
import { GetStockRequest } from '@/src/redux/action/purchasing/stockAction'
import { FormikProvider, useFormik } from 'formik'

const AddVepro = (props: any) => {
    const { stocks } = useSelector((state: any) => state.stockState)
    const dispatch = useDispatch()
    useEffect(() => { dispatch(GetStockRequest()) }, [dispatch])
    const formik = useFormik({
        initialValues: {
            vendorId: props.vendorId,
            veproId:props.veproId,
            veproQtyStocked:'',
            veproQtyRemaining:0,
            veproPrice:'',
            stockId:0
        },
        onSubmit: async (values) => {
            dispatch(AddVeproRequest(values))
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
                <div className="mb-5">
                    <label
                        htmlFor="veproQtyStocked"
                        className="mb-3 block text-base font-medium text-[#07074D]"
                    >
                        Qty Stocked
                    </label>
                    <input
                        type="number"
                        name="veproQtyStocked"
                        id="veproQtyStocked"
                        value={formik.values.veproQtyStocked}
                        onChange={formik.handleChange}
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                </div>
                <div className="mb-5">
                    <label
                        htmlFor="veproQtyRemaining"
                        className="mb-3 block text-base font-medium text-[#07074D]"
                    >
                        Qty Remaining
                    </label>
                    <input
                        type="number"
                        name="veproQtyRemaining"
                        id="veproQtyRemaining"
                        value={formik.values.veproQtyRemaining}
                        onChange={formik.handleChange}
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                </div>
                <div className="mb-5">
                    <label
                        htmlFor="veproPrice"
                        className="mb-3 block text-base font-medium text-[#07074D]"
                    >
                        Price
                    </label>
                    <input
                        type="text"
                        name="veproPrice"
                        id="veproPrice"
                        value={formik.values.veproPrice}
                        onChange={formik.handleChange}
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                </div>
                    <button type="submit" className="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-base font-semibold text-white outline-none">
                        Submit
                    </button>
                </form>
            </FormikProvider>
        </div >
    )
}

export default AddVepro
