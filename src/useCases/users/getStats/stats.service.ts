import { UserModel } from "../../../models/user.model";

class GetUserStatsService {
  public async handle(): Promise<any> {
    const date = new Date();
    const lastYear = new Date(date.setFullYear(date.getFullYear() - 1));
    
    try {
      const data = await UserModel.aggregate([
        { $match: { createdAt: { $gte: lastYear } } },
        { 
          $project: {
            month: { $month: "$createdAt" },
          },
        },
        {
          $group: {
            _id: "$month",
            total: { $sum: 1 },
          },
        },
      ]);

      return data;
    } catch(error: any) {
      throw new Error(error.message);
    }
  }
}

export { GetUserStatsService };