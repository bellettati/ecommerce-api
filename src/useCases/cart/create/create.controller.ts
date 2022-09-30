import { Request, Response } from "express";
import { CreateCartService } from "./create.service";

class CreateCartController {
  public async handle(
    req: Request, 
    res: Response,
  ): Promise<Response> {
    try {
      const newCart = await new CreateCartService().handle(req.body);
      return res.json({ status: true, newCart });
    } catch(error: any) {
      return res.status(500).json({ error: error.message });
    }
  }
}

export { CreateCartController };