import { Clothes } from "../../components/Container-components/Clothes/Clothes";
import { useParams } from "react-router-dom";
import { useAppSelector } from "../../store/store";
import { selectClothesByGender } from "../../store/clothes/clothes-slice";
import { TopDetailInfo } from "../../components/Container-components/TopDetailInfo/TopDetailInfo";
import "./DetailPage.scss";

export const DetailPage = () => {
  const gender = useParams().sex as string;
  const clothes = useAppSelector((state) =>
    selectClothesByGender(state, gender)
  );

  return (
    <>
      <TopDetailInfo sex={gender} className="detail-page__top-info" />
      <Clothes filters={true} clothes={clothes} gender={gender} />
    </>
  );
};
