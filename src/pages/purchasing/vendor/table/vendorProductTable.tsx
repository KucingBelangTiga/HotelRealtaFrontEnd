import { GetVeproRequest, AddVeproRequest, EditVeproRequest, DelVeproRequest } from '@/src/redux/action/purchasing/vendorProductAction'
import { GetStockRequest } from '@/src/redux/action/purchasing/stockAction'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Table from '@/src/components/layout/Table'
import VendorProductForm from '../form/vendorProductForm'

const VendorProductTable = () => {
    const { vendorProducts } = useSelector((state: any) => state.vendorProductState)
    const { stocks } = useSelector((state: any) => state.stockState)
    const [veproId, setVeproId] = useState(0)
    const [veproQtyStocked, setVeproQtyStocked] = useState(0)
    const [veproQtyRemaining, setVeproQtyRemaining] = useState(0)
    const [veproPrice, setVeproPrice] = useState('')
    const [stockId, setStockId] = useState(0)
    const [vendorId, setVendorId] = useState(0)
    const [isEdit, setIsEdit] = useState(false)
    const [isSearch, setSearch] = useState('')

    const router = useRouter()
    const dispatch = useDispatch()
    const [isShowModal, setIsShowModal] = useState(false)

    useEffect(() => { dispatch(GetStockRequest()) }, [dispatch])
    useEffect(() => {
        const storedVendorId = localStorage.getItem('vendorId')
        dispatch(GetVeproRequest({ vendorId: Number(storedVendorId) }))
        setVendorId(Number(storedVendorId))
    }, [dispatch, router.query])
    const handleAdd = () => {
        setIsShowModal(true)
        const payload = {
            veproQtyStocked,
            veproQtyRemaining,
            veproPrice,
            vendorId: vendorId,
            stockId
        }
        dispatch(AddVeproRequest(payload))
    }
    const handleEdit = () => {
        const payload = {
            veproQtyStocked,
            veproQtyRemaining,
            veproPrice,
            veproId,
        }
        dispatch(EditVeproRequest(payload))
    }
    const handleEditData = (
        veproQtyStocked: number,
        veproQtyRemaining: number,
        veproPrice: string,
        veproId: number
    ) => {
        setIsShowModal(true)
        setVeproQtyStocked(veproQtyStocked)
        setVeproQtyRemaining(veproQtyRemaining)
        setVeproPrice(veproPrice)
        setVeproId(veproId)
        setIsEdit(true)
    }
    const handleDeleteData = (veproId: number) => {
        const payload = { veproId: veproId }
        dispatch(DelVeproRequest(payload))
        window.location.reload()
    }
    return (
        <div>
            {isShowModal ?
                <VendorProductForm
                    title={isEdit ? 'Update Product Vendor' : 'Create Product Vendor'}
                    stockName={isEdit ? null :
                        <div className="mb-5">
                            <label
                                htmlFor="stockId"
                                className="mb-3 block text-base font-medium text-[#07074D]"
                            >
                                Stock Name
                            </label>
                            <select name="stockId" id="stockId" className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" onChange={(e) => setStockId(Number(e.target.value))}>
                                <option>-Choose-</option>
                                {stocks.map((e: any) =>
                                    <option key={e.stockId} value={e.stockId}>{e.stockName}</option>
                                )}
                            </select>
                        </div>}
                    veproQtyStocked={veproQtyStocked}
                    setVeproQtyStocked={(e: any) => setVeproQtyStocked(Number(e.target.value))}
                    veproQtyRemaining={veproQtyRemaining}
                    setVeproQtyRemaining={(e: any) => setVeproQtyRemaining(Number(e.target.value))}
                    veproPrice={veproPrice}
                    setVeproPrice={(e: any) => setVeproPrice(e.target.value)}
                    button={isEdit ? <button
                        className="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-base font-semibold text-white outline-none mr-2" onClick={handleEdit}
                    >
                        Update
                    </button> : <button
                        className="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-base font-semibold text-white outline-none mr-2" onClick={handleAdd}
                    >
                        Create
                    </button>}
                />
                : null}
            <Table setSearch={(e: any) => setSearch(e.target.value)}>
                <thead className="bg-gray-50 dark:bg-gray-800">
                    <tr>
                        <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                            Stock
                        </th>

                        <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                            Qty Stocked
                        </th>

                        <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                            Qty Remaining
                        </th>

                        <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                            Price
                        </th>

                        <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                            <button className='bg-gray-500 text-white active:bg-gray-600 font-bold uppercase text-xs px-2 py-1 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150' onClick={handleAdd}>+ Add</button>
                        </th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                    {vendorProducts
                        .filter((item: any) => {
                            return isSearch.toLowerCase() === '' ? item : item.stockname.toLowerCase().includes(isSearch)
                        })
                        .map((e: any) =>
                            <tr key={e.veproid}>
                                <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">{e.stockname}</td>
                                <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">{e.veproqtystocked}</td>
                                <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">{e.veproqtyremaining}</td>
                                <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">{e.veproprice}</td>
                                <td className="px-4 py-4 text-sm whitespace-nowrap">
                                    <div className="flex items-center gap-x-6">
                                        <button className="text-gray-500 transition-colors duration-200 dark:hover:text-indigo-500 dark:text-gray-300 hover:text-indigo-500 focus:outline-none" onClick={() => handleEditData(e.veproqtystocked, e.veproqtyremaining, e.veproprice, e.veproid)}>
                                            Edit
                                        </button>

                                        <button className="text-gray-500 transition-colors duration-200 dark:hover:text-indigo-500 dark:text-gray-300 hover:text-indigo-500 focus:outline-none" onClick={() => handleDeleteData(e.veproid)}>
                                            Delete
                                        </button>
                                    </div>
                                </td>
                            </tr>)}
                </tbody>
            </Table>
        </div>
    )
}

export default VendorProductTable
