import { Request, Response } from "express";
import { FindUsersOrdersService } from "./find.service";

class FindUsersOrdersController {
  public async handle(
    req: Request,
    res: Response,
  ): Promise<Response> {
    try {
      const { id } = req.params;
      const findOrders = await new FindUsersOrdersService().handle(id);
      return res.json({ status: true, findOrders });
    } catch(error: any) {
      return res.status(500).json({ error: error.message });
    }
  }
}

export { FindUsersOrdersController };