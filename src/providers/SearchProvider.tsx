import React from "react";
import { IPets } from "../types/models";

type SearchContextType = {
  resultPets: IPets[];
  setResultPets: React.Dispatch<React.SetStateAction<IPets[]>>;
};

export const SearchContext = React.createContext<SearchContextType>(
  null as unknown as SearchContextType
);

type ContextProviderProps = {
  children: React.ReactNode;
};

export const SearchProvider = ({ children }: ContextProviderProps) => {
  const [resultPets, setResultPets] = React.useState<IPets[]>([]);

  const value = {
    resultPets,
    setResultPets,
  };

  return (
    <SearchContext.Provider value={value}>{children}</SearchContext.Provider>
  );
};
