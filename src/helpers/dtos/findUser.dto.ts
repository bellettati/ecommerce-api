import { ObjectId } from "mongoose";

interface IFindUserDTO {
  id?: string | ObjectId;
  email?: string;
  username?: string;
}

export { IFindUserDTO };