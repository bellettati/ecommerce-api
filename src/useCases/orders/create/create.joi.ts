import Joi from "Joi";

const create = Joi.object({
  user: Joi.string().required(),
  products: Joi.array(),
  amount: Joi.number(),
  address: Joi.object(),
}).options({ stripUnknown: true });

export default create;