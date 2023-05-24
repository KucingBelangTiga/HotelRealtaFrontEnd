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
import { InputText } from 'primereact/inputtext'
import AddPurchasingDetail from './form/podetAdd'
import EditPurchasingDetail from './form/podetEdit'

import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.css";
import LayoutMaster from '../layoutMaster'
import Footer from '@/src/components/footer/Footer'
import { GetAllStockRequest } from '@/src/redux/action/purchasing/stockAction'

const PurchaseDetail = () => {
    const { purchaseDetails, total } = useSelector((state: any) => state.podetState)
    const { stocks } = useSelector((state: any) => state.stockState)
    const [poheId, setPoheId] = useState(0)
    const [isEdit, setIsEdit] = useState(false)
    const [visible, setVisible] = useState(false)
    const [podeId, setpodeId] = useState(0)
    const [podeOrderQty, setpodeOrderQty] = useState(0)
    const [podeReceivedQty, setpodeReceivedQty] = useState('')
    const [podeRejectedQty, setpodeRejectedQty] = useState('')
    const [stockId, setstockId] = useState(0)
    const [page, setPage] = useState(1)
    const [globalFilter, setGlobalFilter] = useState('')

    const dispatch = useDispatch()
    const router = useRouter()
    useEffect(() => { dispatch(GetAllStockRequest()) }, [dispatch])
    useEffect(() => {
        const storedPoheId: any = localStorage.getItem('poheId')
        dispatch(GetPodetRequest({ podePoheId: poheId }, page))
        setPoheId(storedPoheId)
    }, [dispatch, page, poheId, router.query])
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
                            value={purchaseDetails}
                            stripedRows
                            tableStyle={{ minWidth: "50rem" }}
                            className="bg-white text-black">
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
                                        setstockId(() => {
                                            const findStock = stocks.find((stock: any) => stock.stockId === rowData.stock_id)
                                            if (findStock) {
                                                const { stockName } = findStock;
                                                return stockName
                                            }
                                        })
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
                        <Footer total={total} page={page} setPage={setPage} limit={10} />
                    </div>
                </LayoutMaster>
            </Layout>
        </div>
    )
}

export default PurchaseDetail

