import Image from "next/image";
import { useSelector } from "react-redux";
import { selectItems } from "../slices/basketSlice";
import Header from "../components/Header";
import CheckoutProduct from "../components/CheckoutProduct";
import Head from "next/head";

function Checkout() {
  const items = useSelector(selectItems);

  return (
    <>
      <Head>
        <title>Basket - Amazon Clone</title>
        <meta name="description" content="Amazon Clone" />
        <meta name="author" content="Rajdeep Ghosh" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
      </Head>
    
      <div className="bg-gray-100 font-Nunito-Sans antialiased">
        <Header />

        <main className="lg:flex max-w-screen-xl mx-auto">
          {/* Left Section */}
          <div className="flex-grow m-5 shadow-sm">
            <Image
              src="https://bit.ly/3kfRLjc"
              alt="checkout_banner"
              width={1020}
              height={250}
              objectFit="contain"
            />

            <div className="p-5 bg-white">
              <h1 className="text-3xl font-semibold border-b-2 pb-4 mb-8">
                {items.length === 0 ? `Your basket is empty` : `Your Shopping Basket`}
              </h1>

              {items.map((item, index) => {
                return (
                  <CheckoutProduct 
                    key={index}
                    id={item.id}
                    title={item.title}
                    desc={item.desc}
                    category={item.category}
                    price={item.price}
                    rating={item.rating}
                    img={item.img}
                    hasPrime={item.hasPrime}
                  />
                );
              })}
            </div>
          </div>

          {/* Right Section */}
          <div></div>
        </main>
      </div>
    </>
  );
}

export default Checkout;
