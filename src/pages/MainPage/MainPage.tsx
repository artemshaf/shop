import { useEffect } from "react";
import { Blog } from "../../components/Container-components/Blog/Blog";
import { Clothes } from "../../components/Container-components/Clothes/Clothes";
import { IParticulars } from "../../components/Container-components/Clothes/Clothes.props";
import { PromoCardList } from "../../components/Container-components/Promo-card/Promo-cardList";
import { PromoOffer } from "../../components/Container-components/Promo-offer/Promo-offer";
import { Promo } from "../../components/Container-components/Promo/Promo";
import {
  selectClothesByGender,
  selectClothesByParticulars,
} from "../../store/clothes/clothes-slice";
import { selectParticularByGender } from "../../store/clothes/filters/filters-slice";
import { useAppDispatch, useAppSelector } from "../../store/store";
import GifImage from "../../imgs/gifs/developer.gif";

export const MainPage = () => {
  const clothesMen = useAppSelector((state) =>
    selectClothesByParticulars(
      selectClothesByGender(state, "men"),
      selectParticularByGender(state, "men") as keyof IParticulars
    )
  );
  const clothesWomen = useAppSelector((state) =>
    selectClothesByParticulars(
      selectClothesByGender(state, "women"),
      selectParticularByGender(state, "women") as keyof IParticulars
    )
  );

  return (
    <>
      <Promo />
      <Clothes particulars={true} gender="men" clothes={clothesMen} />
      <Clothes particulars={true} gender="women" clothes={clothesWomen} />
      <PromoCardList />
      <PromoOffer />
      <Blog />
    </>
  );
};
