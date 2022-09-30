import { ObjectId } from "mongoose";

interface ICreateOrderDTO {
  user: string | ObjectId;
  products: Array<ProductOrder>;
  amount: number;
  address: Address;
}

export { ICreateOrderDTO };