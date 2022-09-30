import { ObjectId } from "mongoose";
import { ProductModel } from "../../../models/product.model";

class DeleteProductService {
  public async handle(id: string | ObjectId): Promise<void> {
    try {
      await ProductModel.findByIdAndDelete(id);
    } catch(error: any) {
      throw new Error("Impossible to complete request");
    }
  }
}

export { DeleteProductService };