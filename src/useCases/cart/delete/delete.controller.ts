import { Request, Response } from "express";
import { DeleteCartService } from "./delete.service";

class DeleteCartController {
  public async handle(
    req: Request, 
    res: Response,
  ): Promise<Response> {
    try {
      await new DeleteCartService().handle(req.params.id);
      return res.json({ status: true, message: "Cart has been deleted" });
    } catch(error: any) {
      return res.status(500).json({ error: error.message });
    }
  }
}

export { DeleteCartController };