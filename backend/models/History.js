import mongoose from "mongoose";

const historySchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  image: String,
  plateNumber: String,
}, { timestamps: true });

export default mongoose.model("History", historySchema);