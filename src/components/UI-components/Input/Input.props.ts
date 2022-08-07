import { DetailedHTMLProps, HTMLAttributes } from "react";
import { UseFormRegister } from "react-hook-form";
import { Fields } from "../../Business-components/ReviewModal/ReviewModal";

export interface InputProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  value?: string;
  onHandle?: (val: string) => void;
  type?: string;
  register?: UseFormRegister<Fields>;
  label?: any;
  required?: boolean;
}
