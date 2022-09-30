import { Request, Response } from "express";
import { PaymentService } from "./payment.service";

class PaymentController {
  public async handle(
    req: Request,
    res: Response,
  ): Promise<Response> {
    try {
      await new PaymentService().handle(req.body);        
      return res.json({ status: true,  });
    } catch(error: any) {
      return res.status(500).json({ error: error.message });
    }
  }
}

export { PaymentController };