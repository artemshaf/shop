import cn from "classnames";
import { ForwardedRef, forwardRef } from "react";
import { ITextareaProps } from "./Textarea.props";
import "./Textarea.scss";

const Textarea = forwardRef(
  (
    { placeholder, defaultValue, className, ...props }: ITextareaProps,
    ref: ForwardedRef<HTMLTextAreaElement>
  ) => {
    return (
      <textarea
        ref={ref}
        placeholder={placeholder}
        className={cn("textarea", className)}
        defaultValue={defaultValue}
        {...props}
      ></textarea>
    );
  }
);

export default Textarea;
