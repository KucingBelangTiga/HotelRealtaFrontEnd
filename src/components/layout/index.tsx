import React, { ReactNode } from "react";
import Header from "../header";
import Footer from "../footer";

interface LayoutProps {
  children: ReactNode;
}
export default function Layout(props: LayoutProps) {
  const { children } = props;
  return (
    <div>
      <Header />
      <div className="p-10 sm:ml-72">
        <div className="p-4 mt-14">{children}</div>
      </div>
    </div>
  );
}
