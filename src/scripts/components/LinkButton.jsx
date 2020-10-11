import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { black, ease, white } from "../utils/config";

const transition = { delay: 0.2, ease, duration: 0.4 };
const buttonVariants = {
  initial: {
    color: white,
  },
  whileHover: {
    color: black,
  },
};

const lineVariants = {
  initial: {
    width: "100%",
  },
  whileHover: {
    width: 0,
  },
};

const backgroundVariants = {
  initial: {
    width: 0,
  },
  whileHover: {
    width: "100%",
  },
};

const LinkButton = ({ to, className, title }) => {
  return (
    <Link to={to} className={className}>
      <motion.span
        className="link-button"
        transition={transition}
        variants={buttonVariants}
        animate="animate"
        initial="initial"
        whileHover="whileHover"
      >
        {title}
        <motion.span
          className="link-button--background"
          transition={transition}
          variants={backgroundVariants}
        />
        <motion.span
          className="link-button--line"
          transition={transition}
          variants={lineVariants}
        />
      </motion.span>
    </Link>
  );
};

export default LinkButton;
