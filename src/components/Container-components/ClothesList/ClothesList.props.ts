import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface ClothesItem {
  img: string;
  title: string;
  currentPrice: number;
  currency: string;
  oldPrice?: number;
  discount?: number;
  rating: number;
}

export interface IClothesListProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLUListElement>,
    HTMLUListElement
  > {
  clothes: ClothesItem[];
}
