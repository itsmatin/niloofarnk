import React from "react";
import { motion } from "framer-motion";

const transition = {
  duration: 1,
  ease: [0.6, 0.1, -0.05, 0.9],
};

const variants = {
  initial: {
    background: "#eee",
  },
  animate: {
    background: "#202020",
    height: "100%",
  },
  exit: {
    background: "#eee",
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
    >
      hi
    </motion.div>
  );
};

export default Menu;
