import Head from "next/head";

export default function Home() {
  return (
    <div className="flex flex-col justify-center h-screen">
      <Head>
        <title>Amazon Clone</title>
        <meta name="description" content="Amazon Clone" />
      </Head>

      <h1 className="text-red-500 text-9xl text-center">Lets build Amazon</h1>
    </div>
  );
}
