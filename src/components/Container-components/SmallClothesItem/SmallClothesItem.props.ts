import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface ISmallClothesItemProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLLIElement>, HTMLLIElement> {
  id: string;
  count?: number;
  sizes?: any[];
}
