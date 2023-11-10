import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IFilter, IPets } from "../../types/models";

interface PetsState {
  loading: boolean;
  error: string;
  pets: IPets[],
  petsContainer: IPets[],
  count: number;
}

interface PetsPayload {
  pets: IPets[],
  count: number,
}

const initialState: PetsState = {
  loading: false,
  error: "",
  pets: [],
  petsContainer: [],
  count: 0
};

export const petsSlice = createSlice({
  name: "pets",
  initialState,
  reducers: {
    fetching: (state) => {
      state.loading = true;
    },
    fetchSuccess: (state, action: PayloadAction<PetsPayload>) => {
      state.loading = false;
      state.pets = action.payload.pets;
      state.petsContainer = action.payload.pets;
      state.count = action.payload.count;
    },
    fetchError: (state, action: PayloadAction<Error>) => {
      state.loading = false;
      state.error = action.payload.message;
    },
    ToFavorites: (state, action: PayloadAction<number>) => {
      const id = action.payload;
      const petExistsState = state.pets.find((item) => item.id === id);
      const petExistsContainer = state.petsContainer.find((item) => item.id === id);
      if (petExistsState && petExistsContainer) {
        petExistsState.liked = !petExistsState.liked;
        petExistsContainer.liked = !petExistsContainer.liked;
      }
    },
    sellFilter: (state, action: PayloadAction<IFilter>) => {
      state.pets = state.petsContainer
        .filter(pet => pet.sell.includes(action.payload.sell))
    }
  },
});

export const { actions } = petsSlice;
export const { ToFavorites } = petsSlice.actions;

export default petsSlice;
