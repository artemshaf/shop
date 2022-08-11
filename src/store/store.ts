import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { TypedUseSelectorHook, useDispatch } from "react-redux";
import { clothesReducer } from "./clothes/clothes-slice";
import { shoppingCardReducer } from "./shopping-card/shopping-card-slice";
import { clothesSearchReducer } from "./clothes/search/clothes-search-slice";
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";
import { mailApi, productsApi, reviewApi, searchApi } from "./api";
import { clothesFiltersReducer } from "./clothes/filters/clothes-filters-slice";

const rootReducer = combineReducers({
  clothes: clothesReducer,
  shoppingCard: shoppingCardReducer,
  clothesFilters: clothesFiltersReducer,
  searchPanel: clothesSearchReducer,
  [productsApi.reducerPath]: productsApi.reducer,
  [mailApi.reducerPath]: mailApi.reducer,
  [reviewApi.reducerPath]: reviewApi.reducer,
  [searchApi.reducerPath]: searchApi.reducer,
});

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
      serializableCheck: true,
    }).concat([
      productsApi.middleware,
      mailApi.middleware,
      reviewApi.middleware,
      searchApi.middleware,
    ]),
});

export const persistor = persistStore(rootStore);

export type RootState = ReturnType<typeof rootReducer>;

export type AppDispatch = typeof rootStore.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
