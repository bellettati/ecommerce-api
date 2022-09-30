import { ProductModel } from "../../../models/product.model";
import { IFindManyProductsDTO } from "./find.dto";

class FindManyProductsService {
  private acceptedFields =  {
    async findByCategory(category?: string): Promise<Array<any> | void> {
      try {
        if(!category) return;
        const findProducts = await ProductModel.find({ 
          categories: { $in: [category] }
        });
        return findProducts;
      } catch(error: any) {
        throw new Error("Impossible to find by category");
      }
    },

    async findNewest(findNew?: boolean): Promise<Array<any> | void> {
      try {
        if(!findNew) return;
        const findProducts = 
        await ProductModel
          .find()
          .sort({ createdAt: -1 })
          .limit(5);

      return findProducts;
      } catch(error: any) {
        throw new Error("Impossible to find newest");
      }
    },
  };

  public async handle(data: IFindManyProductsDTO): Promise<Array<any> | void> {
    try {
      const { findByCategory, findNewest } = this.acceptedFields;
      const { findNew, category } = data;

      if(data.findNew)
        return await findNewest(findNew);

      if(data.category)
        return await findByCategory(category);
      
      return await ProductModel.find({ });
    } catch(error: any) {
      throw new Error("Impossibel to complete request");
    }
  }
}

export { FindManyProductsService }