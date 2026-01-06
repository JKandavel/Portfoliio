import { useEffect } from "react";
import "./Aboutme.css";
import user from "./user.png";

const Aboutme = () => {
  useEffect(() => {
    const items = document.querySelectorAll(".stack-item");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.4 }
    );

    items.forEach((el) => observer.observe(el));
  }, []);

  return (
    <section className="about-overlay">
      <div className="about-inner">
        <h1>About Me</h1>

        <div className="about-img-wrapper">
          <img src={user} alt="JK" className="about-img" />
        </div>

        <div className="stack">
          <div className="stack-item">Hey, it’s me — JK 👋</div>

          <div className="stack-item">
            I’m a web developer focused on building clean, user-friendly and
            high-performance web applications using React, Vite, HTML, CSS and
            JavaScript.
          </div>

          <div className="stack-item">
            I have built portfolio sites, e-commerce platforms, real-time tools
            and automation systems while working on freelance and personal
            projects.
          </div>

          <div className="stack-item">
            I strongly believe in learning by doing. Working on real projects
            has helped me grow my problem-solving skills and confidence.
          </div>

          <div className="stack-item">
            My goal is to become a tech entrepreneur using web development and
            3D technologies to create powerful digital products.
          </div>
        </div>
      </div>
    </section>
  );
};

export default Aboutme;
