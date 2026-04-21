import { sendToPython } from "../services/pythonService.js";
import History from "../models/History.js";

export const uploadImage = async (req, res) => {
  try {
    const filePath = req.file.path;

    const result = await sendToPython(filePath);

    const plate = result.plate_number || "NOT DETECTED";

    // ✅ IMAGE FIX (filename only)
    await History.create({
      userId: req.user.id,
      image: req.file.filename,
      plateNumber: plate,
    });

    res.json({ plate });

  } catch (err) {
    res.status(500).json({ message: "Error" });
  }
};

export const getHistory = async (req, res) => {
  const data = await History.find({ userId: req.user.id }).sort({ createdAt: -1 });
  res.json(data);
};