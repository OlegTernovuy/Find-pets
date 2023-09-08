import React from "react";
import { Search } from "../components/pets/Search";
import { CategoryFind } from "../components/layout/CategoryFind";
import { PetsCards } from "../components/pets/PetsCards";
import { Hero } from "../components/layout/Hero";
import { useAppSelector } from "../hook/redux";
import { CardSkeleton } from "../components/layout/Skeleton/Skeleton";

export const MainPage = () => {
  const { loading, error } = useAppSelector((state) => state.pets);

  return (
    <div className="w-full">
      <Hero />
      <Search />
      <CategoryFind />
      {loading && (
        <div className="text-center text-2xl text-white">
          <CardSkeleton />
        </div>
      )}
      {error && <p className="text-center text-2xl text-red-700">{error}</p>}
      <PetsCards />
    </div>
  );
};
