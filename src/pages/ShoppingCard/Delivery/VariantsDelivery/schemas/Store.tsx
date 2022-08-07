import Joi from "joi";

const JoiString = Joi.string().min(3);
const JoiBoolean = Joi.boolean().valid(true);

export interface storeSchemaFields {
  phone: string;
  email: string;
  country: string;
  store: string;
  agree: string;
}

export const storeSchema = Joi.object({
  phone: JoiString.required().pattern(
    new RegExp(/^(\+375|80)\s\((29|25|44|33)\)\s[0-9]{3}[0-9]{2}[0-9]{2}/)
  ),
  email: JoiString.required().email({ tlds: { allow: false } }),
  adress: Joi.object({
    country: JoiString,
    store: JoiString,
  }),
  agree: JoiBoolean,
});
