import cn from "classnames";
import { CustomLink } from '../../../UI-components/CustomLink/CustomLink';
import { IHeaderNavProps } from "./HeaderNav.props";
import "./HeaderNav.scss";

export const HeaderNav = (props: IHeaderNavProps) => {
  const navList = [
    {
      url: "/about",
      text: "About Us",
    },
    {
      url: "/women",
      text: "Women",
    },
    {
      url: "/men",
      text: "Men",
    },
    {
      url: "/beauty",
      text: "Beauty",
    },
    {
      url: "/accessories",
      text: "Accessories",
    },
    {
      url: "/blog",
      text: "Blog",
    },
    {
      url: "/contact",
      text: "Contact",
    },
  ];

  return (
    <nav className={cn("header-nav")}>
      <ul className={cn("header-nav__list")}>
        {navList.map((item) => {
          return (
            <li key={item.url} className={"header-nav__item"}>
              <CustomLink to={item.url} className={"header-nav__item"}>
                {item.text}
              </CustomLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
