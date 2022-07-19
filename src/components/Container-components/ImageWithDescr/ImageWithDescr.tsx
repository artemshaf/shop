import cn from "classnames";
import { ImageDescr } from "../ImageDescr/ImageDescr";
import { IImageWithDescrProps } from "./ImageWithDescr.props";
import "./ImageWithDescr.scss";

export const ImageWithDescr = ({
  className,
  isBanner = false,
  description,
  img,
}: IImageWithDescrProps) => {
  return (
    <div className={cn("image-descr-block", className)}>
      <img
        className="image-descr__img"
        src={img}
        alt={description.description}
      />
      <ImageDescr text={description} />
      {isBanner && (
        <>
          <div className="image-descr__arrow-block image-descr__arrow"></div>
          <div className="image-descr__arrow-block image-descr__arrow_rotate"></div>
        </>
      )}
    </div>
  );
};
