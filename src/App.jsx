import React, { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Herointro  from "./Hero/Herointro";
import landingVideo from "./assets/land.mp4";
import "./App.css";
import Project from './Project/Project.jsx'

import HeroFlow from "./Heroflow";

/* ---------- HOME PAGE ---------- */
const Home = () => {
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleEnter = () => {
    if (!name.trim()) return;
    navigate("/hero", { state: { name } });
  };

  useEffect(() => {
    const video = document.querySelector(".bg-video");
    if (video) video.play().catch(() => {});
  }, []);

  return (
    <div className="video-wrapper">
      <video className="bg-video" autoPlay loop muted playsInline>
        <source src={landingVideo} type="video/mp4" />
      </video>

      <div className="video-overlay"></div>

      <div className="app-container">
        <h2 className="app-title">Welcome 👋</h2>

        <input
          type="text"
          className="name-input"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <button className="enter-btn" onClick={handleEnter}>
          Enter
        </button>
      </div>
    </div>
  );
};

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/hero" element={<HeroFlow />} />
      <Route path="/Project" element={<Project/>}/>
    

    </Routes>
  );
}
