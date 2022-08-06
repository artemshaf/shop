import { DetailedHTMLProps, HTMLAttributes } from "react";
import { ISizeShoppingCardItem } from "../../../store/shopping-card/shopping-card-slice";

export interface ISmallClothesItemProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLLIElement>, HTMLLIElement> {
  id: string;
  count?: number;
  sizes?: ISizeShoppingCardItem[];
}
