//push to hr/layout
import Layout from "../../components/layout";
import Link from "next/link";
import React, { useEffect } from "react";
import { useRouter } from "next/router";

function Index() {
  const router = useRouter();

  useEffect(() => {
    router.push("/hr/layout");
  }, []);

  return (
    <Layout>
      <h1>Redirecting to HR...</h1>
    </Layout>
  );
}
export default Index;
