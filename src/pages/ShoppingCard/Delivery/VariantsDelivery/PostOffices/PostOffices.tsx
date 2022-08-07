import { Controller } from "react-hook-form";
import { Checkbox } from "../../../../../components/UI-components/Checkbox/Checkbox";
import { Input } from "../../../../../components/UI-components/Input/Input";
import { IPostOfficesProps } from "./PostOffices.props";
import InputMask from "react-input-mask";

const PostOffices = ({ className, ...props }: IPostOfficesProps) => {
  return (
    <>
      {/* <Controller
        control={control}
        name="phone"
        render={({ field: { onChange, onBlur, ref } }) => (
          <InputMask
            mask="+375  (99) 9999999"
            className="delivery-form__field__input"
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
        placeholder="Adress"
        {...register("country")}
      >
        Adress
      </Input>
      <Input
        className="delivery-form__field__input"
        placeholder="City"
        {...register("city")}
      >
        City
      </Input>
      <Input
        className="delivery-form__field__input"
        placeholder="Street"
        {...register("street")}
      >
        Street
      </Input>
      <Input
        className="delivery-form__field__input"
        placeholder="House"
        {...register("house")}
      >
        House
      </Input>
      <Input
        className="delivery-form__field__input"
        placeholder="Apartment"
        {...register("apartment")}
      >
        Apartment
      </Input>
      <Controller
        control={control}
        name="postcode"
        render={({ field: { onChange, onBlur, ref } }) => (
          <InputMask
            mask="BY 999999"
            className="delivery-form__field__input"
            placeholder="BY ______"
            onBlur={onBlur}
            onChange={onChange}
            inputRef={ref}
          />
        )}
      />
      <Checkbox
        className="delivery-form__field__checkbox"
        {...register("agree")}
      >
        I agree to the processing of my personal information
      </Checkbox> */}
    </>
  );
};

export default PostOffices;
