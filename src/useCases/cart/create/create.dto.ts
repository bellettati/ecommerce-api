import { ObjectId } from "mongoose";

interface ICreateCartDTO {
  user: string | ObjectId,
  products: Array<any>,
}

export { ICreateCartDTO };