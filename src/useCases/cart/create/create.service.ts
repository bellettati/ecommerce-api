import { ICart } from "../../../@types/cart";
import { CartModel } from "../../../models/cart.model";
import { ICreateCartDTO } from "./create.dto";

class CreateCartService {
  public async handle(data: ICreateCartDTO): Promise<ICart> {
    try {
      const newCart = await CartModel.create(data);
      return newCart;
    } catch(error: any) {
      throw new Error("Impossible to complete request");
    }
  }
}

export { CreateCartService };