import { useEffect, useRef, useState } from "react";
import Aboutme from "../Aboutme/Aboutme";
import VisionFlow from "../VisionFlow/VisionFlow";
import "./MobileStory.css";

export default function MobileStory() {
  const aboutRef = useRef(null);
  const visionRef = useRef(null);

  const [showAbout, setShowAbout] = useState(false);
  const [showVision, setShowVision] = useState(false);

  useEffect(() => {
    const onWheel = (e) => {
      /* 🔹 WHEN VISION IS OPEN */
      if (showVision) {
        const visionEl = visionRef.current;
        if (!visionEl) return;

        const atTop = visionEl.scrollTop <= 0;

        // Only slide back if Vision is at top and user scrolls up
        if (atTop && e.deltaY < -70) {
          e.preventDefault();
          setShowVision(false);
        }

        return; // allow normal scroll inside Vision
      }

      /* HERO → ABOUT */
      if (!showAbout && e.deltaY > 10) {
        e.preventDefault();
        setShowAbout(true);
        return;
      }

      if (!aboutRef.current) return;

      const el = aboutRef.current;
      const atBottom =
        el.scrollTop + el.clientHeight >= el.scrollHeight - 5;
      const atTop = el.scrollTop <= 0;

      /* ABOUT → VISION */
      if (showAbout && atBottom && e.deltaY > 10) {
        e.preventDefault();
        setShowVision(true);
        return;
      }

      /* ABOUT → HERO */
      if (showAbout && atTop && e.deltaY < -10) {
        e.preventDefault();
        setShowAbout(false);
      }
    };

    window.addEventListener("wheel", onWheel, { passive: false });
    return () => window.removeEventListener("wheel", onWheel);
  }, [showAbout, showVision]);

  return (
    <div className="story-layer">
      {/* ABOUT PANEL */}
      <div
        className={`about-scroll ${showAbout && !showVision ? "show" : ""}`}
        ref={aboutRef}
      >
        <Aboutme />
      </div>

      {/* VISION PANEL */}
      <div className={`vision-panel ${showVision ? "show" : ""}`}>
        <VisionFlow ref={visionRef} />
      </div>
    </div>
  );
}
