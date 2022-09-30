import { Router } from "express";
import { AdminAuthMiddleware } from "../helpers/middlewares/adminAuth.middleware";
import { AuthMiddleware } from "../helpers/middlewares/auth.middleware";
import { VerifyTokenMiddleware } from "../helpers/middlewares/verifyToken.middleware";
import { CreateCartController } from "../useCases/cart/create/create.controller";
import { CreateCartValidationMiddleware } from "../useCases/cart/create/validation.middleware";
import { DeleteCartController } from "../useCases/cart/delete/delete.controller";
import { FindAllCartsController } from "../useCases/cart/findAll/find.controller";
import { FindCartController } from "../useCases/cart/findOne/find.controller";
import { UpdateCartController } from "../useCases/cart/update/update.controller";

const cartRouter = Router();

cartRouter
  .post(
    '/',
    new VerifyTokenMiddleware().handle,
    new CreateCartValidationMiddleware().handle,
    new CreateCartController().handle,
  )
  .put(
    '/:id',
    new AuthMiddleware().handle,
    new UpdateCartController().handle,
  )
  .delete(
    '/:id',
    new AuthMiddleware().handle,
    new DeleteCartController().handle,
  )
  .get(
    '/:id',
    new AuthMiddleware().handle,
    new FindCartController().handle,
  )
  .get(
    '/',
    new AdminAuthMiddleware().handle,
    new FindAllCartsController().handle,
  );

export { cartRouter };