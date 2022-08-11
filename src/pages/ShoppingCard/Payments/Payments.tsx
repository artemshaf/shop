import { joiResolver } from "@hookform/resolvers/joi";
import classNames from "classnames";
import { useEffect, useMemo, useState } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import ReactInputMask from "react-input-mask";
import { Button } from "../../../components/UI-components/Button/Button";
import { Input } from "../../../components/UI-components/Input/Input";
import { Radiobutton } from "../../../components/UI-components/Radiobutton/Radiobutton";
import { IPaymentsProps } from "./Payments.props";
import {
  cashSchema,
  masterCardSchema,
  paypalSchema,
  visaSchema,
} from "./varianstPayments";
import "./Payments.scss";
import { useAppDispatch } from "../../../store/store";
import { addDeliveryPaymentsInfo } from "../../../store/shopping-card/shopping-card-slice";

export interface Fields {
  email: string;
  cardNumber: string;
  expiryDate: string;
  cvv: string;
}
const varianstPayments = ["PayPal", "Visa", "MasterCard", "Cash"];

const Payments = ({
  setActiveRoute,
  children,
  className,
  ...props
}: IPaymentsProps) => {
  const [activePayments, setActivePayments] = useState<string>(
    varianstPayments[0]
  );

  const resolver = joiResolver(
    activePayments === varianstPayments[0]
      ? paypalSchema
      : activePayments === varianstPayments[1]
      ? visaSchema
      : activePayments === varianstPayments[2]
      ? masterCardSchema
      : cashSchema
  );

  useEffect(() => {
    clearErrors();
    switch (activePayments) {
      case varianstPayments[0]:
        unregister("cardNumber");
        unregister("expiryDate");
        unregister("cvv");
        break;
      case varianstPayments[1]:
        unregister("email");
        break;
      case varianstPayments[2]:
        unregister("email");
        break;
      case varianstPayments[3]:
        unregister("email");
        unregister("cardNumber");
        unregister("expiryDate");
        unregister("cvv");
        break;
      default:
        break;
    }
  }, [activePayments]);

  const {
    register,
    handleSubmit,
    unregister,
    control,
    clearErrors,
    formState: { errors },
  } = useForm<Fields>({ resolver });

  const dispatch = useAppDispatch();

  const onSubmit: SubmitHandler<Fields> = (data) => {
    dispatch(addDeliveryPaymentsInfo({ activePayments, ...data }));
    setActiveRoute(3);
  };

  return (
    <form
      className={classNames(className, "payments-form")}
      onSubmit={handleSubmit(onSubmit)}
    >
      <h4>Method of payments</h4>
      <ul className="payments-form__list">
        {varianstPayments.map((item) => (
          <li key={item}>
            <Radiobutton
              key={item}
              onChange={() => setActivePayments(item)}
              name={"varianstDelivery"}
              value={item}
              id={item}
              checked={activePayments === item}
            >
              {item}
            </Radiobutton>
          </li>
        ))}
        {activePayments === varianstPayments[0] && (
          <>
            <Input
              className={classNames("delivery-form__field__input input", {
                input_error: errors.email,
              })}
              placeholder="E-mail"
              {...register("email")}
            >
              e-mail
            </Input>
          </>
        )}
        {activePayments === varianstPayments[1] && (
          <>
            <Controller
              control={control}
              name="cardNumber"
              rules={{ minLength: 19 }}
              render={({ field: { onChange, onBlur, ref } }) => (
                <ReactInputMask
                  mask="9999 9999 9999 9999"
                  className={classNames("delivery-form__field__input input", {
                    input_error: errors.cardNumber,
                  })}
                  placeholder="____ ____ ____ ____"
                  onBlur={onBlur}
                  onChange={onChange}
                  inputRef={ref}
                />
              )}
            />
            <Controller
              control={control}
              name="expiryDate"
              render={({ field: { onChange, onBlur, ref } }) => (
                <ReactInputMask
                  mask="99/99"
                  className={classNames("delivery-form__field__input input", {
                    input_error: errors.expiryDate,
                  })}
                  placeholder="MM/YY"
                  onBlur={onBlur}
                  onChange={onChange}
                  inputRef={ref}
                />
              )}
            />
            <Controller
              control={control}
              name="cvv"
              render={({ field: { onChange, onBlur, ref } }) => (
                <ReactInputMask
                  mask="999"
                  className={classNames("delivery-form__field__input input", {
                    input_error: errors.cvv,
                  })}
                  placeholder="CVV"
                  onBlur={onBlur}
                  onChange={onChange}
                  inputRef={ref}
                />
              )}
            />
          </>
        )}
        {activePayments === varianstPayments[2] && (
          <>
            <Controller
              control={control}
              name="cardNumber"
              rules={{ minLength: 19 }}
              render={({ field: { onChange, onBlur, ref } }) => (
                <ReactInputMask
                  mask="9999 9999 9999 9999"
                  className={classNames("delivery-form__field__input input", {
                    input_error: errors.cardNumber,
                  })}
                  placeholder="____ ____ ____ ____"
                  onBlur={onBlur}
                  onChange={onChange}
                  inputRef={ref}
                />
              )}
            />
            <Controller
              control={control}
              name="expiryDate"
              render={({ field: { onChange, onBlur, ref } }) => (
                <ReactInputMask
                  mask="99/99"
                  className={classNames("delivery-form__field__input input", {
                    input_error: errors.expiryDate,
                  })}
                  placeholder="MM/YY"
                  onBlur={onBlur}
                  onChange={onChange}
                  inputRef={ref}
                />
              )}
            />
            <Controller
              control={control}
              name="cvv"
              render={({ field: { onChange, onBlur, ref } }) => (
                <ReactInputMask
                  mask="999"
                  className={classNames("delivery-form__field__input input", {
                    input_error: errors.cvv,
                  })}
                  placeholder="CVV"
                  onBlur={onBlur}
                  onChange={onChange}
                  inputRef={ref}
                />
              )}
            />
          </>
        )}
        {activePayments === varianstPayments[3] && <></>}
      </ul>
      <div className="payments-form__btns">
        {children}
        <Button
          type={"submit"}
          appearence="dark"
          className="shopping-card__btn_next"
          onClick={() => {
            console.log(errors);
          }}
        >
          Futher
        </Button>
        <Button
          type={"submit"}
          appearence="light"
          className="shopping-card__btn_next"
        >
          Go to payments info
        </Button>
      </div>
    </form>
  );
};

export default Payments;
