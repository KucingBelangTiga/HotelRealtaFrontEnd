import React from 'react'
import { useState } from 'react'
import Modal from '@/src/components/layout/Modal'

const FormStockDetail = (props: any) => {
    const [isShowModal, setIsShowModal] = useState(false)
    const handleCloseModal = () => {
        setIsShowModal(false)
    }
    return (
        <Modal title={props.title}>
            <div>
                {props.stodBarcodeNumber}
                <div className="mb-5">
                    <label
                        htmlFor="stodStatus"
                        className="mb-3 block text-base font-medium text-[#07074D]"
                    >
                        Status
                    </label>
                    <select name="stodStatus" id="stodStatus" className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" onChange={props.setStodStatus}>
                        <option>-Choose-</option>
                        <option value='1'>Stocked</option>
                        <option value='2'>Expired</option>
                        <option value='3'>Broken</option>
                        <option value='4'>Used</option>
                    </select>
                </div>
                {props.stodNotes}
                {props.poheId}
                <div className="mb-5">
                    <label
                        htmlFor="setFaciId"
                        className="mb-3 block text-base font-medium text-[#07074D]"
                    >
                        Facility Id
                    </label>
                    <input
                        type="number"
                        name="faciId"
                        id="faciId"
                        value={props.faciId}
                        onChange={props.setFaciId}
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                </div>
                <div>
                    {props.button}
                    <button
                        className="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-base font-semibold text-white outline-none" onClick={handleCloseModal}
                    >
                        Cancel
                    </button>
                </div>
            </div>
        </Modal>
    )
}

export default FormStockDetail
