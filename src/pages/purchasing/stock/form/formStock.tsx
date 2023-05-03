import React, { useState, useEffect } from 'react'
import Modal from '@/src/components/layout/Modal'

const FormStock = (props:any) => {

const [isShowModal, setIsShowModal] = useState(false)

const handleCloseModal = () =>{
    setIsShowModal(false)
}

  return (
    <Modal title={props.title}>
    <div className="mb-5">
        <label
        htmlFor="stockName"
        className="mb-3 block text-base font-medium text-[#07074D]"
        >
        Stock Name
        </label>
        <input
        type="text"
        name="stockName"
        id="stockName"
        value={props.stockName}
        onChange={props.setStockName}
        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
        />
    </div>
    <div className="mb-5">
        <label
        htmlFor="stockDescription"
        className="mb-3 block text-base font-medium text-[#07074D]"
        >
        Stock Description
        </label>
        <input
        type="text"
        name="stockDescription"
        id="stockDescription"
        value={props.stockDescription}
        onChange={props.setStockDescription}
        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
        />
    </div>
    <div className="mb-5">
        <label
        htmlFor="stockQuantity"
        className="mb-3 block text-base font-medium text-[#07074D]"
        >
        Stock Quantity
        </label>
        <input
        type="number"
        name="stockQuantity"
        id="stockQuantity"
        value={props.stockQuantity}
        onChange={props.setStockQuantity}
        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
        />
    </div>
    <div className="mb-5">
        <label
        htmlFor="stockReorderPoint"
        className="mb-3 block text-base font-medium text-[#07074D]"
        >
        Stock Reorder Point
        </label>
        <input
        type="number"
        name="stockReorderPoint"
        id="stockReorderPoint"
        value={props.stockReorderPoint}
        onChange={props.setStockReorderPoint}
        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
        />
    </div>
    <div className="mb-5">
        <label
        htmlFor="stockUsed"
        className="mb-3 block text-base font-medium text-[#07074D]"
        >
        Stock Used
        </label>
        <input
        type="number"
        name="stockUsed"
        id="stockUsed"
        value={props.stockUsed}
        onChange={props.setStockUsed}
        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
        />
    </div>
    <div className="mb-5">
        <label
        htmlFor="stockScarp"
        className="mb-3 block text-base font-medium text-[#07074D]"
        >
        Stock Scrap
        </label>
        <input
        type="number"
        name="stockScarp"
        id="stockScarp"
        value={props.stockScarp}
        onChange={props.setStockScarp}
        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
        />
    </div>
    <div className="mb-5">
        <label
        htmlFor="stockSize"
        className="mb-3 block text-base font-medium text-[#07074D]"
        >
        Stock Size
        </label>
        <input
        type="text"
        name="stockSize"
        id="stockSize"
        value={props.stockSize}
        onChange={props.setStockSize}
        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
        />
    </div>
    <div className="mb-5">
        <label
        htmlFor="stockColor"
        className="mb-3 block text-base font-medium text-[#07074D]"
        >
        Stock Color
        </label>
        <input
        type="text"
        name="stockColor"
        id="stockColor"
        value={props.stockColor}
        onChange={props.setStockColor}
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
  )
}

export default FormStock
