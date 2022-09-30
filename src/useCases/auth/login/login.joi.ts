import Joi from "joi";

const login = Joi
  .object({
    username: Joi.string().required().trim(),
    password: Joi.string().required().trim(),
  })
  .options({ stripUnknown: true });

export default login;