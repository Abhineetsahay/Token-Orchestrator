import { Request, Response } from "express";
import ApiKey from "../models/Api.Model";

export const KeepAliveKey = async (req: Request, res: Response) => {
  const keyToKeepAlive: string = req.params.id;

  try {
    const updatedKey = await ApiKey.findOneAndUpdate(
      { key: keyToKeepAlive },
      { $set: { keepAliveAt: new Date() } },
      { new: true }
    );

    if (!updatedKey) {
      return res.status(404).json({ message: "Key not found" });
    }

    return res
      .status(200)
      .json({ message: "Key keep-alive updated successfully" });
  } catch (error) {
    console.error("Error updating key keep-alive:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};
