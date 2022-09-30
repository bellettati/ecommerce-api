import { Schema, model } from "mongoose";
import { ICart } from "../@types/cart";

const CartSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
    },
    products: [
      { 
        productId: {
          type: Schema.Types.ObjectId,
        },
        quantity: {
          type: Number,
          default: 1,
        },
      },
    ],
  },
  { timestamps: true },
);

const CartModel = model<ICart>("Cart", CartSchema);

export { CartModel };