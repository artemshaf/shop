import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IClothesItem } from "../../../components/Container-components/Clothes/Clothes.props";
import { RootState } from "../../store";
import { IProducts } from "../clothes-slice";

const name = "CLOTHES_SEARCH_SLICE";

const initialState = {
  category: null,
  name: null,
};

interface ISearchClothesByParams {
  category: string | null;
  name: string | null;
}

export const clothesSearchSlice = createSlice({
  name,
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    //
  },
});

export const clothesSearchReducer = clothesSearchSlice.reducer;

export const selectSearchClothes = (state: RootState) => state.searchPanel;
