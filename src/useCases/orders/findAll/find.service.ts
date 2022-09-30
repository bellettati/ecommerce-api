import { OrderModel } from "../../../models/order.model";

class FindAllOrdersService {
  public async handle(): Promise<Array<any>> {
    try {
      const findOrders = await OrderModel.find({ });
      return findOrders;
    } catch(error: any) {
      throw new Error("Impossible to complete request");
    }
  }
}

export { FindAllOrdersService };