import { ObjectId } from "mongoose";

interface IUpdateProductDTO {
  id: string | ObjectId;
  title?: string;
  description?: string;
  image?: string;
  categories?: Array<any>;
  size?: string;
  color?: string;
  price?: number;
}

export { IUpdateProductDTO };