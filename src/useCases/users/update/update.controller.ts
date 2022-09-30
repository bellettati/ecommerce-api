import { Request, Response } from "express";
import { UpdateUserService } from "./update.service";

class UpdateUserController {
  public async handle(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;
      const { email, username } = req.body;
      
      await new UpdateUserService().handle({ id, email, username });
      return res.json({ status: true, msg: "user has been updated" });
    } catch(error: any) {
      return res.status(500).json({ error: error.message });
    }
  }
}

export { UpdateUserController };