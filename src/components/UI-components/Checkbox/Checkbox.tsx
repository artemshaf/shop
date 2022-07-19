import classNames from "classnames";
import { useState } from "react";
import { ICheckboxProps } from "./Checkbox.props";
import "./Checkbox.scss";

export const Checkbox = ({
  checked,
  className,
  children,
  ...props
}: ICheckboxProps): JSX.Element => {
  return (
    <>
      <label className={classNames("checkbox-btn__container", className)}>
        <input
          className="checkbox-btn"
          type="checkbox"
          defaultChecked={false}
          {...props}
        />
        <span className="checkbox-fake"></span>
        <span className="checkbox-btn__children">{children}</span>
      </label>
    </>
  );
};
