import React from 'react'
import Img5 from "../assets/img5.png";
import Img6 from "../assets/img6.png";
import Section6 from './Section6';

const Section5 = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row items-center w-full bg-slate-100 font-sans">
        <img src={Img5} className="w-2/3 md:w-1/2  m-4 md:m-20 rounded-lg" />
        <div className="flex-1 p-4 md:px-16">
          <h1 className="font-medium text-4xl mb-6">
            Your partner for innovation
          </h1>
          <p>
            Optimize your backend payments setup with granular, clean messaging
            and the right payment rails, so you can help boost approval chances
            and capture more of your hard-earned revenue.
          </p>
          <br />
          <a href="#" className="mt-20 text-blue-700">
            Play the video →
          </a>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center w-full bg-blue-950 text-white">
        <div className="flex-1 p-4 md:px-16 flex-col">
          <h2 className="font-normal">
            The user experience in terms of usability, trust, and flexibility is
            everything, especially for the digitally native consumer. The
            experience PayPal helps us provide is beating all consumer
            expectations.
          </h2>
          <p className="mt-4 font-light">David Oksman Chief </p>
          <p className="font-light">Marketing Officer </p>
          <p className="mt-2 font-bold"> Samsonite </p>
        </div>
        <img src={Img6} className="w-1/2 md:w-4/12 md:m-20 rounded-lg " />
      </div>

      <div className="flex flex-col md:flex-row items-center w-full mt-24 text-black  ">
        <div className="flex-1 w-1/2 mx-20">
          <div className="p-4">
            <h1 className="font-bold text-2xl">
              Executive Guide: PayPal enterprise integration
            </h1>
            <p className="mt-4 font-light">
              Whether you're making a switch or upgrading your tools, learn how
              we make the integration process as flexible and seamless as
              possible.
            </p>
            <h2 className="text-blue-700 mt-4 ">Get the guide →</h2>
          </div>
        </div>
      
        <div className="flex-1 w-1/2">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 w-px bg-gray-400 hidden md:block"></div>
            <div className="p-4 md:mx-20">
              <h1 className="font-bold text-2xl">
                eBook: Signs you've outgrown your payment processor
              </h1>
              <p className="mt-4 font-light">
                Payments processor stunting your growth? It might be time to
                look for a new one.
              </p>
              <h2 className="text-blue-700 mt-4">Read the ebook →</h2>
            </div>
          </div>
        </div>
      </div>
      <hr className=" border-t-[0.6px] m-24 border-gray-500 " />
      <Section6 />
    </div>
  );
}

export default Section5
