import { NextFunction, Request, Response } from "express";
import createCart from "./create.joi";

class CreateCartValidationMiddleware {
  public async handle(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<Response | void> {
    try {
      req.body = await createCart.validateAsync(req.body);

      next();
    } catch(error: any) {
      res.status(500).json({ error: error.message });
    }
  }
}

export { CreateCartValidationMiddleware };