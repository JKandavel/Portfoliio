import React from "react";
import "./Project.css";

export default function Project() {
  return (
    <div className="projects-page">
      <h1 className="projects-title">My Projects</h1>

      <div className="projects-grid">
        <div className="project-card">
          <h2>Food Truck</h2>
          <p>
            “A modern food truck website that showcases our menu, locations, and special offers — making it easy for customers to discover, order, and enjoy our delicious street food.”
          </p>
          <button>Visit</button>
        </div>

        <div className="project-card">
          <h2>Billing Software</h2>
          <p>
            A real-time speech-to-animation system converting voice into sign
            language using React and 3D avatars.
          </p>
          <button>Visit</button>
        </div>

        <div className="project-card">
          <h2>Future Path</h2>
          <p>
            A modern fashion store built with React and Vite, focusing on clean
            UI and smooth user experience.
          </p>
          <button>Visit</button>
        </div>
      </div>
    </div>
  );
}
