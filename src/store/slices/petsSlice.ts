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
  pets: [
    // {
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
  ],
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
    addToFavorites: (state, action: PayloadAction<number>) => {
      const id = action.payload;
      const petExists = state.pets.find((item) => item.id === id);
      if (petExists) {
        petExists.liked = !petExists.liked;
      }
    },
    sellFilter: (state, action: PayloadAction<IFilter>) => {
      state.pets = state.petsContainer
        .filter(pet => pet.sell.includes(action.payload.sell))
    }
  },
});

export const { actions } = petsSlice;
export const { addToFavorites } = petsSlice.actions;

export default petsSlice;
