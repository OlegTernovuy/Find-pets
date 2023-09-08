import React, { useContext, useEffect, useRef } from "react";
import { PetCard } from "./PetCard";
import ReactPaginate from "react-paginate";

import { useAppDispatch, useAppSelector } from "../../hook/redux";
import { fetchPets } from "../../store/actions/petsActions";
import { SearchContext } from "../../providers/SearchProvider";

const ITEMS_PER_PAGE = 10;

export const PetsCards = () => {
  const { pets, count } = useAppSelector((state) => state.pets);

  const dispatch = useAppDispatch();

  //Pagination
  const pageCount = Math.ceil(count / ITEMS_PER_PAGE);
  const page = useRef(1);

  useEffect(() => {
    dispatch(fetchPets(page.current, ITEMS_PER_PAGE));
  }, [dispatch]);

  const handlePageClick = ({ selected }: { selected: number }) => {
    page.current = selected + 1;
    dispatch(fetchPets(page.current, ITEMS_PER_PAGE));
  };

  const { resultPets } = useContext(SearchContext);

  return (
    <>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(240px,auto))] gap-4 justify-center px-16">
        {resultPets.length > 0
          ? resultPets?.map((pet) => {
              return <PetCard pet={pet} key={pet.id} />;
            })
          : pets.map((pet) => {
              return <PetCard pet={pet} key={pet.id} />;
            })}
      </div>
      <ReactPaginate
        breakLabel="..."
        nextLabel=">"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        forcePage={page.current - 1}
        previousLabel="<"
        containerClassName="flex justify-center text-white"
        pageClassName="py-2 px-2"
        previousClassName="py-2 px-2"
        nextClassName="py-2 px-2"
        activeClassName="text-blue"
      />
    </>
  );
};
