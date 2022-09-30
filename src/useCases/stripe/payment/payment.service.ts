import { IPaymentDTO } from "./payment.dto";
import Stripe from 'stripe';

class PaymentService {
  public async handle(data: IPaymentDTO): Promise<void> {
    try { 
      const { tokenId, amount } = data;

      const stripe = new Stripe(
        process.env.STRIPE_KEY!, 
        { apiVersion: '2022-08-01' }
      );

      stripe.charges.create(
        {
          source: tokenId,
          amount: amount,
          currency: "usd",
        }, 
      );
    } catch(error: any) {
      throw new Error("Impossible to complete payment");
    }
  }
}

export { PaymentService };