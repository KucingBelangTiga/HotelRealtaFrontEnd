/* eslint-disable react-hooks/exhaustive-deps */
//push to dashboard
import Layout from "../components/layout";
import Link from "next/link";
import React, { useEffect } from "react";
import { useRouter } from "next/router";

function Index() {
  const router = useRouter();
  useEffect(() => {
    const removeDashboardFromURL = () => {
      const urlWithoutLayout = window.location.href.replace("/dashboard", "/RealtaHotel");
      window.history.replaceState({}, "", urlWithoutLayout);
    };
    router.push("/dashboard").then(removeDashboardFromURL);
    }, []);

  return (
    <Layout>
      <h1>Redirecting to dashboard...</h1>
    </Layout>
  );
}

export default Index;
