import { DetailedHTMLProps, HTMLAttributes } from "react";
import { start } from "repl";
import { GET_IMAGE_URL } from "../../../helpers/generateUrl";
import TrashIcon from "../../../imgs/icons/trash.svg";
import { selectClothesByIds } from "../../../store/clothes/clothes-slice";
import {
  changeCountToShoppingCard,
  IShoppingCardItem,
  removeFromShoppingCard,
} from "../../../store/shopping-card/shopping-card-slice";
import { useAppDispatch, useAppSelector } from "../../../store/store";
import "./ItemList.scss";

interface ICardItemListProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLUListElement>,
    HTMLUListElement
  > {
  shoppingItems: IShoppingCardItem[];
}

const ItemList = ({
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

  const dispatch = useAppDispatch();

  return (
    <ul {...props} className="shopping-card__items-list">
      {shoppingItems.map((startItem) => {
        const name = startItem.name;
        const price = startItem.price;
        console.log(startItem);

        return startItem.sizes.map((item) => (
          <li className="shopping-card__items-list-item">
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
                        changeCountToShoppingCard({
                          count: -1,
                          color: item.color,
                          id: startItem.id,
                          size: item.size,
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
                        changeCountToShoppingCard({
                          count: +1,
                          color: item.color,
                          id: startItem.id,
                          size: item.size,
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
                      removeFromShoppingCard({
                        color: item.color,
                        id: startItem.id,
                        size: item.size,
                      })
                    )
                  }
                />
              </div>
            </div>
          </li>
        ));
      })}
    </ul>
  );
};

export default ItemList;
