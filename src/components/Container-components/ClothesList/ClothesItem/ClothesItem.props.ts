import { DetailedHTMLProps, HTMLAttributes } from "react";
import { ClothesItem } from "../ClothesList.props";

export interface IClothesItemProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLLIElement>, HTMLLIElement> {
  thing: ClothesItem;
}
