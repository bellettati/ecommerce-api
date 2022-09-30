import { Request, Response } from "express";
import { CreateUserService } from "./create.service";

class RegisterUserController {
  public async handle(req: Request, res: Response): Promise<Response> {
    try {
      const newUser = await new CreateUserService().handle(req.body);
      return res.json({ status: true, newUser });
    } catch(error: any) {
      throw new Error('deu ruim');
    }
  }
}

export { RegisterUserController };