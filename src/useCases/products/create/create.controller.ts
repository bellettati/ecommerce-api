import { Request, Response } from "express";
import { CreateProductService } from "./create.service";

class CreateProductController {
  public async handle(
    req: Request,
    res: Response,
  ): Promise<Response> {
    try {
      const newProduct = await new CreateProductService().handle(req.body);
      return res.json({ status: true, newProduct });
    } catch(error: any) {
      return res.status(500).json({ error: error.message });
    }
  }
}

export { CreateProductController };