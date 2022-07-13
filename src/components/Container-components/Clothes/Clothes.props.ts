import { DetailedHTMLProps, HTMLAttributes } from "react";
import { ClothesItem } from "../ClothesList/ClothesList.props";

export interface IClothesObject {
  sex: string;
  clothes: ClothesItem[];
}

export interface IClothesProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  clothes: IClothesObject;
}
