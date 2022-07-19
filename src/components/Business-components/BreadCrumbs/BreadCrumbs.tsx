import cn from "classnames";
import { log } from "console";
import { memo } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { IBreadCrubms } from "./BreadCrumbs.props";
import "./BreadCrumbs.scss";

export const BreadCrumbs = memo(
  ({ last, className, ...props }: IBreadCrubms) => {
    const pathname = useLocation().pathname;
    const pathnames = pathname.split("/").filter((el) => el);
    console.log(pathnames);

    if (pathnames) {
      return (
        <ul className={cn("bread-crumbs__list", className)} {...props}>
          <li className={cn("bread-crumbs__list-item")} key={"/home-link"}>
            <Link to={"/"}>
              <span className={cn("bread-crumbs__list-item__text")}>Home</span>
            </Link>
          </li>
          {pathnames.map((ph, index) => {
            const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
            const isLast = index === pathnames.length - 1;
            console.log(routeTo);

            return isLast ? (
              <li className={cn("bread-crumbs__list-item")} key={index}>
                <span
                  className={cn(
                    "bread-crumbs__list-item__text bread-crumbs__list-item__text_active"
                  )}
                >
                  {last ? last : ph}
                </span>
              </li>
            ) : (
              <li className={cn("bread-crumbs__list-item")} key={index}>
                <Link to={routeTo}>
                  <span className={cn("bread-crumbs__list-item__text")}>
                    {ph}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      );
    }
    return null;
  }
);
