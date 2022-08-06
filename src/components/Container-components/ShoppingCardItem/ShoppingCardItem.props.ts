import { DetailedHTMLProps, HTMLAttributes } from "react";
import { IShoppingCardItem } from "../../../store/shopping-card/shopping-card-slice";

export interface IShoppingCardItemProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLLIElement>, HTMLLIElement> {
  item: IShoppingCardItem;
}
