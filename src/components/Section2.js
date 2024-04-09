import React from 'react'
import Img1 from "../assets/img1.png"
import Img2 from "../assets/img2.png"
import Section3 from './Section3';

const Section2 = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row items-center w-full bg-slate-100 font-sans">
        <img src={Img1} className="w-1/2 md:w-4/12 m-4 md:m-20" />
        <div className="flex-1 p-4 md:px-16">
          <h1 className="font-medium text-4xl mb-6">Boost approval rates</h1>
          <p>
            Optimize your backend payments setup with granular, clean messaging
            and the right payment rails, so you can help boost approval chances
            and capture more of your hard-earned revenue.
          </p>
        </div>
      </div>
      <div className=" bg-amber-50">
        <div className="flex flex-wrap justify-center mx-28 py-28 items-center">
          <div className="w-full md:w-1/2 lg:w-1/4 md:px-4">
            <div>
              <h1 className="font-bold mb-4 ">
                Enable multiple commerce scenarios
              </h1>
              <p className="font-light mb-4">
                Web. Mobile.App. In store Get paid in the channels where you
                sell today and tomorrow.
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 md:px-4">
            <div>
              <h1 className="font-bold mb-4">Reach millions of consumers</h1>
              <p className="font-light mb-4">
                Connect with our expansive network of shoppers around the world
                who love to use PayPal, Venmo, and Pay Later.
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 md:px-4">
            <div>
              <h1 className="font-bold mb-4">Vault customer payment info</h1>
              <p className="font-light mb-4">
                Help drive conversion and make repeat purchases simple for your
                customers with secure data storage.
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 md:px-4">
            <div>
              <h1 className="font-bold mb-4">Optimize checkout experiences </h1>
              <p className="font-light mb-4">
                Control the look and feel of your checkout page with drop-in UI,
                hosted fields, and customizable smart payment buttons.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center w-full bg-slate-100">
        <div className="flex-1 p-4 md:px-16">
          <h1 className="font-medium text-4xl mb-6">Orchestration made simple</h1>
          <p>
            Optimize your backend payments setup with granular, clean messaging
            and the right payment rails, so you can help boost approval chances
            and capture more of your hard-earned revenue.
          </p>
        </div>
        <img src={Img2} className="w-1/2 md:w-4/12 m-4 md:m-20" />
      </div>
    <Section3/>
    </div>
  );
}

export default Section2
