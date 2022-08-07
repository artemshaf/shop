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
import { useMemo, useState } from "react";
import Delivery from "./Delivery/Delivery";
import { useNavigate } from "react-router-dom";

const ShoppingCard = ({
  open,
  setOpen,
  className,
  ...props
}: IShoppingCardProps) => {
  const shoppingItems = useAppSelector((state) => selectAllProducts(state));
  const totalPrice = useAppSelector((state) => selectAllProductPrice(state));
  const [activeRoute, setActiveRoute] = useState<number>(0);
  const navigate = useNavigate();

  const routes = useMemo(
    () => [
      {
        component: (
          <ItemList
            shoppingItems={shoppingItems}
            setActiveRoute={setActiveRoute}
            index={0}
          />
        ),
        link: "Item in cart",
      },
      {
        component: <Delivery setActiveRoute={setActiveRoute} index={1} />,
        link: "Delivery info",
      },
      {
        component: (
          <ItemList
            shoppingItems={shoppingItems}
            setActiveRoute={setActiveRoute}
            index={-1}
          />
        ),
        link: "Payments",
      },
    ],
    []
  );

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
          {routes.map((item, index) => (
            <li
              className={cn("shopping-card__nav-list-item", {
                "shopping-card__nav-list-item_active": index === activeRoute,
              })}
            >
              {item.link}
            </li>
          ))}
        </ul>
      </nav>
      {routes[activeRoute].component}
      {+totalPrice > 0 ? (
        <>
          <div className="shopping-card__price">
            <h4>Total</h4>
            <h4>{+totalPrice > 0 && totalPrice + "$"}</h4>
          </div>
        </>
      ) : (
        <Button
          appearence="dark"
          className="shopping-card__btn_next"
          onClick={() => {
            setOpen(!open);
            navigate("");
          }}
        >
          Go to shop
        </Button>
      )}
    </section>
  );
};

export default ShoppingCard;
