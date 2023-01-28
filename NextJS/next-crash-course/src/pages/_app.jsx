import Layout from "@/layout/Layout";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

//* _app gibi dosyalar sistem dosyası olarak geçiyor, url'den erişeyemeyiz
