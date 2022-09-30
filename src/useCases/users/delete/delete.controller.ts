import { Request, Response } from "express";
import { DeleteUserService } from "./delete.service";

class DeleteUserController {
  public async handle(
    req: Request,
    res: Response,
  ): Promise<Response> {
    try { 
      await new DeleteUserService().handle(req.params.id);
      return res.json({ status: true, msg: "user has been deleted" });
    } catch(error: any) {
      return res.status(500).json({ msg: error.message });
    }
  }
}

export { DeleteUserController };