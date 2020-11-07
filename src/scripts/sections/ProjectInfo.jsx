import React from "react";
import { motion } from "framer-motion";
import { white, black, ease } from "../utils/config";

const colorVariants = {
  white: { color: white, borderColor: white },
  black: { color: black, borderColor: black },
};

const ProjectInfo = ({ bgColor }) => {
  return (
    <motion.div
      transition={{ ease: ease }}
      variants={colorVariants}
      initial="white"
      animate={bgColor === "white" ? "black" : "white"}
      className="project__info"
    >
      <p className="project__info--description">
        A super short description goes right here, almost exactly as long as
        this sample text
      </p>
      <div className="project__info__box">
        <span>Type</span>
        <h5>Commercial</h5>
      </div>
      <div className="project__info__box">
        <span>Duration</span>
        <h5>6 Months</h5>
      </div>
      <div className="project__info__box">
        <span>Type</span>
        <h5>Commercial</h5>
      </div>
    </motion.div>
  );
};

export default ProjectInfo;
