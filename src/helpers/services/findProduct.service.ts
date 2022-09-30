import { ObjectId } from "mongoose";
import { IProduct } from "../../@types/product";
import { ProductModel } from "../../models/product.model";
import { IFindProductDTO } from "../dtos/findProduct.dto";

class FindProductService {
  private acceptedFields = {
    async findById(id: string | ObjectId | undefined): Promise<any> {
      try {
        if(!id) return;

        const findProduct = await ProductModel.findById(id);
        return findProduct;
      } catch(error: any) {
        throw new Error("Impossible to complete request");
      }
    },

    async findByTitle(title: string | undefined): Promise<any> {
      try {
        if(!title) return;

        const findProduct = await ProductModel.findOne({ title });
        return findProduct;
      } catch(error: any) {
        throw new Error("Impossible to complete request");
      }
    }, 
  };

  public async handle(data: IFindProductDTO): Promise<IProduct| void> {
    try {
      const { findById, findByTitle } = this.acceptedFields;
      const { id, title } = data;

      const idExists = await findById(id);
      if(idExists) return idExists;

      const titleExists = await findByTitle(title);
      if(titleExists) return titleExists;

      return;
    } catch(error: any) {
      throw new Error(error.message);
    }
  }
} 

export { FindProductService };