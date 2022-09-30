import { UserModel } from "../../../models/user.model";

class FindNewUsersService {
  public async handle(): Promise<Array<any>> {
    try {
      const users = await UserModel
        .find({})
        .sort({ _id: -1 })
        .limit(5)
        .select("username email isAdmin");

      return users;
    } catch(error: any) {
      throw new Error(error.message);
    }
  }
}

export { FindNewUsersService };