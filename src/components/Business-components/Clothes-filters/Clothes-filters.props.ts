import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface IClothesFilters
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  setOpenFilter: any;
}
