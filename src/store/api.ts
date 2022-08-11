import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IClothesItem } from "../components/Container-components/Clothes/Clothes.props";
import {
  API_PATH,
  API_URL,
  URL_CATEGORY,
  URL_PRODUCT,
  URL_PRODUCTS,
  URL_REVIEW,
  URL_SEARCH,
} from "./consts";

export const productsApi = createApi({
  reducerPath: API_PATH + "/products",
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  endpoints: (builder) => ({
    getProducts: builder.query<any, void>({
      query: () => URL_PRODUCTS,
    }),
    getProduct: builder.query<IClothesItem, string | number>({
      query: (id) => URL_PRODUCT + id,
    }),
    getProductByCategory: builder.query<IClothesItem[], string>({
      query: (category) => URL_CATEGORY + category,
    }),
  }),
});

export const {
  useGetProductByCategoryQuery,
  useGetProductQuery,
  useGetProductsQuery,
} = productsApi;

export const searchApi = createApi({
  reducerPath: API_PATH + "/search",
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  endpoints: (builder) => ({
    getProductByCategorySearch: builder.query<any, string>({
      query: (category) => ({
        url: URL_SEARCH,
        method: "POST",
        body: {
          category,
        },
      }),
    }),
  }),
});

export const { useGetProductByCategorySearchQuery } = searchApi;

export const reviewApi = createApi({
  reducerPath: API_PATH + "/review",
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  endpoints: (builder) => ({
    getProductByCategory: builder.mutation<string, string>({
      query: (body) => ({
        url: URL_REVIEW,
        method: "POST",
        body,
      }),
    }),
  }),
});

export const mailApi = createApi({
  reducerPath: API_PATH + "/mail",
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  endpoints: (builder) => ({
    getProductByFilterSearch: builder.query<any, string>({
      query: (body) => ({
        url: URL_REVIEW,
        method: "POST",
        body,
      }),
    }),
  }),
});
