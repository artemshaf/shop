import { DetailedHTMLProps, HTMLAttributes } from "react";
import { IClothesItem } from '../../Clothes/Clothes.props';
export interface IClothesItemProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLLIElement>, HTMLLIElement> {
  thing: IClothesItem;
}
