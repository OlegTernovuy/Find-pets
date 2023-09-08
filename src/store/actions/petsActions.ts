import axios from "../../axios";
import { IPets } from "../../types/models";
import petsSlice from "../slices/petsSlice";
import { AppDispatch } from "../store";

export const fetchPets = (page = 1, limit = 10) => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch(petsSlice.actions.fetching())
      const res = await axios.get<IPets[]>(`pets`)
      const response = await axios.get<IPets[]>(`pets?page=${page}&limit=${limit}`)
       
      dispatch(petsSlice.actions.fetchSuccess({
        pets: response.data,
        count: res.data.length,
      }
      ))
    } catch (e) {
      dispatch(petsSlice.actions.fetchError(e as Error))
    }
  }
}