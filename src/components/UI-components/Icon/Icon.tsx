import cn from "classnames";
import { Icons, IIconProps } from "./Icon.props";
import "./Icon.scss";

export const Icon = ({
  icon,
  className,
  ...props
}: IIconProps): JSX.Element => {
  const CurrentIcon = Icons[icon];
  const Face = Icons["Facebook"];

  return (
    <button className={cn("icon", className)} {...props}>
      <CurrentIcon />
      <Face />
    </button>
  );
};
