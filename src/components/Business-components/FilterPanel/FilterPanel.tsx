import cn from "classnames";
import { useMemo } from "react";
import {
  getDataByGender,
  IProducts,
} from "../../../store/clothes/clothes-slice";
import {
  selectFilterByGender,
  setFilters,
} from "../../../store/clothes/filters/filters-slice";
import { useAppDispatch, useAppSelector } from "../../../store/store";
import { IClothesItem } from "../../Container-components/Clothes/Clothes.props";
import { Checkbox } from "../../UI-components/Checkbox/Checkbox";
import { IFilterPanelProps } from "./FilterPanel.props";
import "./FilterPanel.scss";

export const FilterPanel = ({
  gender,
  className,
  ...props
}: IFilterPanelProps) => {
  const items: IClothesItem[] = useAppSelector((state) =>
    getDataByGender(state, gender as keyof IProducts)
  );

  const brandList = useMemo(
    () => [...new Set(items.map(({ brand }) => brand))],
    [gender, items]
  );
  const colorList = useMemo(
    () => [
      ...new Set(
        items.map(({ images }) => images.map(({ color }) => color)).flat()
      ),
    ],
    [gender, items]
  );
  const sizesList = useMemo(
    () => [...new Set(items.map(({ sizes }) => sizes).flat())],
    [gender, items]
  );

  const filters = {
    color: colorList,
    sizes: sizesList,
    brand: brandList,
    price: ["1200", "600", "400", "300", "200", "100", "20", "7"],
  };

  const currentFilters = useAppSelector((state) =>
    selectFilterByGender(state, gender)
  );

  const dispatch = useAppDispatch();

  return (
    <section className={cn("filter-panel__container", className)} {...props}>
      <ul className={cn("filter-panel__list")}>
        {filters.color.length > 0 && (
          <ul
            key={"filter-color"}
            className={cn("filter-panel__list-item filter-panel__sublist")}
          >
            <h3 className={cn("filter-panel__sublist-title")}>colors</h3>
            {filters.color.map((color) => (
              <li key={color} className={cn("filter-panel__sublist-item")}>
                <Checkbox
                  onClick={() =>
                    dispatch(
                      setFilters({
                        currentFilter: "color",
                        currentData: color,
                        gender,
                      })
                    )
                  }
                  checked={currentFilters.color.includes(color)}
                >
                  <span className={cn("filter-panel__sublist-item__text")}>
                    {color}
                  </span>
                </Checkbox>
              </li>
            ))}
          </ul>
        )}
        {filters.sizes.length > 0 && (
          <>
            <ul
              key={"filter-size"}
              className={cn("filter-panel__list-item filter-panel__sublist")}
            >
              <h3 className={cn("filter-panel__sublist-title")}>sizes</h3>
              {filters.sizes.map((size) => (
                <li key={size} className={cn("filter-panel__sublist-item")}>
                  <Checkbox
                    checked={currentFilters.sizes.includes(size)}
                    onClick={() =>
                      dispatch(
                        setFilters({
                          currentFilter: "sizes",
                          currentData: size,
                          gender,
                        })
                      )
                    }
                  >
                    <span className={cn("filter-panel__sublist-item__text")}>
                      {size}
                    </span>
                  </Checkbox>
                </li>
              ))}
            </ul>
          </>
        )}
        {filters.brand.length > 0 && (
          <ul
            key={"filter-brand"}
            className={cn("filter-panel__list-item filter-panel__sublist")}
          >
            <h3 className={cn("filter-panel__sublist-title")}>brands</h3>
            {filters.brand.map((brand) => (
              <li key={brand} className={cn("filter-panel__sublist-item")}>
                <Checkbox
                  onClick={() =>
                    dispatch(
                      setFilters({
                        currentFilter: "brand",
                        currentData: brand,
                        gender,
                      })
                    )
                  }
                  checked={currentFilters.brand.includes(brand)}
                >
                  <span className={cn("filter-panel__sublist-item__text")}>
                    {brand}
                  </span>
                </Checkbox>
              </li>
            ))}
          </ul>
        )}
        {filters.price.length > 0 && (
          <ul
            key={"filter-price"}
            className={cn("filter-panel__list-item filter-panel__sublist")}
          >
            <h3 className={cn("filter-panel__sublist-title")}>prices</h3>
            {filters.price.map((price) => (
              <li key={price} className={cn("filter-panel__sublist-item")}>
                <Checkbox
                  onClick={() =>
                    dispatch(
                      setFilters({
                        currentFilter: "price",
                        currentData: price,
                        gender,
                      })
                    )
                  }
                  checked={currentFilters.price.includes(price)}
                >
                  <span className={cn("filter-panel__sublist-item__text")}>
                    от ${price}
                  </span>
                </Checkbox>
              </li>
            ))}
          </ul>
        )}
      </ul>
    </section>
  );
};
