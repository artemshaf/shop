import { IClothesParticularsProps } from "./Clothes-particulars.props";
import "./Clothes-particulars.scss";
import { v4 } from "uuid";
import { useAppDispatch } from "../../../store/store";
import { setParticular } from "../../../store/clothes/filters/filters-slice";
import cn from "classnames";

export const ClothesParticulars = ({
  particular,
  gender,
  className,
  ...props
}: IClothesParticularsProps) => {
  const items = [
    {
      text: "NEW ARRIVALS",
      key: "isNewArrivals",
    },
    {
      text: "SPECIALS",
      key: "isSpecial",
    },
    {
      text: "BESTSELLERS",
      key: "isBestseller",
    },
    {
      text: "MOST VIEWED",
      key: "isMostViewed",
    },
    {
      text: "FEATURED PRODUCTS",
      key: "isFeatured",
    },
  ];

  const dispatch = useAppDispatch();

  return (
    <ul className={cn("clothes-filter__list", className)} {...props}>
      {items.map((item) => {
        const obj = {
          particular: item.key,
          gender,
        };

        return (
          <li
            key={v4()}
            className={cn("clothes-filter__list-item", {
              "clothes-filter__list-item_active": item.key == particular,
            })}
            onClick={() => dispatch(setParticular(obj))}
          >
            {item.text}
          </li>
        );
      })}
    </ul>
  );
};
