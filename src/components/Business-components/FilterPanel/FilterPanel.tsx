import cn from "classnames";
import { useEffect, useMemo } from "react";
import { useGetProductByCategoryQuery } from "../../../store/api";
import {
  selectClothesFilters,
  setInitial,
  toggleFilters,
} from "../../../store/clothes/filters/clothes-filters-slice";

import { useAppDispatch, useAppSelector } from "../../../store/store";
import { Checkbox } from "../../UI-components/Checkbox/Checkbox";
import Loader from "../../UI-components/Loader/Loader";
import { IFilterPanelProps } from "./FilterPanel.props";
import "./FilterPanel.scss";

export const FilterPanel = ({
  gender,
  className,
  ...props
}: IFilterPanelProps) => {
  const {
    data: items,
    isLoading,
    isError,
    isSuccess,
  } = useGetProductByCategoryQuery(gender);
  const dispatch = useAppDispatch();
  const currentFilters = useAppSelector((state) => selectClothesFilters(state));

  if (isLoading || !items) {
    return <Loader />;
  }

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

  return (
    <>
      {isSuccess && (
        <section
          className={cn("filter-panel__container", className)}
          {...props}
        >
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
                          toggleFilters({
                            field: "color",
                            value: color.toLocaleLowerCase(),
                          })
                        )
                      }
                      checked={currentFilters.color.includes(
                        color.toLocaleLowerCase()
                      )}
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
                  className={cn(
                    "filter-panel__list-item filter-panel__sublist"
                  )}
                >
                  <h3 className={cn("filter-panel__sublist-title")}>sizes</h3>
                  {filters.sizes.map((size) => (
                    <li key={size} className={cn("filter-panel__sublist-item")}>
                      <Checkbox
                        onClick={() =>
                          dispatch(
                            toggleFilters({
                              field: "sizes",
                              value: size.toLocaleLowerCase(),
                            })
                          )
                        }
                        checked={currentFilters.sizes.includes(
                          size.toLocaleLowerCase()
                        )}
                      >
                        <span
                          className={cn("filter-panel__sublist-item__text")}
                        >
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
                          toggleFilters({
                            field: "brand",
                            value: brand.toLocaleLowerCase(),
                          })
                        )
                      }
                      checked={currentFilters.brand.includes(
                        brand.toLocaleLowerCase()
                      )}
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
                          toggleFilters({
                            field: "price",
                            value: price.toLocaleLowerCase(),
                          })
                        )
                      }
                      checked={currentFilters.price.includes(
                        price.toLocaleLowerCase()
                      )}
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
      )}
    </>
  );
};
