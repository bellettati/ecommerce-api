import Joi from "joi";

const update = Joi
  .object({
    title: Joi.string().optional(),
    decription: Joi.string().optional(),
    image: Joi.string().optional(),
    categories: Joi.array().optional(),
    size: Joi.string().optional(),
    color: Joi.string().optional(),
    price: Joi.number().optional(),
  })
  .options({ stripUnknown: true });

export default update;