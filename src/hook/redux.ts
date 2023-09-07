import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store/store";

import { useMemo } from "react";
import { bindActionCreators } from "@reduxjs/toolkit";
import { actions } from "../store/slices/petsSlice";


export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

const rootAction = {
  ...actions,
};

export const useAction = () => {
  const dispatch = useDispatch();

  return useMemo(() => bindActionCreators(rootAction, dispatch), [dispatch]);
};
