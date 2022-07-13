import cn from "classnames";
import { IClothesItemProps } from "./ClothesItem.props";
import { Rating } from "../../Rating/Rating";
import "./ClothesItem.scss";
import { Button } from "../../../UI-components/Button/Button";
import { SizesMarkList } from "../../SizesMarkList/SizesMarkList";
import { ReactComponent as HeartIcon } from "../../../../imgs/main/heart.svg";
import { ReactComponent as ScaleIcon } from "../../../../imgs/main/scale.svg";

export const ClothesItem = ({
  thing,
  className,
  ...props
}: IClothesItemProps) => {
  return (
    <li className={cn("clothes__list-item")} {...props}>
      <img
        className="clothes__list-item__img"
        src={thing.img}
        alt={thing.title}
      />
      <p className="clothes__list-item__title">{thing.title}</p>
      {thing.discount && (
        <p className="clothes__list-item__badge">{thing.discount}</p>
      )}
      <div className="clothes__list-item__descr">
        <span className="clothes__list-item__price body-text_bold">
          {thing.currency} {thing.currentPrice.toFixed(2)}
        </span>
        {thing.oldPrice && (
          <span className="clothes__list-item__price_old body-text_bold">
            {thing.currency} {thing.oldPrice.toFixed(2)}
          </span>
        )}
        <Rating rate={thing.rating} />
      </div>
      <div className={cn("clothes__list-item__actions-block")}>
        <SizesMarkList />
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
