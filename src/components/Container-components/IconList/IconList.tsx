import { IIconListProps } from "./IconList.props";
import { v4 as uuidv4 } from "uuid";

export const IconList = ({ entities = [] }: IIconListProps) => {
  return (
    <ul>
      {entities.map((item) => {
        return (
          <li key={uuidv4()}>
            {item.icon}
            {item.text && <span>{item.text}</span>}
          </li>
        );
      })}
    </ul>
  );
};
