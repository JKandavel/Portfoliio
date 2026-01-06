import React, { useState, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Herointro.css";

import jkimg from "../assets/herooneimage.jpeg";
import threedot from "../assets/threedot.png";

import insta from "../assets/insta.png";
import github from "../assets/github.png";
import gmail from "../assets/gmail.png";
import linkedin from "../assets/linkedin.png";
import whatsapp from "../assets/whatsapp.png";

const icons = [
  { src: insta, link: "https://instagram.com" },
  { src: github, link: "https://github.com" },
  { src: gmail, link: "mailto:test@gmail.com" },
  { src: linkedin, link: "https://linkedin.com" },
  { src: whatsapp, link: "https://wa.me/91XXXXXXXXXX" },
];

const Herointro = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const userName = location.state?.name || "";

  const [index, setIndex] = useState(0);
  const startX = useRef(0);

  const swipe = (endX) => {
    if (startX.current - endX > 40) {
      setIndex((prev) => (prev + 1) % icons.length);
    } else if (endX - startX.current > 40) {
      setIndex((prev) => (prev - 1 + icons.length) % icons.length);
    }
  };

  const getClass = (i) => {
    const pos = (i - index + icons.length) % icons.length;
    if (pos === 0) return "icon center";
    if (pos === 1) return "icon right";
    if (pos === icons.length - 1) return "icon left";
    return "icon hidden";
  };

  return (
    <div className="hero-container">
      <div className="back-arrow" onClick={() => navigate("/")}>←</div>

      <img src={jkimg} className="hero-img" alt="hero" />
      <img src={threedot} className="three-dot" alt="menu" />

      <div className="hero-content">
        <h1 className="hero-title">
          <span className="h-big">H</span>
          <span className="ii-small">ii</span> 👋
          <span className="user-name"> {userName}</span>
        </h1>

        <p className="identity">
          <span className="this-is">This is</span> <span className="jk-name">JK</span>
        </p>

        <p className="role-text">
          Freelance | Web Developer | 3D Website Creator
        </p>

        <div
          className="carousel"
          onTouchStart={(e) => (startX.current = e.touches[0].clientX)}
          onTouchEnd={(e) => swipe(e.changedTouches[0].clientX)}
        >
          {icons.map((item, i) => (
            <img
              key={i}
              src={item.src}
              className={getClass(i)}
              alt=""
              onClick={() => window.open(item.link, "_blank")}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Herointro;
