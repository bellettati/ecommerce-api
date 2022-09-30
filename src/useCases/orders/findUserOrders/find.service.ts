import { ObjectId } from "mongoose";
import { OrderModel } from "../../../models/order.model";

class FindUsersOrdersService {
  public async handle(user: string | ObjectId): Promise<Array<any>> {
    try {
      const findOrders = await OrderModel.find({ user });
      return findOrders;
    } catch(error: any) {
      throw new Error("Impossible to complete request");
    }
  }
}

export { FindUsersOrdersService };