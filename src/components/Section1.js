import React from 'react'
import Section2 from './Section2';

const Section1 = () => {
  const images = [
    "https://logowik.com/content/uploads/images/amex-card1708.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPc0r1I2jSpprcRk7ztXOc5MmDMhBLR777XzFGbTuLIQ&s",
    "https://www.investopedia.com/thmb/F8CKM3YkF1fmnRCU2g4knuK0eDY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/MClogo-c823e495c5cf455c89ddfb0e17fc7978.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6CUaShM6SfD5qX3YWODAB6nNA-R4mdKtovINCN_GaEw&s",
    "https://i.pinimg.com/564x/8d/ec/e1/8dece15cc40aaf66ed47f6591b639d06.jpg",
    "https://igamingfuture.com/wp-content/uploads/2020/11/Trustly.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Giropay.svg/2560px-Giropay.svg.png",
    "https://upload.wikimedia.org/wikipedia/en/thumb/0/0a/Blik_logo.svg/1200px-Blik_logo.svg.png",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAq_aX9KIsH-dFxs9pd5unE_zfT9e5Jy-TNkT89bJqgA&s",
    "https://getlogovector.com/wp-content/uploads/2020/03/safetypay-logo-vector.png",
    "https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/072020/logo_di_satispay.png?GZxqkPYgKUrth57aVhSJMpAXXe2bXy_o&itok=GQNpo-Od",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu_LefNEdPIe7R3elnH_Z5QjbYhqKs5yT0hHp_kfy2gA&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQv0qfA5iT5CljHHr8yCTaoDy_O-3RsB6sCNvFykXu6xA&s",
    "https://img.freepik.com/premium-vector/handshake-logo-two-hands-make-deal-logo-vector-illustration_9583-514.jpg",
  ];
  return (
    <div>
      <div className="flex justify-center mt-32">
        <div className="flex md:flex-row flex-col w-3/4 justify-center items-center">
          <div className="md:w-5/12 p-10 w-full">
            <p className="text-blue-900 md:text-8xl text-5xl">401%</p>
            <p className="font-normal  text-2xl text-gray-800 mt-10">
              ROI for the composite merchant, estimated by Forrested with PayPal
              enterprise payment solutions.
            </p>
          </div>
          <hr className="border-l border-gray-300 h-full mx-4 " />
          <div className="md:w-1/2 w-full p-8">
            <p className="text-blue-900 text-2xl mt-14">86%</p>
            <p className="font-light text-gray-700">
              of our enterprise user indicate that we had positive impact on
              authorization rate since adoption.
            </p>
            <hr className=" border-t-[0.6px] my-10 border-gray-400 " />
            <p className="text-blue-900 text-2xl  mt">86%</p>
            <p className="font-light text-gray-700">
              of our enterprise user indicate that we had positive impact on
              authorization rate since adoption.
            </p>
          </div>
        </div>
      </div>

      <div className="md:flex justify-center md:flex-row flex-col items-center ">
        <div className="md:w-1/2 w-full p-20  mt-16  md:ml-20">
          <p className="text-3xl text-gray-800">
            Offer a range of payment methods worldwide.
          </p>
          <p className="font-light py-4">
            Reach the new customers and give them payment option thety prefer so
            you don't miss a sale.
          </p>
          <p className="font-light py-1 mb-4">
            Accept the credit and debit cards, digital wallets , Paypal and 20+
            local payment methods.All in a single integration.
          </p>
          <a href="#" className=" text-blue-700">
            More about payment method →
          </a>
        </div>
        <div className="md:w-1/2  bg-slate-100 md:mr-40 md:mt-40  h-96 m-10 ">
          <div className="grid grid-cols-4 gap-4  md:mt-10 ml-6 ">
            {images.map((items, id) => (
              <div key={id} className=" w-16 flex items-center justify-center">
                <img src={items} alt={`imagelogo${id}`} />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-wrap justify-center md:m-24 p-2 m-14 space-y-10 md:space-y-0">
        <div className="w-full md:w-1/2 lg:w-1/4 px-2">
          <div>
            <h1 className="font-bold mb-4">
              Enable multiple commerce scenarios
            </h1>
            <p className="font-light">
              Web. Mobile.App. In store Get paid in the channels where you sell
              today and tomorrow.
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
      <Section2/>
    </div>
  );
}

export default Section1
