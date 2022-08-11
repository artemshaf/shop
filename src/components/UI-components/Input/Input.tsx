import cn from "classnames";
import React, { ForwardedRef, forwardRef } from "react";
import { InputProps } from "./Input.props";
import "./Input.scss";

export const Input = forwardRef(
  (
    {
      register,
      label,
      required,
      type = "text",
      children,
      value,
      placeholder,
      className,
      ...props
    }: InputProps,
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    return (
      <label className={cn("input__container")}>
        <h5 className="input__subtitle">{children}</h5>
        <input
          ref={ref}
          className={cn("input body_text", className)}
          type={type}
          placeholder={placeholder}
          {...props}
        />
      </label>
    );
  }
);
