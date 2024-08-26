import { Request, Response } from "express";
import ApiModel from "../models/Api.Model"; 

export const DeleteKey = async (req: Request, res: Response) => {
  const keyToDelete: string = req.params.id;

  try {
    const deletedKey = await ApiModel.findOneAndDelete({ key: keyToDelete });

    if (!deletedKey) {
      return res.status(404).json({ message: 'Key not found' });
    }
    
    return res.status(200).json({ message: "Key deleted successfully" });
  } catch (error) {
    console.error("Error deleting key:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};
