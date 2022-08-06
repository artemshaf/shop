/* eslint-disable @typescript-eslint/no-unused-vars */
import cn from "classnames";
import { useRef, useState } from "react";
import { useParams } from "react-router-dom";
import SwiperCore, {
  Lazy,
  Navigation,
  Thumbs,
  Controller,
  FreeMode,
} from "swiper";
import { Swiper, SwiperProps, SwiperSlide, useSwiper } from "swiper/react";
import { ReactComponent as HeartIcon } from "../../imgs/main/heart.svg";
import { ReactComponent as ScaleIcon } from "../../imgs/main/scale.svg";
import { PaymentsList } from "../../components/Container-components/PaymentsList/PaymentsList";
import { Rating } from "../../components/Container-components/Rating/Rating";
import { ServiceInfo } from "../../components/Container-components/ServiceInfo/ServiceInfo";
import { SizesMarkList } from "../../components/Container-components/SizesMarkList/SizesMarkList";
import { TopDetailInfo } from "../../components/Container-components/TopDetailInfo/TopDetailInfo";
import { Button } from "../../components/UI-components/Button/Button";
import { GET_IMAGE_URL } from "../../helpers/generateUrl";
import { selectClothByGenderAndId } from "../../store/clothes/clothes-slice";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { IProductPage } from "./ProductPage.props";
import { addToShoppingCard } from "../../store/shopping-card/shopping-card-slice";
import ArrowDown from "../../imgs/icons/arrow-down.svg";
import "./ProductPage.scss";
import ReviewModal from "../../components/Business-components/ReviewModal/ReviewModal";

export const ProductPage = ({ className, ...props }: IProductPage) => {
  const { sex, id } = useParams();
  const cloth = useAppSelector((state) =>
    selectClothByGenderAndId(
      state,
      sex === "men" ? "men" : "women",
      id as string
    )
  );
  const [openReviewModal, setOpenReviewModal] = useState<boolean>(false);
  const [activeSize, setActiveSize] = useState<string>("");

  const navigationPrevRef = useRef<HTMLButtonElement>(null);
  const navigationNextRef = useRef<HTMLButtonElement>(null);

  const dispatch = useAppDispatch();

  const [activeThumb, setActiveThumb] = useState<SwiperCore>();

  const leftSwiperParams: SwiperProps = {
    className: "product-page__imgs__list",
    direction: "vertical",
    modules: [Thumbs, Navigation, Lazy],
    lazy: true,
    freeMode: true,
    navigation: {
      nextEl: navigationNextRef.current ? navigationNextRef.current : undefined,
      prevEl: navigationPrevRef.current ? navigationPrevRef.current : undefined,
    },
    breakpoints: {
      767: {
        direction: "vertical",
      },
      0: {
        direction: "horizontal",
      },
    },
    slidesPerView: 4.4,
    loopedSlides: 1,
    spaceBetween: 15,
    onBeforeInit(swiper) {
      swiper.navigation.prevEl = navigationNextRef.current!;
      swiper.navigation.nextEl = navigationNextRef.current!;
      swiper.navigation.init();
      swiper.navigation.update();
    },

    onSwiper: setActiveThumb,
  };

  const rightSwiperParams: SwiperProps = {
    className: "product-page__imgs__main-img__slider",
    modules: [FreeMode, Thumbs, Navigation, Lazy],
    lazy: true,
    navigation: {
      nextEl: navigationNextRef.current,
      prevEl: navigationPrevRef.current,
    },
    slidesPerView: 1,
    spaceBetween: 0,
    onBeforeInit(swiper) {
      swiper.navigation.prevEl = navigationNextRef.current!;
      swiper.navigation.nextEl = navigationNextRef.current!;
      swiper.navigation.init();
      swiper.navigation.update();
    },
    thumbs: {
      swiper: activeThumb,
    },
  };

  const uniqueColors = [...new Set(cloth?.images.map((image) => image.color))];
  const uniqueColorsImages = [
    ...new Map(cloth?.images.map((item) => [item["color"], item])).values(),
  ];

  return (
    <section {...props}>
      <TopDetailInfo
        sex={cloth?.category as string}
        breadcrumbsLast={cloth?.name}
      />
      <section className="product-page__container container">
        <section className="product-page__imgs__container">
          <Swiper {...leftSwiperParams}>
            <div className="navigations">
              <button className="navigations_next" ref={navigationNextRef}>
                <img src={ArrowDown} alt="" />
              </button>
              <button className="navigations_prev" ref={navigationPrevRef}>
                <img src={ArrowDown} alt="" />
              </button>
            </div>
            {cloth?.images.map((img) => (
              <SwiperSlide key={img.id}>
                <img
                  className="product-page__imgs__list-item__img"
                  src={GET_IMAGE_URL(img.url)}
                />
              </SwiperSlide>
            ))}
          </Swiper>
          <Swiper {...rightSwiperParams}>
            <div className="navigations__img">
              <button
                className="navigations__img_next"
                ref={navigationNextRef}
                onClick={() => console.log("+")}
              >
                +++
              </button>
              <button className="navigations__img_prev" ref={navigationPrevRef}>
                ----
              </button>
            </div>
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
        </section>
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
                      sizes={cloth.sizes}
                      active={activeSize}
                      setActive={setActiveSize}
                      className="product-page__descr__size-list-item"
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
                disabled={activeSize === "" ? true : false}
                size="lg"
                onClick={() => {
                  activeSize !== ""
                    ? dispatch(
                        addToShoppingCard({
                          name: cloth?.name as string,
                          id: cloth?.id as string,
                          price: cloth?.price as number,
                          count: 1,
                          size: activeSize,
                          color: cloth?.images[0].color as string,
                          img: cloth?.images[0].url as string,
                        })
                      )
                    : null;
                }}
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
                    <div
                      className="product-page__descr__reviews-info__write"
                      onClick={() => setOpenReviewModal(true)}
                    >
                      Write A Review
                    </div>
                    <ReviewModal
                      setOpen={setOpenReviewModal}
                      open={openReviewModal}
                    />
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
    </section>
  );
};
