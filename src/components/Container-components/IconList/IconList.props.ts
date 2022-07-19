import { DetailedHTMLProps, HTMLAttributes } from "react";
import { IIcon } from "../../../interfaces/Plain/icon";
export interface IIconListProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLUListElement>,
    HTMLUListElement
  > {
  entities: IIcon[];
}
