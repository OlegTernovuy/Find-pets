import React, { useContext, useEffect, useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

export const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const navigate = useNavigate();

  const { user, logOut } = useContext(AuthContext);

  const [loading, setLoading] = useState(true);

  const handleSignOut = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const handlePhoneSignOut = () => {
    handleSignOut();
    handleNav();
  }

  useEffect(() => {
    const checkAuthentication = async () => {
      await new Promise((resolve) => setTimeout(resolve, 50));
      setLoading(false);
    };
    checkAuthentication();
  }, [user]);

  return (
    <div className="flex justify-between items-center h-24 max-w-screen-xl mx-auto px-4 text-white">
      <h1 className="w-full text-3xl font-bold text-blue">FPets</h1>
      <ul className="hidden md:flex whitespace-nowrap">
        <Link to={"/"} className="nav-li">
          Home
        </Link>
        <li className="nav-li">Account</li>
        {loading ? null : !user ? (
          <ul className="flex">
            <Link to={"/signIn"} className="nav-li">
              Sign In
            </Link>
            <Link to={"/signUp"} className="nav-li">
              Sign Up
            </Link>
          </ul>
        ) : (
          <ul className="flex">
            <li className="nav-li cursor-pointer" onClick={handleSignOut}>
              Sign out
            </li>
            <p className="nav-li">Welcome, {user.displayName}</p>
          </ul>
        )}
      </ul>
      <div className="md:hidden" onClick={handleNav}>
        {!nav ? <AiOutlineMenu size={20} /> : <AiOutlineClose size={20} />}
      </div>
      <div
        className={
          nav
            ? "fixed left-0 top-0 w-3/5 h-full bg-[#2f3655] ease-in-out duration-300 z-10"
            : "fixed left-[-100%]"
        }
      >
        <h1 className="w-full text-3xl font-bold text-blue m-4">FPets</h1>
        <ul className="p-4 uppercase flex flex-col">
          <Link to={"/"} onClick={handleNav} className="nav-li border-b w-full">
            Home
          </Link>
          <li className="nav-li border-b">Account</li>
          {loading ? null : !user ? (
            <ul className="flex flex-col">
              <Link
                to={"/signIn"}
                onClick={handleNav}
                className="nav-li border-b w-full"
              >
                Sign In
              </Link>
              <Link
                to={"/signUp"}
                onClick={handleNav}
                className="nav-li border-b w-full"
              >
                Sign Up
              </Link>
            </ul>
          ) : (
            <ul className="flex flex-col">
              <li
                className="nav-li border-b w-full cursor-pointer"
                onClick={handlePhoneSignOut}
              >
                Sign out
              </li>
              <p className="nav-li border-b w-full">
                Welcome, {user.displayName}
              </p>
            </ul>
          )}
        </ul>
      </div>
    </div>
  );
};
