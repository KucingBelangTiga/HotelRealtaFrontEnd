import Link from "next/link";
import React from "react";

const navigation = [
  {
    name: "Gallery",
    href: "/purchasing/gallery",
  },
  {
    name: "Vendor",
    href: "/purchasing/vendor",
  },
  {
    name: "Stock",
    href: "/purchasing/stock",
  },
  {
    name: "Purchasing Order",
    href: "/purchasing/purchasingOrder",
  },
];

export default function LayoutMaster({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <aside
        id="logo-sidebar"
        className="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full border-r border-gray-200 sm:translate-x-0 bg-darkBlue border-coldBlue"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 pb-4 overflow-y-auto bg-darkBlue">
          <ul className="space-y-2 font-medium">
            {navigation.map((item, index) => (
              <li key={index}>
                <Link
                  href={item.href}
                  className="flex items-center p-2 text-gray-900 rounded-lg text-white hover:bg-lightBlue hover:bg-coldBlue"
                >
                  <span className="ml-3">{item.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </aside>

      <div className="p-10 sm:ml-72">
        <div className="p-4 mt-14">{children}</div>
      </div>
    </div>
  );
}