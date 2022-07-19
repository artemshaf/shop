import cn from "classnames";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { ReactComponent as Star } from "../../../imgs/main/star.svg";
import { IRatingProps } from "./Rating.props";
import "./Rating.scss";

export const Rating = ({ count, rate, className, ...props }: IRatingProps) => {
  const [rating, setRating] = useState<JSX.Element[]>(new Array(5).fill(<></>));

  const constructRating = (rate: number) => {
    const updatedArray = rating.map((_: JSX.Element, i: number) => {
      return (
        <Star
          className={cn("rating-list__item", {
            "rating-list__item_grey": i >= rate,
          })}
        />
      );
    });
    setRating(updatedArray);
  };

  useEffect(() => {
    constructRating(rate);
  }, [rate]);

  return Number(count) > 0 ? (
    <>
      <ul className={cn("rating-list", className)} {...props}>
        {rating.map((r) => (
          <li key={uuidv4()}>{r}</li>
        ))}
      </ul>
      {count && (
        <span className={cn("rating-list__count")}>{count} reviews</span>
      )}
    </>
  ) : null;
};
