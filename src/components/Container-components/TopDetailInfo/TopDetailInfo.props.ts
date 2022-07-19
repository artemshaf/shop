import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface ITopDetailInfoProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  sex: string;
  breadcrumbsLast?: string;
}
