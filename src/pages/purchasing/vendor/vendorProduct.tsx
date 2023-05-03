import Layout from '@/src/components/layout/Layout'
import VendorProductTable from './table/vendorProductTable'
import React from 'react'

const VendorProduct = () => {
    return (
        <section className="container px-4 mx-auto">
            <Layout>
                <VendorProductTable />
            </Layout>
        </section>
    )
}

export default VendorProduct