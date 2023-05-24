/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState, useRef } from 'react'
import Layout from '@/src/components/layout/Layout'
import { GetGalleryRequest } from '@/src/redux/action/purchasing/galleryAction'
import { useDispatch, useSelector } from 'react-redux'

import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.css";
import LayoutMaster from '../layoutMaster';
import Footer from '@/src/components/footer/Footer'

const Index = () => {
    const { gallerys, total } = useSelector((state: any) => state.galleryState)
    const [globalFilter, setGlobalFilter] = useState('')
    const [cartItems, setCartItems] = useState<Array<any>>([]);
    const [page, setPage] = useState(1)
    const isCartVisible = cartItems.length > 0;
    const dispatch = useDispatch()
    useEffect(() => { dispatch(GetGalleryRequest(page)) }, [dispatch, page])

    const handleData = (stock_name: string, vendor_name: string, vendor_id: number, vepro_price: string) => {
        const payload = {
            stock_name: stock_name,
            vendor_name: vendor_name,
            vendor_id: vendor_id,
            vepro_price: parseInt(vepro_price.replace(/[$,]/g, ""))
        }
        setCartItems((prevItem: any) => [...prevItem, payload])
    }
    const vendorItems = cartItems.reduce((acc: any, item: any) => {
        if (!acc[item.vendor_id]) {
            acc[item.vendor_id] = [];
        }
        acc[item.vendor_id].push(item);
        return acc;
    }, {})

    const handleDeleteCartItem = (item: any) => {
        const updatedCartItems = cartItems.filter((cartItem: any) => cartItem.stock_name !== item.stock_name);
        setCartItems(updatedCartItems);
    };
    return (
        <div>
            <Layout>
                <LayoutMaster>
                    <div className="flex items-center justify-center px-4">
                        <div className="flex flex-wrap justify-center">
                            <div className="w-full flex justify-center my-4 px-4 py-1 text-gray-800 rounded-full">
                                <input
                                    id="searchInput"
                                    type="text"
                                    value={globalFilter}
                                    onChange={(e: any) => setGlobalFilter(e.target.value)}
                                    placeholder="stock name..."
                                    className="p-2 border border-gray-300 rounded"
                                />
                            </div>

                            <div className={`flex flex-wrap ${isCartVisible ? '' : 'justify-center'}`}>
                                {gallerys
                                    .filter((e: any) => e.stock_name.toLowerCase().includes(globalFilter.toLowerCase()))
                                    .map((e: any) =>
                                        <div key={e.stock_id} className="max-w-sm overflow-hidden rounded-xl bg-white shadow-md duration-200 m-2 w-full sm:w-1/2">
                                            {e.spho_photo_filename === null ?
                                                <img style={{ width: 400, height: 230 }} src={`http://localhost:3002/purchasing/stock/image/no-image-available.jpeg`} alt='no photo' /> :
                                                <img style={{ width: 400, height: 230 }} src={`http://localhost:3002/purchasing/stock/image/${e.spho_photo_filename}`} alt={e.spho_photo_filename} />}
                                            <div className="p-5">
                                                <h1 className="font-bold uppercase text-2xl mb-3">{e.stock_name}</h1>
                                                <p className="text-sm mb-2 text-gray-700">{e.stock_description}</p>
                                                <div className="flex items-center">
                                                    <div className="inline-block align-bottom mr-5">
                                                        <p className="text-medium text-gray-700">Stocked: {e.vepro_qty_stocked}</p>
                                                    </div>
                                                    <div className="inline-block align-bottom">
                                                        <p className="text-medium text-gray-700">Reorder: {e.stock_reorder_point}</p>
                                                    </div>
                                                </div>
                                                <div className="relative mt-5">
                                                    {e.vepro_price === null ? <span className="text-2xl leading-none align-baseline text-red-200">Not Available</span> : <span className="text-2xl leading-none align-baseline">{e.vepro_price}</span>}
                                                    {e.vepro_price === null ? null : <button className="bg-yellow-300 opacity-75 hover:opacity-100 text-yellow-900 hover:text-gray-900 rounded-full px-10 py-2 font-semibold absolute bottom-0 right-0" onClick={() => handleData(e.stock_name, e.vendor_name, e.vendor_id, e.vepro_price)}>
                                                        Add to cart
                                                    </button>}
                                                </div>
                                            </div>
                                            <div>
                                            </div>
                                        </div>
                                    )}
                                <div className="w-full flex justify-center my-4 px-4 py-1 text-gray-800 rounded-full">
                                    <Footer total={total} page={page} setPage={setPage} limit={8} />
                                </div>
                            </div>
                        </div>
                    </div>

                    {isCartVisible && (<div className="fixed top-0 right-0 flex flex-col mt-8 p-4 bg-white w-64 md:w-auto h-screen overflow-y-scroll">
                        <h1 className="text-black text-3xl title-font font-bold mb-2 text-center">Cart</h1>
                        {Object.keys(vendorItems).map((vendorId) => (
                            <div className="p-4 max-w-md bg-white rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700" key={vendorId}>
                                {vendorItems[vendorId].map((item: any) => (
                                    <div className="flow-root" key={item.stock_name}>
                                        <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
                                            <li className="py-3 sm:py-4">
                                                <div className="flex items-center space-x-4">
                                                    <div className="flex-1 min-w-0">
                                                        <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                                            {item.stock_name}
                                                        </p>
                                                        <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                                            {item.vendor_name}
                                                        </p>
                                                    </div>
                                                    <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                                        {item.vepro_price}
                                                    </div>
                                                    <button className="ml-4 text-sm text-red-500 dark:text-red-400 focus:outline-none"
                                                        onClick={() => handleDeleteCartItem(item)}>Delete</button>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        ))}
                        <div className="flex flex-col pl-0 p-8 bg-white w-96 md:w-auto">
                            <div className="border-t-2 border-gray-400 py-4">
                                <div className="mt-3 font-semibold text-lg">SubTotal: ${cartItems.reduce((total: any, item: any) => total + item.vepro_price, 0)}</div>
                            </div>
                            <div className="text-sm font-light">Tax: 10%</div>
                            <div className="my-4">
                                <span className="font-bold text-xl">Total: ${(cartItems.reduce((total: any, item: any) => total + item.vepro_price, 0) * 110 / 100)}</span>
                            </div>
                            <div className="flex justify-center">
                                <button className="py-2 px-8 mt-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg shadow-md focus:outline-none">
                                    Request Order
                                </button>
                            </div>
                        </div>
                    </div>)}

                </LayoutMaster>
            </Layout>
        </div>
    );
}

export default Index;