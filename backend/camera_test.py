import cv2

# ---------------------------------
# 1. تحميل Haar Cascade
# ---------------------------------
face_cascade = cv2.CascadeClassifier(
    cv2.data.haarcascades + 'haarcascade_frontalface_alt2.xml'
)

# ---------------------------------
# 2. فتح الكاميرا
# ---------------------------------
cap = cv2.VideoCapture(0)
if not cap.isOpened():
    print("Cannot open camera")
    exit()

# ---------------------------------
# 3. متغيرات التتبع
# ---------------------------------
tracker = None
tracking = False
max_faces = 0

# ---------------------------------
# 4. الحلقة الرئيسية
# ---------------------------------
while True:
    ret, frame = cap.read()
    if not ret:
        break

    gray = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)

    # -------------------------------
    # إذا ما في تتبع → نعمل كشف وجه
    # -------------------------------
    if not tracking:
        faces = face_cascade.detectMultiScale(
            gray,
            scaleFactor=1.1,
            minNeighbors=6,
            minSize=(50, 50)
        )

        if len(faces) > 0:
            # نأخذ أول وجه
            (x, y, w, h) = faces[0]

            # إنشاء tracker
            tracker = cv2.TrackerCSRT_create()
            tracker.init(frame, (x, y, w, h))
            tracking = True

            if len(faces) > max_faces:
                max_faces = len(faces)

    # -------------------------------
    # إذا في تتبع → نتابع الوجه
    # -------------------------------
    else:
        success, box = tracker.update(frame)

        if success:
            x, y, w, h = map(int, box)
            cv2.rectangle(frame, (x, y), (x + w, y + h), (0, 255, 0), 2)
            cv2.putText(frame, "TRACKING", (x, y - 10),
                        cv2.FONT_HERSHEY_SIMPLEX, 0.6, (0, 255, 0), 2)
        else:
            # إذا فشل التتبع → نرجع للكشف
            tracking = False
            tracker = None

    cv2.imshow("Face Detection + Tracking", frame)

    if cv2.waitKey(1) & 0xFF == ord('q'):
        break

# ---------------------------------
# 5. تنظيف
# ---------------------------------
print("Max faces detected:", max_faces)
cap.release()
cv2.destroyAllWindows()
