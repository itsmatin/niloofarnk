import React from "react";
import { motion, useViewportScroll, useTransform } from "framer-motion";
import ProjectHeader from "../sections/ProjectHeader";
import Image from "../components/Image";
import { white, transparent, ease } from "../utils/config";
import ProjectDetails from "../sections/ProjectDetails";
import ProjectShowcase from "../sections/ProjectShowcase";
import Ending from "../sections/Ending";
import ProjectProcess from "../sections/ProjectProcess";
import ProjectInfo from "../sections/ProjectInfo";

const Project = ({ setBgColor, bgColor }) => {
  return (
    <motion.div
      exit={{ opacity: 0 }}
      transition={{ ease: ease }}
      className="project"
    >
      <ProjectHeader />
      <ProjectInfo bgColor={bgColor} />
      <ProjectShowcase />
      <ProjectProcess setBgColor={setBgColor} />
      <ProjectDetails bgColor={bgColor} />
      <Ending title="02. To the next Project" />
    </motion.div>
  );
};

export default Project;
