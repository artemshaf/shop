import { IClothesItem } from "../components/Container-components/Clothes/Clothes.props";

export const solvedDiscount = (price: string | number, discount: string) =>
  (
    +price /
    (1 - +discount.substring(1, discount.substr.length + 1) / 100)
  ).toFixed(2);

export const solvePrice = (clothes: IClothesItem[]) =>
  clothes.reduce((acc, item) => acc + item.price, 0);
