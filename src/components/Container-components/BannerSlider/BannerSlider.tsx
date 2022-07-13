import { IBannerSlider } from "./BannerSlider.props";
import LgImage from "./imgs/lg.png";
import MdImage from "./imgs/md.png";
import Sm1Image from "./imgs/sm1.png";
import Sm2Image from "./imgs/sm2.png";
import "./BannerSlider.scss";
import cn from "classnames";
import { ImageWithDescr } from "../ImageWithDescr/ImageWithDescr";

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

  return (
    <section
      className={cn("banner__container", "container", className)}
      {...props}
    >
      <ul className={cn("banner-slider")}>
        <li className="banner-slider_lg">
          <ImageWithDescr
            description={imageDescr[0]}
            img={LgImage}
            isBanner={true}
          />
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
      </ul>
    </section>
  );
};
