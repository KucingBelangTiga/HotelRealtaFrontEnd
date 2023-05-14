import React, { useEffect, useState, useRef } from 'react'
import { useRouter } from 'next/router'
import Layout from '@/src/components/layout/Layout'
import { GetStockRequest, DelStockRequest } from '@/src/redux/action/purchasing/stockAction'
import { DataTable } from 'primereact/datatable'
import { Column } from 'primereact/column'
import { SplitButton } from 'primereact/splitbutton';
import { Toast } from 'primereact/toast';
import { useDispatch, useSelector } from 'react-redux'
import { Dialog } from 'primereact/dialog'
import { InputText } from 'primereact/inputtext'
import { Button } from 'primereact/button'
import EditStock from './form/stockEdit'
import AddStock from './form/stockAdd'
import AddStopot from './form/stopotAdd'

import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.css";

const Index = () => {
    const { stocks } = useSelector((state: any) => state.stockState)
    const [visible, setVisible] = useState(false);
    const [showPhoto, setShowPhoto] = useState(false);
    const [globalFilter, setGlobalFilter] = useState('')
    const [stockId, setStockId] = useState(0)
    const [stockName, setStockName] = useState('')
    const [stockDescription, setStockDescription] = useState('')
    const [stockQuantity, setStockQuantity] = useState(0)
    const [stockReorderPoint, setStockReorderPoint] = useState(0)
    const [stockUsed, setStockUsed] = useState(0)
    const [stockScrap, setStockScrap] = useState(0)
    const [stockSize, setStockSize] = useState('')
    const [stockColor, setStockColor] = useState('')
    const [isEdit, setIsEdit] = useState(false)

    const dispatch = useDispatch()
    const router = useRouter()
    useEffect(() => { dispatch(GetStockRequest()) }, [dispatch])
    const toast: any = useRef<Toast>(null);
    return (
        <div>
            <Layout>
                <InputText className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50" type='search' placeholder='Search Stock Name...' onInput={(e: any) => setGlobalFilter(e.target.value)}></InputText>
                <DataTable
                    globalFilter={globalFilter}
                    value={stocks}
                    stripedRows
                    tableStyle={{ minWidth: "50rem" }}
                    className="bg-white text-black"
                    paginator
                    rows={7}
                    first={0}>
                    <Column field='stockName' header='Stock Name'></Column>
                    <Column field='stockReorderPoint' header='Reorder-Point'></Column>
                    <Column field='stockQuantity' header='Qty'></Column>
                    <Column field='stockUsed' header='Used'></Column>
                    <Column field='stockScrap' header='Scrap'></Column>
                    <Column body={(rowData) => `${rowData.stockSize} - ${rowData.stockColor}`} header='Size Color'></Column>
                    <Column body={(rowData) => (
                        <div>
                            <Toast ref={toast}></Toast>
                            <SplitButton label="Details" onClick={() => {
                                localStorage.setItem('stockId', rowData.stockId);
                                router.push(`stock/stockDetail?stockId=${rowData.stockId}`)
                            }} model={[
                                {
                                    label: 'Update',
                                    command: () => {
                                        setVisible(true)
                                        setIsEdit(true)
                                        setStockName(rowData.stockName)
                                        setStockDescription(rowData.stockDescription)
                                        setStockQuantity(rowData.stockQuantity)
                                        setStockReorderPoint(rowData.stockReorderPoint)
                                        setStockUsed(rowData.stockUsed)
                                        setStockScrap(rowData.stockScrap)
                                        setStockSize(rowData.stockSize)
                                        setStockColor(rowData.stockColor)
                                        setStockId(rowData.stockId)
                                    }
                                },
                                {
                                    label: 'Upload Photo',
                                    command: () => {
                                        setStockId(rowData.stockId)
                                        setShowPhoto(true)
                                    }
                                },
                                {
                                    label: 'Delete',
                                    command: () => {
                                        toast.current.show({ severity: 'warn', summary: 'Delete', detail: 'Data Deleted' });
                                        setTimeout(() => {
                                            const payload = { stockId: rowData.stockId }
                                            dispatch(DelStockRequest(payload))
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
                    {isEdit ? <EditStock stockName={stockName} stockDescription={stockDescription} stockQuantity={stockQuantity} stockReorderPoint={stockReorderPoint} stockUsed={stockUsed} stockScrap={stockScrap} stockSize={stockSize} stockColor={stockColor} stockId={stockId} /> : <AddStock stockId={stocks.length + 1} />}
                </Dialog>
                <Dialog header='Photo' visible={showPhoto} style={{ width: '50vw' }} onHide={() => setShowPhoto(false)}>
                        <AddStopot stockId={stockId}></AddStopot>
                </Dialog>
            </Layout>
        </div>
    )
}

export default Index
