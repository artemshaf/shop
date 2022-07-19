/* eslint-disable @typescript-eslint/no-unused-vars */
import cn from "classnames";
import { useState } from "react";
import { useParams } from "react-router-dom";
import SwiperCore, { Lazy, Navigation, Thumbs } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { ReactComponent as HeartIcon } from "../../imgs/main/heart.svg";
import { ReactComponent as ScaleIcon } from "../../imgs/main/scale.svg";
import { PaymentsList } from "../../components/Container-components/PaymentsList/PaymentsList";
import { Rating } from "../../components/Container-components/Rating/Rating";
import { ServiceInfo } from "../../components/Container-components/ServiceInfo/ServiceInfo";
import { SizesMarkList } from "../../components/Container-components/SizesMarkList/SizesMarkList";
import { TopDetailInfo } from "../../components/Container-components/TopDetailInfo/TopDetailInfo";
import { Button } from "../../components/UI-components/Button/Button";
import { H } from "../../components/UI-components/H/H";
import { GET_IMAGE_URL } from "../../helpers/generateUrl";
import { selectClothByGenderAndId } from "../../store/clothes/clothes-slice";
import { useAppSelector } from "../../store/store";
import { IProductPage } from "./ProductPage.props";
import "./ProductPage.scss";
import { ClothesItem } from "../../components/Container-components/ClothesList/ClothesItem/ClothesItem";

export const ProductPage = ({ className, ...props }: IProductPage) => {
  const { sex, id } = useParams();
  const cloth = useAppSelector((state) =>
    selectClothByGenderAndId(state, sex, id)
  );

  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperCore>();

  const uniqueColors = [...new Set(cloth?.images.map((image) => image.color))];
  const uniqueColorsImages = [
    ...new Map(cloth?.images.map((item) => [item["color"], item])).values(),
  ];

  return (
    <>
      <TopDetailInfo
        sex={cloth?.category as string}
        breadcrumbsLast={cloth?.name}
      />
      <section className="product-page__container container">
        <div className="product-page__imgs__container">
          <div>
            <Swiper
              className="product-page__imgs__list"
              onSwiper={setThumbsSwiper}
              direction={"vertical"}
              modules={[Navigation, Thumbs]}
              watchSlidesProgress={true}
              slidesPerView={4}
              navigation={{
                nextEl: ".image-descr__arrow",
                prevEl: ".image-descr__arrow_rotate",
              }}
              onInit={(swiper) => {
                swiper.navigation.init();
                swiper.navigation.update();
              }}
            >
              {cloth?.images.map((img) => (
                <SwiperSlide key={img.id}>
                  <img
                    className="product-page__imgs__list-item__img"
                    src={GET_IMAGE_URL(img.url)}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
            {/* <div className="image-descr__arrow-block">
              <div className="image-descr__arrow"></div>
              <div className="image-descr__arrow_rotate"></div>
            </div> */}
          </div>
          <Swiper
            className="product-page__imgs__main-img__slider"
            slidesPerView={1}
            direction={"horizontal"}
            thumbs={{ swiper: thumbsSwiper }}
            modules={[Navigation, Thumbs]}
            navigation={{
              nextEl: ".image-descr__arrow",
              prevEl: ".image-descr__arrow_rotate",
            }}
            onInit={(swiper) => {
              swiper.navigation.init();
              swiper.navigation.update();
            }}
          >
            {cloth?.images.map((img) => (
              <SwiperSlide
                key={img.id}
                className="product-page__imgs__main-img__slide"
              >
                <img
                  src={GET_IMAGE_URL(img.url)}
                  className="product-page__imgs__main-img"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <section className="product-page__descr__container">
          <div>
            <div>
              {cloth?.images && (
                <>
                  <span>COLOR: {cloth?.images[0].color}</span>
                  <ul className="product-page__descr__color-list">
                    {uniqueColorsImages.map((img) => (
                      <li
                        key={img.id}
                        className="product-page__descr__color-list-item product-page__descr__color-list-item_active"
                      >
                        <img
                          className="product-page__descr__color-list-item__img"
                          src={GET_IMAGE_URL(img.url)}
                        />
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </div>
            <div className="product-page__descr__size__container">
              {cloth?.sizes && (
                <>
                  <span>SIZE: {cloth?.sizes[0]}</span>
                  <ul className="product-page__descr__size-list">
                    <SizesMarkList
                      className="product-page__descr__size-list-item"
                      sizes={cloth.sizes}
                    />
                  </ul>
                </>
              )}
            </div>
            <div className={cn("product-page__descr__actions")}>
              <span className={cn("product-page__descr__actions-price")}>
                $ {cloth?.price}
              </span>
              <Button
                className={cn("product-page__descr__actions-btn")}
                appearence="dark"
                size="lg"
              >
                ADD TO CART
              </Button>
              <HeartIcon className={cn("product-page__descr__actions-icon")} />
              <ScaleIcon className={cn("product-page__descr__actions-icon")} />
            </div>
            <ServiceInfo descr={false} />
            <div className={cn("product-page__descr__payments__container")}>
              <div className={cn("product-page__descr__payments__title-block")}>
                <span className={cn("product-page__descr__payments__title")}>
                  guaranteed safe checkout
                </span>
                <hr
                  className={cn(
                    "product-page__descr__payments__title-block__hr"
                  )}
                />
              </div>
              <PaymentsList className={cn("product-page__descr__payments")} />
            </div>
            <div className="product-page__descr__additional-info__title">
              DESCRIPTION
            </div>
            <div className="product-page__descr__additional-info">
              <h3 className="product-page__descr__additional-info-title">
                ADDITIONAL INFO
              </h3>
              <div className="product-page__descr__additional-info__color">
                <span className="product-page__descr__additional-info__color-title">
                  Color:
                </span>
                <ul className="product-page__descr__additional-info__color-list">
                  {uniqueColors.map((item) => (
                    <li
                      key={item}
                      className="product-page__descr__additional-info__color-list-item"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="product-page__descr__additional-info__size">
                <span className="product-page__descr__additional-info__size-title">
                  Size:
                </span>
                {cloth?.sizes && (
                  <ul className="product-page__descr__additional-info__size-list">
                    {cloth?.sizes.map((item) => (
                      <li
                        key={item}
                        className="product-page__descr__additional-info__size-list-item"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              <p className="product-page__descr__additional-info__material">
                Material:
                <span className="product-page__descr__additional-info__material-text">
                  {cloth?.material}
                </span>
              </p>
            </div>
            {Number(cloth?.reviews.length) > 0 && (
              <div>
                <p className="product-page__descr__reviews-title">REVIEWS</p>
                <div>
                  <div className="product-page__descr__reviews-info">
                    <Rating
                      rate={Number(cloth?.rating)}
                      count={cloth?.reviews.length}
                      className="product-page__descr__reviews-rate"
                    />
                    <div className="product-page__descr__reviews-info__write">
                      Write A Review
                    </div>
                  </div>
                  <ul className="product-page__descr__reviews-list">
                    {cloth?.reviews.map((review) => (
                      <li
                        key={review.id}
                        className="product-page__descr__reviews-list-item"
                      >
                        <div className="product-page__descr__reviews-list-item__info">
                          <span className="product-page__descr__reviews-list-item__name">
                            {review.name}
                          </span>
                          <Rating rate={review.rating} />
                        </div>
                        <p className="product-page__descr__reviews-list-item__text">
                          {review.text}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
        </section>
      </section>
    </>
  );
};
