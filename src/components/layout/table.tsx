import React from 'react'

const Table = (props:any) => {
  return (
    <div className="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg py-4">
        <header className="px-5 py-4 border-b border-gray-100">
                 <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300">Search</label>
                 <div className="relative">
                     <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                         <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                     </div>
                     <input type="search" onChange={props.setSearch} className="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Stock Name..." required />
                 </div>
             </header>
        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            {props.children}
        </table>
    </div>
  )
}

export default Table
