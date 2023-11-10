import React, { useEffect, useState } from "react";
import { IoMdAddCircleOutline } from "react-icons/io";
import { BiXCircle } from "react-icons/bi";
import { IFilter } from "../../types/models";
import { useAppDispatch } from "../../hook/redux";
import petsSlice from "../../store/slices/petsSlice";
import { addNewPet } from "../../store/actions/petsActions";
import Modal from "./Modal";

export const CategoryFind = () => {
  const dispatch = useAppDispatch();

  const [filter, setFilter] = useState<IFilter>({
    sell: "",
  });

  const changeHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    setFilter({ sell: e.currentTarget.value });
  };

  const clearHandler = () => {
    setFilter({ sell: "" });
  };

  useEffect(() => {
    dispatch(petsSlice.actions.sellFilter(filter));
  }, [dispatch, filter]);

  const newPet = {
    id:33,
    sell: 'pet.sell',
    liked: false,
    photo: 'pet.photo',
    Breed: 'pet.Breed',
    Place: 'pet.Place',
    Age: 'pet.Age',
    Price: 'pet.Price',
    title: 'pet.title',
  }

  const handleAddNewPet = () => {
    dispatch(addNewPet(newPet))
  }

  return (
    <div className="text-white flex justify-around mb-12 sm:flex-col">
      <ul className="flex md:flex-row flex-col text-center">
        <button
          onClick={changeHandler}
          className="md:pr-5 sm:mb-3 hover:text-blue"
          value="sell"
        >
          Sell
        </button>
        <button
          onClick={changeHandler}
          className="md:pr-5 sm:mb-3 hover:text-blue"
          value="Found"
        >
          Lost/Found
        </button>
        <button
          onClick={changeHandler}
          className="md:pr-5 sm:mb-3 hover:text-blue"
          value="In good hands"
        >
          In good hands
        </button>
        <button onClick={clearHandler} className="md:pr-5 sm:mb-3 hover:text-blue text-center sm:flex justify-center">
          <BiXCircle />
        </button>
      </ul>
      {/* <div className="flex items-center cursor-pointer justify-center" onClick={handleAddNewPet}>
        <p className="pr-1">Add pet</p>
        <IoMdAddCircleOutline size={20} className="text-blue" />
      </div> */}
      <Modal/>
    </div>
  );
};
