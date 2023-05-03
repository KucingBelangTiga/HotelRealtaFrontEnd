import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { GetStockRequest, DelStockRequest, EditStockRequest, AddStockRequest } from '@/src/redux/action/purchasing/stockAction'
import { useDispatch, useSelector } from 'react-redux'
import Table from '@/src/components/layout/Table'
import FormStock from '../form/formStock'

const TableStock = () => {
    const { stocks } = useSelector((state: any) => state.stockState)
    const [stockId, setStockId] = useState(0)
    const [stockName, setStockName] = useState('')
    const [stockDescription, setStockDescription] = useState('')
    const [stockQuantity, setStockQuantity] = useState(0)
    const [stockReorderPoint, setStockReorderPoint] = useState(0)
    const [stockUsed, setStockUsed] = useState(0)
    const [stockScarp, setStockScrap] = useState(0)
    const [stockSize, setStockSize] = useState('')
    const [stockColor, setStockColor] = useState('')
    const [isSearch, setSearch] = useState('')
    const dispatch = useDispatch()

    useEffect(() => { dispatch(GetStockRequest()) }, [dispatch])

    const [isShowModal, setIsShowModal] = useState(false)
    const [isEdit, setIsEdit] = useState(false)

    const handleShowModal = () => {
        setIsShowModal(true)
        setIsEdit(false)
    }
    const handleEdit = () => {
        const payload = {
            stockId,
            stockName,
            stockDescription,
            stockQuantity,
            stockReorderPoint,
            stockUsed,
            stockScarp,
            stockSize,
            stockColor
        }
        dispatch(EditStockRequest(payload))
        console.log(payload)
    }
    const handleCreate = () => {
        const payload = {
            stockId:stocks.length,
            stockName,
            stockDescription,
            stockQuantity,
            stockReorderPoint,
            stockUsed,
            stockScarp,
            stockSize,
            stockColor
        }
        dispatch(AddStockRequest(payload))
    }
    const handleEditData = (
        stockName: string,
        stockDescription: string,
        stockQuantity: number,
        stockReorderPoint: number,
        stockUsed: number,
        stockScrap: number,
        stockSize: string,
        stockColor: string,
        stockId: number,) => {
        handleShowModal()
        setStockName(stockName)
        setStockDescription(stockDescription)
        setStockQuantity(stockQuantity)
        setStockReorderPoint(stockReorderPoint)
        setStockUsed(stockUsed)
        setStockScrap(stockScrap)
        setStockSize(stockSize)
        setStockColor(stockColor)
        setStockId(stockId)
        setIsEdit(true)
    }
    const handleDeleteData = (stockId: number) => {
        const payload = { stockId: stockId }
        dispatch(DelStockRequest(payload))
        window.location.reload()
    }
    const handleDetail = (stockId: any) => {
        const payload = { stockId: stockId }
        localStorage.setItem('stockId', stockId);
        console.log(payload)
    }
    return (
        <div>
            {isShowModal ? <FormStock 
                title={isEdit ? 'Update' : 'Create'} 
                stockName={stockName}
                setStockName={(e:any)=>setStockName(e.target.value)}
                stockDescription={stockDescription}
                setStockDescription={(e:any)=>setStockDescription(e.target.value)}
                stockQuantity={stockQuantity}
                setStockQuantity={(e:any)=>setStockQuantity(Number(e.target.value))}
                stockReorderPoint={stockReorderPoint}
                setStockReorderPoint={(e:any)=>setStockReorderPoint(Number(e.target.value))}
                stockUsed={stockUsed}
                setStockUsed={(e:any)=>setStockUsed(Number(e.target.value))}
                stockScarp={stockScarp}
                setStockScarp={(e:any)=>setStockScrap(Number(e.target.value))}
                stockSize={stockSize}
                setStockSize={(e:any)=>setStockSize(e.target.value)}
                stockColor={stockColor}
                setStockColor={(e:any)=>setStockColor(e.target.value)}
                button={isEdit ? (<button
                    className="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-base font-semibold text-white outline-none mr-2" onClick={handleEdit}
                    >
                    Edit
                    </button>):(<button
                    className="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-base font-semibold text-white outline-none mr-2" onClick={handleCreate}
                    >
                    Create
                    </button>)}
                /> 
                : null}
            <Table setSearch={(e: any) => setSearch(e.target.value)}>
                <thead className="bg-gray-50 dark:bg-gray-800">
                    <tr>
                        <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                            Stock Name
                        </th>

                        <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                            Reorder-Point
                        </th>

                        <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                            Qty
                        </th>

                        <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                            Used
                        </th>

                        <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                            Scrap
                        </th>

                        <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                            Size Color
                        </th>

                        <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                            <button className='bg-gray-500 text-white active:bg-gray-600 font-bold uppercase text-xs px-2 py-1 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150' onClick={handleShowModal}>+ Add</button>
                        </th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                    {stocks
                        .filter((item: any) => {
                            return isSearch.toLowerCase() === '' ? item : item.stockName.toLowerCase().includes(isSearch)
                        })
                        .map((e: any) =>
                            <tr key={e.stockId}>
                                <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">{e.stockName}</td>
                                <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">{e.stockReorderPoint}</td>
                                <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">{e.stockQuantity}</td>
                                <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">{e.stockUsed}</td>
                                <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">{e.stockScrap}</td>
                                <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">{e.stockSize}-{e.stockColor}</td>
                                <td className="px-4 py-4 text-sm whitespace-nowrap">
                                    <div className="flex items-center gap-x-6">
                                        <button className="text-gray-500 transition-colors duration-200 dark:hover:text-indigo-500 dark:text-gray-300 hover:text-indigo-500 focus:outline-none" onClick={() => handleEditData(e.stockName, e.stockDescription, e.stockQuantity, e.stockReorderPoint, e.stockUsed, e.stockScarp, e.stockSize, e.stockColor, e.stockId)}>
                                            Edit
                                        </button>

                                        <button className="text-gray-500 transition-colors duration-200 dark:hover:text-indigo-500 dark:text-gray-300 hover:text-indigo-500 focus:outline-none" onClick={() => handleDeleteData(e.stockId)}>
                                            Delete
                                        </button>

                                        <Link href={`stock/stockDetail?stockId=${e.stockId}`}>
                                            <button className="text-gray-500 transition-colors duration-200 dark:hover:text-indigo-500 dark:text-gray-300 hover:text-indigo-500 focus:outline-none" onClick={() => handleDetail(e.stockId)}>
                                                Detail
                                            </button>
                                        </Link>
                                    </div>
                                </td>
                            </tr>)}
                </tbody>
            </Table>
        </div>
    )
}

export default TableStock
