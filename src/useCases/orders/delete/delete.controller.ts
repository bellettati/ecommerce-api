import { Request, Response } from "express";
import { DeleteOrderService } from "./delete.service";

class DeleteOrderController {
  public async handle(
    req: Request,
    res: Response,
  ): Promise<Response> {
    try {
      await new DeleteOrderService().handle(req.params.id);
      return res.json({ status: true, message: "Order has been deleted" });
    } catch(error: any) {
      return res.status(500).json({ error: error.message });
    }
  }
}

export { DeleteOrderController };