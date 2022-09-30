import { Request, Response } from "express";
import { UpdateOrderService } from "./update.service";

class UpdateOrderController {
  public async handle(
    req: Request,
    res: Response,
  ): Promise<Response> {
    try {
      await new UpdateOrderService().handle(req.body);
      return res.json({ status: true, message: "Order has been updated" });
    } catch(error: any) {
      return res.status(500).json({ error: error.message });
    }
  }
}

export { UpdateOrderController };