import { IClothesItem } from "../components/Container-components/Clothes/Clothes.props";
import { IClothesFiltersInterface } from "../store/clothes/filters/clothes-filters-slice";

export const filteredClothes = (
  filters: IClothesFiltersInterface,
  clothes: IClothesItem[]
) => {
  if (
    filters.brand.length === 0 &&
    filters.sizes.length === 0 &&
    filters.price.length === 0 &&
    filters.color.length === 0
  ) {
    return clothes;
  }
  return clothes.filter(
    (item) =>
      (filters.brand.length > 0
        ? filters.brand.includes(item.brand.toLocaleLowerCase())
        : item) &&
      (filters.color.length > 0
        ? item.images.some((img) =>
            filters.color.includes(img.color.toLocaleLowerCase())
          )
        : item) &&
      (filters.price.length > 0
        ? filters.price.every((filterPrice) => +filterPrice < +item.price)
        : item) &&
      (filters.sizes.length > 0
        ? item.sizes.some((item) =>
            filters.sizes.includes(item.toLocaleLowerCase())
          )
        : item)
  );
};
