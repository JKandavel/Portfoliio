import { useEffect } from "react";
import "./MyVision.css";

const MyVision = () => {
  useEffect(() => {
    const items = document.querySelectorAll(".vision-step");

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
    <section className="vision-page">
      <h1 className="vision-title">My Vision</h1>

      <div className="vision-step">
        <div className="vision-card">
          I begin my journey as a freelance web developer, creating real-world
          websites and applications for clients. This stage helps me understand
          real problems and build meaningful digital solutions.
        </div>
      </div>

      <div className="vision-step">
        <div className="vision-card">
          As I grow, I become a real-time problem solver, working on scalable and
          user-focused web platforms that deliver powerful experiences.
        </div>
      </div>

      <div className="vision-step">
        <div className="vision-card">
          My long-term vision is to become a tech entrepreneur using web
          development and 3D technologies to create innovative products that
          shape the future of digital interaction.
        </div>
      </div>
    </section>
  );
};

export default MyVision;
