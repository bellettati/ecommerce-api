import { ObjectId } from "mongoose";
import { ICart } from "../../../@types/cart";
import { CartModel } from "../../../models/cart.model";

class FindCartService {
  public async handle(user: string | ObjectId): Promise<ICart | null> {
    try { 
      const findCart = await CartModel.findOne({ user });
      return findCart;
    } catch(error: any) {
      throw new Error(error.message);
    }
  }
}

export { FindCartService };