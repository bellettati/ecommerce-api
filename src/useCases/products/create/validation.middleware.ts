import { Request, Response, NextFunction } from "express";
import { FindProductService } from "../../../helpers/services/findProduct.service";
import createProduct from "./create.joi";

class CreateProductValidationMiddleware {
  public async handle(
    req: Request, 
    res: Response,
    next: NextFunction,
  ): Promise<Response | void> {
    try {
      req.body = await createProduct.validateAsync(req.body);
      const { title } = req.body;

      const productExists = await new FindProductService().handle({ title });
      if(productExists) return res.status(403).json({ error: "Product already exists" })

      next();
    } catch(error: any) {
      throw new Error(error.message);
    }
  }
}

export { CreateProductValidationMiddleware };