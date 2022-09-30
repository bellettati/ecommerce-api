import { ObjectId } from "mongoose";

interface IUpdateOrderDTO {
  id: string | ObjectId;
  products?: Array<ProductOrder>;
  amount?: number;
  address?: Address;
  status?: string;
}

export { IUpdateOrderDTO };