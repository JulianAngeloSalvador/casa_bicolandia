import express from "express";
import cors from "cors";

const app = express();
const port = 4000;

// Built-in middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Server connection indicator
app.listen(port, () => console.log(`Server is running at port ${port}`));
