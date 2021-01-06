import React from "react";
import { motion } from "framer-motion";
import { ease } from "../utils/config";
import Image from "./Image";
import AnimatedText from "../utils/AnimatedText";
import LinkButton from "./LinkButton";

const transition = {
  ease,
  duration: 0.6,
};

const containerVariants = {
  initial: {
    x: "100%",
  },
  animate: {
    x: 0,
  },
};

const ProjectSidebar = ({ data, isVisible }) => {
  return (
    <motion.div
      transition={transition}
      variants={containerVariants}
      animate={isVisible ? "animate" : "initial"}
      initial="initial"
      className="sidebar"
    >
      <h1>
        <AnimatedText isVisible={isVisible}>DESIGNS</AnimatedText>
      </h1>
      <h2>
        <AnimatedText isVisible={isVisible}>{data.title}</AnimatedText>
      </h2>
      <Image
        containerClass="sidebar--image"
        alt={data.title}
        src={data.images.header}
      />
      <h5 className="sidebar--subtitle">
        <AnimatedText isVisible={isVisible}>{data.time}</AnimatedText>
        <AnimatedText isVisible={isVisible}>{data.year}</AnimatedText>
      </h5>
      <p className="sidebar--text">
        {data?.infoDescription}
        <br />
        {data?.headerDescription}
      </p>
      <LinkButton
        title="Visit Full Project"
        className="sidebar--button"
        to={`/project/${data.id}`}
      />
    </motion.div>
  );
};

export default ProjectSidebar;
