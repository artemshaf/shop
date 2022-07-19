import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface IServiceInfoProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLUListElement>,
    HTMLUListElement
  > {
  descr: boolean;
}
