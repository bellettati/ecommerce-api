import { Request, Response, NextFunction } from "express";
import { UserExistsService } from "../../../helpers/services/userExists.service";

class FindUserValidationMiddleware {
  public async handle(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<Response | void> {
    try {
      const { id } = req.params;
      
      const userExists = await new UserExistsService().handle({ id });
      if(!userExists) return res.status(401).json({ error: "User does not exists" });
      
      next();
    } catch(error: any) {
      return res.status(500).json("impossible to complete request");
    }
  }
}

export { FindUserValidationMiddleware };