import React from 'react'
import Section5 from './Section5';

const Section4 = () => {
    const listItems=[
        "Accept payments in 200 markets and 130 currencies",
        "Make payouts in 200 markets",
        "Acquiring in 47 markets",
        "Wide range of payment methods",
        "Recurring billing capabilities",
        "Network tokenization",
        "Batch and real-time account updater",
        "Advanced predictive risk solutions",
        "PCI-compliant vault",
        "Chargeback Protection",
        "Dispute automation",
        "White glove onboarding and support",
        "24/7 monitoring & optimization",
        "Global support center"

    ]
  return (
    <div >
      <div className="bg-blue-950 h-[680px] mb-[600px] md:mb-[450px]">
        <div className="flex flex-col md:flex-row items-center w-full text-white">
          <div className="flex-1 flex flex-col justify-center items-center p-4 md:px-16">
            <div className="text-center  md:mb-96 mb-10">
              <h1 className="font-medium text-4xl mb-6">
                Our modular solution can grow with you
              </h1>
              <p>
                Optimize your backend payments setup with granular, clean
                messaging and the right payment rails, so you can help boost
                approval chances and capture more of your hard-earned revenue.
              </p>
            </div>
          </div>

          <div className="w-full md:w-1/2 m-4 md:m-20 bg-white text-gray-700 shadow-2xl">
            <div className="p-4">
              {listItems.map((item, id) => (
                <div key={id}>
                  <p className="flex-1 mb-6 border-t border-gray-400 pt-4">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
     <Section5/>
    </div>
  );
}

export default Section4
