import {
  DetailedHTMLProps,
  HTMLAttributes,
  useEffect,
  useMemo,
  useState,
} from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { Checkbox } from "../../../components/UI-components/Checkbox/Checkbox";
import { Input } from "../../../components/UI-components/Input/Input";
import { Radiobutton } from "../../../components/UI-components/Radiobutton/Radiobutton";
import { joiResolver } from "@hookform/resolvers/joi";
import { postOfficesSchema } from "./VariantsDelivery/schemas/PostOffices";
import { storeSchema } from "./VariantsDelivery/schemas/Store";
import { expressSchema } from "./VariantsDelivery/schemas/Express";
import ReactInputMask from "react-input-mask";
import "./Delivery.scss";
import classNames from "classnames";
import { Button } from "../../../components/UI-components/Button/Button";
interface IDeliveryProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLFormElement>, HTMLFormElement> {
  setActiveRoute: (index: number) => void;
  index: number;
  totalPrice: number;
}

export interface Fields {
  variantsDelivery: string;
  phone: string;
  email: string;
  country: string;
  storeAdress: string;
  city: string;
  street: string;
  house: string;
  apartment: string;
  postcode: string;
  agree: string;
}

const varianstDelivery = [
  "Pickup from post offices",
  "Express delivery",
  "Store pickup",
];

const Delivery = ({
  children,
  totalPrice,
  setActiveRoute,
  index,
  className,
  ...props
}: IDeliveryProps) => {
  const [activeDelivery, setActiveDelivery] = useState<string>(
    varianstDelivery[0]
  );

  const resolver = joiResolver(
    activeDelivery === varianstDelivery[0]
      ? postOfficesSchema
      : activeDelivery === varianstDelivery[1]
      ? expressSchema
      : storeSchema
  );

  const {
    register,
    handleSubmit,
    unregister,
    clearErrors,
    control,
    formState: { errors },
  } = useForm<Fields>({ resolver });

  const unregistredFormFields = () => {
    clearErrors();
    switch (activeDelivery) {
      case varianstDelivery[0]:
        unregister("storeAdress");
        break;
      case varianstDelivery[1]:
        unregister("storeAdress");
        unregister("postcode");
        break;
      case varianstDelivery[2]:
        unregister("postcode");
        unregister("apartment");
        unregister("house");
        unregister("street");
        unregister("country");
        break;
      default:
        break;
    }
  };

  const onSubmit: SubmitHandler<any> = (data) => {
    setActiveRoute(2);
  };

  return (
    <section className={classNames("delivery-form__container", className)}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="delivery-form">
          <h3 className="delivery-form__title">
            Choose the method of delivery of the items
          </h3>
          {varianstDelivery.length > 0 && (
            <ul>
              {varianstDelivery.map((item) => (
                <li key={item}>
                  <Radiobutton
                    onChange={() => setActiveDelivery(item)}
                    name={"varianstDelivery"}
                    value={item}
                    id={item}
                    checked={activeDelivery === item}
                  >
                    {item}
                  </Radiobutton>
                </li>
              ))}
            </ul>
          )}
          {activeDelivery && (
            <>
              <h5>PHONE</h5>
              <Controller
                control={control}
                name="phone"
                render={({ field: { onChange, onBlur, ref } }) => (
                  <ReactInputMask
                    mask="+375 (99) 9999999"
                    className={classNames("delivery-form__field__input input", {
                      input_error: errors.phone,
                    })}
                    placeholder="+375  (__) _______"
                    onBlur={onBlur}
                    onChange={onChange}
                    inputRef={ref}
                  />
                )}
              />
              <Input
                className={classNames("delivery-form__field__input input", {
                  input_error: errors.email,
                })}
                placeholder="E-mail"
                {...register("email")}
              >
                E-mail
              </Input>
              {activeDelivery === varianstDelivery[0] && (
                <>
                  <Input
                    className={classNames("delivery-form__field__input input", {
                      input_error: errors.country,
                    })}
                    placeholder="Country"
                    {...register("country")}
                  >
                    Adress
                  </Input>
                  <Input
                    className={classNames("delivery-form__field__input input", {
                      input_error: errors.city,
                    })}
                    placeholder="City"
                    {...register("city")}
                  />
                  <Input
                    className={classNames("delivery-form__field__input input", {
                      input_error: errors.street,
                    })}
                    placeholder="Street"
                    {...register("street")}
                  />
                  <Input
                    className={classNames("delivery-form__field__input input", {
                      input_error: errors.house,
                    })}
                    placeholder="House"
                    {...register("house")}
                  />
                  <Input
                    className={classNames("delivery-form__field__input input", {
                      input_error: errors.apartment,
                    })}
                    placeholder="Apartment"
                    {...register("apartment")}
                  />
                  <Controller
                    control={control}
                    name="postcode"
                    render={({ field: { onChange, onBlur, ref } }) => (
                      <ReactInputMask
                        mask="BY 999999"
                        className={classNames(
                          "delivery-form__field__input input",
                          {
                            input_error: errors.postcode,
                          }
                        )}
                        placeholder="BY ______"
                        onBlur={onBlur}
                        onChange={onChange}
                        inputRef={ref}
                      />
                    )}
                  />
                </>
              )}
              {activeDelivery === varianstDelivery[1] && (
                <>
                  <Input
                    className={classNames("delivery-form__field__input input", {
                      input_error: errors.country,
                    })}
                    placeholder="Country"
                    {...register("country")}
                  >
                    Adress
                  </Input>
                  <Input
                    className={classNames("delivery-form__field__input input", {
                      input_error: errors.city,
                    })}
                    placeholder="City"
                    {...register("city")}
                  />
                  <Input
                    className={classNames("delivery-form__field__input input", {
                      input_error: errors.street,
                    })}
                    placeholder="Street"
                    {...register("street")}
                  />
                  <Input
                    className={classNames("delivery-form__field__input input", {
                      input_error: errors.house,
                    })}
                    placeholder="House"
                    {...register("house")}
                  />
                  <Input
                    className={classNames("delivery-form__field__input input", {
                      input_error: errors.apartment,
                    })}
                    placeholder="Apartment"
                    {...register("apartment")}
                  />
                </>
              )}
              {activeDelivery === varianstDelivery[2] && (
                <>
                  <Input
                    className={classNames("delivery-form__field__input input", {
                      input_error: errors.storeAdress,
                    })}
                    placeholder="Adress of store(Country)"
                    {...register("storeAdress")}
                  >
                    Adress of store
                  </Input>
                  <Input
                    className={classNames("delivery-form__field__input input", {
                      input_error: errors.city,
                    })}
                    placeholder="City"
                    {...register("city")}
                  />
                </>
              )}
              <Checkbox
                className={classNames("delivery-form__field__checkbox", {
                  checbox_error: errors.agree,
                })}
                error={errors.agree ? true : false}
                {...register("agree")}
              >
                I agree to the processing of my personal information
              </Checkbox>
            </>
          )}
        </div>
        {children}
        <Button
          className="shopping-card__btn_next"
          appearence="dark"
          onClick={() => {
            console.log(errors);
            unregistredFormFields();
          }}
          type={"submit"}
        >
          Futher
        </Button>
        <Button
          className="shopping-card__btn_next"
          appearence="light"
          type={"submit"}
        >
          Go to shop
        </Button>
      </form>
    </section>
  );
};

export default Delivery;
