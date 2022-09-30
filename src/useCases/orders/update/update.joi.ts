import Joi from "Joi";

const update = Joi.object({
  user: Joi.string(),
  products: Joi.array(),
  amount: Joi.number(),
  address: Joi.object(),
  status: Joi.string(),
}).options({ stripUnknown: true });

export default update;