import React, { useEffect, useState, useRef } from 'react'
import { useRouter } from 'next/router'
import Layout from '@/src/components/layout/Layout'
import { GetStodetRequest, DelStodetRequest } from '@/src/redux/action/purchasing/stockDetailAction'
import { DataTable } from 'primereact/datatable'
import { Column } from 'primereact/column'
import { SplitButton } from 'primereact/splitbutton';
import { Toast } from 'primereact/toast';
import { useDispatch, useSelector } from 'react-redux'
import { Dialog } from 'primereact/dialog'
import { InputText } from 'primereact/inputtext'
import EditStockDetail from './form/stodEdit'

import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.css";

const StockDetail = () => {
    const { stockDetails } = useSelector((state: any) => state.stockDetailState)
    const [visible, setVisible] = useState(false);
    const [globalFilter, setGlobalFilter] = useState('')
    const [stodId, setStodId] = useState(0)
    const [stodStatus, setStodStatus] = useState('')
    const [stockId, setStockId] = useState(0)
    const [faciId, setFaciId] = useState(0)

    const dispatch = useDispatch()
    const router = useRouter()
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
    const toast: any = useRef<Toast>(null);
    return (
        <div>
            <Layout>
                <InputText className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50" type='search' placeholder='Search Stock Name...' onInput={(e: any) => setGlobalFilter(e.target.value)}></InputText>
                <DataTable
                    globalFilter={globalFilter}
                    value={stockDetails}
                    stripedRows
                    tableStyle={{ minWidth: "50rem" }}
                    className="bg-white text-black"
                    paginator
                    rows={7}
                    first={0}>
                    <Column field='stodbarcodenumber' header='Barcode'></Column>
                    <Column body={(rowData) => statusText[rowData.stodstatus]} header='Status'></Column>
                    <Column field='stodnotes' header='Notes'></Column>
                    <Column field='pohenumber' header='PO Number'></Column>
                    <Column field='faciname' header='used In'></Column>
                    <Column body={(rowData) => (
                        <div>
                            <Toast ref={toast}></Toast>
                            <SplitButton label="Update" onClick={() => {
                                setVisible(true)
                                setStodId(rowData.stodId)
                                setStockId(rowData.stockId)
                                setStodStatus(rowData.stodStatus)
                                setFaciId(rowData.faciId)
                            }} model={[
                                {
                                    label: 'Delete',
                                    command: () => {
                                        toast.current.show({ severity: 'warn', summary: 'Delete', detail: 'Data Deleted' });
                                        setTimeout(() => {
                                            const payload = { stodId: rowData.stodId, stockId: stockId }
                                            dispatch(DelStodetRequest(payload))
                                            window.location.reload()
                                        }, 800)
                                    }
                                }
                            ]} />
                        </div>
                    )} header='Action'></Column>
                </DataTable>
                <Dialog header='Switch Status' visible={visible} style={{ width: '50vw' }} onHide={() => setVisible(false)}>
                    <EditStockDetail stodId={stodId} stodStatus={stodStatus} faciId={faciId} stockId={stockId} ></EditStockDetail>
                </Dialog>
            </Layout>
        </div>
    )
}

export default StockDetail
