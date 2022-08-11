import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";

const name = "CLOTHES_FILTERS_SLICE";

interface IClothesFiltersFields {
  isOpen: boolean;
  filters: IClothesFiltersInterface;
}

export interface IClothesFiltersInterface {
  color: string[];
  sizes: string[];
  brand: string[];
  price: string[];
}

interface ISetFilter {
  field: keyof IClothesFiltersInterface;
  value: string;
}

const initialState: IClothesFiltersFields = {
  isOpen: false,
  filters: {
    color: [],
    sizes: [],
    brand: [],
    price: [],
  },
};

const clothesFiltersSlice = createSlice({
  name,
  initialState,
  reducers: {
    setInitial: () => initialState,
    toggleFilters: (state, action: PayloadAction<ISetFilter>) => {
      if (
        state.filters[action.payload.field].find(
          (item) => item === action.payload.value
        )
      ) {
        state.filters[action.payload.field] = state.filters[
          action.payload.field
        ].filter((item) => item !== action.payload.value);
        return state;
      }
      state.filters[action.payload.field].push(
        action.payload.value.toLocaleLowerCase()
      );
    },
    toggleOpen: (state) => {
      state.isOpen = !state.isOpen;
      return state;
    },
  },
});

export const { toggleFilters, setInitial, toggleOpen } =
  clothesFiltersSlice.actions;
export const clothesFiltersReducer = clothesFiltersSlice.reducer;

export const selectClothesFilters = (state: RootState) =>
  state.clothesFilters.filters;
export const selectClothesFiltersOpen = (state: RootState) =>
  state.clothesFilters.isOpen;
