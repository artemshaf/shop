import cardValidator from "card-validator";
import Joi from "joi";

const JoiString = Joi.string().min(3);
const JoiBoolean = Joi.boolean().valid(true);

export const paypalSchema = Joi.object({
  email: JoiString.required().email({ tlds: { allow: false } }),
});

export const visaSchema = Joi.object({
  cardNumber: JoiString.custom((value) => {
    if (!value) {
      throw new Error("incorrect card cvv");
    }
    const validateObject = cardValidator.number(value);
    if (validateObject.card?.type !== "visa") {
      throw new Error("incorrect card number not visa");
    }
    if (!validateObject.isValid) {
      throw new Error("incorrect card number");
    }
  }).required(),
  expiryDate: JoiString.custom((value) => {
    if (!value) {
      throw new Error("incorrect card cvv");
    }
    const validateObject = cardValidator.expirationDate(value);
    if (!validateObject.isValid) {
      throw new Error("incorrect card expiryDate");
    }
  }).required(),
  cvv: JoiString.custom((value) => {
    if (!value) {
      throw new Error("incorrect card cvv");
    }
    const validateObject = cardValidator.cvv(value);
    if (!validateObject.isValid) {
      throw new Error("incorrect card cvv");
    }
  }).required(),
});

export const masterCardSchema = Joi.object({
  cardNumber: JoiString.custom((value) => {
    if (!value) {
      throw new Error("incorrect card cvv");
    }
    const validateObject = cardValidator.number(value);
    if (validateObject.card?.type !== "mastercard") {
      throw new Error("incorrect card number not mastercard");
    }
    if (!validateObject.isValid) {
      throw new Error("incorrect card number");
    }
  }).required(),
  expiryDate: JoiString.custom((value) => {
    if (!value) {
      throw new Error("incorrect card cvv");
    }
    const validateObject = cardValidator.expirationDate(value);
    if (!validateObject.isValid) {
      throw new Error("incorrect card expiryDate");
    }
  }).required(),
  cvv: JoiString.custom((value) => {
    if (!value) {
      throw new Error("incorrect card cvv");
    }
    const validateObject = cardValidator.cvv(value);
    if (!validateObject.isValid) {
      throw new Error("incorrect card cvv");
    }
  }).required(),
});

export const cashSchema = Joi.object();
