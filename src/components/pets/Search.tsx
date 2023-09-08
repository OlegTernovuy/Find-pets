import React, { useCallback, useContext, useEffect } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { useInput } from "../../hook/input";
import { useDebounce } from "../../hook/debounce";
import axios from "../../axios";
import { IPets } from "../../types/models";
import { SearchContext } from "../../providers/SearchProvider";

export const Search = () => {
  const input = useInput("");

  const { setResultPets } = useContext(SearchContext);

  const debouncedSearch = useDebounce<string>(input.search, 600);

  const searchPets = useCallback( async () => {
    const response = await axios.get<IPets[]>(`pets`, {
      params: {
        filter: debouncedSearch,
      },
    });
    setResultPets(response.data);
  }, [debouncedSearch, setResultPets]);

  useEffect(() => {
    if (debouncedSearch.length >= 3) {
      searchPets();
    } else if (debouncedSearch.length < 1) {
      setResultPets([]);
    }
  }, [debouncedSearch, setResultPets, searchPets]);

  return (
    <div className="text-center flex flex-col justify-center mb-6" id="hero">
      <h1 className="text-white md:text-5xl sm:text-4xl text-2xl font-bold md:pt-4 pt-2 md:pb-8 pb-4">
        Find your favorite pet
      </h1>
      <div className="relative flex justify-center">
        <input
          type="search"
          className="md:w-2/5 w-4/5 p-2 pl-5 text-sm border rounded-full"
          placeholder="Search"
          required
          {...input}
        />
        <AiOutlineSearch
          size={36}
          className="absolute inset-y-0 md:left-2/3 left-3/4 flex pr-3 h-full"
        />
      </div>
    </div>
  );
};
