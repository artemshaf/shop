import { ClothesFilters } from "../../Business-components/Clothes-filters/Clothes-filters";
import { Button } from "../../UI-components/Button/Button";
import { H } from "../../UI-components/H/H";
import { ClothesList } from "../ClothesList/ClothesList";
import { IClothesProps } from "./Clothes.props";
import "./Clothes.scss";

export const Clothes = ({ clothes, className, ...props }: IClothesProps) => {
  return (
    <section className="container clothes__container">
      <div className="clothes__top-panel__info" {...props}>
        <H size="ex-lg" className="clothes__top-panel__info-title">
          {clothes.sex}'S
        </H>
        <ClothesFilters />
      </div>
      <ClothesList clothes={clothes.clothes} />
      <Button
        appearence="light"
        size="lg"
        className="clothes__top-panel__btn button_text"
      >
        SEE ALL
      </Button>
    </section>
  );
};
