import cn from "classnames";
import { InputProps } from "./Input.props";
import "./Input.scss";

export const Input = ({
  children,
  placeholder,
  className,
  ...props
}: InputProps) => {
  return (
    <div className={cn("input__container")}>
      <span className="input__subtitle subtitle_text">{}</span>
      <input
        className={cn("input body_text", className)}
        type="text"
        placeholder={placeholder}
        {...props}
      />
    </div>
  );
};
