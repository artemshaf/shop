import cn from "classnames";
import { Button } from "../../UI-components/Button/Button";
import { Input } from "../../UI-components/Input/Input";
import { ImageDescr } from "../ImageDescr/ImageDescr";
import { IPromoOfferProps } from "./Promo-offer.props";
import WomenImg from "../../../imgs/promo-offer/women.png";
import MenImg from "../../../imgs/promo-offer/men.png";
import "./Promo-offer.scss";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";
import classNames from "classnames";
import { emailSchema } from "./schema";
import { usePostEmailQuery } from "../../../store/api";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../store/store";
import {
  postEmailAsync,
  selectEmailStatus,
  setInitial,
} from "../../../store/email/email-slice";
import { createAsyncThunk } from "@reduxjs/toolkit";

export type Fields = {
  email: string;
};

export const PromoOffer = ({ className, ...props }: IPromoOfferProps) => {
  const descr = {
    title: "Special Offer",
    description: "subscribe and",
    sale: "Get 10% Off",
  };
  const emailStatus = useAppSelector(selectEmailStatus);

  const dispatch = useAppDispatch();
  const resolver = joiResolver(emailSchema);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Fields>({ resolver, mode: "onChange" });

  const onSubmit: SubmitHandler<Fields> = (data) => {
    dispatch(postEmailAsync(data.email));
    reset();
  };

  useEffect(() => {
    if (emailStatus === "Success") {
      dispatch(setInitial);
    }
  }, [emailStatus]);

  return (
    <section className="promo-offer__container" {...props}>
      <div className="container">
        <img
          src={WomenImg}
          alt="Женщина"
          className="promo-offer__img promo-offer__img_left"
        />
        <img
          src={MenImg}
          alt="Мужчина"
          className="promo-offer__img promo-offer__img_right"
        />
        <form
          className={cn(className, "promo-offer__form")}
          onSubmit={handleSubmit(onSubmit)}
        >
          <ImageDescr text={descr} className="promo-offer__img-descr" />
          <div className="promo-offer__actions">
            <Input
              placeholder="Enter your email"
              className={classNames("promo-offer__actions__input", {
                input_error: errors.email,
              })}
              {...register("email")}
            />
            <Button
              appearence="dark"
              type="submit"
              className="promo-offer__actions__btn"
              disabled={errors.email ? true : false}
            >
              SUBSCRIBE
            </Button>
            {emailStatus === "Loading" && <h1>Loading</h1>}
            {emailStatus === "Success" && <h1>isSuccess</h1>}
            {emailStatus === "Error" && <h1>Error</h1>}
          </div>
        </form>
      </div>
    </section>
  );
};
