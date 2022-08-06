import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IParticulars } from "../../../components/Container-components/Clothes/Clothes.props";
import { PRODUCTS } from "../../../data/products";
import { IProducts } from "../clothes-slice";

export const name = "@@clothes-filter";

export const setFalseAllField = (object: any) => {
  for (const key in object) {
    object[key] = false;
  }
};

export const setParticular = createAsyncThunk(
  name + "/SET_PARTICULARS",
  async (obj: any) => {
    const particular = obj.particular as keyof IParticulars;
    const gender = obj.gender as any;

    return { particular, gender };
  }
);

export const setFilters = createAsyncThunk(
  name + "/SET_FILTERS",
  async (obj: any, api) => {
    const currentFilter = obj.currentFilter as any;
    const currentData = obj.currentData as any;
    const gender = obj.gender as any;
    // const appState = api.getState() as RootState;

    return { currentFilter, currentData, gender };
  }
);

export interface IObjectPlug {
  [index: string]: any;
}

const genIParticulars = (products: IProducts): any => {
  const result: IObjectPlug = {};
  const keys = Object.keys(products);
  keys.map((key) => {
    const object = {
      particulars: initialStateParticulars,
      filters: initialStateFilters,
    };
    result[key] = object;
  });
  return result;
};

export const initialStateFilters = {
  color: [],
  sizes: [],
  brand: [],
  price: [],
};

export const initialStateParticulars = {
  isNewArrivals: true,
  isSpecial: false,
  isBestseller: false,
  isMostViewed: false,
  isFeatured: false,
};

export const clothesFilters = createSlice({
  name,
  initialState: genIParticulars(PRODUCTS),
  reducers: {
    setInitial: () => genIParticulars(PRODUCTS),
  },
  extraReducers: (builder) => {
    builder
      .addCase(setParticular.fulfilled, (state, action) => {
        const { gender, particular } = action.payload;
        setFalseAllField(state[gender].particulars);
        state[gender].particulars[particular] = true;
      })
      .addCase(setFilters.fulfilled, (state, action) => {
        const { gender, currentData, currentFilter } = action.payload;
        if (!state[gender].filters[currentFilter].includes(currentData)) {
          state[gender].filters[currentFilter].push(currentData);
        } else {
          state[gender].filters[currentFilter] = state[gender].filters[
            currentFilter
          ].filter((item: any) => item !== currentData);
        }
      });
  },
});

export const clothesFiltersReducer = clothesFilters.reducer;

export const selectParticularByGender = (state: any, gender: any) => {
  const partObj = state.filters[gender].particulars;
  for (const key in partObj) {
    if (Object.prototype.hasOwnProperty.call(partObj, key)) {
      if (partObj[key]) {
        return key as keyof IParticulars;
      }
    }
  }
};

export const selectFilterByGender = (state: any, gender: any) => {
  if (state.filters[gender].filters !== undefined)
    return state.filters[gender].filters;

  return [];
};
