import React from "react";
import { motion } from "framer-motion";

const transition = {
  duration: 1,
  ease: [0.6, 0.1, -0.05, 0.9],
};

const variants = {
  open: {
    background: "#eee",
    height: 0,
  },
  closed: {
    background: "#202020",
    height: 0,
  },
};

const Menu = ({ isOpen = false }) => {
  return (
    <motion.div
      transition={transition}
      variants={variants}
      animate={isOpen ? "open" : "closed"}
      className="menu"
    ></motion.div>
  );
};

export default Menu;
