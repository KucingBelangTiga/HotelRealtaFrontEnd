// /* eslint-disable react-hooks/exhaustive-deps */
// //push to hr/layout
import Layout from "../../components/layout";
import Link from "next/link";
import React, { useEffect } from "react";
import { useRouter } from "next/router";
import 'primeflex/primeflex.css';

function Index() {
  const router = useRouter();

  useEffect(() => {
    router.push("/hr/department");
  }, []);
  
  return (
    <Layout>
      <h1>Redirecting to HR...</h1>
    </Layout>
  );
}
export default Index;
