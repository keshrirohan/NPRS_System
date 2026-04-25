from flask import Flask, request, jsonify
from utils.plateDetector import detect_number_plate

app = Flask(__name__)

@app.route("/detect", methods=["POST"])
def detect_plate():
    try:
        if "image" not in request.files:
            return jsonify({"error": "No file uploaded"})

        file = request.files["image"]

        image_bytes = file.read()

        result = detect_number_plate(image_bytes)

        return jsonify({
            "plate_number": result
        })

    except Exception as e:
        return jsonify({
            "error": str(e)
        })

# if __name__ == "__main__":
#     app.run(port=5001, debug=True)