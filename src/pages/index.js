import Head from "next/head";
import Header from "../components/Header";
import Banner from "../components/Banner";
import ProductFeed from "../components/ProductFeed";

export default function Home() {
  return (
    <div className="bg-gray-100">
      <Head>
        <title>Amazon Clone</title>
        <meta name="description" content="Amazon Clone" />
        <meta name="author" content="Rajdeep Ghosh" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
      </Head>

      <Header />

      <main className="max-w-screen-xl mx-auto">
        <Banner />
        <ProductFeed />
      </main>
    </div>
  );
}
