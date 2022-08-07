import { DetailedHTMLProps, HTMLAttributes, useMemo, useState } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { Checkbox } from "../../../components/UI-components/Checkbox/Checkbox";
import { Input } from "../../../components/UI-components/Input/Input";
import { Radiobutton } from "../../../components/UI-components/Radiobutton/Radiobutton";
import { joiResolver } from "@hookform/resolvers/joi";
import { postOfficesSchema } from "./VariantsDelivery/schemas/PostOffices";
import "./Delivery.scss";
import { storeSchema } from "./VariantsDelivery/schemas/Store";
import { expressSchema } from "./VariantsDelivery/schemas/Express";
import ReactInputMask from "react-input-mask";
import { Button } from "../../../components/UI-components/Button/Button";

interface IDeliveryProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLFormElement>, HTMLFormElement> {
  setActiveRoute: (index: number) => void;
  index: number;
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
  setActiveRoute,
  index,
  className,
  ...props
}: IDeliveryProps) => {
  const [activeDelivery, setActiveDelivery] = useState<string>(
    varianstDelivery[0]
  );
  const resolver = useMemo(
    () =>
      activeDelivery === varianstDelivery[0]
        ? postOfficesSchema
        : activeDelivery === varianstDelivery[1]
        ? expressSchema
        : storeSchema,
    [activeDelivery]
  );

  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { errors },
  } = useForm<Fields>({
    resolver: joiResolver(resolver),
  });

  const variantsComponents = [
    <>
      <Input
        className="delivery-form__field__input"
        placeholder="City"
        {...register("city")}
      />
      <Input
        className="delivery-form__field__input"
        placeholder="Street"
        {...register("street")}
      />
      <Input
        className="delivery-form__field__input"
        placeholder="House"
        {...register("house")}
      />
      <Input
        className="delivery-form__field__input"
        placeholder="Apartment"
        {...register("apartment")}
      />
      <Controller
        control={control}
        name="postcode"
        render={({ field: { onChange, onBlur, ref } }) => (
          <ReactInputMask
            mask="BY 999999"
            className="delivery-form__field__input input"
            placeholder="BY ______"
            onBlur={onBlur}
            onChange={onChange}
            inputRef={ref}
          />
        )}
      />
    </>,
    <>
      <Input
        className="delivery-form__field__input"
        placeholder="City"
        {...register("city")}
      />
      <Input
        className="delivery-form__field__input"
        placeholder="Street"
        {...register("street")}
      />
      <Input
        className="delivery-form__field__input"
        placeholder="House"
        {...register("house")}
      />
      <Input
        className="delivery-form__field__input"
        placeholder="Apartment"
        {...register("apartment")}
      />
    </>,
    <Input
      className="delivery-form__field__input"
      placeholder="City"
      {...register("storeAdress")}
    />,
  ];

  const onSubmit: SubmitHandler<any> = (data) => {
    console.log(data);
    console.log(errors);
  };

  return (
    <section className="delivery-form__container">
      <form className="delivery-form" onSubmit={handleSubmit(onSubmit)}>
        <h3 className="delivery-form__title">
          Choose the method of delivery of the items
        </h3>
        {varianstDelivery.length > 0 && (
          <ul>
            {varianstDelivery.map((item) => (
              <li key={item}>
                <Radiobutton
                  onClick={() => setActiveDelivery(item)}
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
        <h5>PHONE</h5>
        <Controller
          control={control}
          name="phone"
          render={({ field: { onChange, onBlur, ref } }) => (
            <ReactInputMask
              mask="+375  (99) 9999999"
              className="delivery-form__field__input input"
              placeholder="+375  (__) _______"
              onBlur={onBlur}
              onChange={onChange}
              inputRef={ref}
            />
          )}
        />
        <Input
          className="delivery-form__field__input"
          placeholder="E-mail"
          {...register("email")}
        >
          E-mail
        </Input>
        <Input
          className="delivery-form__field__input"
          placeholder="Country"
          {...register("country")}
        >
          Adress
        </Input>
        {activeDelivery === varianstDelivery[0] && variantsComponents[0]}
        {activeDelivery === varianstDelivery[1] && variantsComponents[1]}
        {activeDelivery === varianstDelivery[2] && variantsComponents[2]}
        <Checkbox
          className="delivery-form__field__checkbox"
          {...register("agree")}
        >
          I agree to the processing of my personal information
        </Checkbox>
        <Button
          type="submit"
          appearence="dark"
          className="shopping-card__btn_next"
          // onClick={() => setActiveRoute(index + 1)}
        >
          FURTHER
        </Button>
      </form>
    </section>
  );
};

export default Delivery;
