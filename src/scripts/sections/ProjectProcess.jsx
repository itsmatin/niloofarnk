import React from "react";
import { motion } from "framer-motion";

const ProjectProcess = () => {
  return (
    <div className="project__process">
      <motion.div className="project__shape project__shape--circle" />
      <h2 className="project__process--title">DESIGN PROCESS</h2>
      <img src="./process.jpg" className="project__process--image" />
      <img src="./process2.jpg" className="project__process--image" />
      <img src="./process3.jpg" className="project__process--image" />
    </div>
  );
};

export default ProjectProcess;
