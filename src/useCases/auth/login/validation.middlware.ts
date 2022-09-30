import { Request, Response, NextFunction } from "express";
import loginValidation from "./login.joi";
import CryptoJS from "crypto-js";
import { FindUserService } from "../../../helpers/services/findUser.service";
import jwt from "jsonwebtoken";

class LoginValidationMiddleware {
  public async handle(
    req: Request, 
    res: Response, 
    next: NextFunction
  ): Promise<Response | void> {
    try {
      req.body = await loginValidation.validateAsync(req.body);

      const findUser = await new FindUserService().handle({ username: req.body.username });
      if(!findUser)
        return res.status(401).json({ error: "invalid credentials" });
      
      const hashedPassword = CryptoJS.AES.decrypt(findUser.password, process.env.SEC_PASSPHRASE!);
      const unhashedPassword = hashedPassword.toString(CryptoJS.enc.Utf8);

      if(unhashedPassword !== req.body.password)
        return res.status(401).json({ error: "invalid credentials" });

      const token = jwt.sign(
        {
        id: findUser._id,
        isAdmin: findUser.isAdmin,
        }, 
        process.env.JWT_SECRET_KEY!,
        { expiresIn: "3d" },
      );
      
      res.locals.token = token;

      next();
    } catch(error: any) {
      res.status(401).json({ error: error.message });
    }
  }
}

export { LoginValidationMiddleware };