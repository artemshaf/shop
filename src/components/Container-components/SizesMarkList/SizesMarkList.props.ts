import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface ISizesMarkList
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLUListElement>,
    HTMLUListElement
  > {
  sizes: string[];
  active: string;
  setActive: (active: string) => void;
}
