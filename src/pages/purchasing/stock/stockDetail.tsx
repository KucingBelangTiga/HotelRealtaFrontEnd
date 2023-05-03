import Layout from '@/src/components/layout/Layout'
import React from 'react'
import TableStockDetail from './table/tableStockDetail'

const VendorProduct = () => {
   return (
        <section className="container px-4 mx-auto">
            <Layout>
                <TableStockDetail />
            </Layout>
        </section>
    )
}

export default VendorProduct