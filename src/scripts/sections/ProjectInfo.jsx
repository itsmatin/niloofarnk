import React from "react";
import { motion } from "framer-motion";
import { white, black, ease } from "../utils/config";

const colorVariants = {
  white: { color: white, borderColor: white },
  black: { color: black, borderColor: black },
};

const ProjectInfo = ({ bgColor, project }) => {
  return (
    <motion.div
      transition={{ ease: ease }}
      variants={colorVariants}
      initial="white"
      animate={bgColor === "white" ? "black" : "white"}
      className="project__info"
    >
      <p className="project__info--description">{project.infoDescription}</p>
      <div className="project__info__box">
        <span>Type</span>
        <h5> {project.type}</h5>
      </div>
      <div className="project__info__box">
        <span>Date</span>
        <h5>
          {project.time} {project.year}
        </h5>
      </div>
      <div className="project__info__box">
        <span>Type</span>
        <h5>Commercial</h5>
      </div>
    </motion.div>
  );
};

export default ProjectInfo;
