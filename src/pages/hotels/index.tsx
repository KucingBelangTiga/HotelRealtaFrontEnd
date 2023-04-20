import React, { useEffect, useState } from 'react'
import Booking from '../../api/booking/booking'
// import RegionCreate from './RegionCreate'
// import RegionUpdate from './RegionUpdate'
import Layout from '@/src/components/layout'
export default function RegionView() {
    const [region, setRegion] = useState<any[]>([])
    const [refrash, setRefrash] = useState<any>(false)
    const [display, setDisplay] = useState<any>(false)
    const [displayEdit, setDisplayEdit] = useState<any>(false)
    const [id, setId] = useState<any>()
    useEffect(() => {
        Region.GetData().then
            (data => {
                setRegion(data)
            })
    }, [refrash])
    const onClick = (id: any) => {
        setDisplayEdit(true)
        setId(id)
    }

    return (
        <div>
            <Layout>

            </Layout>
        </div>
    )
}