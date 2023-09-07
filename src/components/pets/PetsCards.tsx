import React, { useEffect } from "react";
import { PetCard } from "./PetCard";

import {  useAppDispatch, useAppSelector } from "../../hook/redux";
import { fetchPets } from "../../store/actions/petsActions";

// const pets: IPets[] = [
//   {
//     id: 1,
//     sell: 'sell',
//     liked: false,
//     photo: dog,
//     Breed: "Pomeranian",
//     Place: "Lyiv",
//     Age: "one year",
//     Price: "50$",
//   },
//   {
//     id: 2,
//     sell: 'sell',
//     liked: false,
//     photo: dog1,
//     Breed: "Pomeranian",
//     Place: "Lyiv",
//     Age: "one year",
//     Price: "50$",
//   },
//   {
//     id: 3,
//     sell: 'sell',
//     liked: true,
//     photo: dog,
//     Breed: "Pomeranian",
//     Place: "Lyiv",
//     Age: "one year",
//     Price: "50$",
//   },
//   {
//     id: 4,
//     sell: 'sell',
//     liked: false,
//     photo: dog1,
//     Breed: "Pomeranian",
//     Place: "Lyiv",
//     Age: "one year",
//     Price: "50$",
//   },
//   {
//     id: 5,
//     sell: 'in good hands',
//     liked: true,
//     photo: dog,
//     Breed: "Pomeranian",
//     Place: "Lyiv",
//     Age: "one year",
//     Price: "50$",
//   },
//   {
//     id: 6,
//     sell: 'sell',
//     liked: false,
//     photo: dog1,
//     Breed: "Pomeranian",
//     Place: "Lyiv",
//     Age: "one year",
//     Price: "50$",
//   },
// ];

export const PetsCards = () => {
  const { pets } = useAppSelector(state => state.pets)
  const dispatch = useAppDispatch()  

  useEffect(() => {
    dispatch(fetchPets())
  }, [dispatch])

  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(240px,auto))] gap-4 justify-center px-16">
      {pets.map((pet) => {
        return <PetCard pet={pet} key={pet.id} />;
      })}
    </div>
  );
};
