import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface ISelectOption {
  value: string;
  label: string;
}

export interface ISelectProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLSelectElement>,
    HTMLSelectElement
  > {
  value: string;
  setValue: (val: string) => void;
  items: ISelectOption[];
}
