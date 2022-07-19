import { DetailedHTMLProps, HTMLAttributes } from "react";
import { IClothesItem } from '../Clothes/Clothes.props';

export interface IClothesListProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLUListElement>,
    HTMLUListElement
  > {
  clothes: IClothesItem[];
}
