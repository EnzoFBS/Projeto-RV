import { IGetBrothsRepository } from "../../controllers/get-broths/protocols";
import { MongoClient } from "../../db/mongo";
import { Broth } from "../../models/broth";

export class DbMongoGetBrothsRepository implements IGetBrothsRepository {
  async getBroths(): Promise<Broth[]> {
    const broths = await MongoClient.db
      .collection<Omit<Broth, "id">>("broths")
      .find({})
      .toArray();

    return broths.map(({ _id, ...rest }) => ({
      ...rest,
      id: _id.toString(),
    }));
  }
}
