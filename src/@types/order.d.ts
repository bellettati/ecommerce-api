import { Document, ObjectId } from "mongoose";

interface IOrder extends Document {
  user: string | ObjectId;
  products: Array<any>;
  amount: number;
  address: string;
  status: string;
}