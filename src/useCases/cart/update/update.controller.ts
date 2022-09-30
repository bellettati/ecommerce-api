import { Request, Response } from "express";
import { UpdateCartService } from "./update.service";

class UpdateCartController {
  public async handle(
    req: Request, 
    res: Response,
  ): Promise<Response> {
    try {
      await new UpdateCartService().handle({
        user: req.params.id,
        products: req.body,
      });
      return res.json({ status: true,  });
    } catch(error: any) {
      return res.status(500).json({ error: error.message });
    }
  }
}

export { UpdateCartController };