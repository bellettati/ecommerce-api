import { Request, Response } from "express";
import { FindCartService } from "./find.service";

class FindCartController {
  public async handle(
    req: Request, 
    res: Response,
  ): Promise<Response> {
    try {
      const findCart = await new FindCartService().handle(req.params.id);
      return res.json({ status: true, findCart });
    } catch(error: any) {
      return res.status(500).json({ error: error.message });
    }
  }
}

export { FindCartController };