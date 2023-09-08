import { ChangeEvent, useState } from "react";

interface IInput {
  search: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export function useInput(initialState = ""): IInput {
  const [search, setSearch] = useState(initialState);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return {
    search,
    onChange,
  };
}
