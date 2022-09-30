import { Request, Response, NextFunction } from "express";
import { VerifyTokenMiddleware } from "./verifyToken.middleware";

class AdminAuthMiddleware {
  public handle(
    req: Request, 
    res: Response,
    next: NextFunction,
  ): Response | void {
    new VerifyTokenMiddleware().handle(
      req,
      res,
      () => {
        const isPermited = req.user.isAdmin;
        if(!isPermited)
          return res.status(403).json("Permission denied");

        next();
      }
    );
  }
}

export { AdminAuthMiddleware };