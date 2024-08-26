import { Request, Response } from "express";
import ApiModel from "../models/Api.Model";

export const Unblockey = async (req: Request, res: Response) => {
  const key: string = req.params.id;

  try {
    const updatedKey = await ApiModel.findOneAndUpdate(
      { key: key }, 
      { $set: { isBlocked: false } },
      { new: true } 
    );
    if (!updatedKey) {
      return res.status(404).json({ message: "No available keys" });
    }

    return res.status(200).json({ message: "Key Unblocked Successfully" });
  } catch (error) {
    console.error("Error fetching key information:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};
