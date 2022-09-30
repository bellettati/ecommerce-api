import { Request, Response } from "express";
import { FindProductService } from "./find.service";

class FindProductController {
  public async hanlde(
    req: Request,
    res: Response,
  ): Promise<Response> {
    try {
      const { id } = req.params;
      const findProduct = await new FindProductService().handle(id);

      if(!findProduct) 
        return res.status(500).json({ error: "User not found" });

      return res.json({ status: true, findProduct });
    } catch(error: any) {
      return res.status(500).json({ error: error.message });
    }
  }
}

export { FindProductController };