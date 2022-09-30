import { ObjectId } from "mongoose";
import { ProductModel } from "../../../models/product.model";
import { IUpdateProductDTO } from "./update.dto";

class UpdateProductService {
  private acceptedFields = {
    async updateTitle(id: string | ObjectId, title: string | undefined) {
      try {
        if(!title) return;
        await ProductModel.findByIdAndUpdate(id, { title });
      } catch(error: any) {
        throw new Error("Unable to update title");
      }
    },

    async updateDescription(id: string | ObjectId, description: string | undefined) {
      if(!description) return;
      await ProductModel.findByIdAndUpdate(id, { description });
    },

    async updateImage(id: string | ObjectId, image: string | undefined) {
      if(!image) return;
      await ProductModel.findByIdAndUpdate(id, { image });
    },

    async updateCategories(id: string | ObjectId, categories: Array<any> | undefined) {
      await ProductModel.findByIdAndUpdate(id, { categories });
    },


    async updateSize(id: string | ObjectId, size: string | undefined) {
      if(!size) return;
      await ProductModel.findByIdAndUpdate(id, { size });
    },

    async updateColor(id: string | ObjectId, color: string | undefined) {
      if(!color) return;
      await ProductModel.findByIdAndUpdate(id, { color });
    },

    async updatePrice(id: string | ObjectId, price: number | undefined) {
      if(!price) return;
      await ProductModel.findByIdAndUpdate(id, { price });
    },
  };

  public async handle(data: IUpdateProductDTO): Promise<void> {
    try { 
      
      await this.acceptedFields.updateTitle(data.id, data.title);
      await this.acceptedFields.updateDescription(data.id, data.description);
      await this.acceptedFields.updateCategories(data.id, data.categories);
      await this.acceptedFields.updateImage(data.id, data.image);
      await this.acceptedFields.updateColor(data.id, data.color);
      await this.acceptedFields.updatePrice(data.id, data.price);
      await this.acceptedFields.updateSize(data.id, data.size);

    } catch(error: any) {
      throw new Error('impossible to complete request');
    }
  }
}

export { UpdateProductService };