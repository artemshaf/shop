import { log } from "console";
import { useSelector } from "react-redux";
import { Blog } from "../../components/Container-components/Blog/Blog";
import { Clothes } from "../../components/Container-components/Clothes/Clothes";
import { PromoCardList } from "../../components/Container-components/Promo-card/Promo-cardList";
import { PromoOffer } from "../../components/Container-components/Promo-offer/Promo-offer";
import { Promo } from "../../components/Container-components/Promo/Promo";
import { PRODUCTS } from "../../data/products";
import {
  getDataByGender,
  IClothes,
  selectClothesByGender,
} from "../../store/clothes/clothes-slice";
import { RootState, useAppSelector } from "../../store/store";

export const MainPage = () => {
  const clothesMen = useAppSelector((state) =>
    selectClothesByGender(state, "men")
  );
  const clothesWomen = useAppSelector((state) =>
    selectClothesByGender(state, "women")
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
