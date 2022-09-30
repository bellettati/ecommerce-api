import { Request, Response } from "express";

class LoginController {
  public async handle(req: Request, res: Response): Promise<Response> {
    try {
      return res.json({ status: true, token: res.locals.token });
    } catch(error: any) {
      return res.status(500).json({ error: error.message });
    }
  }
}

export { LoginController };