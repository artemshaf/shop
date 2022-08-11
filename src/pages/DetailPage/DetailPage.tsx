import { Clothes } from "../../components/Container-components/Clothes/Clothes";
import { useParams } from "react-router-dom";
import { useAppSelector } from "../../store/store";
import {} from "../../store/clothes/clothes-slice";
import { TopDetailInfo } from "../../components/Container-components/TopDetailInfo/TopDetailInfo";
import "./DetailPage.scss";
import { useGetProductByCategoryQuery } from "../../store/api";
import Loader from "../../components/UI-components/Loader/Loader";

export const DetailPage = () => {
  const gender = useParams().sex as string;
  const { data, isError, isLoading, isSuccess } =
    useGetProductByCategoryQuery(gender);

  return (
    <>
      <TopDetailInfo sex={gender} className="detail-page__top-info" />
      {isLoading && <Loader />}
      {isError && <h1>Error...</h1>}
      {isSuccess && <Clothes filters={true} clothes={data} gender={gender} />}
    </>
  );
};
