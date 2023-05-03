import React, { useState } from 'react'
import Modal from '@/src/components/layout/Modal'

const VendorForm = (props:any) => {

    const [isShowModal, setIsShowModal] = useState(false)

    const handleCloseModal = () => {
        setIsShowModal(false)
    }
    return (
        <div>
            <Modal title={props.title}>
                <div className="mb-5">
                    <label
                        htmlFor="vendorName"
                        className="mb-3 block text-base font-medium text-[#07074D]"
                    >
                        Vendor Name
                    </label>
                    <input
                        type="text"
                        name="vendorName"
                        id="vendorName"
                        value={props.vendorName}
                        onChange={props.setVendorName}
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                </div>
                <div className="mb-5">
                    <label
                        htmlFor="vendorActive"
                        className="mb-3 block text-base font-medium text-[#07074D]"
                    >
                        Vendor Status
                    </label>
                    <select name="vendorActive" id="vendorActive" className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" onChange={props.setVendorActive}>
                        <option>-Choose-</option>
                        <option value={1}>Active</option>
                        <option value={0}>InActive</option>
                    </select>
                </div>
                <div className="mb-5">
                    <label
                        htmlFor="vendorWeburl"
                        className="mb-3 block text-base font-medium text-[#07074D]"
                    >
                        Site
                    </label>
                    <input
                        type="text"
                        name="vendorWeburl"
                        id="vendorWeburl"
                        value={props.vendorWeburl}
                        onChange={props.setVendorWeburl}
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                </div>
                {props.vendorRegisterDate}
                <div className="mb-5">
                    <label
                        htmlFor="vendorPriority"
                        className="mb-3 block text-base font-medium text-[#07074D]"
                    >
                        Priority
                    </label>
                    <select name="vendorPriority" id="vendorPriority" className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" onChange={props.setVendorPriority}>
                        <option>-Choose-</option>
                        <option value='1'>Highest</option>
                        <option value='0'>Lowest</option>
                    </select>
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

export default VendorForm
