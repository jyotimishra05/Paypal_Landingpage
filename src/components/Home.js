import React from "react";
import Section1 from "./Section1";
import Img3 from "../assets/img3.png";

const Home = () => {
  return (
    <div className="font-sans ">
      <div className="w-full flex flex-col justify-center items-center mt-10">
        <div className="w-3/5 text-center mb-8">
          <p className="text-4xl md:text-5xl">
            Global payment processing solutions
          </p>
          <p className="my-2">
            Grow and optimize your business with a flexible, end-to-end payments
            platform powered by Braintree Technology.
          </p>
        </div>
        <button className="bg-blue-900 text-white rounded-full px-6 py-3 md:mb-8 ">
          Connect with a Payments Expert
        </button>
        <div className="flex flex-col md:flex-row mt-8 justify-center">
          <img
            className="w-64 md:w-1/4 h-40 md:h-80 md:mt-10 hidden md:block"
            src={Img3}
            alt="Image 3"
          />
          <img
            className="hidden md:block w-64 md:w-1/4 rounded-l-lg h-96 "
            src="https://images.unsplash.com/photo-1565106430482-8f6e74349ca1?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Image 4"
          />
          <div className="md:ml-4 flex flex-col justify-center items-center bg-white rounded-r-lg p-6 w-full md:w-64 shadow-2xl">
            <img
              className="w-64 h-40 "
              src="https://plus.unsplash.com/premium_photo-1689247946001-34d1588297f4?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Image 5"
            />
            <div className="flex justify-between mt-4 w-full">
              <div>
                <p className="font-light">Speckled bowl set</p>
                <p className="text-sm font-light">Set of two</p>
              </div>
              <div className="font-extralight text-gray-600">$24.00</div>
            </div>
            <button className="mt-4 bg-slate-400 text-gray-700 rounded-full px-6 py-2 w-full">
              Checkout
            </button>
          </div>
        </div>
      </div>
      <Section1/>
    </div>
  );
};

export default Home;
