import { IClothesFiltersProps } from "./Clothes-filters.props";
import "./Clothes-filters.scss";
import { v4 as uuidv4, v4 } from "uuid";
export const ClothesFilters = ({
  className,
  ...props
}: IClothesFiltersProps) => {
  const items = [
    {
      text: "NEW ARRIVALS",
    },
    {
      text: "SPECIALS",
    },
    {
      text: "BESTSELLERS",
    },
    {
      text: "MOST VIEWED",
    },
    {
      text: "FEATURED PRODUCTS",
    },
  ];

  return (
    <ul className="clothes-filter__list">
      {items.map((item) => (
        <li key={v4()} className="clothes-filter__list-item">
          {item.text}
        </li>
      ))}
    </ul>
  );
};
