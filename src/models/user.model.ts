import { Schema, model } from "mongoose";
import { IUser } from "../@types/user";

const UserSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    }
  },
  { timestamps: true },
);

const UserModel = model<IUser>("User", UserSchema);

export { UserModel };