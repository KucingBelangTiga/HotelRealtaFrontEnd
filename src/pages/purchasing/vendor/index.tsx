import React from 'react'
import Layout from '@/src/components/layout/Layout'
import VendorTable from './table/vendorTable'

const Index = () => {
    return (
        <section className="container px-4 mx-auto">
            <Layout>
                <VendorTable />
            </Layout>
        </section>
    )
}

export default Index
