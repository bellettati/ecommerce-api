import { ObjectId } from "mongoose";

interface IUpdateCartDTO {
  user: string | ObjectId;
  products: Array<any>;
}

export { IUpdateCartDTO }; 