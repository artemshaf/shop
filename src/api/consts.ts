export const API_URL = "https://training.cleverland.by/shop";
export const URL_PRODUCTS = API_URL + "/products";
export const URL_CATEGORY = API_URL + "/products/";
export const URL_PRODUCT = API_URL + "/product/";
export const URL_REVIEW = API_URL + "/review";
export const URL_EMAIL = API_URL + "/email";
export const URL_SEARCH = API_URL + "/products/search";

export interface IApiUrls {
  API_URL: typeof API_URL;
  URL_PRODUCTS: typeof URL_PRODUCTS;
  URL_CATEGORY: typeof URL_CATEGORY;
  URL_PRODUCT: typeof URL_PRODUCT;
  URL_REVIEW: typeof URL_REVIEW;
  URL_EMAIL: typeof URL_EMAIL;
  URL_SEARCH: typeof URL_SEARCH;
}
