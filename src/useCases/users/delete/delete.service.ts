import { ObjectId } from "mongoose";
import { UserModel } from "../../../models/user.model";

class DeleteUserService {
  public async handle(id: string | ObjectId): Promise<void> {
    try {
      await UserModel.findByIdAndDelete(id);
    } catch(error: any) {
      throw new Error(error.message);
    }
  }
}

export { DeleteUserService };