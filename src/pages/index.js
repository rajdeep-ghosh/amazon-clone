import Head from "next/head";
import Header from "../components/Header";

export default function Home() {
  return (
    <div className="flex flex-col justify-center h-screen">
      <Head>
        <title>Amazon Clone</title>
        <meta name="description" content="Amazon Clone" />
      </Head>

      <Header />
    </div>
  );
}
