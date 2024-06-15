import { MongoClient } from "../../db/mongo";
import {
  CreateOrderParams,
  ICreateOrderRepository,
} from "../../controllers/create-order/protocols";
import { Order } from "../../models/order";

export class MongoCreateOrder implements ICreateOrderRepository {
  async createOrder(params: CreateOrderParams): Promise<Order> {
    const { insertedId } = await MongoClient.db
      .collection("orders")
      .insertOne(params);

    const order = await MongoClient.db
      .collection<Omit<Order, "id">>("orders")
      .findOne({ _id: insertedId });

    if (!order) {
      throw new Error("Order not created");
    }

    const { _id, ...rest } = order;

    return { id: _id.toHexString(), ...rest };
  }
}
