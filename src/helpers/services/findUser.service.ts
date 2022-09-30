import { IFindUserDTO } from "../dtos/findUser.dto";
import { UserModel } from "../../models/user.model";

class FindUserService {
  private acceptedFields = {
    async findByEmail (email: string | undefined): Promise<any> {
      if(!email || email === "") return;

      const findUser = await UserModel.findOne({ email });
      return findUser;
    },

    async findByUsername (username: string | undefined): Promise<any> {
      if(!username || username === "") return;

      const findUser = await UserModel.findOne({ username });
      return findUser;
    },
  } 

  public async handle(data: IFindUserDTO): Promise<any> {
    try { 
      const emailExists = await this.acceptedFields.findByEmail(data.email);
      if(emailExists) return emailExists;

      const usernameExists = await this.acceptedFields.findByUsername(data.username);
      if (usernameExists) return usernameExists;

      return;
    } catch(error: any) {
      throw new Error('somthing went wrong');
    }
  }
}

export { FindUserService };