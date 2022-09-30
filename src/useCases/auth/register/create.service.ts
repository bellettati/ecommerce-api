import { IUser } from "../../../@types/user";
import { ICreateUserDTO } from "./create.dto";
import { UserModel } from "../../../models/user.model";

class CreateUserService {
  public async handle(data: ICreateUserDTO): Promise<IUser> {
    try {
      const newUser = await UserModel.create(data);
      return newUser;
    } catch(error: any) {
      throw new Error("algo de errado não deu certo");
    }
  }
}

export { CreateUserService };