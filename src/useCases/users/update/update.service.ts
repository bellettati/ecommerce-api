import { ObjectId } from "mongoose";
import { UserModel } from "../../../models/user.model";
import { IUpdateUserDTO } from "./update.dto";

class UpdateUserService {
  private acceptedFields = {
    async updateUsername(id: string | ObjectId, username: string | undefined) {
      try {
        if(!username || username === "") return;

        await UserModel.findByIdAndUpdate(id, { username });
      } catch(error: any) {
        console.log(error.message);
      }
    },

    async updateEmail(id: string | ObjectId, email: string | undefined) {
      try {
        if(!email || email === "") return;

        await UserModel.findByIdAndUpdate(id, { email });
      } catch(error: any) {
        console.log(error.message);
      }
    },
  };

  public async handle(data: IUpdateUserDTO): Promise<void> {
    try {
      const { id, email, username } = data;
      const { updateEmail, updateUsername, } = this.acceptedFields;

      await updateEmail(id, email);
      await updateUsername(id, username);
    } catch(error: any) {
      throw new Error(error.message);
    }
  } 
}

export { UpdateUserService };