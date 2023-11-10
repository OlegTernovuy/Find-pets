import React from "react";
import { AiFillHeart } from "react-icons/ai";
import { IPets } from "../../types/models";
import { useAppDispatch } from "../../hook/redux";
import { useNavigate } from "react-router";
import { addToFavorites } from "../../store/actions/petsActions";

interface PetCardProps {
  pet: IPets;
}

export const PetCard = ({ pet }: PetCardProps) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleLiked = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    e.stopPropagation();
    dispatch(addToFavorites(pet));
  };

  const handleNavigate = () => navigate(`pet/${pet.id}`);

  return (
    <div onClick={handleNavigate} className="bg-blue w-60 h-96">
      <div className="h-3/5 relative">
        <img src={pet.photo} alt="dog" className="h-full w-full" />
        <div className="h-7 w-28 bg-white rounded-r-full opacity-50 absolute top-3 left-0 text-center text-sm py-1">
          {pet?.sell}
        </div>
        <div
          onClick={(e) => handleLiked(e)}
          className="h-7 w-7 bg-white rounded-full opacity-50 absolute top-3 right-3 cursor-pointer"
        >
          <AiFillHeart
            size={20}
            className={
              !pet.liked
                ? "relative mx-auto top-1/2 -translate-y-2/4"
                : "relative mx-auto top-1/2 -translate-y-2/4 text-blue"
            }
          />
        </div>
      </div>
      <div className="mx-5">
        <h1 className="font-bold text-center my-1 text-base font-mono">
          {pet.title}
        </h1>
        <p className="text-sm mb-1">Breed: {pet.Breed}</p>
        <p className="text-sm mb-1">Place: {pet.Place}</p>
        <p className="text-sm mb-1">Age: {pet.Age}</p>
        <p className="text-sm mb-1">Price: {pet.Price}</p>
      </div>
    </div>
  );
};
