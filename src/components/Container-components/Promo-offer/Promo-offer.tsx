import cn from "classnames";
import { Button } from "../../UI-components/Button/Button";
import { Input } from "../../UI-components/Input/Input";
import { ImageDescr } from "../ImageDescr/ImageDescr";
import { IPromoOfferProps } from "./Promo-offer.props";
import WomenImg from "../../../imgs/promo-offer/women.png";
import MenImg from "../../../imgs/promo-offer/men.png";
import "./Promo-offer.scss";

export const PromoOffer = ({ className, ...props }: IPromoOfferProps) => {
  const descr = {
    title: "Special Offer",
    description: "subscribe and",
    sale: "Get 10% Off",
  };

  return (
    <section className="promo-offer__container">
      <div className="container">
        <img
          src={WomenImg}
          alt="Женщина"
          className="promo-offer__img promo-offer__img_left"
        />
        <img
          src={MenImg}
          alt="Мужчина"
          className="promo-offer__img promo-offer__img_right"
        />
        <form className={cn(className, "promo-offer__form")}>
          <ImageDescr text={descr} className="promo-offer__img-descr" />
          <div className="promo-offer__actions">
            <Input
              placeholder="Enter your email"
              className="promo-offer__actions__input"
            />
            <Button appearence="dark" className="promo-offer__actions__btn">
              SUBSCRIBE
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
};
