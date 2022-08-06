import { DetailedHTMLProps, HTMLAttributes } from "react";
import { UseFormRegister } from "react-hook-form";
import { Inputs } from "../../Business-components/ReviewModal/ReviewModal";

export interface InputProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  value?: string;
  onHandle?: (val: string) => void;
  type?: string;
  register?: UseFormRegister<Inputs>;
  label?: any;
  required?: boolean;
}
