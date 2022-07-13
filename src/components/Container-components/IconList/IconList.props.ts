import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface IIconList {
  icon: JSX.Element;
  text?: string;
}

export interface IIconListProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLUListElement>,
    HTMLUListElement
  > {
  entities: IIconList[];
}
