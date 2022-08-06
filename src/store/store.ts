import { combineReducers, configureStore } from "@reduxjs/toolkit";
import axios, { Axios } from "axios";
import * as api from "../api/consts";
import { useSelector } from "react-redux";
import { TypedUseSelectorHook, useDispatch } from "react-redux";
import { clothesReducer } from "./clothes/clothes-slice";
import { clothesFiltersReducer } from "./clothes/filters/filters-slice";
import { shoppingCardReducer } from "./shopping-card/shopping-card-slice";
import { clothesSearchReducer } from "./clothes/search/clothes-search-slice";
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";

const rootReducer = combineReducers({
  clothes: clothesReducer,
  filters: clothesFiltersReducer,
  shoppingCard: shoppingCardReducer,
  searchPanel: clothesSearchReducer,
});

interface extraArgument {
  client: Axios;
  api: api.IApiUrls;
}

export interface IThunkApi {
  extra: extraArgument;
  state: RootState;
  disparch: AppDispatch;
}
export const extraArgument: extraArgument = {
  client: axios,
  api,
};

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const rootStore = configureStore({
  reducer: persistedReducer,
  devTools: "development" === process.env.NODE_ENV ? true : false,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument,
      },
      serializableCheck: false,
    }),
});

export const persistor = persistStore(rootStore);

export type RootState = ReturnType<typeof rootReducer>;

export type AppDispatch = typeof rootStore.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
