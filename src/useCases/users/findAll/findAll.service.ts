import { UserModel } from "../../../models/user.model";

class FindAllUsersService {
  public async handle(): Promise<Array<any>> {
    try {
      const users = await UserModel
        .find({ })
        .select("username email isAdmin");
      
      return users;
    } catch(error: any) {
      throw new Error("impossible to complete request");
    }
  }
}

export { FindAllUsersService };