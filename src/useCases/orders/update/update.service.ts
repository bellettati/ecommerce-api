import { IOrder } from "../../../@types/order";
import { OrderModel } from "../../../models/order.model";
import { IUpdateOrderDTO } from "./update.dto";

class UpdateOrderService {
  public async handle(data: IUpdateOrderDTO): Promise<void> {
    try {
      const { id, ...other } = data;
      await OrderModel.findByIdAndUpdate({ id }, { $set: other });
    } catch(error: any) {
      throw new Error("Impossible to complete request");
    }
  }
}

export { UpdateOrderService };