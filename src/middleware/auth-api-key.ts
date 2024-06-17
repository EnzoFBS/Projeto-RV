import { Request, Response, NextFunction } from "express";
import dotenv from "dotenv";

dotenv.config({ path: "../.env" });

export const validateApiKey = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const apiKey = req.header("x-api-key");
  const validApiKey = process.env.API_KEY;

  if (!apiKey || apiKey !== validApiKey) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  next();
};
