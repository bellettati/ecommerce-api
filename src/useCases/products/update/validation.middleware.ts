import { Request, Response, NextFunction } from "express";
import updateProduct from "./update.joi";

class UpdateProductValidationMiddlware {
  public async handle(
    req: Request,
    res: Response, 
    next: NextFunction,
  ): Promise<Response | void> {
    try {
      req.body = await updateProduct.validateAsync(req.body);
      next();
    } catch(error: any) {

    }
  }
}

export { UpdateProductValidationMiddlware };