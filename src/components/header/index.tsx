// import { Fragment, useEffect } from 'react'
// import { Disclosure, Menu, Transition } from '@headlessui/react'
// import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
// import { useDispatch, useSelector } from 'react-redux'
// import { useRouter } from 'next/router'
// import Image from "next/image";

// //header first
// // const navigation = [
// //     { name: 'Dashboard', href: '/', current: true },
// //     { name: 'Department', href: '/hr/department', current: false },
// //     { name: 'Employee', href: '/hr/employee', current: false },
// //     // { name: 'Dept. History', href: '/hr/employee_department_history', current: false },
// //     // { name: 'Pay History', href: '/hr/employee_pay_history', current: false },
// //     // { name: 'Job Role', href: '/hr/job_role', current: false },
// //     // { name: 'Shift', href: '/hr/shift', current: false },
// //     { name: 'Work Order', href: '/hr/work_orders', current: false },
// //     // { name: 'Work Order Detail', href: '/hr/work_order_detail', current: false }
// // ]

// // function classNames(...classes: any) {
// //     return classes.filter(Boolean).join(' ')
// // }

// // export default function Header() {
// //     const dispatch = useDispatch()
// //     return (
// //         <Disclosure as="nav" className="bg-gray-800">
// //             {({ open }) => ( 
// //                 <>
// //                     <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
// //                         <div className="relative flex h-16 items-center justify-between">
// //                             <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
// //                                 {/* Mobile menu button*/}
// //                                 <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
// //                                     <span className="sr-only">Open main menu</span>
// //                                     {open ? (
// //                                         <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
// //                                     ) : (
// //                                         <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
// //                                     )}
// //                                 </Disclosure.Button>
// //                             </div>
// //                             <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
// //                                 <div className="flex flex-shrink-0 items-center">
// //                                     <img
// //                                         className="block h-8 w-auto lg:hidden"
// //                                         src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
// //                                         alt="Your Company"
// //                                     />
// //                                     <img
// //                                         className="hidden h-8 w-auto lg:block"
// //                                         src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
// //                                         alt="Your Company"
// //                                     />
// //                                 </div>
// //                                 <div className="hidden sm:ml-6 sm:block">
// //                                     <div className="flex space-x-4">
// //                                         {navigation.map((item) => (
// //                                             <a
// //                                                 key={item.name}
// //                                                 href={item.href}
// //                                                 className={classNames(
// //                                                     item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
// //                                                     'rounded-md px-3 py-2 text-sm font-medium'
// //                                                 )}
// //                                                 aria-current={item.current ? 'page' : undefined}
// //                                             >
// //                                                 {item.name}
// //                                             </a>
// //                                         ))}
// //                                     </div>
// //                                 </div>
// //                             </div>
// //                             <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                                

// //                                 {/* Profile dropdown */}
// //                                 <Menu as="div" className="relative ml-3">
// //                                     <div>
// //                                     <Menu.Button type="button" className="flex mx-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="dropdown">
// //                                         <span className="sr-only">Open user menu</span>
// //                                         <img className="w-8 h-8 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt="user photo"/>
// //                                         </Menu.Button>
// //                                     </div>
// //                                     <Transition
// //                                         as={Fragment}
// //                                         enter="transition ease-out duration-100"
// //                                         enterFrom="transform opacity-0 scale-95"
// //                                         enterTo="transform opacity-100 scale-100"
// //                                         leave="transition ease-in duration-75"
// //                                         leaveFrom="transform opacity-100 scale-100"
// //                                         leaveTo="transform opacity-0 scale-95"
// //                                     >
                                        
// //                                         <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
// //                                             <Menu.Item>
// //                                                 {({ active }) => (
// //                                                     <a
// //                                                         href="#"
// //                                                         className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
// //                                                     >
// //                                                         Profile
// //                                                     </a>
// //                                                 )}
// //                                             </Menu.Item>
// //                                             <Menu.Item>
// //                                                 {({ active }) => (
// //                                                     <a
// //                                                         href="#"
// //                                                         className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
// //                                                     >
// //                                                         Settings
// //                                                     </a>
// //                                                 )}
// //                                             </Menu.Item>
// //                                             <Menu.Item>
// //                                                 {({ active }) => (
// //                                                     <a
// //                                                         // onClick={()=> logout()}
// //                                                         className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
// //                                                     >
// //                                                         Sign out
// //                                                     </a>
// //                                                 )}
// //                                             </Menu.Item>
// //                                         </Menu.Items>
// //                                     </Transition>
// //                                 </Menu>
// //                             </div>
// //                         </div>
// //                     </div>

// //                     <Disclosure.Panel className="sm:hidden">
// //                         <div className="space-y-1 px-2 pb-3 pt-2">
// //                             {navigation.map((item) => (
// //                                 <Disclosure.Button
// //                                     key={item.name}
// //                                     as="a"
// //                                     href={item.href}
// //                                     className={classNames(
// //                                         item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
// //                                         'block rounded-md px-3 py-2 text-base font-medium'
// //                                     )}
// //                                     aria-current={item.current ? 'page' : undefined}
// //                                 >
// //                                     {item.name}
// //                                 </Disclosure.Button>
// //                             ))}
// //                         </div>
// //                     </Disclosure.Panel>
// //                 </>
// //             )}
// //         </Disclosure>
// //     )
// // }

// //header last
// export default function Header() {
//     const router = useRouter();
  
//     return (
//       <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
//         <div className="px-3 py-3 lg:px-5 lg:pl-3">
//           <div className="flex items-center justify-between">
//             <div className="flex items-center justify-start">
//               <button
//                 data-drawer-target="logo-sidebar"
//                 data-drawer-toggle="logo-sidebar"
//                 aria-controls="logo-sidebar"
//                 type="button"
//                 className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
//               >
//                 <span className="sr-only">Open sidebar</span>
//                 <svg
//                   className="w-6 h-6"
//                   aria-hidden="true"
//                   fill="currentColor"
//                   viewBox="0 0 20 20"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path
//                     clip-rule="evenodd"
//                     fill-rule="evenodd"
//                     d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
//                   ></path>
//                 </svg>
//               </button>
//               <a href="#" className="flex ml-2 md:mr-24">
//                 <img
//                   src="https://flowbite.com/docs/images/logo.svg"
//                   className="h-8 mr-3"
//                   alt="FlowBite Logo"
//                 />
//                 <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">
//                   Flowbite
//                 </span>
//               </a>
//             </div>
//             <div className="flex items-center">
//               <div className="flex items-center ml-3">
//                 <div>
//                   <button
//                     type="button"
//                     className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
//                     aria-expanded="false"
//                     data-dropdown-toggle="dropdown-user"
//                   >
//                     <span className="sr-only">Open user menu</span>
//                     <img
//                       className="w-8 h-8 rounded-full"
//                       src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
//                       alt="user photo"
//                     />
//                   </button>
//                 </div>
//                 <div
//                   className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600"
//                   id="dropdown-user"
//                 >
//                   <div className="px-4 py-3" role="none">
//                     <p
//                       className="text-sm text-gray-900 dark:text-white"
//                       role="none"
//                     >
//                       Neil Sims
//                     </p>
//                     <p
//                       className="text-sm font-medium text-gray-900 truncate dark:text-gray-300"
//                       role="none"
//                     >
//                       neil.sims@flowbite.com
//                     </p>
//                   </div>
//                   <ul className="py-1" role="none">
//                     <li>
//                       <a
//                         href="#"
//                         className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
//                         role="menuitem"
//                       >
//                         Dashboard
//                       </a>
//                     </li>
//                     <li>
//                       <a
//                         href="#"
//                         className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
//                         role="menuitem"
//                       >
//                         Settings
//                       </a>
//                     </li>
//                     <li>
//                       <a
//                         href="#"
//                         className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
//                         role="menuitem"
//                       >
//                         Earnings
//                       </a>
//                     </li>
//                     <li>
//                       <a
//                         href="#"
//                         className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
//                         role="menuitem"
//                       >
//                         Sign out
//                       </a>
//                     </li>
//                   </ul>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </nav>
//     );
//   }

//header ilham
import { Fragment, useEffect, useState } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
// import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
// import { UserSignoutRequest } from "../../redux-saga/action/userAction";
// const navigation = [
//   { name: "Dashboard", href: "/dashboard", current: true },
//   { name: "regions", href: "/master/regions", current: false },
// ];

// function classNameNames(...classNamees: any) {
//   return classNamees.filter(Boolean).join(" ");
// }

export default function Header() {
  const router = useRouter();

  return (
    <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-darkBlue dark:border-coldBlue">
      <div className="px-3 py-3 lg:px-5 lg:pl-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-start">
            <button
              data-drawer-target="logo-sidebar"
              data-drawer-toggle="logo-sidebar"
              aria-controls="logo-sidebar"
              type="button"
              className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            >
              <span className="sr-only">Open sidebar</span>
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  clip-rule="evenodd"
                  fill-rule="evenodd"
                  d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                ></path>
              </svg>
            </button>
            <a href="https://flowbite.com" className="flex ml-2 md:mr-24">
              <img
                src="https://flowbite.com/docs/images/logo.svg"
                className="h-8 mr-3"
                alt="FlowBite Logo"
              />
              <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">
                Flowbite
              </span>
            </a>
          </div>
          <div className="flex items-center">
            <div className="flex items-center ml-3">
              <div>
                <button
                  type="button"
                  className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                  aria-expanded="false"
                  data-dropdown-toggle="dropdown-user"
                >
                  <span className="sr-only">Open user menu</span>
                  <img
                    className="w-8 h-8 rounded-full"
                    src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                    alt="user photo"
                  />
                </button>
              </div>
              <div
                className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600"
                id="dropdown-user"
              >
                <div className="px-4 py-3" role="none">
                  <p
                    className="text-sm text-gray-900 dark:text-white"
                    role="none"
                  >
                    Neil Sims
                  </p>
                  <p
                    className="text-sm font-medium text-gray-900 truncate dark:text-gray-300"
                    role="none"
                  >
                    neil.sims@flowbite.com
                  </p>
                </div>
                <ul className="py-1" role="none">
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                      role="menuitem"
                    >
                      Dashboard
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                      role="menuitem"
                    >
                      Settings
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                      role="menuitem"
                    >
                      Earnings
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                      role="menuitem"
                    >
                      Sign out
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

