import { NextFunction, Request, Response } from "express";
import { VerifyTokenMiddleware } from "./verifyToken.middleware";

class AuthMiddleware {
  public handle(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Response | void {
    new VerifyTokenMiddleware().handle(
      req,
      res, 
      () => {
        const isPermited = req.user.id === req.params.id || req.user.isAdmin;
        if(!isPermited) 
          return res.status(403).json("Permission denied"); 
          
        next();
      }
    );
  }
}

export { AuthMiddleware };