import cn from "classnames";
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  selectClothesByGenderAndFilters,
  selectClothesByParticulars,
} from "../../../store/clothes/clothes-slice";
import { selectParticularByGender } from "../../../store/clothes/filters/filters-slice";
import { useAppSelector } from "../../../store/store";
import { ClothesFilters } from "../../Business-components/Clothes-filters/Clothes-filters";
import { ClothesParticulars } from "../../Business-components/Clothes-particulars/Clothes-particulars";
import { FilterPanel } from "../../Business-components/FilterPanel/FilterPanel";
import { Button } from "../../UI-components/Button/Button";
import { H } from "../../UI-components/H/H";
import { ClothesList } from "../ClothesList/ClothesList";
import { IClothesItem, IClothesProps } from "./Clothes.props";
import "./Clothes.scss";

export const Clothes = ({
  particulars,
  filters = false,
  gender,
  clothes = [],
  className,
  ...props
}: IClothesProps) => {
  let currParticulars: any;
  let constructedClothes: IClothesItem[] = [];

  const [openFilter, setOpenFilter] = useState<boolean>(false);

  const handleSetOpenFilter = () => {
    setOpenFilter(!openFilter);
  };

  if (particulars) {
    currParticulars = useAppSelector((state) =>
      selectParticularByGender(state, gender)
    ) as string;
    constructedClothes = useAppSelector(() =>
      selectClothesByParticulars(clothes, currParticulars)
    );
  } else if (filters) {
    constructedClothes = useAppSelector(
      (state) =>
        selectClothesByGenderAndFilters(state, gender) as IClothesItem[]
    );
  }

  return (
    <section className="container clothes__container">
      {particulars && (
        <div className="clothes__top-panel__info" {...props}>
          <H size="ex-lg" className="clothes__top-panel__info-title">
            {gender}'S
          </H>
          <ClothesParticulars gender={gender} particular={currParticulars} />
        </div>
      )}
      {filters && (
        <>
          <ClothesFilters setOpenFilter={handleSetOpenFilter} />
          <FilterPanel
            gender={gender as string}
            className={cn({
              "filter-panel_visible": openFilter === true,
            })}
          />
        </>
      )}
      <ClothesList clothes={constructedClothes} />
      <Link to={`/${gender}`}>
        <Button
          appearence="light"
          size="lg"
          className="clothes__top-panel__btn button_text"
        >
          SEE ALL
        </Button>
      </Link>
    </section>
  );
};
