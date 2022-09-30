import { Request, Response, NextFunction } from "express";
import { UserExistsService } from "../../../helpers/services/userExists.service";
import updateUser from "./update.joi";

class UpdateUserValidationMiddleware {
  public async handle(
    req: Request, 
    res: Response, 
    next: NextFunction
  ): Promise<Response | void> {
    try {
      req.body = await updateUser.validateAsync(req.body);

      const { email, username } = req.body;

      const emailIsTaken = await new UserExistsService().handle({ email });
      if(emailIsTaken) throw new Error('email is taken');

      const usernameIsTaken = await new UserExistsService().handle({ username });
      if(usernameIsTaken) throw new Error('username is taken');

      next();
    } catch(error: any) {
      throw new Error(error.message);
    }
  }
}

export { UpdateUserValidationMiddleware };