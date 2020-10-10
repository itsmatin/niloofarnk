import React from "react";
import { Link } from "react-router-dom";
import ClickAwayListener from "react-click-away-listener";
import { motion } from "framer-motion";
import Image from "./Image";
import { ease } from "../utils/config";

const transition = {
  ease,
  duration: 0.6,
};

const containerVariants = {
  initial: {
    x: "100%",
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
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
      <h1>DESIGNS</h1>
      <h2>This is a Project, Cool One</h2>
      <Image
        containerClass="sidebar--image"
        image
        main="capture.jpg"
        compressed="capture.jpg"
      />
      <h5 className="sidebar--subtitle">Spring 2015</h5>
      <p className="sidebar--text">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit
        laboriosam in saepe? Consequuntur autem fugiat impedit voluptatum
        aliquam fuga perspiciatis iste quo vitae, sequi neque porro sit tempora
        enim fugit maxime non soluta necessitatibus commodi praesentium harum
        natus!
      </p>
      <Link className="sidebar--button" to="/designs/12">
        Visit Full Project
      </Link>
    </motion.div>
  );
};

export default ProjectSidebar;
