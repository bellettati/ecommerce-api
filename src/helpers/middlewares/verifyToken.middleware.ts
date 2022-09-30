import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

class VerifyTokenMiddleware {
  public handle(
    req: Request, 
    res: Response,
    next: NextFunction,
  ): Response | void {
    const authHeader = req.headers.authorization;
    if(!authHeader)
      return res.status(401).json("Not authenticated");

    const token = String(authHeader).split(" ")[1];    

    jwt.verify(
      token, process.env.JWT_SECRET_KEY!,
      (err, payload) => {
        if(err) 
          return res.status(403).json("Invalid token");

        req.user = payload;
        next();
      }
    )
  }
}

export { VerifyTokenMiddleware };