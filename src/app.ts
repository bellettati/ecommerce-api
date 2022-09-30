import express from "express";
import * as dotenv from "dotenv";
import mongoose from "mongoose";
import { authRouter } from "./routes/auth.router";
import { userRouter } from "./routes/user.router";
import { productRouter } from "./routes/product.router";
import { cartRouter } from "./routes/cart.router";
import { orderRouter } from "./routes/order.router";

class App {
  public express: express.Application;

  constructor() {
    dotenv.config({ path: ".env" });

    this.express = express();

    this.database();
    this.middlewares();
    this.routes();
  }

  private database(): void {
    mongoose
      .connect(process.env.MONGO_URL!)
      .then(() => console.log('connected to Database'))
      .catch((err) => console.log(err));
  }

  private middlewares(): void {
    this.express.use(express.json());
  }

  private routes(): void {
    this.express.use('/api/auth', authRouter);
    this.express.use('/api/users', userRouter);
    this.express.use('/api/products', productRouter);
    this.express.use('/api/carts', cartRouter);
    this.express.use('/api/orders', orderRouter);
  }
}

export default new App().express;