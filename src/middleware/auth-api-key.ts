import { Request, Response, NextFunction } from "express";
import dotenv from "dotenv";

dotenv.config({ path: "../.env" });

export const validateApiKey = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const apiKey = req.header("X-Api-Key");
  const validApiKey = process.env.API_KEY;

  if (!apiKey || apiKey !== validApiKey) {
    return res.status(403).json({ error: "x-api-key header missing" });
  }

  next();
};
