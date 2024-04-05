import express from "express";
import cors from "cors";
import mongoose from "mongoose";

import userRoutes from "./routes/userRoute.js";

import dotenv from "dotenv";
dotenv.config();

const app = express();
const port = 4000;

// For MongoDB
const mongoURI = process.env.MONGO_DB;
async function connectToMongoDB() {
  try {
    await mongoose.connect(mongoURI);
  } catch (error) {
    console.error("Database Connection Error: ", error);
  }
}

// Built-in middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Routes
app.use("/users", userRoutes);

//  Server connection indicator
app.listen(port, () => console.log(`Server is running at port ${port}`));

// DB connection indicator
connectToMongoDB();
mongoose.connection.on("error", (err) =>
  console.error("Error encountered: ", err)
);
mongoose.connection.once("open", () =>
  console.log("Database connection success")
);
