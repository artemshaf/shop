import { DetailedHTMLProps, HTMLAttributes } from "react";
import { Gender, IClothesProducts } from "../../../store/clothes/clothes-slice";
export interface IParticulars {
  isNewArrivals: boolean;
  isSpecial: boolean;
  isBestseller: boolean;
  isMostViewed: boolean;
  isFeatured: boolean;
}

export type ParticularsFilters = keyof IParticulars;

export interface IReviews {
  name: string;
  text: string;
  rating: number;
  id: string;
}
export interface IImgs {
  url: string;
  color: string;
  id: string;
}
export interface IClothesItem {
  particulars: IParticulars;
  name: string;
  category: string;
  brand: string;
  material: string;
  rating: number;
  price: number;
  sizes: string[];
  discount: string | null;
  reviews: IReviews[];
  images: IImgs[];
  id: string;
}

export interface IClothesProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  clothes: IClothesItem[];
  gender: Gender;
  particulars?: boolean;
  filters?: boolean;
}
