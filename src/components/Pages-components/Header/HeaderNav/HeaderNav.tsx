import cn from "classnames";
import { v4 } from "uuid";
import { navList } from "../../../../navigation/header";
import { CustomLink } from "../../../UI-components/CustomLink/CustomLink";
import { IHeaderNavProps } from "./HeaderNav.props";
import "./HeaderNav.scss";

export const HeaderNav = ({ className, ...props }: IHeaderNavProps) => {
  return (
    <nav className={cn("header-nav", className)} {...props}>
      <ul className={cn("header-nav__list")}>
        {navList.map((item) => {
          return (
            <li key={v4()} className={"header-nav__item"}>
              <CustomLink
                to={item.path}
                className={"header-nav__item"}
                state={{ test: "test123" }}
              >
                {item.text}
              </CustomLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
