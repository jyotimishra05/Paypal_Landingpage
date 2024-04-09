import React from 'react'
import Img7 from "../assets/img7.png"
import Img8 from "../assets/img8.png";
import Img9 from "../assets/img9.png";
import Footer from './Footer';

const Section6 = () => {
  return (
    <div className=" font-sans">
      <div className="flex md:flex-row flex-col items-center md:space-x-32 space-y-16 mx-20 justify-center mb-20">
        <img src={Img7} />
        <div className="mx-10 ">
          <h1 className="font-bold">
            Reporter forester economic impact analysis
          </h1>
          <p className="font-light my-4 ">
            Whether you're making a switch or upgrading your tools, learn how we
            make the integration process as flexible and seamless as possible.
          </p>
          <a href="#" className=" text-blue-700 ">
            Get the Report →
          </a>
        </div>
      </div>

      <div className="flex md:flex-row bg-slate-100 md:h-[600px] h-auto flex-col  md:space-x-24 justify-center md:my-10 my-40">
        <div className=" bg-white m-10 flex flex-col space-y-2 items-center md:w-[350px] lg:w-[500px]">
          <img src={Img8} className=" w-96 object-cover my-10 " />
          <h1 className=" text-3xl text-gray-800 mx-10">
            Contact our sales team member
          </h1>
          <div className="flex flex-col items-center space-y-10 ">
            <p className=" text-gray-600 font-light mx-10">
              Learn how payment can be leveraged as a catalyst for growth.
            </p>

            <button className="rounded-full bg-blue-800 text-white font-semibold w-40 p-2 ">
              Contact Sales
            </button>
          </div>
        </div>

        <div className=" bg-white m-10 flex flex-col space-y-2 items-center md:w-[350px] lg:w-[500px]">
          <img src={Img9} className=" w-96 object-cover my-10 " />

          <h1 className=" text-3xl text-gray-800 mx-10 ">
            Explore developer documentation
          </h1>
          <div className="flex flex-col items-center space-y-10">
            <p className=" text-gray-600 font-light mx-10">
              See how our flexible and interoparable tecnology helps to simplify
              integration.
            </p>

            <button className="rounded-full bg-blue-800 text-white font-semibold w-60 p-2">
             Visit Developer Docs
            </button>
          </div>

        </div>

      </div>
      <Footer/>
    </div>
  );
}

export default Section6
