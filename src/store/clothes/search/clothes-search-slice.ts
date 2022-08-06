import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IClothesItem } from "../../../components/Container-components/Clothes/Clothes.props";
import { IThunkApi, RootState } from "../../store";
import { IProducts } from "../clothes-slice";

const name = "CLOTHES_SEARCH_SLICE";

const initialState: IClothesItem[] = [];

interface ISearchClothesByParams {
  name: string | null;
  category: string | null;
}

export const getClothesByParams = createAsyncThunk<
  any,
  ISearchClothesByParams,
  IThunkApi
>(
  name + "/SEARCH_BY_PARAMS",
  async ({ category, name }, { rejectWithValue, extra: { client, api } }) => {
    try {
      let res: IClothesItem[] = [];
      if (category !== "all") {
        const { data } = await client.post<IProducts>(api.URL_SEARCH, {
          category,
        });
        res.push(...data.men);
        res.push(...data.women);
      } else {
        const { data } = await client.post<IProducts>(api.URL_SEARCH, {});
        res.push(...data.men);
        res.push(...data.women);
      }
      if (name) {
        res = res.filter((item) =>
          item.name.toLocaleLowerCase().includes(name.toLocaleLowerCase())
        );
      }
      return res;
    } catch (error) {
      rejectWithValue(error || "clothes search error");
    }
  }
);

export const clothesSearchSlice = createSlice({
  name,
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      getClothesByParams.fulfilled,
      (state, action) => action.payload
    );
  },
});

export const clothesSearchReducer = clothesSearchSlice.reducer;

export const selectSearchClothes = (state: RootState) => state.searchPanel;
