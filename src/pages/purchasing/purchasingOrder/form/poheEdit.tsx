import React, { useEffect, useState } from 'react'
import { EditPoheRequest } from '@/src/redux/action/purchasing/purchaseHeaderAction'
import { FormikProvider, useFormik } from 'formik'
import { useDispatch } from 'react-redux'

const EditPurchasingHeader = (props: any) => {
    const dispatch = useDispatch()
    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            poheId: props.poheId,
            poheStatus: props.poheStatus,
        },
        onSubmit: async (values) => {
            dispatch(EditPoheRequest({
                ...values,
                poheStatus:Number(values.poheStatus)
            }))
            window.location.reload()
        }
    })
    return (
        <div>
            <FormikProvider value={formik}>
                <form onSubmit={formik.handleSubmit}>
                    <div className="mb-5">
                        <label
                            htmlFor="poheStatus"
                            className="mb-3 block text-base font-medium text-[#07074D]"
                        >
                            Status
                        </label>
                        <select name="poheStatus" id="poheStatus" className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" onChange={formik.handleChange}>
                            <option>-Choose-</option>
                            <option value={1}>Pending</option>
                            <option value={2}>Approve</option>
                            <option value={3}>Rejected</option>
                            <option value={4}>Received</option>
                            <option value={5}>Completed</option>
                        </select>
                    </div>
                    <button type="submit" className="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-base font-semibold text-white outline-none">
                        Submit
                    </button>
                </form>
            </FormikProvider>
        </div>
    )
}

export default EditPurchasingHeader
