import GlobalStyle from "../styles";
import { SWRConfig } from "swr";

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
  return (
    <>
      <SWRConfig value={{ fetcher }}>
        <GlobalStyle />
        <Component {...pageProps} />
      </SWRConfig>
    </>
  );
}
