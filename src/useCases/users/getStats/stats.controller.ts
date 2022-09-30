import { Request, Response } from "express";
import { GetUserStatsService } from "./stats.service";

class GetUserStatsController {
  public async handle(
    req: Request,
    res: Response,
  ): Promise<Response> {
    try { 
      const data = await new GetUserStatsService().handle();
      return res.json({ status: true, data });
    } catch(error: any) {
      return res.status(500).json(error.message);
    }
  }
}

export { GetUserStatsController }