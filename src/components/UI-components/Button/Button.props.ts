import {
  DetailedHTMLProps,
  HTMLAttributes,
  ReactElement,
  ReactNode,
} from "react";

export interface ButtonProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children: ReactNode | ReactElement;
  appearence: "light" | "dark";
  size?: "lg" | "sm";
  disabled?: boolean;
}
