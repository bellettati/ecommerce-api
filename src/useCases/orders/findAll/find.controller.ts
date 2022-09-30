import { Request, Response } from "express";
import { FindAllOrdersService } from "./find.service";

class FindAllOrdersController {
  public async handle(
    req: Request,
    res: Response,
  ): Promise<Response> {
    try {
      const findOrders = await new FindAllOrdersService().handle();
      return res.json({ status: true, findOrders });
    } catch(error: any) {
      return res.status(500).json({ error: error.message });
    }
  }
}

export { FindAllOrdersController };