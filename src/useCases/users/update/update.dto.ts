import { ObjectId } from "mongoose";

interface IUpdateUserDTO {
  id: string | ObjectId,
  username?: string;
  email?: string;
} 

export { IUpdateUserDTO };