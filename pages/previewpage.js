import { useRouter } from "next/router";
import { useEffect, useState, Fragment } from "react";
import Layout from "../components/layout";
import ContentPage from "../components/main/content-page";

export default function Page() {
  const [pagedata, setPagedata] = useState({});

  useEffect(() => {
    window.addEventListener(
      "message",
      function (event) {
        if (!event.data.entry) return;
        setPagedata(event.data.entry);
      },
      false
    );
  }, []);

  if (!pagedata) {
    return <div className="text-center text-white">Loading . . .</div>;
  }

  return (
    <Layout pagedata={pagedata}>
      <ContentPage pagedata={pagedata}></ContentPage>
    </Layout>
  );
}
