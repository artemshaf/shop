import { DetailedHTMLProps, HTMLAttributes } from "react";
import { IImageDescr } from "../ImageDescr/ImageDescr.props";

export interface IImageWithDescrProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  description: IImageDescr;
  img: string;
  isBanner?: boolean;
}
