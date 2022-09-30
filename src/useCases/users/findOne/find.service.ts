import { ObjectId } from "mongoose";
import { IUser } from "../../../@types/user";
import { UserModel } from "../../../models/user.model";

class FindUserService {
  public async handle(id: string | ObjectId): Promise<IUser | null> {
    try { 
      const findUser = await UserModel
        .findById(id)
        .select("username email isAdmin");
      return findUser;
    } catch(error: any) {
      throw new Error("unable to complete request");
    }
  }
}

export { FindUserService };