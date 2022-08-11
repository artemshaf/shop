import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface IClothesParticularsProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLUListElement>,
    HTMLUListElement
  > {
  gender: string | number;
  particular: string;
  setParticular: (str: string) => void;
}
