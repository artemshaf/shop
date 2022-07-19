import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";
import { useSelector } from 'react-redux';
import { TypedUseSelectorHook, useDispatch } from "react-redux";
import { clothesReducer } from "./clothes/clothes-slice";
import { clothesFiltersReducer } from './clothes/filters/filters-slice';

const rootReducer = combineReducers({
  clothes: clothesReducer,
  filters: clothesFiltersReducer,
});

export const rootStore = configureStore({
  reducer: rootReducer,
  devTools: true,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export type RootState = ReturnType<typeof rootReducer>;

export type AppDispatch = typeof rootStore.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
