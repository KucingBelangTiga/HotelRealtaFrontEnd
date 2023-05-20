import React, { useEffect, useState, useRef } from 'react'
import { useRouter } from 'next/router'
import Layout from '@/src/components/layout/Layout'
import { GetPodetRequest, DelPodetRequest } from '@/src/redux/action/purchasing/purchaseDetailAction'
import { DataTable } from 'primereact/datatable'
import { Column } from 'primereact/column'
import { SplitButton } from 'primereact/splitbutton';
import { Toast } from 'primereact/toast';
import { useDispatch, useSelector } from 'react-redux'
import { Button } from 'primereact/button'
import { Dialog } from 'primereact/dialog'
import AddPurchasingDetail from './form/podetAdd'
import EditPurchasingDetail from './form/podetEdit'

import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.css";
import LayoutMaster from '../layoutMaster'

const PurchaseDetail = () => {
    const { purchaseDetails } = useSelector((state: any) => state.podetState)
    const [poheId, setPoheId] = useState(0)
    const [isEdit, setIsEdit] = useState(false)
    const [visible, setVisible] = useState(false)
    const [podeId, setpodeId] = useState(0)
    const [podeOrderQty, setpodeOrderQty] = useState(0)
    const [podeReceivedQty, setpodeReceivedQty] = useState('')
    const [podeRejectedQty, setpodeRejectedQty] = useState('')
    const [stockId, setstockId] = useState(0)
    const dispatch = useDispatch()
    const router = useRouter()
    useEffect(() => {
        const storedPoheId: any = localStorage.getItem('poheId')
        dispatch(GetPodetRequest({ podePoheId: poheId }))
        setPoheId(storedPoheId)
    }, [dispatch, poheId, router.query])
    const toast: any = useRef<Toast>(null);
    return (
        <div>
            <Layout>
                <LayoutMaster>
                <DataTable
                    value={purchaseDetails}
                    stripedRows
                    tableStyle={{ minWidth: "50rem" }}
                    className="bg-white text-black"
                    paginator
                    rows={5}
                    first={0}>
                    <Column field='stock_name' header='Stock Name'></Column>
                    <Column field='pode_order_qty' header='Qty'></Column>
                    <Column field='pode_price' header='Price'></Column>
                    <Column field='pode_received_qty' header='Receive Qty'></Column>
                    <Column field='pode_rejected_qty' header='Reject Qty'></Column>
                    <Column field='pode_line_total' header='Total'></Column>
                    <Column body={(rowData) => (
                        <div>
                            <Toast ref={toast}></Toast>
                            <SplitButton label="Update" onClick={() => {
                                setIsEdit(true)
                                setVisible(true)
                                setpodeId(rowData.pode_id)
                                setpodeOrderQty(rowData.pode_order_qty)
                                setpodeReceivedQty(rowData.pode_received_qty)
                                setpodeRejectedQty(rowData.pode_rejected_qty)
                                setstockId(rowData.stock_id)
                            }} model={[
                                {
                                    label: 'Delete',
                                    command: () => {
                                        toast.current.show({ severity: 'warn', summary: 'Delete', detail: 'Data Deleted' });
                                        setTimeout(() => {
                                            const payload = { podePoheId: poheId, podeId: rowData.pode_id }
                                            dispatch(DelPodetRequest(payload))
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
                <Dialog header={isEdit ? "Edit" : "Create"} visible={visible} style={{ width: '50vw' }} onHide={() => setVisible(false)}>
                    {isEdit ? <EditPurchasingDetail podeId={podeId} podePoheId={poheId} podeOrderQty={podeOrderQty} podeReceivedQty={podeReceivedQty} podeRejectedQty={podeRejectedQty} stockId={stockId} /> : <AddPurchasingDetail podePoheId={poheId} />}
                </Dialog>
                </LayoutMaster>
            </Layout>
        </div>
    )
}

export default PurchaseDetail

