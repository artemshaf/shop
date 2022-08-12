import { DetailedHTMLProps, HTMLAttributes } from "react";
import { IClothesItem } from "../Clothes/Clothes.props";

export interface ISmallClothesItemProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLLIElement>, HTMLLIElement> {
  item: IClothesItem;
  count?: number;
  sizes?: any[];
}
