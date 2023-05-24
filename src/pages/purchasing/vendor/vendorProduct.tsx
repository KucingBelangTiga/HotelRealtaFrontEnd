import React, { useEffect, useState, useRef } from 'react'
import { useRouter } from 'next/router'
import Layout from '@/src/components/layout/Layout'
import { GetVeproRequest, DelVeproRequest } from '@/src/redux/action/purchasing/vendorProductAction'
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
import AddVepro from './form/veproAdd'
import EditVepro from './form/veproEdit'
import LayoutMaster from '../layoutMaster'
import Footer from '@/src/components/footer/Footer'
import { GetAllStockRequest } from '@/src/redux/action/purchasing/stockAction'

const Index = () => {
    const [visible, setVisible] = useState(false);
    const [globalFilter, setGlobalFilter] = useState('')
    const [isEdit, setIsEdit] = useState(false)
    const { vendorProducts, total } = useSelector((state: any) => state.vendorProductState)
    const { stocks } = useSelector((state: any) => state.stockState)
    const [veproId, setVeproId] = useState(0)
    const [veproQtyStocked, setVeproQtyStocked] = useState(0)
    const [veproQtyRemaining, setVeproQtyRemaining] = useState(0)
    const [veproPrice, setVeproPrice] = useState('')
    const [vendorId, setVendorId] = useState(0)
    const [stockId, setStockId] = useState(0)
    const [page, setPage] = useState(1)

    const dispatch = useDispatch()
    const router = useRouter()
    useEffect(() => { dispatch(GetAllStockRequest()) }, [dispatch])
    useEffect(() => {
        const storedVendorId = localStorage.getItem('vendorId')
        dispatch(GetVeproRequest({ vendorId: Number(storedVendorId) }, page))
        setVendorId(Number(storedVendorId))
    }, [dispatch, page, router.query])
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
                            value={vendorProducts}
                            stripedRows
                            tableStyle={{ minWidth: "50rem" }}
                            className="bg-white text-black">
                            <Column field='stockname' header='Stock'></Column>
                            <Column field='veproqtystocked' header='Qty Stocked'></Column>
                            <Column field='veproqtyremaining' header='Qty Remaining'></Column>
                            <Column field='veproprice' header='Price'></Column>
                            <Column body={(rowData) => (
                                <div>
                                    <Toast ref={toast}></Toast>
                                    <SplitButton label="Update" onClick={() => {
                                        setVisible(true)
                                        setIsEdit(true)
                                        setVeproQtyStocked(rowData.veproqtystocked)
                                        setVeproQtyRemaining(rowData.veproqtyremaining)
                                        setVeproPrice(rowData.veproprice)
                                        setVeproId(rowData.veproid)
                                        setStockId(() => {
                                            const findStock = stocks.find((stock: any) => stock.stockId === rowData.stockid)
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
                                                    const payload = { veproId: rowData.veproid }
                                                    dispatch(DelVeproRequest(payload))
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
                            {isEdit ? <EditVepro veproId={veproId} veproQtyRemaining={veproQtyRemaining} veproQtyStocked={veproQtyStocked} veproPrice={veproPrice} stockId={stockId}/> : <AddVepro vendorId={vendorId} veproId={total + 1} />}
                        </Dialog>
                        <Footer total={total} page={page} setPage={setPage} limit={10}/>
                    </div>
                </LayoutMaster>
            </Layout>
        </div>
    )
}

export default Index
