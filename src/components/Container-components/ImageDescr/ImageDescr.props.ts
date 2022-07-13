import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface IImageDescr {
  title?: string;
  description: string;
  sale?: string;
}

export interface IImageDescrProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  text: IImageDescr;
}
