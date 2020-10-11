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
        <AnimatedText isVisible={isVisible}>
          This is a Project, Cool One
        </AnimatedText>
      </h2>
      <Image
        containerClass="sidebar--image"
        image
        main="capture.jpg"
        compressed="capture.jpg"
      />
      <h5 className="sidebar--subtitle">
        <AnimatedText isVisible={isVisible}>Spring 2015 </AnimatedText>
      </h5>
      <p className="sidebar--text">
        <AnimatedText isVisible={isVisible}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit
          laboriosam in saepe? Consequuntur autem fugiat impedit voluptatum
          aliquam fuga perspiciatis iste quo vitae, sequi neque porro sit
          tempora enim fugit maxime non soluta necessitatibus commodi
          praesentium harum natus!
        </AnimatedText>
      </p>
      <LinkButton
        title="Visit Full Project"
        className="sidebar--button"
        to="/designs/12"
      />
    </motion.div>
  );
};

export default ProjectSidebar;
