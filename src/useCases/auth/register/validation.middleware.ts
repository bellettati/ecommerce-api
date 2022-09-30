import { Request, Response, NextFunction } from "express";
import registerValidation from "./register.joi";
import { UserExistsService } from "../../../helpers/services/userExists.service";
import CryptoJS from 'crypto-js';

class RegisterValidationMiddleware {
  public async handle(
    req: Request, 
    res: Response, 
    next: NextFunction
  ): Promise<Response | void> {
    try {
      req.body = await registerValidation.validateAsync(req.body);

      const { email, username } = req.body;

      req.body.password = 
        CryptoJS.AES.encrypt(req.body.password, process.env.SEC_PASSPHRASE!).toString();

      const emailExists = await new UserExistsService().handle({ email });
      if(emailExists) return res.status(403).json({ msg: 'email already exists' });
      
      const usernameExists = await new UserExistsService().handle({ username });
      if(usernameExists) return res.status(403).json({ msg: 'username already exists' });
      
      next();
    } catch (error: any) {
      console.log(error.message);
      return res.status(500).json({ msg: 'something went wrong' });
    }
  } 
}

export { RegisterValidationMiddleware };