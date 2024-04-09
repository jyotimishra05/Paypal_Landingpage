import React from 'react'


const Footer = () => {
  return (
    <div className=" font-sans mx-auto">
      <div className=" font-light text-sm text-gray-500 md:m-24 mx-16 lg:m-10">
        <p>
          1 For the purpose of this study, Forrester aggregated data from four
          enterprise merchants to create a single composite merchant with $500
          million in revenue processed yearly. Individual results will vary.
        </p>
        <br />
        <p>
          2 Forrester, Commissioned by PayPal, December 2021. Forrester
          constructed a Total Economic ImpactTM framework for those
          organizations considering an investment in the PayPal's enterprise
          payment platform, powered by Braintree.
        </p>
        <br />
        <p>
          3 B2B International, commissioned by PayPal, Nov-Dec 2021, B2B
          International surveyed amongst 504 mid-market and large enterprises in
          US, UK, and DE during November/December 2021. LE defined as merchants
          with annual revenue 100M; Mid-market defined as merchants with annual
          revenue between 20M-100M. Base N: Enterprise Braintree Users = 51)
        </p>
        <br />
        <p>
          4 Major global payments network and PayPal internal data analysis from
          transactions over a 12-month period from Q4 2020-Q3 2021 in 8 markets
          (US, UK, DE, AU, FR, IT, ES, CA) across 12 verticals. Does not include
          transactions from domestic schemes (e.g. Cartes Bancaires, EFTPOS).
        </p>
      </div>

      <div>
        <div className="flex justify-center md:justify-start">
          <img
            src="https://cdn.shopify.com/s/files/1/0388/3771/4989/files/PAYPAL_LOGO_480x480.png?v=1650301781"
            className=" w-48 m-10"
          />
        </div>

        <div className="text-blue-950 text-sm font-semibold">
          <ul className="flex flex-wrap justify-center md:justify-start md:flex-row space-x-3 md:space-x-5 m-5">
            <li>Help</li>
            <li>Contact</li>
            <li>Fees</li>
            <li>Security</li>
            <li>Apps</li>
            <li>Shope</li>
            <li>Enterprise</li>
            <li>Partners</li>
            <li>Feedback</li>
          </ul>
        </div>
        <hr className="border-l border-gray-400 h-full mx-4" />

        <div className="text-blue-950 text-sm font-semibold">
          <div className="flex flex-wrap justify-center md:justify-start md:flex-row md:space-x-40 space-y-3 md:space-y-0">
            <ul className="flex flex-wrap justify-center md:justify-start md:flex-row space-x-3 md:space-x-5 m-5">
              <li>About</li>
              <li>Newsroom</li>
              <li>Jobs</li>
              <li>Investor Relations</li>
              <li>Values in Action</li>
              <li>Public Policy</li>
              <li>Sitemap</li>
            </ul>
            <ul className="flex flex-wrap md:flex-row space-x-3 md:space-x-5 items-center">
              <li className="text-gray-600 md:my-4">@1992-2022</li>
              <li>Accessibility</li>
              <li>Privacy</li>
              <li>Cookies</li>
              <li>Legal</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer
