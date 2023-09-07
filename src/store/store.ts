import { configureStore, combineReducers } from "@reduxjs/toolkit";
import petsSlice from "./slices/petsSlice";

const rootReducer = combineReducers({
    pets: petsSlice.reducer,
})

export const store = configureStore({
    reducer: rootReducer,
})

export function SetupStore() {
    return configureStore({
        reducer: rootReducer,
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof SetupStore>
export type AppDispatch = AppStore['dispatch']

