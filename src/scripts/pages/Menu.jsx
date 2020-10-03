import React from "react";
import { motion } from "framer-motion";
import { ease, white, black } from "../config";

const transition = {
  duration: 1,
  ease,
};

const variants = {
  initial: {
    background: white,
  },
  animate: {
    background: black,
    height: "100%",
  },
  exit: {
    background: white,
    height: 0,
  },
};
const Menu = () => {
  return (
    <motion.div
      transition={transition}
      variants={variants}
      animate="animate"
      exit="exit"
      className="menu"
    ></motion.div>
  );
};

export default Menu;
