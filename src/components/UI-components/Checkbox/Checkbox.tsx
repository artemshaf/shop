import classNames from "classnames";
import { ForwardedRef, forwardRef, useState } from "react";
import { ICheckboxProps } from "./Checkbox.props";
import "./Checkbox.scss";

export const Checkbox = forwardRef(
  (
    { checked, className, children, ...props }: ICheckboxProps,
    ref: ForwardedRef<HTMLInputElement>
  ): JSX.Element => {
    return (
      <>
        <label className={classNames("checkbox-btn__container", className)}>
          <input
            className="checkbox-btn"
            type="checkbox"
            onChange={() => (checked = !checked)}
            ref={ref}
            checked={checked}
            {...props}
          />
          <span className="checkbox-fake"></span>
          <span className="checkbox-btn__children">{children}</span>
        </label>
      </>
    );
  }
);
