import { IClothesParticularsProps } from "./Clothes-particulars.props";
import "./Clothes-particulars.scss";
import { v4 } from "uuid";
import cn from "classnames";

export const ClothesParticulars = ({
  particular,
  setParticular,
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

  return (
    <ul className={cn("clothes-filter__list", className)} {...props}>
      {items.map((item) => (
        <li
          key={v4()}
          className={cn("clothes-filter__list-item", {
            "clothes-filter__list-item_active": item.key === particular,
          })}
          onClick={() => setParticular(item.key)}
        >
          {item.text}
        </li>
      ))}
    </ul>
  );
};
