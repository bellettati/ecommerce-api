import { CartModel } from "../../../models/cart.model";

class FindAllCartsService {
  public async handle(): Promise<Array<any>> {
    try {
      const findCarts = await CartModel.find({ });
      return findCarts;
    } catch(error: any) {
      throw new Error("Impossible to complete request");
    }
  }
}

export { FindAllCartsService };