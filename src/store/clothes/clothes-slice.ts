import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit";
import {
  IClothesItem,
  IParticulars,
  ParticularsFilters,
} from "../../components/Container-components/Clothes/Clothes.props";
import { PRODUCTS } from "../../data/products";
import { RootState } from "../store";
import {
  initialStateParticulars,
  selectFilterByGender,
} from "./filters/filters-slice";

// INTERFACE FOR ALL CLOTHES
export interface IClothes {
  isLoading: string;
  error: null | string;
  clothes: IClothesProducts[];
}

// INTERFACE EACH CLOTHES GENDER
export interface IClothesProducts {
  isLoading: string;
  error: null | string;
  clothes: IClothesItem[];
  particulars: IParticulars;
  filters: string[];
}

export interface IProducts {
  [index: string]: IClothesItem[];
}

export interface IObjectPlug {
  [index: string]: any;
}

export const name = "@@clothes";

const genIClothes = (products: IProducts): any => {
  const result: IObjectPlug = {};
  const keys = Object.keys(products);
  keys.map((key) => {
    const object = {
      isLoading: "idle",
      error: null,
      clothes: products[key],
    };
    result[key] = object;
  });
  return result;
};

genIClothes(PRODUCTS);

export const initialState: IClothes = {
  isLoading: "idle",
  error: null,
  clothes: genIClothes(PRODUCTS),
};

export type Gender = keyof IProducts;

export const clothesAdapter = createEntityAdapter({
  selectId: (thing: IClothesItem) => thing.id,
});

export const getDataByGender = createAsyncThunk(
  name + "/GET_DATA_BY_GENDER",
  async (gender: any, api) => {
    const appState = api.getState() as RootState;
    return appState.clothes.clothes[gender];
  }
);

export const clothesSlice = createSlice({
  name,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getDataByGender.pending, (state) => {
        state.isLoading = "loading";
      })
      .addCase(getDataByGender.rejected, (state) => {
        state.isLoading = "idle";
        state.error = "Something went wrong!";
      })
      .addCase(
        getDataByGender.fulfilled,
        (state, action: PayloadAction<any>) => {
          state.clothes[action.payload] = action.payload;
        }
      );
  },
});

export const clothesReducer = clothesSlice.reducer;

export const selectClothesByGender = (state: RootState, gender: any) =>
  state.clothes.clothes[gender].clothes;

export const selectClothesByParticulars = (items: any[], filter: any) =>
  items.filter((item) => item.particulars[filter]);

export const selectClothByGenderAndId = (
  state: RootState,
  gender: any,
  id: any
) => {
  const ref = selectClothesByGender(state, gender);
  return ref.find((item) => item.id === id);
};

export const selectClothesByGenderAndFilters = (
  state: RootState,
  gender: any
) => {
  const ref = selectClothesByGender(state, gender).slice();
  const filters = selectFilterByGender(state, gender);

  if (filters.color.length > 0) {
    ref.filter((item) =>
      filters.color
        .map((item: any) => item.toLowerCase())
        .includes(...item.images.map((imgs) => imgs.color))
    );
  } else if (filters.sizes.length > 0) {
    ref.filter((item) =>
      filters.sizes
        .map((item: any) => item.toLowerCase())
        .includes(...item.sizes.map((size) => size.toLocaleLowerCase()))
    );
    console.log(2);
  }

  return ref;
};
