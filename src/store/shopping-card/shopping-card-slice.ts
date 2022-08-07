import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

const name = "shopping-card";

export interface IShoppingCard {
  isLoading: string;
  error: null | string;
  clothes: IShoppingCardItem[];
}

export interface ISizeShoppingCardItem {
  size: string;
  count: number;
  img: string;
  color: string;
}

export interface IShoppingCardItem {
  name: string;
  id: string;
  price: number;
  sizes: ISizeShoppingCardItem[];
}

export const initialState: IShoppingCard = {
  isLoading: "idle",
  error: null,
  clothes: [],
};

export const addToShoppingCard = createAsyncThunk(
  name + "/ADD",
  async (props: IClothesAdd, { extra: api }) => {
    return props;
  }
);

export const incCountToShoppingCard = createAsyncThunk(
  name + "/INC_CHANGE_COUNT",
  async (props: IClothesChangeCount, { extra: api }) => {
    return props;
  }
);

export const decCountToShoppingCard = createAsyncThunk(
  name + "/DEC_CHANGE_COUNT",
  async (props: IClothesChangeCount, { extra: api }) => {
    return props;
  }
);

export const removeFromShoppingCard = createAsyncThunk(
  name + "/REMOVE_ITEM",
  async (props: IClothesRemove, { extra: api }) => {
    return props;
  }
);

export const selectAllShoppingCard = (state: RootState) => {
  return state.shoppingCard.clothes;
};
export const selectAllShoppingCardId = (state: RootState) => {
  return state.shoppingCard.clothes.map((item) => item.id);
};

export interface IClothesAdd {
  name: string;
  id: string;
  size: string;
  count: number;
  price: number;
  color: string;
  img: string;
}

export interface IClothesChangeCount {
  id: string;
  color: string;
  size: string;
  count: number;
}

export interface IClothesRemove {
  id: string;
  color: string;
  size: string;
}

export const shoppingCardSlice = createSlice({
  name,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(
        incCountToShoppingCard.fulfilled,
        (state, action: PayloadAction<IClothesChangeCount>) => {
          state.clothes.map(
            (item) =>
              item.id === action.payload.id &&
              item.sizes.map((currentItem) =>
                currentItem.size === action.payload.size
                  ? (currentItem.count += action.payload.count)
                  : currentItem
              )
          );
          return;
        }
      )
      .addCase(
        decCountToShoppingCard.fulfilled,
        (state, action: PayloadAction<IClothesChangeCount>) => {
          state.clothes.map(
            (item) =>
              item.id === action.payload.id &&
              item.sizes.map(
                (currentItem) =>
                  currentItem.size === action.payload.size &&
                  (currentItem.count > 1
                    ? (currentItem.count += action.payload.count)
                    : currentItem)
              )
          );
          return;
        }
      )
      .addCase(
        removeFromShoppingCard.fulfilled,
        (state, action: PayloadAction<IClothesRemove>) => {
          return {
            error: state.error,
            isLoading: state.isLoading,
            clothes: state.clothes.filter(
              (item) =>
                item.id !== action.payload.id &&
                item.sizes.filter(
                  (item) =>
                    item.size === action.payload.size &&
                    item.color === action.payload.color
                )
            ),
          };
        }
      )
      .addCase(addToShoppingCard.pending, (state) => {
        state.isLoading = "loading";
      })
      .addCase(addToShoppingCard.rejected, (state) => {
        state.isLoading = "idle";
        state.error = "Something went wrong!";
      })
      .addCase(
        addToShoppingCard.fulfilled,
        (state, action: PayloadAction<IClothesAdd>) => {
          const equalIds = state.clothes.find(
            (item: IShoppingCardItem) => item.id === action.payload.id
          );
          const equalsSizes = state.clothes.find(
            (item) =>
              equalIds?.id === item.id &&
              item.sizes.some((item) => item.size === action.payload.size)
          );
          if (!equalIds) {
            state.clothes.push({
              name: action.payload.name,
              id: action.payload.id,
              price: action.payload.price,
              sizes: [
                {
                  size: action.payload.size,
                  count: 1,
                  color: action.payload.color,
                  img: action.payload.img,
                },
              ],
            });
            return;
          }
          if (equalIds) {
            if (equalsSizes) {
              equalsSizes.sizes.map((item) =>
                item.size === action.payload.size ? item.count++ : null
              );
              return;
            }
            equalIds?.sizes.push({
              size: action.payload.size,
              count: 1,
              color: action.payload.color,
              img: action.payload.img,
            });
            return;
          }
          state.clothes.push({
            name: action.payload.name,
            id: action.payload.id,
            price: action.payload.price,
            sizes: [
              {
                size: action.payload.size,
                count: 1,
                color: action.payload.color,
                img: action.payload.img,
              },
            ],
          });
        }
      );
  },
});

export const shoppingCardReducer = shoppingCardSlice.reducer;

export const selectAllProductId = (state: RootState) =>
  state.shoppingCard.clothes.map((item) => item.id);

export const selectAllProducts = (state: RootState) =>
  state.shoppingCard.clothes;

export const selectAllProductsCount = (state: RootState) =>
  state.shoppingCard.clothes.reduce((acc, item) => {
    item.sizes?.map((sizeItem) => (acc += sizeItem.count));
    return acc;
  }, 0);

export const selectAllProductPrice = (state: RootState) => {
  // eslint-disable-next-line @typescript-eslint/no-inferrable-types
  let solvePrice: number = 0;

  state.shoppingCard.clothes.map((item) => {
    solvePrice +=
      item.price * item.sizes.reduce((acc, val) => acc + val.count, 0);
  });
  return solvePrice.toFixed(2);
};
