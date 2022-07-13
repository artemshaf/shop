import { IImageDescr } from "../ImageDescr/ImageDescr.props";

export interface IImageWithDescrProps {
  description: IImageDescr;
  img: string;
  isBanner?: boolean;
}
