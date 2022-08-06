import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface ISearchPanelProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  isOpen: boolean;
  handleIsOpen: (bool: boolean) => void;
}
