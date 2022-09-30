import { Document, ObjectId } from "mongoose";

interface ICart extends Document {
  user: string | ObjectId;
  products: Array<any>;
}
