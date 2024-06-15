import { IGetProteinsRepository } from "../../controllers/get-proteins/protocols";
import { MongoClient } from "../../db/mongo";
import { Protein } from "../../models/protein";

export class DbMongoGetProteinsRepository implements IGetProteinsRepository {
  async getProteins(): Promise<Protein[]> {
    const proteins = await MongoClient.db
      .collection<Omit<Protein, "id">>("proteins")
      .find({})
      .toArray();

    return proteins.map(({ _id, ...rest }) => ({
      ...rest,
      id: _id.toString(),
    }));
  }
}
