import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="flex justify-between items-center h-24 max-w-screen-xl mx-auto px-4 text-white">
      <h1 className="w-full text-3xl font-bold text-blue">FPets</h1>
      <ul className="hidden md:flex whitespace-nowrap">
        <Link to={'/'} className="nav-li">Home</Link>
        <li className="nav-li">Account</li>
        <Link to={'/auth'} className="nav-li">Sign In</Link>
        <li className="nav-li">Sign Up</li>
      </ul>
      <div className="md:hidden" onClick={handleNav}>
        {!nav ? <AiOutlineMenu size={20} /> : <AiOutlineClose size={20} />}
      </div>
      <div
        className={
          nav
            ? "fixed left-0 top-0 w-3/5 h-full bg-[#2f3655] ease-in-out duration-300"
            : "fixed left-[-100%]"
        }
      >
        <h1 className="w-full text-3xl font-bold text-blue m-4">FPets</h1>
        <ul className="p-4 uppercase flex flex-col">
          <Link to={'/'} onClick={handleNav} className="nav-li border-b w-full">Home</Link>
          <li className="nav-li border-b">Account</li>
          <Link to={'/auth'} onClick={handleNav} className="nav-li border-b w-full">Sign In</Link>
          <li className="nav-li border-b">Sign Up</li>
        </ul>
      </div>
    </div>
  );
};
