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
import AddStockDetail from './form/stodAdd'

import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.css";
import LayoutMaster from '../layoutMaster'
import Footer from '@/src/components/footer/Footer'
import { Button } from 'primereact/button'

const StockDetail = () => {
    const { stockDetails, total } = useSelector((state: any) => state.stockDetailState)
    const [visible, setVisible] = useState(false);
    const [isEdit, setIsEdit] = useState(false)
    const [globalFilter, setGlobalFilter] = useState('')
    const [stodId, setStodId] = useState(0)
    const [stodStatus, setStodStatus] = useState('')
    const [stockId, setStockId] = useState(0)
    const [faciId, setFaciId] = useState(0)
    const [page, setPage] = useState(1)

    const dispatch = useDispatch()
    const router = useRouter()
    useEffect(() => {
        const storedStockId = localStorage.getItem('stockId')
        dispatch(GetStodetRequest({ stockId: Number(storedStockId) }, page))
        setStockId(Number(storedStockId))
    }, [dispatch, page, router.query])

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
                <LayoutMaster>
                    <div className="flex flex-col items-center min-h-screen">
                        <div className="w-full p-4 pl-10">
                            <InputText className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50" type='search' placeholder='Search Stock Name...' onInput={(e: any) => setGlobalFilter(e.target.value)} />
                        </div>
                        <DataTable
                            globalFilter={globalFilter}
                            value={stockDetails}
                            stripedRows
                            tableStyle={{ minWidth: "50rem" }}
                            className="bg-white text-black">
                            <Column field='stodbarcodenumber' header='Barcode'></Column>
                            <Column body={(rowData) => statusText[rowData.stodstatus]} header='Status'></Column>
                            <Column field='stodnotes' header='Notes'></Column>
                            <Column field='pohenumber' header='PO Number'></Column>
                            <Column field='faciname' header='used In'></Column>
                            <Column body={(rowData) => (
                                <div>
                                    <Toast ref={toast}></Toast>
                                    <SplitButton label="Update" onClick={() => {
                                        setIsEdit(true)
                                        setVisible(true)
                                        setStodId(rowData.stodid)
                                        setStockId(rowData.stockid)
                                        setStodStatus(rowData.stodstatus)
                                        setFaciId(rowData.faciid)
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
                            {isEdit ? <EditStockDetail stodId={stodId} stodStatus={stodStatus} faciId={faciId} stockId={stockId} ></EditStockDetail> : <AddStockDetail stockId={stockId}></AddStockDetail>}
                        </Dialog>
                        <Footer total={total} page={page} setPage={setPage} limit={10} />
                    </div>
                </LayoutMaster>
            </Layout>
        </div>
    )
}

export default StockDetail
