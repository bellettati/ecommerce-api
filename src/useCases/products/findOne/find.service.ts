import { ObjectId } from "mongoose";
import { IProduct } from "../../../@types/product";
import { ProductModel } from "../../../models/product.model";

class FindProductService {
  public async handle(id: string | ObjectId): Promise<IProduct | null> {
    try {
      const findProduct = await ProductModel.findById(id);
      return findProduct;
    } catch(error: any) {
      throw new Error("Impossible to complete request");
    }
  }
}

export { FindProductService };