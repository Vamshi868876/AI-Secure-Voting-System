# AI-ML Powered Secure Online Voting System

A full-stack secure e-voting platform with **biometric face authentication** and **real-time AI fraud detection**.

### Features
- Passwordless login using real-time face recognition (OpenCV + NumPy ML)
- AI-powered fraud & bot detection using Isolation Forest (scikit-learn)
- One voter → one vote enforcement
- Live camera integration with instant verification
- Prevents multiple voting and fake attempts
- Built with Next.js (Frontend) + FastAPI (Backend)

### Tech Stack
- **Frontend**: Next.js 14 (App Router), React, Tailwind CSS
- **Backend**: Python, FastAPI, OpenCV, NumPy, scikit-learn
- **ML Model**: Isolation Forest for anomaly detection

### How to Run
```bash
# Terminal 1 - Backend
cd backend
pip install -r requirements.txt
uvicorn main:app --reload
# Terminal 2 - Frontend
cd frontend
npm install next react react-dom
npx next dev
