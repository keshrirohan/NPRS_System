import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";

import authRoutes from "./routes/authRoutes.js";
import uploadRoutes from "./routes/uploadRoutes.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// ✅ static folder (IMAGE FIX 🔥)
app.use("/uploads", express.static("uploads"));

// ✅ DB connect
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

// routes
app.use("/api/auth", authRoutes);
app.use("/api", uploadRoutes);

app.get("/", (req, res) => {
  res.send("Backend Running...");
});

app.listen(process.env.PORT || 5000, () => {
  console.log("Server Started");
});