import Joi from "joi";

const create = Joi
  .object({
    title: Joi.string().required(),
    description: Joi.string().required(),
    image: Joi.string().required(),
    categories: Joi.array().optional(),
    size: Joi.string().optional(),
    color: Joi.string().optional(),
    price: Joi.number().required(),
  })
  .options({ stripUnknown: true });

export default create;