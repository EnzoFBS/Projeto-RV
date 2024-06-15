import express from "express";
import { config } from "dotenv";
import { GetProteinsController } from "./controllers/get-proteins/get-proteins";
import { DbMongoGetProteinsRepository } from "./repositories/get-proteins/mongo-get-proteins";

config();

const app = express();

const port = process.env.PORT || 8000;

app.get("/proteins", async (req, res) => {
  const mongoGetProteinsRepository = new DbMongoGetProteinsRepository();
  const getProteinsController = new GetProteinsController(
    mongoGetProteinsRepository
  );

  const { body, statusCode } = await getProteinsController.handle();
  res.send(body).status(statusCode);
});

app.listen(port, () => console.log(`listening on port ${port}`));
