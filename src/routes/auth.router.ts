import { Router } from "express";
import { RegisterValidationMiddleware } from "../useCases/auth/register/validation.middleware";
import { RegisterUserController } from "../useCases/auth/register/register.controller";
import { LoginValidationMiddleware } from "../useCases/auth/login/validation.middlware";
import { LoginController } from "../useCases/auth/login/login.controller";

const authRouter = Router();

authRouter
  .post(
    '/register',
    new RegisterValidationMiddleware().handle,
    new RegisterUserController().handle,
  )
  .post(
    '/login',
    new LoginValidationMiddleware().handle,
    new LoginController().handle,
  );

export { authRouter };