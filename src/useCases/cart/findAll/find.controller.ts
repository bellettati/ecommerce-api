import { Request, Response } from "express";
import { FindAllCartsService } from "./find.service";

class FindAllCartsController {
  public async handle(
    req: Request, 
    res: Response,
  ): Promise<Response> {
    try {
      const findCarts = await new FindAllCartsService().handle();
      return res.json({ status: true, findCarts });
    } catch(error: any) {
      return res.status(500).json({ error: error.message });
    }
  }
}

export { FindAllCartsController };