import React from "react";
import Typed from "react-typed";
import { Link } from 'react-scroll';


export const Hero = () => {
  return (
    <div className="text-white bg-hero-pattern bg-cover sm:bg-center mb-6">
      <div className="max-w-[800px] -mt-24 w-full h-screen mx-auto text-center flex flex-col justify-center">
        <p className="text-blue font-bold p-2">HELP FIND SOMEONE'S PET</p>
        <h1 className="md:text-7xl md:py-6 sm:text-6xl text-4xl font-bold">
          Find a friend
        </h1>
        <div className="flex justify-center items-center">
          <p className="md:text-5xl sm:text-2xl text-5xl font-bold py-4">
            You can find it here
          </p>
          <Typed
            className="md:text-5xl sm:text-2xl text-5xl font-bold pl-1 md:pl-3 text-gray"
            strings={["DOG", "CAT", "RACCOON"]}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </div>
        <p className="md:text-2xl text-xl font-bold text-gray">
          If you find an animal, you can place it here or find it for yourself
        </p>
        <Link to="hero" spy={true} smooth={true} duration={800}><button className="btn">Get Started</button></Link>
      </div>
    </div>
  );
};
