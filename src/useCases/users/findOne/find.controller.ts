import { Request, Response, NextFunction } from "express";
import { FindUserService } from "./find.service";

class FindUserController {
  public async handle(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<Response> {
    try {
      let findUser = await new FindUserService().handle(req.params.id);
      return res.json({ status: true, user: findUser });
    } catch(error: any) {
      return res.status(500).json("something went wrong");
    }
  }
}

export { FindUserController };