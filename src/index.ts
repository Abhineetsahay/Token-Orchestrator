import express from "express";
import { database } from "./database/config";
import dotenv from "dotenv";
import apiRoutes from "./Routes/ApiRoutes";

import ApiKey from "./models/Api.Model";

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());

app.use("/api", apiRoutes);

app.get("/", (req, res) => {
  res.send("Hello, Node Express!");
});

database();

const releaseBlockedKeys = async () => {

  try {
    const currentTime = new Date();
    const cutoffTime = new Date(currentTime.getTime() - 60000);

    const res=await ApiKey.updateMany(
      {
        isBlocked: true,
        keepAliveAt: { $lt: cutoffTime },
      },
      { $set: { isBlocked: false, keepAliveAt: null } }
    );
    console.log(res);
    
  } catch (error) {
    console.error("Error releasing blocked keys:", error);
  }
};

// setInterval(releaseBlockedKeys, 1000);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
