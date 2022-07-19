import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface IFilterPanelProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  gender: string;
}
