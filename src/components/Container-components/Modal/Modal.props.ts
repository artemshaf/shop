import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface IModalProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  open?: boolean;
  setOpen: (bol: boolean) => void;
}
