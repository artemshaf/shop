import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface IBlogCard {
  img: string;
  title: string;
  description: string;
  createdAt: string;
}

export interface IBlogCardProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLLIElement>, HTMLLIElement> {
  card: IBlogCard;
}
