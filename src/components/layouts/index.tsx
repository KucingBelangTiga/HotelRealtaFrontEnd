import React, { ReactNode } from "react";
import Header from "../headers";
import Footer from "../footers";

interface LayoutProps {
  children: ReactNode;
}
export default function Layout(props: LayoutProps) {
  const { children } = props;
  return (
    <div>
      <Header />
      <div className="p-[20px] sm:ml-72">
        <div className="pt-4 mt-12 -ml-6">{children}</div>
      </div>
      <Footer />
    </div>
  );
}
