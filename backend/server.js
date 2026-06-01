import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import userRoutes from "./routes/userRoutes.js";
import testRoutes from "./routes/testRoutes.js";
import taskRoutes from "./routes/taskRoutes.js";

dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/v1/users", userRoutes);
app.use("/api/v1/test", testRoutes);
app.use("/api/v1/tasks", taskRoutes);

const PORT = process.env.PORT;

app.get("/", (req, res) => {
    res.send("server is running on the backend")
});

app.listen(PORT, () => {
    console.log(`server is running is on port ${PORT}`)
});
