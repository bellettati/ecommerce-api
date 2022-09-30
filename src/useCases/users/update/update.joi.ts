import Joi from "joi";

const update = Joi
  .object({
    email: Joi.string().email().allow(null).allow("").optional().trim(),
    username: Joi.string().email().allow(null).allow("").optional().trim(),
  })
  .options({ stripUnknown: true });

export default update;