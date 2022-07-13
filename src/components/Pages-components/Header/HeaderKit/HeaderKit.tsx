import { IHeaderKitProps } from "./HeaderKit.props";
import { ReactComponent as Search } from "../../../../imgs/main/search.svg";
import { ReactComponent as Globe } from "../../../../imgs/main/globe.svg";
import { ReactComponent as User } from "../../../../imgs/main/user.svg";
import { ReactComponent as Bag } from "../../../../imgs/main/shopping-bag.svg";
import cn from "classnames";
import { v4 as uuidv4 } from "uuid";
import "./HeaderKit.scss";

export const HeaderKit = ({ className, ...props }: IHeaderKitProps) => {
  const items = [
    {
      icon: <Search className={cn("header-kit-icon")} />,
    },
    {
      icon: <Globe className={cn("header-kit-icon")} />,
    },
    {
      icon: <User className={cn("header-kit-icon")} />,
    },
    {
      icon: <Bag className={cn("header-kit-icon")} />,
    },
  ];

  return (
    <ul className={cn("header-kit__list")}>
      {items.map((item) => (
        <li key={uuidv4()}>{item.icon}</li>
      ))}
    </ul>
  );
};
