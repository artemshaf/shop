import { ForwardedRef, forwardRef } from "react";
import { RadiobuttonProps } from "./Radiobutton.props";
import "./Radiobutton.scss";

export const Radiobutton = forwardRef(
  (
    { children, checked, onClick, id, name, value }: RadiobuttonProps,
    ref: ForwardedRef<HTMLInputElement>
  ): JSX.Element => {
    return (
      <label className="radio-btn__container" htmlFor={id}>
        <input
          className="radio-btn"
          type="radio"
          value={value}
          name={name}
          id={id}
          checked={checked}
          onClick={onClick}
          ref={ref}
        />
        <span className="radio-fake"></span>
        <span className="radio-btn__children">{children}</span>
      </label>
    );
  }
);
