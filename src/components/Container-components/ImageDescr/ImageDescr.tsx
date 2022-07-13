import cn from "classnames";
import { H } from "../../UI-components/H/H";
import { IImageDescrProps } from "./ImageDescr.props";
import "./ImageDescr.scss";

export const ImageDescr = ({ text, className, ...props }: IImageDescrProps) => {
  return (
    <div
      className={cn(
        {
          "image-descr__block_lg": text.title,
        },
        "image-descr__block",
        className
      )}
      {...props}
    >
      {text.title && (
        <H size="sm" className="image-descr__title">
          {text.title}
        </H>
      )}
      {text.description && (
        <H size="lg" className="image-descr__descr">
          {text.description}{" "}
          <span className="image-descr__sale">{text.sale}</span>
        </H>
      )}
    </div>
  );
};
