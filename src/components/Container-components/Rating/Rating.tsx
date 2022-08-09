import cn from "classnames";
import { ForwardedRef, forwardRef, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { ReactComponent as Star } from "../../../imgs/main/star.svg";
import { IRatingProps } from "./Rating.props";
import "./Rating.scss";

export const Rating = forwardRef(
  (
    {
      tabIndex,
      isEditable = false,
      count,
      rate,
      setRate,
      className,
      ...props
    }: IRatingProps,
    ref: ForwardedRef<HTMLUListElement>
  ) => {
    const [ratingArray, setRatingArray] = useState<JSX.Element[]>(
      new Array(5).fill(<></>)
    );

    const constructRating = (constructRate: number) => {
      const updatedArray = ratingArray.map((_: JSX.Element, i: number) => {
        return (
          <span onClick={() => onClick(i + 1)}>
            <Star
              className={cn("rating-list__item", {
                "rating-list__item_grey": i >= constructRate,
                "rating-list__item_editable": isEditable,
              })}
            />
          </span>
        );
      });
      setRatingArray(updatedArray);
    };

    const onClick = (i: number) => {
      if (!isEditable || !setRate) {
        return;
      }
      setRate(i);
    };

    useEffect(() => {
      constructRating(rate);
    }, [rate, setRate]);

    return (
      <>
        <ul className={cn("rating-list", className)} {...props} ref={ref}>
          {ratingArray.map((r) => (
            <li key={uuidv4()}>{r}</li>
          ))}
        </ul>
        {Number(count) > 0 && (
          <span className={cn("rating-list__count")}>{count} reviews</span>
        )}
      </>
    );
  }
);
