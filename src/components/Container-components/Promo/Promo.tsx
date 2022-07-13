import { BannerSlider } from "../BannerSlider/BannerSlider";
import { ServiceInfo } from "../ServiceInfo/ServiceInfo";
import { IPromoProps } from "./Promo.props";
import "./Promo.scss";

export const Promo = (props: IPromoProps) => {
  return (
    <>
      <BannerSlider />
      <ServiceInfo />
    </>
  );
};
