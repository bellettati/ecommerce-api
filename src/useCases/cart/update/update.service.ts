import { CartModel } from "../../../models/cart.model";
import { IUpdateCartDTO } from "./update.dto";

class UpdateCartService {
  public async handle(data: IUpdateCartDTO): Promise<void> {
    try {
      const { user, products } = data;
      await CartModel.updateOne({ user }, { $set: products });
    } catch(error: any) {
      throw new Error("Impossible to complete request");
    }
  }
}

export { UpdateCartService };