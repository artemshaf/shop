import { IBannerSlider } from "./BannerSlider.props";
import LgImage from "./imgs/lg.png";
import MdImage from "./imgs/md.png";
import Sm1Image from "./imgs/sm1.png";
import Sm2Image from "./imgs/sm2.png";
import "./BannerSlider.scss";
import cn from "classnames";
import { ImageWithDescr } from "../ImageWithDescr/ImageWithDescr";
import "swiper/css";
import "swiper/css/navigation";
import SwiperCore, { Lazy, Navigation, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

export const BannerSlider = ({ className, ...props }: IBannerSlider) => {
  const imageDescr = [
    {
      title: "Banner",
      description: "your Title text",
    },
    {
      description: "Women",
    },
    {
      description: "Men",
    },
    {
      description: "Accessories",
    },
  ];

  SwiperCore.use([Autoplay]);
  return (
    <section
      className={cn("banner__container", "container", className)}
      {...props}
    >
      <ul className={cn("banner-slider")}>
        <li className="banner-slider_lg">
          <Swiper
            modules={[Navigation, Lazy]}
            navigation={{
              prevEl: ".image-descr__arrow",
              nextEl: ".image-descr__arrow_rotate",
            }}
            autoplay={{
              delay: 4000,
            }}
            className="banner-slider_wrapper"
          >
            <SwiperSlide className="banner-slider_lg">
              <ImageWithDescr
                description={imageDescr[0]}
                img={LgImage}
                isBanner={true}
                className="banner-slider_lg"
              />
            </SwiperSlide>
            <SwiperSlide>
              <ImageWithDescr
                description={imageDescr[1]}
                img={Sm1Image}
                isBanner={true}
              />
            </SwiperSlide>
            <SwiperSlide>
              <ImageWithDescr
                description={imageDescr[1]}
                img={MdImage}
                isBanner={true}
              />
            </SwiperSlide>
            <SwiperSlide>
              <ImageWithDescr
                description={imageDescr[1]}
                img={Sm2Image}
                isBanner={true}
              />
            </SwiperSlide>
          </Swiper>
        </li>
        <li className="banner-slider_sm1">
          <ImageWithDescr description={imageDescr[1]} img={Sm1Image} />
        </li>
        <li className="banner-slider_sm2">
          <ImageWithDescr description={imageDescr[2]} img={Sm2Image} />
        </li>
        <li className="banner-slider_md">
          <ImageWithDescr description={imageDescr[3]} img={MdImage} />
        </li>
        <li className="banner-slider_md">
          <ImageWithDescr description={imageDescr[3]} img={MdImage} />
        </li>
      </ul>
    </section>
  );
};
