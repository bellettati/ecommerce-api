import { ObjectId } from "mongoose";
import { OrderModel } from "../../../models/order.model";

class DeleteOrderService {
  public async handle(id: string | ObjectId): Promise<void> {
    try {
      await OrderModel.findByIdAndDelete(id);
    } catch(error: any) {
      throw new Error("Impossible to complete request");
    }
  }
}

export { DeleteOrderService };