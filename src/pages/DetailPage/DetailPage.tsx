import { Clothes } from "../../components/Container-components/Clothes/Clothes";
import { useParams } from "react-router-dom";
import { useAppSelector } from "../../store/store";
import {
  selectClothesByGender,
  selectClothesByGenderAndFilters,
} from "../../store/clothes/clothes-slice";
import { TopDetailInfo } from "../../components/Container-components/TopDetailInfo/TopDetailInfo";
import "./DetailPage.scss";
import { selectFilterByGender } from "../../store/clothes/filters/filters-slice";

export const DetailPage = () => {
  const gender = useParams().sex as string;

  const currentFilters = useAppSelector((state) =>
    selectFilterByGender(state, gender)
  );

  const currenctClothes = useAppSelector(() =>
    selectClothesByGenderAndFilters(
      currentFilters,
      gender === "women"
        ? useAppSelector((state) => selectClothesByGender(state, "women"))
        : useAppSelector((state) => selectClothesByGender(state, "men"))
    )
  );

  return (
    <>
      <TopDetailInfo sex={gender} className="detail-page__top-info" />
      <Clothes filters={true} clothes={currenctClothes} gender={gender} />
    </>
  );
};
