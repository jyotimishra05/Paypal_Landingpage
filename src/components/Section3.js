import React from 'react'
import Img4 from "../assets/img4.png"
import Section4 from './Section4';

const Section3 = () => {
  return (
    <div>
      <div className="flex flex-wrap justify-center md:m-24 p-2 m-14 space-y-10 md:space-y-0 ">
        <div className="w-full md:w-1/2 lg:w-1/4 px-2">
          <div>
            <h1 className="font-bold mb-4">
              Orchestrate multiple payments partners
            </h1>
            <p className="font-light">
              You always maintain full control of your data and configure
              partner access.
            </p>
          </div>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/4 px-4">
          <div>
            <h1 className="font-bold mb-4">Reach millions of consumers</h1>
            <p className="font-light">
              Connect with our expansive network of shoppers around the world
              who love to use PayPal, Venmo, and Pay Later.
            </p>
          </div>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/4 px-4">
          <div>
            <h1 className="font-bold mb-4">Vault customer payment info</h1>
            <p className="font-light">
              Help drive conversion and make repeat purchases simple for your
              customers with secure data storage.
            </p>
          </div>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/4 px-4">
          <div>
            <h1 className="font-bold mb-4">Optimize checkout experiences </h1>
            <p className="font-light">
              Control the look and feel of your checkout page with drop-in UI,
              hosted fields, and customizable smart payment buttons.
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center w-full bg-slate-100">
        <img src={Img4} className="w-1/2 md:w-4/12 m-4 md:m-20 rounded-lg" />
        <div className="flex-1 p-4 md:px-16">
          <h1 className="font-medium text-4xl mb-6">
            Manage risk and compliance
          </h1>
          <p>
            We can help you identify and manage potential security, fraud, and
            compliance risk—so you can focus on what matters most: growing your
            business.
          </p>
          <br />
          <a href="#" className="mt-20 text-blue-700">
            Learn more about managing risk →
          </a>
        </div>
      </div>

      <div className="flex flex-wrap justify-center  md:m-24 p-2 m-14 space-y-10 md:space-y-0">
        <div className="w-full md:w-1/2 lg:w-1/4 md:px-2 ">
          <div>
            <h1 className="font-bold mb-4">Right size your fraud solution</h1>
            <p className="font-light">
              Choose the manage of fraud protection you need --from our built-in
              fraud checks to advanced tools.
            </p>
            <br />
            <a href="#" className="mt-20 text-blue-700">
              About fraud protection →
            </a>
          </div>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/4 md:px-4">
          <div>
            <h1 className="font-bold mb-4">Arms youself against chargebacks</h1>
            <p className="font-light">
              Connect with our expansive network of shoppers around the world
              who love to use PayPal, Venmo, and Pay Later.
            </p>
          </div>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/4 md:px-4">
          <div>
            <h1 className="font-bold mb-4">Keep up with compliance</h1>
            <p className="font-light">
              Help drive conversion and make repeat purchases simple for your
              customers with secure data storage.
            </p>
          </div>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/4 md:px-4">
          <div>
            <h1 className="font-bold mb-4">Let us manage disputes </h1>
            <p className="font-light">
              Control the look and feel of your checkout page with drop-in UI,
              hosted fields, and customizable smart payment buttons.
            </p>
          </div>
        </div>
      </div>
      <Section4/>
    </div>
  );
}

export default Section3
