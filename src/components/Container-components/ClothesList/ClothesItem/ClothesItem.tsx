import cn from "classnames";
import { IClothesItemProps } from "./ClothesItem.props";
import { Rating } from "../../Rating/Rating";
import "./ClothesItem.scss";
import { Button } from "../../../UI-components/Button/Button";
import { SizesMarkList } from "../../SizesMarkList/SizesMarkList";
import { ReactComponent as HeartIcon } from "../../../../imgs/main/heart.svg";
import { ReactComponent as ScaleIcon } from "../../../../imgs/main/scale.svg";
import { GET_IMAGE_URL } from "../../../../helpers/generateUrl";
import { Link, useNavigate } from "react-router-dom";

export const ClothesItem = ({
  thing,
  className,
  ...props
}: IClothesItemProps) => {
  const solvedDiscount = (price: string | number, discount: string) =>
    (+price / (1 - +discount / 100)).toFixed(2);

  const navigate = useNavigate();

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
        <SizesMarkList sizes={thing.sizes} />
        <div className={cn("clothes__list-item__actions-btn__block")}>
          <Button
            className={cn("clothes__list-item__actions-btn")}
            appearence="dark"
            size="lg"
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
