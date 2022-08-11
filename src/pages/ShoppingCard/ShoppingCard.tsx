import classNames from "classnames";
import cn from "classnames";
import { Button } from "../../components/UI-components/Button/Button";
import { useAppSelector } from "../../store/store";
import ItemList from "./ItemList/ItemList";
import { IShoppingCardProps } from "./ShoppingCard.props";
import Close from "../../imgs/icons/close.svg";
import "./ShoppingCard.scss";
import { ReactNode, useEffect, useMemo, useState } from "react";
import Delivery from "./Delivery/Delivery";
import { useNavigate } from "react-router-dom";
import Payments from "./Payments/Payments";
import { IClothesItem } from "../../components/Container-components/Clothes/Clothes.props";
import {
  IShoppingCardItem,
  selectShoppingCardClothes,
  selectShoppingCardItemsPrice,
} from "../../store/shopping-card/shopping-card-slice";

interface IButtonBehavior {
  onClick: () => void;
  text: string;
  appearence: string;
}

const ShoppingCard = ({
  open,
  setOpen,
  className,
  ...props
}: IShoppingCardProps) => {
  const shoppingItems: IShoppingCardItem[] = useAppSelector((state) =>
    selectShoppingCardClothes(state)
  );
  const totalPrice = Number(
    useAppSelector((state) => selectShoppingCardItemsPrice(state)).toFixed(2)
  );
  const [activeRoute, setActiveRoute] = useState<number>(0);
  const navigate = useNavigate();

  const buttonBehavior: IButtonBehavior[] | undefined = useMemo(() => {
    switch (activeRoute) {
      case 0:
        return [
          {
            onClick: () => setActiveRoute(1),
            text: "Further",
            appearence: "dark",
          },
          {
            onClick: () => {
              setOpen(false);
              navigate("");
            },
            text: "Go to shop",
            appearence: "light",
          },
        ];
      case 1:
        return [
          {
            onClick: () => setActiveRoute(2),
            text: "Go to payment",
            appearence: "dark",
          },
          {
            onClick: () => setActiveRoute(0),
            text: "View cart",
            appearence: "light",
          },
        ];
      case 2:
        return [
          {
            onClick: () => setActiveRoute(0),
            text: "Payment",
            appearence: "dark",
          },
          {
            onClick: () => setActiveRoute(1),
            text: "View payments info",
            appearence: "light",
          },
        ];
      default:
        break;
    }
  }, [activeRoute]);

  const routes = useMemo(
    () => [
      {
        component: (
          <ItemList
            className="shopping-card__actions-block"
            shoppingItems={shoppingItems}
            setActiveRoute={setActiveRoute}
            index={0}
          >
            <div className="shopping-card__price">
              <h4>Total</h4>
              <h4>{+totalPrice > 0 && totalPrice + "$"}</h4>
            </div>
          </ItemList>
        ),
        link: "Item in cart",
      },
      {
        component: (
          <Delivery
            className="shopping-card__actions-block"
            totalPrice={totalPrice}
            setActiveRoute={setActiveRoute}
            index={1}
          >
            <div className="shopping-card__price">
              <h4>Total</h4>
              <h4>{+totalPrice > 0 && totalPrice + "$"}</h4>
            </div>
          </Delivery>
        ),
        link: "Delivery info",
      },
      {
        component: (
          <Payments
            className="shopping-card__actions-block"
            setActiveRoute={setActiveRoute}
          >
            <div className="shopping-card__price">
              <h4>Total</h4>
              <h4>{+totalPrice > 0 && totalPrice + "$"}</h4>
            </div>
          </Payments>
        ),
        link: "Payments",
      },
      {
        component: (
          <h1 className="shopping-card__centered">Thanks form Payment!!!</h1>
        ),
      },
    ],
    [activeRoute, shoppingItems]
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
          {routes.map(
            (item, index) =>
              item.link && (
                <li
                  key={item.link}
                  className={cn("shopping-card__nav-list-item", {
                    "shopping-card__nav-list-item_active":
                      index === activeRoute,
                  })}
                >
                  {item.link}
                </li>
              )
          )}
        </ul>
      </nav>
      {+totalPrice > 0 ? (
        <>{routes[activeRoute].component}</>
      ) : (
        <h1 className="shopping-card__centered">Shopping cart is empty!</h1>
      )}
    </section>
  );
};

export default ShoppingCard;
