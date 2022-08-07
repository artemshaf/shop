import Joi from "joi";

const JoiString = Joi.string().min(3);
const JoiBoolean = Joi.boolean().valid(true);

export interface expressSchemaFields {
  phone: string;
  email: string;
  country: string;
  city: string;
  street: string;
  house: string;
  apartment: string;
  agree: string;
}

export const expressSchema = Joi.object({
  phone: JoiString.required().pattern(
    new RegExp(/^(\+375|80)\s\((29|25|44|33)\)\s[0-9]{3}[0-9]{2}[0-9]{2}/)
  ),
  email: JoiString.required().email({ tlds: { allow: false } }),
  adress: Joi.object({
    country: JoiString,
    city: JoiString,
    street: JoiString,
    house: JoiString,
    apartment: JoiString,
  }),
  agree: JoiBoolean,
});
