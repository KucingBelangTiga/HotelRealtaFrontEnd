import { GetStodetRequest, DelStodetRequest, AddStodetRequest, EditStodetRequest } from '@/src/redux/action/purchasing/stockDetailAction'
import { GetStockRequest } from '@/src/redux/action/purchasing/stockAction'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Table from '@/src/components/layout/Table'
import FormStockDetail from '../form/formStockDetail'

const TableStockDetail = () => {
    const { stockDetails } = useSelector((state: any) => state.stockDetailState)
    const { stocks } = useSelector((state: any) => state.stockState)
    const [stodId, setStodId] = useState(0)
    const [stodBarcodeNumber, setStodBarcodeNumber] = useState('')
    const [stodStatus, setStodStatus] = useState('')
    const [stodNotes, setStodNotes] = useState('')
    const [stockId, setStockId] = useState(0)
    const [poheId, setPoheId] = useState(0)
    const [faciId, setFaciId] = useState(0)
    const [isEdit, setIsEdit] = useState(false)
    const [isSearch, setSearch] = useState('')

    const router = useRouter()
    const dispatch = useDispatch()
    const [isShowModal, setIsShowModal] = useState(false)
    useEffect(() => { dispatch(GetStockRequest()) }, [dispatch])
    useEffect(() => {
        const storedStockId = localStorage.getItem('stockId')
        dispatch(GetStodetRequest({ stockId: Number(storedStockId) }))
        setStockId(Number(storedStockId))
    }, [dispatch, router.query])
    const statusText: any = {
        1: 'Stocked',
        2: 'Expired',
        3: 'Broken',
        4: 'Used'
    }
    const handleShowModal = () => {
        setIsShowModal(true)
    }

    const handleAdd = () => {
        const payload = {
            stockId: stockId,
            stodStatus,
            stodBarcodeNumber,
            stodNotes,
            poheId,
            faciId,
            stodId: stockDetails.length,
        }
        dispatch(AddStodetRequest(payload))
        setIsEdit(false)
    }
    const handleEdit = () => {
        const payload = {
            stodId,
            stockId: stockId,
            stodStatus,
            faciId,
        }
        dispatch(EditStodetRequest(payload))
    }
    const handleEditData = (
        stodId: number,
        stodStatus: string,
        faciId: number,
    ) => {
        setIsShowModal(true)
        setStodId(stodId)
        setStockId(stockId)
        setStodStatus(stodStatus)
        setFaciId(faciId)
        setIsEdit(true)
        console.log(stodId, stockId, stodStatus, faciId)
    }
    const handleDeleteData = (stodId: number) => {
        const payload = { stodId: stodId, stockId: stockId }
        dispatch(DelStodetRequest(payload))
        window.location.reload()
    }

    return (
        <div>
            {isShowModal ?
                <FormStockDetail
                    title={isEdit ? 'Update Stock Detail' : 'Create Stock Detail'}
                    stodBarcodeNumber={isEdit ? null : 
                    <div className="mb-5">
                    <label
                        htmlFor="stodBarcodeNumber"
                        className="mb-3 block text-base font-medium text-[#07074D]"
                    >
                        Barcode
                    </label>
                    <input
                        type="string"
                        name="stodBarcodeNumber"
                        id="stodBarcodeNumber"
                        value={stodBarcodeNumber}
                        onChange={(e: any) => setStodBarcodeNumber(e.target.value)}
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                </div>}
                    setStodStatus={(e: any) => setStodStatus(e.target.value)}
                    stodNotes={isEdit ? null:
                        <div className="mb-5">
                        <label
                            htmlFor="stodNotes"
                            className="mb-3 block text-base font-medium text-[#07074D]"
                        >
                            Notes
                        </label>
                        <select name="stodNotes" id="stodNotes" className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" onChange={(e: any) => setStodNotes(e.target.value)}>
                            <option>-Choose-</option>
                            {stocks.map((e: any) =>
                            <option key={e.stockId} value={e.stockName}>{e.stockName}</option>
                        )}
                        </select>
                    </div>}
                    poheId={isEdit ? null : 
                    <div className="mb-5">
                    <label
                        htmlFor="setPoheId"
                        className="mb-3 block text-base font-medium text-[#07074D]"
                    >
                        Product Header Id
                    </label>
                    <input
                        type="number"
                        name="poheId"
                        id="poheId"
                        value={poheId}
                        onChange={(e: any) => setPoheId(Number(e.target.value))}
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                </div>}
                    faciId={faciId}
                    setFaciId={(e: any) => setFaciId(Number(e.target.value))}
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
                            Barcode
                        </th>

                        <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                            Status
                        </th>

                        <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                            Notes
                        </th>

                        <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                            Po Number
                        </th>

                        <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                            used In
                        </th>

                        <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                            <button className='bg-gray-500 text-white active:bg-gray-600 font-bold uppercase text-xs px-2 py-1 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150' onClick={handleShowModal}>+ Add</button>
                        </th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                    {stockDetails
                        .filter((item: any) => {
                            return isSearch.toLowerCase() === '' ? item : item.stodbarcodenumber.toLowerCase().includes(isSearch)
                        })
                        .map((e: any) =>
                            <tr key={e.stodid}>
                                <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">{e.stodbarcodenumber}</td>
                                <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">{statusText[e.stodstatus]}</td>
                                <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">{e.stodnotes}</td>
                                <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">{e.pohenumber}</td>
                                <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">{e.faciname}</td>
                                <td className="px-4 py-4 text-sm whitespace-nowrap">
                                    <div className="flex items-center gap-x-6">
                                        <button className="text-gray-500 transition-colors duration-200 dark:hover:text-indigo-500 dark:text-gray-300 hover:text-indigo-500 focus:outline-none" onClick={() => handleEditData(e.stodid, e.stodstatus, e.faciid)}>
                                            Edit
                                        </button>
                                        <button className="text-gray-500 transition-colors duration-200 dark:hover:text-indigo-500 dark:text-gray-300 hover:text-indigo-500 focus:outline-none" onClick={() => handleDeleteData(e.stodid)}>
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

export default TableStockDetail
