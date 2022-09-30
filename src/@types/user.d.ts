import { Document } from "mongoose";

interface IUser extends Document {
  usename: string;
  email: string;
  password: string;
  isAdmin: boolean;
}