import { Request, Response } from "express";
import { FindManyProductsService } from "./find.service";

class FindAllProductsController {
  public async handle(
    req: Request, 
    res: Response,
  ): Promise<Response> {
    try {
      const findNew = Boolean(req.query.new);
      const category = String(req.query.category);

      const findProducts = await new FindManyProductsService().handle({ findNew, category });    
      
      return res.json({ status: true, findProducts });
    } catch(error: any) {
      return res.status(500).json({ error: error.message });
    }
  }
}

export { FindAllProductsController };