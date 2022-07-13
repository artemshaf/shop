import { ImageWithDescr } from "../ImageWithDescr/ImageWithDescr";
import { IPromoCardProps } from "./Promo-card.props";

export const PromoCard = ({ card }: IPromoCardProps) => {
  let description;
  if (card.sale) {
    description = {
      title: card.title,
      description: card.description,
      sale: card.sale,
    };
  } else {
    description = {
      title: card.title,
      description: card.description,
    };
  }

  return (
    <li className="promo-card__list-item">
      <ImageWithDescr img={card.img} description={description} />
    </li>
  );
};
