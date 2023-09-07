import React from "react";
import { AiOutlineSearch } from "react-icons/ai";


export const Search = () => {
  return (
    <div className="text-center flex flex-col justify-center mb-6" id="hero">
      <h1 className="text-white md:text-5xl sm:text-4xl text-2xl font-bold md:pt-4 pt-2 md:pb-8 pb-4">Find your favorite pet</h1>
        <div className="relative flex justify-center">
          <input
            type="search"
            className="md:w-2/5 w-4/5 p-2 pl-5 text-sm border rounded-full"
            placeholder="Search"
            required
          />
          <AiOutlineSearch size={36} className="absolute inset-y-0 md:left-2/3 left-3/4 flex pr-3 h-full"/>
        </div>
    </div>
  );
};
