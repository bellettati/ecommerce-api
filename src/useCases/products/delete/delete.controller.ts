import { Request, Response } from "express";
import { DeleteProductService } from "./delete.service";

class DeleteProductController {
  public async handle(
    req: Request, 
    res: Response, 
  ): Promise<Response> {
    try {
      await new DeleteProductService().handle(req.params.id);
      return res.json({ status: true, message: "Product has been deleted" });
    } catch(error: any) {
      return res.status(500).json({ error: error.message });
    }
  }
}

export { DeleteProductController };