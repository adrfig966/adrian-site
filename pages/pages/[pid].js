import { useRouter } from "next/router";
import { useEffect, Fragment } from "react";
import Layout from "../../components/layout";
import ContentPage from "../../components/main/content-page";

export default function Page({ pagedata }) {
  useEffect(() => {
    console.log(pagedata);
  }, []);

  return (
    <Layout pagedata={pagedata}>
      <ContentPage pagedata={pagedata}></ContentPage>
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const res = await fetch(
    "https://headless.afigueroa.xyz/api/collections/get/Pages?token=account-eceb5fb49df2102a005a7b28fa1449",
    {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        filter: { _id: context.params.pid },
      }),
    }
  );
  console.log(process.env.BASE_URL);
  const data = await res.json();

  if (!data || data.total == 0) {
    console.log("Not found :(");
    console.log("This is data", data);
    return {
      notFound: true,
    };
  }

  return {
    props: { pagedata: data.entries[0] }, // will be passed to the page component as props
  };
}
