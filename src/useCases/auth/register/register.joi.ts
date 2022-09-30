import Joi from "joi";

const register = Joi
  .object({
    username: Joi.string().max(30).required().trim(),
    email: Joi.string().email().required().trim(),
    password: Joi.string().min(8).required().trim(),
  })
  .options({ stripUnknown: true });

export default register;