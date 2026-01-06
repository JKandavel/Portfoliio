import { forwardRef } from "react";
import MyVision from "../My_vision/MyVision.jsx";
import ExploreProjects from "../ExploreProject/ExploreProject.jsx";
import "./VisionFlow.css";

const VisionFlow = forwardRef((props, ref) => {
  return (
    <div className="vision-flow" ref={ref}>
      <MyVision />
      <ExploreProjects />
    </div>
  );
});

export default VisionFlow;
