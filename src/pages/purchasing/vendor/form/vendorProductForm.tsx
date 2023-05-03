import React from 'react'
import { useState } from 'react'
import Modal from '@/src/components/layout/Modal'

const VendorProductForm = (props:any) => {
    const [isShowModal, setIsShowModal] = useState(false)
    const handleCloseModal = () => {
        setIsShowModal(false)
    }
    return (
        <div>
            <Modal title={props.title}>
                {props.stockName}
                <div className="mb-5">
                    <label
                        htmlFor="veproQtyStocked"
                        className="mb-3 block text-base font-medium text-[#07074D]"
                    >
                        Qty Stocked
                    </label>
                    <input
                        type="number"
                        name="veproQtyStocked"
                        id="veproQtyStocked"
                        value={props.veproQtyStocked}
                        onChange={props.setVeproQtyStocked}
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                </div>
                <div className="mb-5">
                    <label
                        htmlFor="veproQtyRemaining"
                        className="mb-3 block text-base font-medium text-[#07074D]"
                    >
                        Qty Remaining
                    </label>
                    <input
                        type="number"
                        name="veproQtyRemaining"
                        id="veproQtyRemaining"
                        value={props.veproQtyRemaining}
                        onChange={props.setVeproQtyRemaining}
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                </div>
                <div className="mb-5">
                    <label
                        htmlFor="veproPrice"
                        className="mb-3 block text-base font-medium text-[#07074D]"
                    >
                        Price
                    </label>
                    <input
                        type="text"
                        name="veproPrice"
                        id="veproPrice"
                        value={props.veproPrice}
                        onChange={props.setVeproPrice}
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
            </Modal>
        </div>
    )
}

export default VendorProductForm
