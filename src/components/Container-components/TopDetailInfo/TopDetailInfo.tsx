import cn from "classnames";
import { BreadCrumbs } from "../../Business-components/BreadCrumbs/BreadCrumbs";
import { Rating } from "../Rating/Rating";
import { ITopDetailInfoProps } from "./TopDetailInfo.props";
import { ReactComponent as ShareIcon } from "../../../imgs/main/share.svg";
import "./TopDetailInfo.scss";
export const TopDetailInfo = ({
  breadcrumbsLast,
  sex,
  className,
  ...props
}: ITopDetailInfoProps) => {
  const clotheInfo = null;

  return (
    <section className={cn("top-detail__container", className)} {...props}>
      <div className="container">
        <section className={cn("top-detail__top-block")}>
          {breadcrumbsLast ? (
            <BreadCrumbs last={breadcrumbsLast} />
          ) : (
            <BreadCrumbs />
          )}
          <div className={cn("top-detail__top-block__icons")}>
            <ShareIcon />
            <span className={cn("top-detail__top-block__icons-text")}>
              share
            </span>
          </div>
        </section>
        <h1 className={cn("top-detail__title", "title__text-ex-lg")}>{sex}</h1>
        {clotheInfo && (
          <>
            <section className={cn("top-detail__bottom-block")}>
              <Rating rate={3} />
              <ul>
                <li>SKU:77</li>
                <li>Availability:In Stock</li>
              </ul>
            </section>
          </>
        )}
      </div>
    </section>
  );
};
