import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { GetVendorRequest, DelVendorRequest, EditVendorRequest, AddVendorRequest } from '@/src/redux/action/purchasing/vendorAction'
import { GetVeproRequest } from '@/src/redux/action/purchasing/vendorProductAction'
import { useDispatch, useSelector } from 'react-redux'
import Table from '@/src/components/layout/Table'
import VendorForm from '../form/vendorForm'

const VendorTable = (props:any) => {
    const { vendors } = useSelector((state: any) => state.vendorState)
    const [vendorId, setVendorId] = useState(0)
    const [vendorName, setVendorName] = useState('')
    const [vendorActive, setVendorActive] = useState(0)
    const [vendorPriority, setVendorPriority] = useState(0)
    const [vendorRegisterDate, setVendorRegisterDate] = useState('')
    const [vendorWeburl, setVendorWeburl] = useState('')
    const [isSearch, setSearch] = useState('')
    const dispatch = useDispatch()

    useEffect(() => { dispatch(GetVendorRequest()) }, [dispatch])

    const [isShowModal, setIsShowModal] = useState(false)
    const [isEdit, setIsEdit] = useState(false)

    const handleEdit = () => {
        const payload = {
            vendorId,
            vendorName,
            vendorPriority,
            vendorRegisterDate,
            vendorActive,
            vendorWeburl
        }
        dispatch(EditVendorRequest(payload))
    }
    const handleCreate = () => {
        setIsShowModal(true)
        setIsEdit(false)
        const payload = {
            vendorId: vendors.length,
            vendorName,
            vendorPriority,
            vendorRegisterDate,
            vendorActive,
            vendorWeburl
        }
        setVendorId(0),
            setVendorName(''),
            setVendorActive(0),
            setVendorPriority(0),
            setVendorRegisterDate(''),
            setVendorWeburl('')
        dispatch(AddVendorRequest(payload))
    }
    const handleEditData = (
        vendorId: number,
        vendorName: string,
        vendorActive: number,
        vendorPriority: number,
        vendorWeburl: string,) => {
        setIsShowModal(true)
        setVendorId(vendorId),
            setVendorName(vendorName),
            setVendorActive(vendorActive),
            setVendorPriority(vendorPriority),
            setVendorWeburl(vendorWeburl)
        setIsEdit(true)
    }
    const handleDeleteData = (vendorId: number) => {
        const payload = { vendorId: vendorId }
        dispatch(DelVendorRequest(payload))
        window.location.reload()
    }
    const handleDetail = (vendorId: any) => {
        const payload = { vendorId: vendorId }
        dispatch(GetVeproRequest(payload))
        localStorage.setItem('vendorId', vendorId);
        console.log(payload)
    }
    return (
        <div>
            {isShowModal ? 
            <VendorForm 
            title={isEdit ? 'Update' : 'Create'}
                vendorName={vendorName}
                setVendorName={(e:any) => setVendorName(e.target.value)}
                setVendorActive={(e:any) => setVendorActive(Number(e.target.value))}
                vendorWeburl={vendorWeburl}
                setVendorWeburl={(e:any) => setVendorWeburl(e.target.value)}
                vendorRegisterDate={isEdit ? null : <div className="mb-5">
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
                    value={vendorRegisterDate}
                    onChange={(e:any) => setVendorRegisterDate(e.target.value)}
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
            </div>}
                setVendorPriority={(e:any) => setVendorPriority(Number(e.target.value))}
                button={isEdit ? (<button
                    className="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-base font-semibold text-white outline-none mr-2" onClick={handleEdit}
                >
                    Edit
                </button>) : (<button
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
                            Vendor
                        </th>

                        <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                            Status
                        </th>

                        <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                            Priority
                        </th>

                        <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                            Register At
                        </th>

                        <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                            Web Url
                        </th>

                        <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                            <button className='bg-gray-500 text-white active:bg-gray-600 font-bold uppercase text-xs px-2 py-1 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150' onClick={handleCreate}>+ Add</button>
                        </th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                    {vendors
                        .filter((item: any) => {
                            return isSearch.toLowerCase() === '' ? item : item.vendorName.toLowerCase().includes(isSearch)
                        })
                        .map((e: any) =>
                            <tr key={e.vendorId}>
                                <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">{e.vendorName}</td>
                                <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">{e.vendorActive === 1 ? 'Active' : 'InActive'}</td>
                                <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">{e.vendorActive === 1 ? 'Highest' : 'Lowest'}</td>
                                <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">{e.vendorRegisterDate}</td>
                                <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">{e.vendorWeburl}</td>
                                <td className="px-4 py-4 text-sm whitespace-nowrap">
                                    <div className="flex items-center gap-x-6">
                                        <button className="text-gray-500 transition-colors duration-200 dark:hover:text-indigo-500 dark:text-gray-300 hover:text-indigo-500 focus:outline-none" onClick={() => handleEditData(e.vendorId, e.vendorName, e.vendorActive, e.vendorPriority, e.vendorWeburl)}>
                                            Edit
                                        </button>

                                        <button className="text-gray-500 transition-colors duration-200 dark:hover:text-indigo-500 dark:text-gray-300 hover:text-indigo-500 focus:outline-none" onClick={() => handleDeleteData(e.vendorId)}>
                                            Delete
                                        </button>

                                        <Link href={`vendor/vendorProduct?vendorId=${e.vendorId}`}>
                                            <button className="text-gray-500 transition-colors duration-200 dark:hover:text-indigo-500 dark:text-gray-300 hover:text-indigo-500 focus:outline-none" onClick={() => handleDetail(e.vendorId)}>
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

export default VendorTable
