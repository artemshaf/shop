import cn from "classnames";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { filteredClothes } from "../../../helpers/filteredClothes";
import {
  selectClothesFilters,
  selectClothesFiltersOpen,
  toggleOpen,
} from "../../../store/clothes/filters/clothes-filters-slice";
import { useAppSelector } from "../../../store/store";
import { ClothesFilters } from "../../Business-components/Clothes-filters/Clothes-filters";
import { ClothesParticulars } from "../../Business-components/Clothes-particulars/Clothes-particulars";
import { FilterPanel } from "../../Business-components/FilterPanel/FilterPanel";
import { Button } from "../../UI-components/Button/Button";
import { H } from "../../UI-components/H/H";
import { ClothesList } from "../ClothesList/ClothesList";
import { IClothesItem, IClothesProps, IParticulars } from "./Clothes.props";
import "./Clothes.scss";

export const Clothes = ({
  particulars,
  filters = false,
  gender,
  clothes = [],
  className,
  ...props
}: IClothesProps) => {
  const isOpenFilter = useAppSelector((state) =>
    selectClothesFiltersOpen(state)
  );
  const currentFilters = useAppSelector((state) => selectClothesFilters(state));
  const [currentClothes, setCurrentClothes] = useState<IClothesItem[]>(clothes);
  const [currentParticular, setCurrentParticular] =
    useState<string>("isNewArrivals");

  useEffect(() => {
    if (filters && particulars) {
      setCurrentClothes(
        filteredClothes(currentFilters, clothes).filter(
          (item) =>
            item.particulars[currentParticular as keyof IParticulars] === true
        )
      );
      return;
    }
    if (filters) {
      setCurrentClothes(filteredClothes(currentFilters, clothes));
      return;
    }
    if (particulars) {
      setCurrentClothes(
        clothes.filter(
          (item) =>
            item.particulars[currentParticular as keyof IParticulars] === true
        )
      );
      return;
    }
  }, [currentFilters, currentParticular]);

  return (
    <section className="container clothes__container">
      {particulars && (
        <div className="clothes__top-panel__info" {...props}>
          <H size="ex-lg" className="clothes__top-panel__info-title">
            {gender}'S
          </H>
          <ClothesParticulars
            gender={gender}
            particular={currentParticular}
            setParticular={setCurrentParticular}
          />
        </div>
      )}
      {filters && (
        <>
          <ClothesFilters setOpenFilter={toggleOpen} />
          <FilterPanel
            gender={gender as string}
            className={cn({
              "filter-panel_visible": isOpenFilter === true,
            })}
          />
        </>
      )}
      <ClothesList clothes={currentClothes} />
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
