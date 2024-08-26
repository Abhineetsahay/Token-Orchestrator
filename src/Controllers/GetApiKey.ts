import { Request, Response } from "express";
import ApiModel from "../models/Api.Model";

export const GetApiKey = async (req: Request, res: Response) => {
  const key = await ApiModel.findOneAndUpdate(
    { isBlocked: false },
    { isBlocked: true, lastUsedAt: new Date() },
    { new: true }
  );
  if (!key) return res.status(404).json({ message: "No available keys" });
  return res.status(200).json({ key: key.key });
};
