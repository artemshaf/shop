import cn from "classnames";
import { Button } from "../../UI-components/Button/Button";
import { IShoppingCardItemProps } from "./ShoppingCardItem.props";

const ShoppingCardItem = ({
  item,
  className,
  ...props
}: IShoppingCardItemProps) => {
  return (
    <li className={cn("", className)} {...props}>
      <img />
      <div>
        <Button appearence="dark">+</Button>
        <p></p>
        <Button appearence="dark">-</Button>
      </div>
      <div>
        <p>Price: {}</p>
        <p>Count: {}</p>
      </div>
    </li>
  );
};

export default ShoppingCardItem;
