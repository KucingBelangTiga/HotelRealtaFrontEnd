import React, { useEffect, useState } from 'react'
import { EditStodetRequest } from '@/src/redux/action/purchasing/stockDetailAction'
import { GetFacilityRequest } from '@/src/redux/action/hotel/facilityAction'
import { FormikProvider, useFormik } from 'formik'
import { useDispatch, useSelector } from 'react-redux'
import { AutoComplete } from 'primereact/autocomplete'

const EditStockDetail = (props: any) => {
    const dispatch = useDispatch()
    const { facilitys } = useSelector((state: any) => state.facilityState)
    const [items, setItems] = useState([])
    useEffect(() => { dispatch(GetFacilityRequest()) }, [dispatch])
    const search = (event: any) => {
        const filteredData = facilitys.filter((item: any) =>
            item.faciName.toLowerCase().includes(event.query.toLowerCase())
        );
        setItems(filteredData.map((item: any) => item.faciName))
    }
    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            stodId: props.stodId,
            stodStatus: props.stodStatus,
            faciId: props.faciId,
            stockId: props.stockId
        },
        onSubmit: async (values) => {
            if (!values.stodStatus) {
                alert('Mohon isi data dengan benar!')
            } else {
                const selectedFaci = facilitys.find((facility: any) => facility.faciName === values.faciId);
                if (selectedFaci) {
                    values.faciId = selectedFaci.faciId;
                }
                dispatch(EditStodetRequest(values))
                window.location.reload()
            }
        }
    })
    return (
        <div>
            <FormikProvider value={formik}>
                <form onSubmit={formik.handleSubmit}>
                    <div className="mb-5">
                        <label
                            htmlFor="stodStatus"
                            className="mb-3 block text-base font-medium text-[#07074D]"
                        >
                            Status
                        </label>
                        <select name="stodStatus" id="stodStatus" className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" onChange={formik.handleChange}>
                            <option>-Choose-</option>
                            <option value={1}>Stocked</option>
                            <option value={2}>Expired</option>
                            <option value={3}>Broken</option>
                            <option value={4}>Used</option>
                        </select>
                    </div>
                    <div className="mb-5">
                        <label
                            htmlFor="setFaciId"
                            className="mb-3 block text-base font-medium text-[#07074D]"
                        >
                            Used In
                        </label>
                        <AutoComplete
                            inputId='faciId'
                            name='faciId'
                            value={formik.values.faciId}
                            suggestions={items}
                            completeMethod={search}
                            onChange={formik.handleChange}
                        />
                    </div>
                    <button type="submit" className="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-base font-semibold text-white outline-none">
                        Submit
                    </button>
                </form>
            </FormikProvider>
        </div>
    )
}

export default EditStockDetail
