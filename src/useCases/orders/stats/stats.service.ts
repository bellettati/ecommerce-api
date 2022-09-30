import { OrderModel } from "../../../models/order.model";

class GetOrderStatsService {
  public async handle(): Promise<any> {
    const date = new Date();
    const lastMonth = new Date(date.setMonth(date.getMonth() - 1));
    const previousMonth = new Date(new Date().setMonth(lastMonth.getMonth() - 1));

    try {
      const data = await OrderModel.aggregate([
        { $match: { createdAt: { $gte: previousMonth } } },
        { 
          $project: {
            month: { $month: "$createdAt" },
            sales: "$amount",
          },
        },
        {
          $group: {
            _id: "$month",
            total: { $sum: "$sales" },
          },
        },
      ]);
  
      return data;
    } catch(error: any) {
      throw new Error("Impossible to complete request");
    }
  }
}

export { GetOrderStatsService };