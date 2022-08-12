import { useNavigate } from "react-router-dom";
import { GET_IMAGE_URL } from "../../../helpers/generateUrl";
import { solvedDiscount } from "../../../helpers/prices";
import { useAppSelector } from "../../../store/store";
import { IClothesItem } from "../Clothes/Clothes.props";
import { ISmallClothesItemProps } from "./SmallClothesItem.props";
import "./SmallClothesItem.scss";

const SmallClothesItem = ({
  sizes,
  item,
  className,
  ...props
}: ISmallClothesItemProps) => {
  const navigate = useNavigate();
  // let totalPrice = 0;

  return (
    <li
      className="small-clothes-item"
      {...props}
      onClick={() => navigate(`/${item.category}/${item.id}`)}
    >
      <img
        src={GET_IMAGE_URL(item?.images[0].url as string)}
        className="small-clothes-item__img"
      />
      <div className="small-clothes-item__info">
        <div className="small-clothes-item__info__title__block">
          <h3 className="small-clothes-item__info__title">{item?.name}</h3>
          {item?.discount && (
            <p className="small-clothes-item__info__title__badge">
              {item?.discount}
            </p>
          )}
        </div>
        <div className="small-clothes-item__info__price">
          {sizes ? (
            <>
              <ul className="small-clothes-item__info__price__list">
                {sizes.map((sizeItem) => {
                  // totalPrice += sizeItem.count * item?.price;
                  return (
                    <li className="small-clothes-item__info__price__list-item">
                      <span>
                        <b>Size:</b> {sizeItem.size}
                      </span>
                      <span>
                        <b>Count:</b> {sizeItem.count}
                      </span>
                      <span>
                        <b>Price: </b>
                        {item?.discount ? (
                          <>
                            {sizeItem.count} * {item.price} ={" "}
                            <b>
                              {(sizeItem.count * item.price).toFixed(2)}
                              {"$"}
                            </b>
                          </>
                        ) : (
                          <>
                            {sizeItem.count} * {item.price} ={" "}
                            <b>
                              {(sizeItem.count * item.price).toFixed(2)}
                              {"$"}
                            </b>
                          </>
                        )}
                      </span>
                    </li>
                  );
                })}
              </ul>
              <span className="small-clothes-item__info__price__list-item__total">
                {/* TOTAL PRICE: {totalPrice.toFixed(2)}$ */}
              </span>
            </>
          ) : item?.discount ? (
            <p className="small-clothes-item__info__price__list-item__total">
              {solvedDiscount(item.price, item.discount)} -{" "}
              {(
                +solvedDiscount(item.price, item.discount) - item.price
              ).toFixed(2)}
              {" = "}
              <b>&nbsp;{item.price} $</b>
            </p>
          ) : (
            <b className="small-clothes-item__info__price__list-item__total">
              {item?.price}
              {"$"}
            </b>
          )}
        </div>
      </div>
    </li>
  );
};

export default SmallClothesItem;
