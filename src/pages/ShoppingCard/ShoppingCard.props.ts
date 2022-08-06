import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface IShoppingCardProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  open: boolean;
  setOpen: (bool: boolean) => void;
}
