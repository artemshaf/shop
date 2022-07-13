import { Blog } from "../../components/Container-components/Blog/Blog";
import { Clothes } from "../../components/Container-components/Clothes/Clothes";
import { PromoCardList } from "../../components/Container-components/Promo-card/Promo-cardList";
import { PromoOffer } from "../../components/Container-components/Promo-offer/Promo-offer";
import { Promo } from "../../components/Container-components/Promo/Promo";
import { Footer } from "../../components/Pages-components/Footer/Footer";
import { Header } from "../../components/Pages-components/Header/Header";
import WomenPicture from "../../imgs/women/rect1.png";
import MenPicture from "../../imgs/men/rect1.png";

export const MainPage = () => {
  const items = {
    sex: "WOMEN",
    clothes: [
      {
        img: WomenPicture,
        title: "Women's tracksuit Q109",
        currentPrice: 30,
        currency: "$",
        rating: 4,
      },
      {
        img: WomenPicture,
        title: "Women's tracksuit Q109",
        currentPrice: 30,
        currency: "$",
        discount: 50,
        oldPrice: 60.1,
        rating: 4,
      },
      {
        img: WomenPicture,
        title: "Women's tracksuit Q109",
        currentPrice: 30,
        currency: "$",
        rating: 4,
      },
      {
        img: WomenPicture,
        title: "Women's tracksuit Q109",
        currentPrice: 30,
        currency: "$",
        oldPrice: 60.1,
        rating: 4,
      },
      {
        img: WomenPicture,
        title: "Women's tracksuit Q109",
        currentPrice: 30,
        currency: "$",
        rating: 4,
      },
      {
        img: WomenPicture,
        title: "Women's tracksuit Q109",
        currentPrice: 30,
        currency: "$",
        oldPrice: 60.1,
        rating: 4,
      },
    ],
  };

  const items2 = {
    sex: "MEN",
    clothes: [
      {
        img: MenPicture,
        title: "Men's tracksuit Q109",
        currentPrice: 30,
        currency: "$",
        oldPrice: 60.1,
        rating: 4,
      },
      {
        img: MenPicture,
        title: "Men tracksuit Q109",
        currentPrice: 30,
        currency: "$",
        oldPrice: 60.1,
        rating: 3,
      },
      {
        img: MenPicture,
        title: "Men tracksuit Q109",
        currentPrice: 30,
        currency: "$",
        oldPrice: 60.1,
        rating: 4,
      },
      {
        img: MenPicture,
        title: "Men tracksuit Q109",
        currentPrice: 30,
        currency: "$",
        oldPrice: 70.0,
        rating: 4,
      },
      {
        img: MenPicture,
        title: "Men tracksuit Q109",
        currentPrice: 30,
        currency: "$",
        oldPrice: 20,
        rating: 4,
      },
      {
        img: MenPicture,
        title: "Men tracksuit Q109",
        currentPrice: 30,
        currency: "$",
        oldPrice: 27,
        rating: 4,
      },
    ],
  };
  return (
    <div>
      <Header />
      <Promo />
      <Clothes clothes={items} />
      <Clothes clothes={items2} />
      <PromoCardList />
      <PromoOffer />
      <Blog />
      <Footer />
    </div>
  );
};
