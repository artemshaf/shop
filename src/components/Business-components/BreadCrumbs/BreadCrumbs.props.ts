import { DetailedHTMLProps, HTMLAttributes } from "react";
import { ILink } from "../../../interfaces/Plain/link";

export interface ICrumbProps {
  path: string;
  title: string;
  url: string;
}

export interface IBreadCrubms
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLUListElement>,
    HTMLUListElement
  > {
  last?: string;
}
