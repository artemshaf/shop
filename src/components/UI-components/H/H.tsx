import cn from "classnames";
import { PropsWithChildren } from "react";
import { IHProps } from "./H.props";

export const H = ({
  size = "md",
  children,
  className,
  ...props
}: PropsWithChildren<IHProps>): JSX.Element => {
  switch (size) {
    case "ex-lg":
      return (
        <h1 className={cn("title__text-ex-lg", className)} {...props}>
          {children}
        </h1>
      );
    case "lg":
      return (
        <h2 className={cn("title__text-lg", className)} {...props}>
          {children}
        </h2>
      );
    case "md":
      return (
        <h3 className={cn("title__text-md", className)} {...props}>
          {children}
        </h3>
      );
    case "sm":
      return (
        <h4 className={cn("title__text-sm", className)} {...props}>
          {children}
        </h4>
      );
    case "ex-sm":
      return (
        <h5 className={cn("title__text-ex-sm", className)} {...props}>
          {children}
        </h5>
      );
  }
};
