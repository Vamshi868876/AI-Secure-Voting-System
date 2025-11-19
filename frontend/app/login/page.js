'use client';
import { useRef, useState } from 'react';

export default function FaceLogin() {
  const videoRef = useRef(null);
  const [status, setStatus] = useState("Click Start Camera");

  const startCamera = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({ video: true });
    videoRef.current.srcObject = stream;
    setStatus("Camera on! Now click Capture");
  };

  const captureAndLogin = async () => {
    const canvas = document.createElement("canvas");
    canvas.width = videoRef.current.videoWidth;
    canvas.height = videoRef.current.videoHeight;
    canvas.getContext('2d').drawImage(videoRef.current, 0, 0);

    canvas.toBlob(async (blob) => {
      const form = new FormData();
      form.append("user_id", "vamshi");
      form.append("image", blob, "face.jpg");

      setStatus("Registering your face...");
      await fetch("http://localhost:8000/register-face", {
        method: "POST",
        body: form
      });

      setStatus("Verifying face with AI...");
      const res = await fetch("http://localhost:8000/login-face", {
        method: "POST",
        body: form
      });

      const data = await res.json();
      
      if (res.ok) {
        setStatus("Face Verified! Casting vote...");
        const voteForm = new FormData();
        voteForm.append("candidate", "Candidate A");
        voteForm.append("features", JSON.stringify([1.5, 2, 0.3, 0.8]));  // Normal human behavior
        
        const voteRes = await fetch("http://localhost:8000/vote", {
          method: "POST",
          body: voteForm
        });
        const voteData = await voteRes.json();
        setStatus(voteData.message || "VOTE SUCCESSFUL!");
      } else {
        setStatus(data.detail || "Face not matched");
      }
    });
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center p-10">
      <h1 className="text-4xl font-bold mb-8">AI Face Authentication Login</h1>
      <video ref={videoRef} autoPlay className="w-96 border-4 border-blue-500 rounded-lg mb-6" />
      <div className="space-x-4">
        <button onClick={startCamera} className="bg-green-600 px-6 py-3 rounded text-xl">Start Camera</button>
        <button onClick={captureAndLogin} className="bg-blue-600 px-6 py-3 rounded text-xl">Capture & Login</button>
      </div>
      <p className="mt-8 text-2xl font-bold text-yellow-400">{status}</p>
    </div>
  );
}