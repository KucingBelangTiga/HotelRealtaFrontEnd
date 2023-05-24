import React, { useEffect, useState, useRef } from 'react'
import { useRouter } from 'next/router'
import Layout from '@/src/components/layout/Layout'
import { GetPoheRequest, DelPoheRequest } from '@/src/redux/action/purchasing/purchaseHeaderAction'
import { DataTable } from 'primereact/datatable'
import { Column } from 'primereact/column'
import { SplitButton } from 'primereact/splitbutton';
import { Toast } from 'primereact/toast';
import { useDispatch, useSelector } from 'react-redux'
import { Dialog } from 'primereact/dialog'
import { InputText } from 'primereact/inputtext'
import EditPurchasingHeader from './form/poheEdit'
import { Button } from 'primereact/button'

import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.css";
import AddPurchasingHeader from './form/poheAdd'
import LayoutMaster from '../layoutMaster'
import Footer from '@/src/components/footer/Footer'

const Index = () => {
    const { pohes, total } = useSelector((state: any) => state.poheState)
    const [visible, setVisible] = useState(false);
    const [poheId, setPoheId] = useState(0);
    const [poheStatus, setPoheStatus] = useState(0);
    const [globalFilter, setGlobalFilter] = useState('')
    const [isEdit, setIsEdit] = useState(false)
    const [page, setPage] = useState(1)

    const dispatch = useDispatch()
    const router = useRouter()

    useEffect(() => { dispatch(GetPoheRequest(page)) }, [dispatch, page])

    const statusText: any = {
        1: 'Pending',
        2: 'Approve',
        3: 'Rejected',
        4: 'Received',
        5: 'Completed'
    }
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
                            value={pohes}
                            stripedRows
                            tableStyle={{ minWidth: "50rem" }}
                            className="bg-white text-black">
                            <Column field='pohe_number' header='PO Number'></Column>
                            <Column field='pohe_order_date' header='PO Date'></Column>
                            <Column field='vendor_name' header='Vendor Target'></Column>
                            <Column field='pohe_total_amount' header='Total Amounts'></Column>
                            <Column body={(rowData) => statusText[rowData.pohe_status]} header='Status'></Column>
                            <Column body={(rowData) => (
                                <div>
                                    <Toast ref={toast}></Toast>
                                    <SplitButton label="Details" onClick={() => {
                                        localStorage.setItem('poheNumber', rowData.pohe_number);
                                        localStorage.setItem('poheId', rowData.pohe_id);
                                        localStorage.setItem('poheDate', rowData.pohe_order_date);
                                        localStorage.setItem('poheStatus', rowData.pohe_status);
                                        localStorage.setItem('poheSubtotal', rowData.pohe_subtotal);
                                        localStorage.setItem('poheTax', rowData.pohe_tax);
                                        router.push(`purchasingOrder/purchaseDetail?poheNumber=${rowData.pohe_number}&poheId=${rowData.pohe_id}`)
                                    }} model={[
                                        {
                                            label: 'Update',
                                            command: () => {
                                                setIsEdit(true)
                                                setVisible(true)
                                                setPoheId(rowData.pohe_id)
                                                setPoheStatus(rowData.pohe_status)
                                            }
                                        },
                                        {
                                            label: 'Delete',
                                            command: () => {
                                                toast.current.show({ severity: 'warn', summary: 'Delete', detail: 'Data Deleted' });
                                                setTimeout(() => {
                                                    const payload = { poheId: rowData.pohe_id }
                                                    dispatch(DelPoheRequest(payload))
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
                        <Dialog header='Switch Status' visible={visible} style={{ width: '50vw' }} onHide={() => setVisible(false)}>
                            {isEdit ? <EditPurchasingHeader poheId={poheId} poheStatus={poheStatus} /> : <AddPurchasingHeader poheId={total + 1}></AddPurchasingHeader>}
                        </Dialog>
                        <Footer total={total} page={page} setPage={setPage} limit={10}/>
                    </div>
                </LayoutMaster>
            </Layout>
        </div>
    )
}

export default Index
