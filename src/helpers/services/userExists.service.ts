import { IFindUserDTO } from "../dtos/findUser.dto";
import { UserModel } from "../../models/user.model";
import { ObjectId } from "mongoose";

class UserExistsService {
  private acceptedFields = {
    async findById(id: string | ObjectId | undefined) {
      if(!id || id === "") return false;

      const findUser = await UserModel.findById(id);
      return findUser != null;
    },

    async findByEmail(email: string | undefined): Promise<boolean> {
      if(!email || email === "") return false;

      const findUser = await UserModel.findOne({ email });
      return findUser != null;
    },

    async findByUsername(username: string | undefined): Promise<boolean> {
      if(!username || username === "") return false;

      const findUser = await UserModel.findOne({ username });
      return findUser != null;
    },
  } 

  public async handle(data: IFindUserDTO): Promise<boolean> {
    try { 
      const idExists = await this.acceptedFields.findById(data.id);
      const emailExists = await this.acceptedFields.findByEmail(data.email);
      const usernameExists = await this.acceptedFields.findByUsername(data.username);

      if(idExists || emailExists || usernameExists) return true;

      return false;
    } catch(error: any) {
      throw new Error('somthing went wrong');
    }
  }
}

export { UserExistsService };