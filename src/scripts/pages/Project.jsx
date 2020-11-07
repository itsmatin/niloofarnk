import React from "react";
import { motion, useViewportScroll, useTransform } from "framer-motion";
import ProjectHeader from "../sections/ProjectHeader";
import Image from "../components/Image";
import { white, transparent } from "../utils/config";
import ProjectDetails from "../sections/ProjectDetails";
import ProjectShowcase from "../sections/ProjectShowcase";
import Ending from "../sections/Ending";
import ProjectProcess from "../sections/ProjectProcess";

const Project = ({ setBgColor }) => {
  return (
    <div className="project">
      <ProjectHeader />
      <div className="project__info">
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
      </div>
      <ProjectProcess />
      <ProjectDetails />
      <ProjectShowcase />
      <Ending title="02. To the next Project" />
    </div>
  );
};

export default Project;
