import Img1 from "../../../imgs/promo-card/rect1.jpg";
import Img2 from "../../../imgs/promo-card/rect2.jpg";
import { PromoCard } from "./Promo-card";
import "./Promo-card.scss";
import { v4 as uuidv4 } from "uuid";

export const PromoCardList = () => {
  const cards = [
    {
      img: Img1,
      title: "New Season",
      description: "lookbook collection",
    },
    {
      img: Img2,
      title: "Sale",
      description: "Get UP to",
      sale: "50% off",
    },
  ];

  return (
    <div className="container promo-card__container">
      <ul className="promo-card__list">
        {cards.map((card) => (
          <PromoCard key={uuidv4()} card={card} />
        ))}
      </ul>
    </div>
  );
};
