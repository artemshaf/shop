import cn from "classnames";
import { DetailedHTMLProps, HTMLAttributes } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../../components/UI-components/Button/Button";
import { GET_IMAGE_URL } from "../../../helpers/generateUrl";
import TrashIcon from "../../../imgs/icons/trash.svg";
import {
  changeClothesCountOnCart,
  IShoppingCardItem,
  removeClotheFromCart,
  toggleOpen,
} from "../../../store/shopping-card/shopping-card-slice";
import { useAppDispatch } from "../../../store/store";
import "./ItemList.scss";

interface ICardItemListProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLUListElement>,
    HTMLUListElement
  > {
  shoppingItems: IShoppingCardItem[];
  setActiveRoute: (index: number) => void;
  index: number;
}

const ItemList = ({
  children,
  setActiveRoute,
  index,
  shoppingItems,
  className,
  ...props
}: ICardItemListProps) => {
  if (!shoppingItems.length) {
    return (
      <h1 className="shopping-card__items-list shopping-card__items-list_empty">
        Your cart is empty!
      </h1>
    );
  }
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  return (
    <>
      <ul {...props} className={cn("shopping-card__items-list", className)}>
        {shoppingItems.map((item) => {
          const name = item.name;
          const price = item.price;

          return (
            <li
              className="shopping-card__items-list-item"
              key={item.id + item.size + item.color}
            >
              <img
                src={GET_IMAGE_URL(item.img)}
                className="shopping-card__items-list-item__img"
              />
              <div className="shopping-card__items-list-item__info">
                <h3>{name}</h3>
                <h4>
                  {item.color}, {item.size}
                </h4>
                <div className="shopping-card__items-list-item__info__actions">
                  <div className="shopping-card__items-list-item__info__actions__count-block">
                    <button
                      className="shopping-card__items-list-item__info__actions__count_dec"
                      onClick={() =>
                        dispatch(
                          changeClothesCountOnCart({
                            count: -1,
                            id: item.id,
                          })
                        )
                      }
                    >
                      −
                    </button>
                    <span className="shopping-card__items-list-item__info__actions__count_text">
                      {item.count}
                    </span>
                    <button
                      className="shopping-card__items-list-item__info__actions__count_inc"
                      onClick={() =>
                        dispatch(
                          changeClothesCountOnCart({
                            count: +1,
                            id: item.id,
                          })
                        )
                      }
                    >
                      +
                    </button>
                  </div>
                  <span className="shopping-card__items-list-item__info__actions__price">
                    <b> price: {(price * item.count).toFixed(2)}$</b>
                  </span>
                  <img
                    className="shopping-card__items-list-item__info__actions__trash"
                    src={TrashIcon}
                    onClick={() =>
                      dispatch(
                        removeClotheFromCart({
                          id: item.id,
                          color: item.color,
                          size: item.size,
                        })
                      )
                    }
                  />
                </div>
              </div>
            </li>
          );
        })}
      </ul>
      {children}
      <Button
        className="shopping-card__btn_next"
        type={"submit"}
        appearence="dark"
        onClick={() => setActiveRoute(1)}
      >
        Futher
      </Button>
      <Button
        type={"submit"}
        appearence="light"
        className="shopping-card__btn_next"
        onClick={() => {
          dispatch(toggleOpen());
          navigate("/");
        }}
      >
        Go to shop
      </Button>
    </>
  );
};

export default ItemList;
