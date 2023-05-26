import Link from "next/link";
import React, { useState, useEffect } from "react";
import Layout from "../../components/layout";
import 'primeflex/primeflex.css';

const navigation = [ 
  {
    name: "Department",
    href: "department", 
    svg: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
        <polyline points="9 22 9 12 15 12 15 22"></polyline>
        </svg>
    ),
  }, 
  {
    name: "Employee",
    href: "employee",
    svg: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
        <circle cx="9" cy="7" r="4"></circle>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
        </svg>
    ),
  },
  {
    name: "Work Order",
    href: "work_orders",
    svg: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="12" cy="12" r="10"></circle>
        <polyline points="12 6 12 12 16 14"></polyline>
        </svg>
    ),
  },
];

export default function LayoutHr({ 
  children,
  }: {
    children: React.ReactNode;
  }) {

  useEffect(() => {
    document.title = "Human Resource"; 
  }, []);

  return (
    <Layout>
      <div>
      <aside
        id="logo-sidebar"
        className="fixed top-0 left-0 z-10 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white   sm:translate-x-0 dark:bg-darkBlue "
        aria-label="Sidebar"
      >
        <div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-darkBlue">
          <ul className="space-y-2 font-medium">
            {navigation.map((item, index) => (
              <li key={index}>
                <Link
                  href={item.href}
                  className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-lightBlue dark:hover:bg-coldBlue"
                >
                  {item.svg}
                  <span className="ml-3">{item.name}</span>
                </Link>
              </li>
            ))}
          </ul>

          <hr className="fixed bottom-20 w-5/6 border-gray-200 sm:mx-2 dark:border-gray-700" />
            <Link href="/" className="hover:underline" passHref>
            <span className="fixed bottom-8 left-0 right-0 text-sm text-gray-500 sm:text-center dark:text-gray-400" title="Dashboard">
              &copy; 2023 <span className="hover:underline">
                RealtaHotel
              </span>.</span>
            </Link>

        </div>
      </aside>

      <div className="p-10 sm:ml-72 ">
        <div className="p-4 mt-14">{children}</div>
      </div>
    </div>
      </Layout>
  );
}
