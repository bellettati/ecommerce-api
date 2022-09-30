import { Request, Response } from "express";
import { CreateOrderService } from "./create.service";

class CreateOrderController {
  public async handle(
    req: Request,
    res: Response,
  ): Promise<Response> {
    try {
      const newOrder = await new CreateOrderService().handle(req.body);
      return res.json({ status: true, newOrder });
    } catch(error: any) {
      return res.status(500).json({ error: error.message });
    }
  }
}

export { CreateOrderController };