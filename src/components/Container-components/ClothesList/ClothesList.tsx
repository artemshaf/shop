import { IClothesListProps } from "./ClothesList.props";
import "./ClothesList.scss";
import cn from "classnames";
import { v4 as uuidv4 } from "uuid";
import { ClothesItem } from './ClothesItem/ClothesItem';

export const ClothesList = ({
  clothes = [],
  className,
  ...props
}: IClothesListProps) => {
  return (
    <ul className="clothes__list" {...props}>
      {clothes.map((item) => (
        <ClothesItem key={uuidv4()} thing={item} />
      ))}
    </ul>
  );
};
