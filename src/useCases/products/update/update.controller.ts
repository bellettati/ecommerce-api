import { Request, Response } from "express";
import { UpdateProductService } from "./update.service";

class UpdateProductController {
  public async handle(
    req: Request, 
    res: Response,
  ): Promise<Response> {
    try {
      await new UpdateProductService().handle({id: req.params.id, ...req.body});
      return res.json({ status: true, msg: "product has been updated" });
    } catch(error: any) {
      return res.status(500).json({ error: error.message });
    }
  }
}

export { UpdateProductController };