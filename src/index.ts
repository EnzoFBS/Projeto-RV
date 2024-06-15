import express from "express";
import { config } from "dotenv";
import { GetProteinsController } from "./controllers/get-proteins/get-proteins";
import { DbMongoGetProteinsRepository } from "./repositories/get-proteins/mongo-get-proteins";
import { MongoClient } from "./db/mongo";

const main = async () => {
  config();

  const app = express();

  await MongoClient.connect();

  app.get("/proteins", async (req, res) => {
    const mongoGetProteinsRepository = new DbMongoGetProteinsRepository();
    const getProteinsController = new GetProteinsController(
      mongoGetProteinsRepository
    );

    const { body, statusCode } = await getProteinsController.handle();
    res.send(body).status(statusCode);
  });

  const port = process.env.PORT || 8000;
  app.listen(port, () => console.log(`listening on port ${port}`));
};

main();
