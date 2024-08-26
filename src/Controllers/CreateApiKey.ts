import { Request, Response } from "express";
import ApiKey from "../models/Api.Model"
import { generateApiKey } from "../utils/GenerateApikey";

export const createKey = async (req: Request, res: Response) => {
  const newKey = generateApiKey();
  const apiKey = new ApiKey({ key: newKey });
  await apiKey.save();
  res.status(201).json({ key: newKey });
};
