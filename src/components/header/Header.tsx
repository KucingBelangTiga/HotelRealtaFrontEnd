import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useRouter } from 'next/router'

const navigate = [
    {name:'Dashboard', href:'/', current: false},
    {name:'Vendor', href:'/purchasing/vendor', current: false},
    {name:'Stock', href:'/purchasing/stock', current: false},
    {name:'Purchasing Order', href:'/purchasing/purchasingOrder', current: false}
]

export default function Header() {
    return (
        <nav className='font-sans flex flex-col text-center bg-white shadow w-full py-4 px-6'>
        <div className='mb-2 sm:mb-0'>
          {navigate.map(item => {
            return (
            <a 
            key={item.name} 
            href={item.href}
            className="inline-block no-underline hover:text-black font-medium text-lg py-2 px-4"
            >
              {item.name}
            </a>)
          })}
        </div>
        </nav>
      )
}
