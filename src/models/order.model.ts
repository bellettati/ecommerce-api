import { Schema, model } from "mongoose";
import { IOrder } from "../@types/order";

const OrderSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
    },
    products: [
      { 
        product: {
          type: Schema.Types.ObjectId,
        },
        quantity: {
          type: Number,
          default: 1,
        },
      },
    ],
    amount: {
      type: Number,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      default: "pending",
    }
  },
  { timestamps: true },
);

const OrderModel = model<IOrder>("Order", OrderSchema);

export { OrderModel };