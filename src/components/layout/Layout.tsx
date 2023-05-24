import React, { ReactNode } from "react";
import Header from "../header/Header";

interface LayoutProps {
  children: ReactNode;
}
export default function Layout(props: LayoutProps) {
  const { children } = props;
  return (
    <div>
      <Header />
      {children}
    </div>
  );
}