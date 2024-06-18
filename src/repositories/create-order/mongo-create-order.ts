import { MongoClient } from "../../db/mongo";
import {
  CreateOrderParams,
  ICreateOrderRepository,
} from "../../controllers/create-order/protocols";
import { Order } from "../../models/order";
import { Protein } from "../../models/protein";
import { ObjectId } from "mongodb";
import { Broth } from "../../models/broth";

export class MongoCreateOrderRepository implements ICreateOrderRepository {
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

  async findProteinById(id: string): Promise<Protein | null> {
    try {
      if (!/^[0-9a-fA-F]{24}$/.test(id)) {
        throw new Error("Invalid ID format");
      }

      const objectId = new ObjectId(id);
      const protein = await MongoClient.db
        .collection<Protein>("proteins")
        .findOne({ _id: objectId });

      if (!protein) {
        return null;
      }

      console.log("essa e a protian: ", protein);
      return protein;
    } catch (error) {
      console.error("Error finding protein by ID:", error);
      return null;
    }
  }

  async findBrothById(id: string): Promise<Broth | null> {
    try {
      if (!/^[0-9a-fA-F]{24}$/.test(id)) {
        throw new Error("Invalid ID format");
      }

      const objectId = new ObjectId(id);
      const broth = await MongoClient.db
        .collection<Broth>("broths")
        .findOne({ _id: objectId });

      if (!broth) {
        return null;
      }

      console.log("essa e a Broths: ", broth);
      return broth;
    } catch (error) {
      console.error("Error finding broth by ID:", error);
      return null;
    }
  }
}
