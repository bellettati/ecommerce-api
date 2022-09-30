import { Document } from "mongoose";

interface IProduct extends Document{
  title: string;
  description: string;
  image: string;
  categories: Array<any>;
  size: string;
  color: string;
  price: number;
}
