import { sendToPython } from "../services/pythonService.js";

export const uploadImage = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "No file uploaded",
      });
    }

    const filePath = req.file.path;

    // 🔥 Python call
    const result = await sendToPython(filePath);

    res.json({
      success: true,
      plate: result.plate_number,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Processing failed",
    });
  }
};