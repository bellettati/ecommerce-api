import { Router } from "express";
import { AdminAuthMiddleware } from "../helpers/middlewares/adminAuth.middleware";
import { AuthMiddleware } from "../helpers/middlewares/auth.middleware";
import { CreateProductController } from "../useCases/products/create/create.controller";
import { CreateProductValidationMiddleware } from "../useCases/products/create/validation.middleware";
import { DeleteProductController } from "../useCases/products/delete/delete.controller";
import { FindAllProductsController } from "../useCases/products/findMany/find.controller";
import { FindProductController } from "../useCases/products/findOne/find.controller";
import { UpdateProductController } from "../useCases/products/update/update.controller";
import { UpdateProductValidationMiddlware } from "../useCases/products/update/validation.middleware";

const productRouter = Router();

productRouter
  .post(
    '/',
    new AdminAuthMiddleware().handle,
    new CreateProductValidationMiddleware().handle,
    new CreateProductController().handle,
  )
  .put(
    '/:id',
    new AdminAuthMiddleware().handle,
    new UpdateProductValidationMiddlware().handle,
    new UpdateProductController().handle,
  )
  .delete(
    '/:id', 
    new AdminAuthMiddleware().handle,
    new DeleteProductController().handle,
  )
  .get(
    '/find/:id',
    new AuthMiddleware().handle,
    new FindProductController().hanlde,
  )
  .get(
    '/',
    new AdminAuthMiddleware().handle,
    new FindAllProductsController().handle,
  );

  //GET MONTHLY INCOME - TODO

export { productRouter };