import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface IPaymentsProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLFormElement>, HTMLFormElement> {
  setActiveRoute: (index: number) => void;
}
