import { Router } from "express";
import { AdminAuthMiddleware } from "../helpers/middlewares/adminAuth.middleware";
import { AuthMiddleware } from "../helpers/middlewares/auth.middleware";
import { VerifyTokenMiddleware } from "../helpers/middlewares/verifyToken.middleware";
import { CreateOrderController } from "../useCases/orders/create/create.controller";
import { DeleteOrderController } from "../useCases/orders/delete/delete.controller";
import { FindAllOrdersController } from "../useCases/orders/findAll/find.controller";
import { FindUsersOrdersController } from "../useCases/orders/findUserOrders/find.controller";
import { GetOrderStatsService } from "../useCases/orders/stats/stats.service";
import { UpdateOrderController } from "../useCases/orders/update/update.controller";

const orderRouter = Router();

orderRouter
  .post(
    '/',
    new VerifyTokenMiddleware().handle,
    new CreateOrderController().handle,
  )
  .put(
    '/:id',
    new AdminAuthMiddleware().handle,
    new UpdateOrderController().handle,
  )
  .delete(
    '/:id',
    new AdminAuthMiddleware().handle,
    new DeleteOrderController().handle,
  )
  .get(
    '/find/:id',
    new AuthMiddleware().handle,
    new FindUsersOrdersController().handle, 
  )
  .get(
    '/',
    new AdminAuthMiddleware().handle,
    new FindAllOrdersController().handle,
  )
  .get(
    '/stats',
    new AdminAuthMiddleware().handle,
    new GetOrderStatsService().handle,
  );

export { orderRouter };