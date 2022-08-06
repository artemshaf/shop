import cn from "classnames";
import { log } from "console";
import { ForwardedRef, forwardRef, useEffect, useRef, useState } from "react";
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
    const ratingArrayRef = useRef<(HTMLSpanElement | null)[]>([]);

    const constructRating = (constructRate: number) => {
      ratingArrayRef.current.splice(0);
      const updatedArray = ratingArray.map((_: JSX.Element, i: number) => {
        return (
          <span
            onMouseOver={() => changeDisplayRate(i + 1)}
            onMouseOut={() => changeDisplayRate(rate)}
            onClick={() => onClick(i + 1)}
            tabIndex={computeFocus(constructRate, i)}
            onKeyDown={handleKey}
            ref={(r: HTMLSpanElement) => ratingArrayRef.current?.push(r)}
          >
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

    const changeDisplayRate = (i: number) => {
      if (!isEditable || i > 5 || i < 1) {
        return;
      }
      constructRating(i);
    };

    const onClick = (i: number) => {
      if (!isEditable || !setRate) {
        return;
      }
      setRate(i);
    };

    const computeFocus = (r: number, i: number): number => {
      if (!isEditable) {
        return -1;
      }
      if (!rate && i == 0) {
        return tabIndex ?? 0;
      }
      if (r == i + 1) {
        return tabIndex ?? 0;
      }
      return -1;
    };

    const handleKey = (e: React.KeyboardEvent) => {
      if (!isEditable || !setRate) {
        return;
      }
      if (e.code == "ArrowRight" || e.code == "ArrowUp") {
        if (!rate) {
          setRate(1);
        } else {
          e.preventDefault();
          setRate(rate < 5 ? rate + 1 : 5);
        }
        ratingArrayRef.current[5 + rate]?.focus();
      }
      if (e.code == "ArrowLeft" || e.code == "ArrowDown") {
        e.preventDefault();
        setRate(rate > 1 ? rate - 1 : 1);
        ratingArrayRef.current[5 + rate - 2]?.focus();
      }
    };

    useEffect(() => {
      constructRating(rate);
    }, [rate, tabIndex]);

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
