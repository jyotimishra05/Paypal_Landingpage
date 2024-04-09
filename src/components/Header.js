import React, { useState } from 'react'
import Logo from "../assets/logo.png"
import Home from './Home';


const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex justify-between w-full h-16 p-5 text-blue-950 mx-auto items-center border-b-[0.2px]  border-gray-700 font-sans">
        <div className="flex justify-between w-2/6 items-center cursor-pointer">
          <div className="w-10 ">
            <img src={Logo} alt="logo" />
          </div>
          <div className="md:flex hidden justify-end space-x-5">
            <p>Personal</p>
            <p>Business</p>
            <p>Developers</p>
            <p>Help</p>
          </div>
        </div>
        <div className="flex md:justify-between md:w-60 items-center">
          <button className="text-blue-900 rounded-3xl outline border-0 p-1 w-28 text-lg md:block hidden">
            Sign In
          </button>
          <button className="bg-blue-900 text-white rounded-3xl  p-2 w-28 text-lg md:block hidden">
            Sign Up
          </button>
          {/* Hamburger icon for small screens */}
          <div className="md:hidden" onClick={toggleMenu}>
            <svg
              className="w-10 h-10 cursor-pointer"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </div>
        </div>
      </div>
      {/* Responsive menu */}
      {menuOpen && (
        <div className="md:hidden w-full bg-blue-950 text-white text-lg py-2 px-5 space-y-3">
          <p>Personal</p>
          <p>Business</p>
          <p>Developers</p>
          <p>Help</p>
          {/* Sign-in and Sign-up buttons */}
          <div className="flex justify-center space-x-6">
            <button className="text-white outline border-0 rounded-full px-3 py-1">
              Sign In
            </button>
            <button className="bg-white text-blue-900 px-3 py-1 rounded-full">
              Sign Up
            </button>
          </div>
        </div>
      )}
      <Home />
    </div>
  );
}

export default Header
