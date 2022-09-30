import { Schema, model } from "mongoose";
import { IProduct } from "../@types/product";

const ProductSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    description: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    categories: {
      type: Array,
    },
    size: {
      type: String,
    },
    color: {
      type: String,
    },
    price: {
      type: Number,
      required: true,
    }
  },
  { timestamps: true },
);

const ProductModel = model<IProduct>("Product", ProductSchema);

export { ProductModel };