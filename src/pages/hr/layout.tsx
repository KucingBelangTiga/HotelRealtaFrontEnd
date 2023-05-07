import Link from "next/link";
import React from "react";
import Layout from "../../components/layout";

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
  // {
  //   name: "Job Role",
  //   href: "job_role",
  //   svg: (
  //       <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  //       <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path>
  //       <line x1="7" y1="7" x2="7.01" y2="7"></line>
  //       </svg>
  //   ),
  // },
  // {
  //   name: "Shift",
  //   href: "shift",
  //   svg: (
  //       <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  //       <path d="M17 2.1l4 4-4 4"/>
  //       <path d="M3 12.2v-2a4 4 0 0 1 4-4h12.8M7 21.9l-4-4 4-4"/>
  //       <path d="M21 11.8v2a4 4 0 0 1-4 4H4.2"/>
  //       </svg>
  //   ),
  // },
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
  return (
    <Layout>
    <div>
      <aside
        id="logo-sidebar"
        className="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-darkBlue dark:border-coldBlue"
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
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" style={{ marginTop: "272px"}} />
          <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">&copy; 2023 <a href="#" target="_blank" className="hover:underline"> Realta Hotels</a>.
          </span>
        </div>
      </aside>
      <div>{children}</div>
    </div>
</Layout>
  );
}
