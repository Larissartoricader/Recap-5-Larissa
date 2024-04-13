import Layout from "@/components/Layout";
import GlobalStyle from "../styles";
import { SWRConfig } from "swr";
import useSWR from "swr";
const fetcher = (url) =>
  fetch(url).then((response) => {
    if (!response.ok) {
      const error = new Error("Uh! Error while fetchting data");
      error.info = response.json();
      error.status = response.status;
      throw error;
    }
    return response.json();
  });

export default function App({ Component, pageProps }) {
  const { data, isLoading, error } = useSWR(
    `https://example-apis.vercel.app/api/art`,
    fetcher
  );

  if (error) return <div>Failed to Load!!!</div>;
  if (isLoading) return <div>Still loading... Be patient</div>;
  console.log(data);

  return (
    <>
      <SWRConfig>
        <GlobalStyle />
        <Layout />
        <Component {...pageProps} pieces={data} />
      </SWRConfig>
    </>
  );
}
