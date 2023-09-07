import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IPets } from "../../types/models";

// import dog from "../../assets/dog.jpeg";
// import dog1 from "../../assets/dog1.jpeg";

interface PetsState {
  loading: boolean;
  error: string;
  pets: IPets[];
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
};

export const petsSlice = createSlice({
  name: "pets",
  initialState,
  reducers: {
    fetching: (state) => {
      state.loading = true;
    },
    fetchSuccess: (state, action: PayloadAction<IPets[]>) => {
      state.loading = false;
      state.pets = action.payload;    
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
  },
});

export const { actions } = petsSlice;
export const { addToFavorites } = petsSlice.actions;

export default petsSlice;
