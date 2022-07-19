import { ReactComponent as FilterIcon } from "../../../imgs/main/filter-group.svg";
import { ReactComponent as ViewList } from "../../../imgs/main/view-list.svg";
import { ReactComponent as ViewGrid } from "../../../imgs/main/view-grid.svg";
import cn from "classnames";
import { IClothesFilters } from "./Clothes-filters.props";
import "./Clothes-filters.scss";

export const ClothesFilters = ({
  setOpenFilter,
  className,
  ...props
}: IClothesFilters) => {
  return (
    <section className={cn("clothes-filters__container", className)} {...props}>
      <span
        className={"clothes-filters__filter"}
        onClick={() => setOpenFilter()}
      >
        <FilterIcon />
        <span className={"clothes-filters__filter-text"}>Filter</span>
      </span>
      <ul className={"clothes-filters__list"}>
        <li className={"clothes-filters__list-item"}>
          <ViewList />
        </li>
        <li className={"clothes-filters__list-item"}>
          <ViewGrid />
        </li>
      </ul>
    </section>
  );
};
