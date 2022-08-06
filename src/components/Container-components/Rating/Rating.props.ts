import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface IRatingProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLUListElement>,
    HTMLUListElement
  > {
  rate: number;
  setRate?: (rate: number) => void;
  count?: number;
  isEditable?: boolean;
}
