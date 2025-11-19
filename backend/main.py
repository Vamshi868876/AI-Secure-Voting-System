# backend/main.py  (LIGHT & 100% WORKING VERSION - NO DEEPFACE)
from fastapi import FastAPI, File, UploadFile, Form
from fastapi.middleware.cors import CORSMiddleware
import face_recognition
import numpy as np
import os
import shutil
import uuid

app = FastAPI(title="Tammudu AI Voting - Light & Fast")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_methods=["*"],
    allow_headers=["*"],
)

os.makedirs("faces", exist_ok=True)
os.makedirs("temp", exist_ok=True)

@app.post("/register")
async def register(user_id: str = Form(...), file: UploadFile = File(...)):
    path = f"temp/{uuid.uuid4()}.jpg"
    with open(path, "wb") as f:
        shutil.copyfileobj(file.file, f)
    
    image = face_recognition.load_image_file(path)
    encoding = face_recognition.face_encodings(image)
    
    if len(encoding) == 0:
        os.remove(path)
        return {"error": "No face found!"}
    
    np.save(f"faces/{user_id}.npy", encoding[0])
    os.remove(path)
    return {"message": f"Registered {user_id} successfully!"}

@app.post("/login")
async def login(user_id: str = Form(...), file: UploadFile = File(...)):
    path = f"temp/{uuid.uuid4()}.jpg"
    with open(path, "wb") as f:
        shutil.copyfileobj(file.file, f)
    
    if not os.path.exists(f"faces/{user_id}.npy"):
        os.remove(path)
        return {"error": "Register first!"}
    
    known = np.load(f"faces/{user_id}.npy")
    unknown = face_recognition.load_image_file(path)
    encoding = face_recognition.face_encodings(unknown)
    
    if len(encoding) == 0:
        os.remove(path)
        return {"error": "No face in camera!"}
    
    match = face_recognition.compare_faces([known], encoding[0], tolerance=0.5)
    os.remove(path)
    
    if match[0]:
        return {"success": True, "message": "Face Login Success! Vote Now"}
    else:
        return {"error": "Face not matched!"}

@app.get("/")
async def home():
    return {"message": "Tammudu's AI Voting System Running!"}