import classNames from "classnames";
import cn from "classnames";
import { Button } from "../../components/UI-components/Button/Button";
import {
  selectAllProductId,
  selectAllProductPrice,
  selectAllProducts,
} from "../../store/shopping-card/shopping-card-slice";
import { useAppSelector } from "../../store/store";
import ItemList from "./ItemList/ItemList";
import { IShoppingCardProps } from "./ShoppingCard.props";
import Close from "../../imgs/icons/close.svg";
import "./ShoppingCard.scss";

const ShoppingCard = ({
  open,
  setOpen,
  className,
  ...props
}: IShoppingCardProps) => {
  const ids = useAppSelector((state) => selectAllProductId(state));
  const shoppingItems = useAppSelector((state) => selectAllProducts(state));
  const totalPrice = useAppSelector((state) => selectAllProductPrice(state));
  return (
    <section
      className={classNames("shopping-card", {
        "shopping-card_active": open,
      })}
    >
      <div className="shopping-card__title-block">
        <h1 className="shopping-card__title">SHOPPING CART</h1>
        <img
          className="shopping-card__btn_close"
          src={Close}
          onClick={() => setOpen(!open)}
        />
      </div>
      <nav className="shopping-card__nav">
        <ul className="shopping-card__nav-list">
          <li className="shopping-card__nav-list-item">Item in cart</li>
          <li className="shopping-card__nav-list-item">Delivery info</li>
          <li className="shopping-card__nav-list-item">Payments</li>
        </ul>
      </nav>
      <ItemList shoppingItems={shoppingItems} />
      {+totalPrice > 0 && (
        <div className="shopping-card__price">
          <h4>Total</h4>
          <h4>{+totalPrice > 0 && totalPrice + "$"}</h4>
        </div>
      )}
      <Button appearence="dark" className="shopping-card__btn_next">
        FURTHER
      </Button>
    </section>
  );
};

export default ShoppingCard;
