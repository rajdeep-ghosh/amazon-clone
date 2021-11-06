import Image from "next/image";
import Header from "../components/Header";

function Checkout() {
  return (
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
            <h1 className="text-3xl font-semibold border-b-2 pb-4">Your Shopping Basket</h1>
          </div>
        </div>

        {/* Right Section */}
        <div></div>
      </main>
    </div>
  );
}

export default Checkout;
