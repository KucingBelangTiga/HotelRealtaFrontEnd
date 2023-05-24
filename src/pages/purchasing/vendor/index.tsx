import React, { useEffect, useState, useRef } from 'react'
import { useRouter } from 'next/router'
import Layout from '@/src/components/layout/Layout'
import { GetVendorRequest, DelVendorRequest } from '@/src/redux/action/purchasing/vendorAction'
import { DataTable } from 'primereact/datatable'
import { Column } from 'primereact/column'
import { SplitButton } from 'primereact/splitbutton';
import { Toast } from 'primereact/toast';
import { useDispatch, useSelector } from 'react-redux'
import { Dialog } from 'primereact/dialog'
import { InputText } from 'primereact/inputtext'
import { Button } from 'primereact/button'

import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.css";
import AddVendor from './form/vendorAdd'
import EditVendor from './form/vendorEdit'
import LayoutMaster from '../layoutMaster'
import Footer from '@/src/components/footer/Footer'

const Index = () => {
    const { vendors, total } = useSelector((state: any) => state.vendorState)
    const [visible, setVisible] = useState(false);
    const [globalFilter, setGlobalFilter] = useState('')
    const [isEdit, setIsEdit] = useState(false)
    const [vendorId, setVendorId] = useState(0)
    const [vendorName, setVendorName] = useState('')
    const [vendorActive, setVendorActive] = useState(0)
    const [vendorPriority, setVendorPriority] = useState(0)
    const [vendorWeburl, setVendorWeburl] = useState('')
    const [page, setPage] = useState(1)

    const dispatch = useDispatch()
    const router = useRouter()
    useEffect(() => { dispatch(GetVendorRequest(page)) }, [dispatch, page])
    const toast: any = useRef<Toast>(null);
    return (
        <div>
            <Layout>
                <LayoutMaster>
                    <div className="flex flex-col items-center min-h-screen">
                        <div className="w-full p-4 pl-10">
                            <InputText className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50" type='search' placeholder='Search Stock Name...' onInput={(e: any) => setGlobalFilter(e.target.value)} />
                        </div>
                        <DataTable
                            globalFilter={globalFilter}
                            value={vendors}
                            stripedRows
                            tableStyle={{ minWidth: "50rem" }}
                            className="bg-white text-black">
                            <Column field='vendorName' header='Vendor'></Column>
                            <Column body={(rowData) => rowData.vendorActive === 1 ? 'Active' : 'InActive'} header='Status'></Column>
                            <Column body={(rowData) => rowData.vendorPriority === 1 ? 'Highest' : 'Lowest'} header='Priority'></Column>
                            <Column field='vendorRegisterDate' header='Register At'></Column>
                            <Column field='vendorWeburl' header='Web Url'></Column>
                            <Column body={(rowData) => (
                                <div>
                                    <Toast ref={toast}></Toast>
                                    <SplitButton label="Details" onClick={() => {
                                        localStorage.setItem('vendorId', rowData.vendorId);
                                        router.push(`vendor/vendorProduct?vendorId=${rowData.vendorId}`)
                                    }} model={[
                                        {
                                            label: 'Update',
                                            command: () => {
                                                setVisible(true)
                                                setIsEdit(true)
                                                setVendorId(rowData.vendorId)
                                                setVendorName(rowData.vendorName)
                                                setVendorActive(rowData.vendorActive)
                                                setVendorPriority(rowData.vendorPriority)
                                                setVendorWeburl(rowData.vendorWeburl)
                                            }
                                        },
                                        {
                                            label: 'Delete',
                                            command: () => {
                                                toast.current.show({ severity: 'warn', summary: 'Delete', detail: 'Data Deleted' });
                                                setTimeout(() => {
                                                    const payload = { vendorId: rowData.vendorId }
                                                    dispatch(DelVendorRequest(payload))
                                                    window.location.reload()
                                                }, 800)
                                            }
                                        }
                                    ]} />
                                </div>
                            )} header={() => (
                                <div>
                                    <Button label="Add" onClick={() => {
                                        setIsEdit(false)
                                        setVisible(true)
                                    }} />
                                </div>
                            )}></Column>
                        </DataTable>
                        <Dialog header={isEdit ? 'Edit' : 'Create'} visible={visible} style={{ width: '50vw' }} onHide={() => setVisible(false)}>
                            {isEdit ? <EditVendor vendorId={vendorId} vendorName={vendorName} vendorActive={vendorActive} vendorPriority={vendorPriority} vendorWeburl={vendorWeburl} /> : <AddVendor vendorId={total + 1} />}
                        </Dialog>
                        <Footer total={total} page={page} setPage={setPage} limit={10}/>
                    </div>
                </LayoutMaster>
            </Layout>
        </div>
    )
}

export default Index
