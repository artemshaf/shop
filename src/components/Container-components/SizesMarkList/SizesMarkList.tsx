import cn from "classnames";
import { v4 as uuidv4 } from "uuid";
import { ISizesMarkList } from './SizesMarkList.props';
import "./SizesMarkList.scss";

export const SizesMarkList = ({sizes}:ISizesMarkList) => {
  return (
    <ul className={cn("sizes-mark__list")}>
      {sizes.map((s) => (
        <li className={cn("sizes-mark__list-item")} key={uuidv4()}>
          <span>{s}</span>
        </li>
      ))}
    </ul>
  );
};
