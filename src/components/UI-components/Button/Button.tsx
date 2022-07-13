import cn from "classnames";
import { ButtonProps } from "./Button.props";
import "./Button.scss";

export const Button = ({
  appearence,
  className,
  children,
  size = "sm",
}: ButtonProps) => {
  return (
    <button
      className={cn(
        "button button_text",
        {
          button_light: appearence === "light",
          button_dark: appearence === "dark",
          button_lg: size === "lg",
          button_sm: size === "sm",
        },
        className
      )}
    >
      {children}
    </button>
  );
};
