import { IProduct } from "../../../@types/product";
import { ProductModel } from "../../../models/product.model";
import { ICreateProductDTO } from "./create.dto";

class CreateProductService {
  public async handle(data: ICreateProductDTO): Promise<IProduct> {
    try {
      const newProduct = await ProductModel.create(data);
      return newProduct;
    } catch(error: any) {
      throw new Error('impossible to compelete request');
    }
  }
}

export { CreateProductService };