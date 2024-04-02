import express from "express";
import cors from "cors";
import { connectToMongoDB } from "./mongoose.js";

const app = express();
const port = 4000;

// Built-in middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Server and DB connection indicator
async () => {
  try {
    await connectToMongoDB();
    app.listen(port, () => console.log(`Server is running at port ${port}`));
  } catch (err) {
    console.error("Error: ", err);
    process.exit(1);
  }
};
