import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface IPromoCard {
  img: string;
  title: string;
  description: string;
  sale?: string;
}

export interface IPromoCardProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLUListElement>,
    HTMLUListElement
  > {
  card: IPromoCard;
}
