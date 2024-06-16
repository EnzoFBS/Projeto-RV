import express from "express";
import { config } from "dotenv";
import { GetProteinsController } from "./controllers/get-proteins/get-proteins";
import { DbMongoGetProteinsRepository } from "./repositories/get-proteins/mongo-get-proteins";
import { MongoClient } from "./db/mongo";
import { DbMongoGetBrothsRepository } from "./repositories/get-broths/mongo-get-broths";
import { GetBrothsController } from "./controllers/get-broths/get-broths";
import { MongoCreateOrderRepository } from "./repositories/create-order/mongo-create-order";
import { CreateOrderController } from "./controllers/create-order/create-order";
import { validateApiKey } from "../src/auth-api-key";

const main = async () => {
  config();

  const app = express();

  app.use(express.json());

  await MongoClient.connect();

  app.get("/proteins", validateApiKey, async (req, res) => {
    const mongoGetProteinsRepository = new DbMongoGetProteinsRepository();
    const getProteinsController = new GetProteinsController(
      mongoGetProteinsRepository
    );

    const { body, statusCode } = await getProteinsController.handle();
    res.send(body).status(statusCode);
  });
  app.get("/broths", validateApiKey, async (req, res) => {
    const mongoGetBrothsRepository = new DbMongoGetBrothsRepository();
    const getBrothsController = new GetBrothsController(
      mongoGetBrothsRepository
    );

    const { body, statusCode } = await getBrothsController.handle();
    res.send(body).status(statusCode);
  });

  app.post("/orders", validateApiKey, async (req, res) => {
    const mongoCreateOrderRepository = new MongoCreateOrderRepository();
    const createOrderController = new CreateOrderController(
      mongoCreateOrderRepository
    );

    const { body, statusCode } = await createOrderController.handle({
      body: req.body,
    });
    res.send(body).status(statusCode);
  });

  const port = process.env.PORT || 8000;
  app.listen(port, () => console.log(`listening on port ${port}`));
};

main();
