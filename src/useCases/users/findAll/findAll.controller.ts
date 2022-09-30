import { Request, Response } from "express";
import { FindAllUsersService } from "./findAll.service";
import { FindNewUsersService } from "./findNew.service";

class FindAllUsersController {
  public async handle(
    req: Request, 
    res: Response,
  ): Promise<Response> {
    try {
      const query = req.query.new;

      const users = query  
        ? await new FindNewUsersService().handle()
        : await new FindAllUsersService().handle();
    
      return res.json({ status: true, users });
    } catch(error: any) {
      return res.status(500).json(error.message);
    }
  }
}

export { FindAllUsersController };