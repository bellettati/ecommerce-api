import { ObjectId } from "mongoose";
import { CartModel } from "../../../models/cart.model";

class DeleteCartService {
  public async handle(user: string | ObjectId): Promise<void> {
    try {
      await CartModel.deleteOne({ user });
    } catch(error: any) {
      throw new Error("Impossible to complete request");
    }
  }
}

export { DeleteCartService };