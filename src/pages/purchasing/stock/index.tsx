import React from 'react'
import Layout from '@/src/components/layout/Layout'
import TableStock from './table/tableStock'

const Index = () => {
    return (
        <section className="container px-4 mx-auto">
            <Layout>
                <TableStock />
            </Layout>
        </section>
    )
}

export default Index
