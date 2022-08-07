import cn from "classnames";
import { IClothesItemProps } from "./ClothesItem.props";
import { Rating } from "../../Rating/Rating";
import "./ClothesItem.scss";
import { Button } from "../../../UI-components/Button/Button";
import { SizesMarkList } from "../../SizesMarkList/SizesMarkList";
import { ReactComponent as HeartIcon } from "../../../../imgs/main/heart.svg";
import { ReactComponent as ScaleIcon } from "../../../../imgs/main/scale.svg";
import { GET_IMAGE_URL } from "../../../../helpers/generateUrl";
import { useNavigate } from "react-router-dom";
import { addToShoppingCard } from "../../../../store/shopping-card/shopping-card-slice";
import { solvedDiscount } from "../../../../helpers/prices";
import { useAppDispatch } from "../../../../store/store";
import { useState } from "react";

export const ClothesItem = ({
  thing,
  className,
  ...props
}: IClothesItemProps) => {
  const dispatch = useAppDispatch();
  const [activeSize, setActiveSize] = useState<string>(thing.sizes[0]);
  const [activeColor, setActiveColor] = useState<string>(
    thing?.images[0].color as string
  );
  const navigate = useNavigate();

  const uniqueColorsImages = [
    ...new Map(thing?.images.map((item) => [item["color"], item])).values(),
  ];

  return (
    <li className={cn("clothes__list-item", className)} {...props}>
      <img
        className="clothes__list-item__img"
        src={GET_IMAGE_URL(thing.images[0].url)}
        alt={thing.name}
        onClick={() => navigate("../../" + thing.category + "/" + thing.id)}
      />
      <p className="clothes__list-item__title">{thing.name}</p>
      {thing.discount && (
        <p className="clothes__list-item__badge">{thing.discount}</p>
      )}
      <div className="clothes__list-item__descr">
        <span className="clothes__list-item__price body-text_bold">
          $ {thing.price.toFixed(2)}
        </span>
        {thing.discount && (
          <span className="clothes__list-item__price_old body-text_bold">
            $ {solvedDiscount(thing.price, thing.discount)}
          </span>
        )}
        <Rating rate={thing.rating} />
      </div>
      <div className={cn("clothes__list-item__actions-block")}>
        <div>
          {thing?.images && (
            <>
              <span>COLOR: {activeColor || "Not selected"}</span>
              <ul className="product-page__descr__color-list">
                {uniqueColorsImages.map((img) => (
                  <li
                    key={img.id}
                    className={cn("product-page__descr__color-list-item", {
                      "product-page__descr__color-list-item_active":
                        img.color === activeColor,
                    })}
                    onClick={() => setActiveColor(img.color)}
                  >
                    <img
                      className="product-page__descr__color-list-item__img"
                      src={GET_IMAGE_URL(img.url)}
                    />
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
        <SizesMarkList
          sizes={thing.sizes}
          active={activeSize}
          setActive={setActiveSize}
        />
        <div className={cn("clothes__list-item__actions-btn__block")}>
          <Button
            className={cn("clothes__list-item__actions-btn")}
            appearence="dark"
            disabled={activeSize === "" ? true : false}
            size="lg"
            onClick={() => {
              activeSize !== ""
                ? dispatch(
                    addToShoppingCard({
                      name: thing.name,
                      id: thing.id,
                      price: thing.price,
                      count: 1,
                      size: activeSize,
                      color: activeColor,
                      img: thing.images.find(
                        (item) => item.color === activeColor
                      )?.url as string,
                    })
                  )
                : null;
            }}
          >
            ADD TO CART
          </Button>
          <HeartIcon className={cn("clothes__list-item__actions-icon")} />
          <ScaleIcon className={cn("clothes__list-item__actions-icon")} />
        </div>
      </div>
    </li>
  );
};
