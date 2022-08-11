import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

const name = "shopping-card";

interface IObjectInfo {
  [key: string]: unknown;
}
export interface IShoppingCard {
  isOpen: boolean;
  clothes: IShoppingCardItem[];
  countries: string[];
  cities: string[];
  deliveryInfo: IObjectInfo;
  paymentsInfo: IObjectInfo;
}

export interface IShoppingCardItem {
  id: string;
  img: string;
  name: string;
  size: string;
  color: string;
  count: number;
  price: number;
}
export interface IShoppingCardItemEqual {
  id: string;
  color: string;
  size: string;
}

export const initialState: IShoppingCard = {
  isOpen: false,
  clothes: [],
  countries: [],
  cities: [],
  deliveryInfo: {},
  paymentsInfo: {},
};

export interface IClothesChangeCount {
  id: string;
  count: number;
}
export interface IClotheRemove {
  id: string;
  color: string;
  size: string;
}

export const shoppingCardSlice = createSlice({
  name,
  initialState,
  reducers: {
    toggleOpen: (state) => {
      state.isOpen = !state.isOpen;
    },
    removeClotheFromCart: (state, action: PayloadAction<IClotheRemove>) => {
      state.clothes = state.clothes.filter((item) =>
        item.id === action.payload.id &&
        item.color === action.payload.color &&
        item.size === action.payload.size
          ? null
          : item
      );
    },
    changeClothesCountOnCart: (
      state,
      action: PayloadAction<IClothesChangeCount>
    ) => {
      const item = state.clothes.find((item) => item.id === action.payload.id);
      if (item) {
        if (item.count + action.payload.count < 1) {
          item.count = 1;
          return;
        }
        item.count += action.payload.count;
      }
    },
    addToShoppingCart: (state, action: PayloadAction<IShoppingCardItem>) => {
      state.clothes.push(action.payload);
    },
    addDeliveryInfo: (state, action: PayloadAction<IObjectInfo>) => {
      state.deliveryInfo = action.payload;
    },
    addDeliveryPaymentsInfo: (state, action: PayloadAction<IObjectInfo>) => {
      state.paymentsInfo = action.payload;
    },
  },
});

export const shoppingCardReducer = shoppingCardSlice.reducer;
export const {
  addToShoppingCart,
  changeClothesCountOnCart,
  removeClotheFromCart,
  toggleOpen,
  addDeliveryInfo,
  addDeliveryPaymentsInfo,
} = shoppingCardSlice.actions;

export const selectShoppingCardOpen = (state: RootState) =>
  state.shoppingCard.isOpen;

export const selectShoppingCardItemsPrice = (state: RootState) =>
  state.shoppingCard.clothes.reduce(
    (acc, item) => (acc += item.price * item.count),
    0
  );

export const selectShoppingCardClothes = (state: RootState) =>
  state.shoppingCard.clothes;

export const selectContainShoppingCardItem = (
  state: RootState,
  payload: IShoppingCardItemEqual
) => {
  const item = state.shoppingCard.clothes.find(
    (item) =>
      item.id === payload.id &&
      item.color === payload.color &&
      item.size === payload.size
  );
  if (item) {
    return true;
  }
  return false;
};

export const selectShoppingCountItems = (state: RootState) =>
  state.shoppingCard.clothes.reduce((acc, item) => (acc += item.count), 0);
