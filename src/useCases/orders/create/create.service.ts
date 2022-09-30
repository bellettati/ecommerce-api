import { IOrder } from "../../../@types/order";
import { OrderModel } from "../../../models/order.model";
import { ICreateOrderDTO } from "./create.dto";

class CreateOrderService {
  public async handle(data: ICreateOrderDTO): Promise<IOrder> {
    try {
      const newOrder = await OrderModel.create(data);
      return newOrder;
    } catch(error: any) {
      throw new Error("Impossible to complete request");
    }
  }
}

export { CreateOrderService };