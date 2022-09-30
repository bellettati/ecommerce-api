import { Router } from "express";
import { AdminAuthMiddleware } from "../helpers/middlewares/adminAuth.middleware";
import { AuthMiddleware } from "../helpers/middlewares/auth.middleware";
import { DeleteUserController } from "../useCases/users/delete/delete.controller";
import { FindAllUsersController } from "../useCases/users/findAll/findAll.controller";
import { FindUserController } from "../useCases/users/findOne/find.controller";
import { FindUserValidationMiddleware } from "../useCases/users/findOne/validation.middleware";
import { GetUserStatsController } from "../useCases/users/getStats/stats.controller";
import { UpdateUserController } from "../useCases/users/update/update.controller";
import { UpdateUserValidationMiddleware } from "../useCases/users/update/validation.middleware";

const userRouter = Router();

userRouter
  .put(
    '/:id',
    new AuthMiddleware().handle,
    new UpdateUserValidationMiddleware().handle,
    new UpdateUserController().handle,
  )
  .delete(
    '/:id',
    new AuthMiddleware().handle,
    new DeleteUserController().handle,
  )
  .get(
    '/find/:id',
    new AdminAuthMiddleware().handle,
    new FindUserValidationMiddleware().handle,
    new FindUserController().handle,
  )
  .get(
    '/',
    new AdminAuthMiddleware().handle,
    new FindAllUsersController().handle,
  )
  .get(
    '/stats',
    new AdminAuthMiddleware().handle,
    new GetUserStatsController().handle,
  );


export { userRouter };