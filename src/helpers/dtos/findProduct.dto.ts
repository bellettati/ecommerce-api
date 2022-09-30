import { ObjectId } from "mongoose";

interface IFindProductDTO {
  id?: string | ObjectId;
  title?: string;
}

export { IFindProductDTO };