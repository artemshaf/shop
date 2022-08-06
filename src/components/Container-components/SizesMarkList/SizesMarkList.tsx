import cn from "classnames";
import { v4 as uuidv4 } from "uuid";
import { ISizesMarkList } from "./SizesMarkList.props";
import "./SizesMarkList.scss";

export const SizesMarkList = ({ sizes, active, setActive }: ISizesMarkList) => {
  const handleActive = (targetActive: string) => {
    if (active === targetActive) {
      setActive("");
    } else {
      setActive(targetActive as string);
    }
  };

  return (
    <div>
      <ul className={cn("sizes-mark__list")}>
        {sizes.map((s) => (
          <li
            className={cn("sizes-mark__list-item", {
              "sizes-mark__list-item_active": s === active,
            })}
            onClick={() => handleActive(s)}
            key={uuidv4()}
          >
            <span>{s}</span>
          </li>
        ))}
      </ul>
      {active === "" && (
        <p className="sizes-mark__list_error">Выберите размер</p>
      )}
    </div>
  );
};
