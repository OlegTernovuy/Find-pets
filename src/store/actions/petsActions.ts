import axios from "../../axios";
import { IPets } from "../../types/models";
import petsSlice, { ToFavorites } from "../slices/petsSlice";
import { AppDispatch } from "../store";

export const fetchPets = (page = 1, limit = 10) => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch(petsSlice.actions.fetching());
      const res = await axios.get<IPets[]>(`pets`);
      const response = await axios.get<IPets[]>(
        `pets?page=${page}&limit=${limit}`
      );
      dispatch(
        petsSlice.actions.fetchSuccess({
          pets: response.data,
          count: res.data.length,
        })
      );
    } catch (e) {
      dispatch(petsSlice.actions.fetchError(e as Error));
    }
  };
};

export const addToFavorites = (pet: IPets) => {
  return async (dispatch: AppDispatch) => {
    try {
      await axios.put(`pets/${pet?.id}`, {liked: !pet?.liked});
      dispatch(ToFavorites(pet?.id))
    } catch (e) {
      dispatch(petsSlice.actions.fetchError(e as Error));
    }
  }
}

export const addNewPet = (pet: IPets) => {
  const newPet = {
    id: pet.id,
    sell: pet.sell,
    liked: false,
    photo: pet.photo,
    Breed: pet.Breed,
    Place: pet.Place,
    Age: pet.Age,
    Price: pet.Price,
    // title: pet.title,
  }
  return async () => {
    try {
      await axios.post<IPets>(`pets`, pet)
      window.alert('New pet was successfully created')
    } catch (error) {
      console.log(error);
    }
  }
}

// export const loginAndRegisterWithGoogle = () => {
//   return (dispatch: AppDispatch) => {
//     try {
//       const provider = new GoogleAuthProvider();
//       signInWithPopup(auth, provider);
//       dispatch(authSlice.actions.authSuccess())
//     } catch (e) {
//       dispatch(authSlice.actions.authError(e as Error));
//     }
//   };
// };

// export const emailAndPasswordSignUp = (data: IForm) => {
//   return (dispatch: AppDispatch) => {
//     createUserWithEmailAndPassword(auth, data.email, data.password)
//       .then((userCredential) => {
//         const user = userCredential;
//         dispatch(authSlice.actions.authSuccess(user));
//       })
//       .catch((e) => {
//         dispatch(authSlice.actions.authError(e as Error));
//       });
//   };
// };
