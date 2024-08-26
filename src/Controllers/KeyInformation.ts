import { Request, Response } from "express";
import ApiModel from "../models/Api.Model"; 

export const GetKeyInformation = async (req: Request, res: Response) => {
  const KeyToFind: string = req.params.id;

  try {
    const findKey = await ApiModel.findOne({ key: KeyToFind });

    if (!findKey) {
      return res.status(404).json({ message: "No available keys" });
    }

    return res.status(200).end();
  } catch (error) {
    console.error('Error fetching key information:', error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};
