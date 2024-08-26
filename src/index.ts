import express from "express";
import { database } from "./database/config";
import dotenv from "dotenv";
import apiRoutes from "./Routes/ApiRoutes";

import "./utils/releasedBlocekedKey";

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());

app.use("/api", apiRoutes);

app.get("/", (req, res) => {
  res.send("Hello, Node Express!");
});

database();


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
