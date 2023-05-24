import React, { useEffect, useState } from 'react'
import { EditVeproRequest } from '@/src/redux/action/purchasing/vendorProductAction'
import { useDispatch, useSelector } from 'react-redux'
import { GetAllStockRequest } from '@/src/redux/action/purchasing/stockAction'
import { FormikProvider, useFormik } from 'formik'
import { AutoComplete } from 'primereact/autocomplete'

const EditVepro = (props: any) => {
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
            veproQtyStocked: props.veproQtyStocked,
            veproQtyRemaining: props.veproQtyRemaining,
            veproPrice: props.veproPrice,
            veproId: props.veproId,
            stockId: props.stockId
        },
        onSubmit: async (values) => {
            const selectedStock = stocks.find((stock: any) => stock.stockName === values.stockId);
            if (selectedStock) {
                values.stockId = selectedStock.stockId;
            }
            dispatch(EditVeproRequest(values))
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

export default EditVepro
