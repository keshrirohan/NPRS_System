import cv2
import pytesseract
import numpy as np

# pytesseract.pytesseract.tesseract_cmd = r"C:\Program Files\Tesseract-OCR\tesseract.exe"


def detect_number_plate(image_bytes):
    try:
        img = cv2.imdecode(
            np.frombuffer(image_bytes, np.uint8),
            cv2.IMREAD_COLOR
        )

        # resize for better OCR
        img = cv2.resize(img, None, fx=1.5, fy=1.5)

        gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)

        # smooth
        gray = cv2.bilateralFilter(gray, 11, 17, 17)

        # edge detect
        edged = cv2.Canny(gray, 30, 200)

        # find contours
        contours, _ = cv2.findContours(
            edged, cv2.RETR_TREE, cv2.CHAIN_APPROX_SIMPLE
        )

        # sort largest
        contours = sorted(contours, key=cv2.contourArea, reverse=True)[:10]

        plate_img = None

        for cnt in contours:
            approx = cv2.approxPolyDP(cnt, 10, True)

            if len(approx) == 4:
                x, y, w, h = cv2.boundingRect(cnt)

                ratio = w / float(h)

                # plate shape filter
                if 2 < ratio < 6:
                    plate_img = gray[y:y+h, x:x+w]
                    break

        # ❌ agar plate detect nahi hui
        if plate_img is None:
            return "PLEASE UPLOAD CLEAR PLATE IMAGE"

        # threshold for OCR
        _, thresh = cv2.threshold(
            plate_img, 0, 255,
            cv2.THRESH_BINARY + cv2.THRESH_OTSU
        )

        # OCR config (VERY IMPORTANT)
        text = pytesseract.image_to_string(
            thresh,
            config='--psm 7 -c tessedit_char_whitelist=ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
        )

        # clean result
        clean_text = "".join(e for e in text if e.isalnum())

        # final validation
        if len(clean_text) < 5:
            return "TRY CLEAR IMAGE"

        return clean_text

    except Exception as e:
        return str(e)