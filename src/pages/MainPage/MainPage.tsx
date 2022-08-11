import { useEffect } from "react";
import { Blog } from "../../components/Container-components/Blog/Blog";
import { Clothes } from "../../components/Container-components/Clothes/Clothes";
import { PromoCardList } from "../../components/Container-components/Promo-card/Promo-cardList";
import { PromoOffer } from "../../components/Container-components/Promo-offer/Promo-offer";
import { Promo } from "../../components/Container-components/Promo/Promo";
import Loader from "../../components/UI-components/Loader/Loader";
import { useGetProductsQuery } from "../../store/api";

export const MainPage = () => {
  const { data, isError, isLoading, isSuccess } = useGetProductsQuery();

  useEffect(() => {
    console.log(data);
  }, [data]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <Promo />
      {isError && <h1>Error...</h1>}
      {isSuccess && (
        <>
          <Clothes particulars={true} gender="men" clothes={data["men"]} />
          <Clothes particulars={true} gender="women" clothes={data["women"]} />
        </>
      )}
      <PromoCardList />
      <PromoOffer />
      <Blog />
    </>
  );
};
