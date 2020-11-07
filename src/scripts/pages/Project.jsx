import React from "react";
import { motion, useViewportScroll, useTransform } from "framer-motion";
import ProjectHeader from "../sections/ProjectHeader";
import Image from "../components/Image";
import { white, transparent } from "../utils/config";
import ProjectDetails from "../sections/ProjectDetails";
import ProjectShowcase from "../sections/ProjectShowcase";
import Ending from "../sections/Ending";
import ProjectProcess from "../sections/ProjectProcess";
import ProjectInfo from "../sections/ProjectInfo";

const Project = ({ setBgColor, bgColor }) => {
  return (
    <div className="project">
      <ProjectHeader />
      <ProjectInfo bgColor={bgColor} />
      <ProjectProcess setBgColor={setBgColor} />
      <ProjectDetails />
      <ProjectShowcase />
      <Ending title="02. To the next Project" />
    </div>
  );
};

export default Project;
