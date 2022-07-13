import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface IHProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLHeadingElement>,
    HTMLHeadingElement
  > {
  size?: "ex-lg" | "lg" | "md" | "sm" | "ex-sm";
}
