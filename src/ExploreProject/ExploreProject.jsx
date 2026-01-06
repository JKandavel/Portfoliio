import { useNavigate } from "react-router-dom";
import "./ExploreProject.css";

export default function ExploreProjects() {
  const nav = useNavigate();

  return (
    <section className="explore-projects">
      <h2>Want to see what I’ve built?</h2>
      <p>
        Real-world projects that showcase my skills in React, UI design, and
        problem solving.
      </p>

      <button onClick={() => nav("/Project")}>
        Explore My Projects →
      </button>
    </section>
  );
}
