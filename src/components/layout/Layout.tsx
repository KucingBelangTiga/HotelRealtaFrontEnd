import React, { ReactNode } from 'react'
import Header from '../header/Header'
import Footer from '../footer/Footer'

interface LayoutProps {
  children: ReactNode
}
export default function Layout(props: LayoutProps) {
  return (
    <div>
      <Header />
      <div className="flex flex-col">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            {props.children}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
