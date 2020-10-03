import React from "react";
import { motion } from "framer-motion";
import { ease, white, black } from "../utils/config";
import database from "../utils/database";

const { researches, designs } = database;

const transition = {
  duration: 1,
  ease,
};

const variants = {
  initial: {
    background: white,
    height: 0,
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
    >
      <div className="menu__list menu__list--designs">
        <h2 className="menu--subtitle">DESIGNS</h2>
        {designs.map((item, key) => (
          <li key={key}>{item.title}</li>
        ))}
      </div>

      <div className="menu__list menu__list--researches ">
        <h2 className="menu--subtitle">RESEARCHES</h2>
        {researches.map((item, key) => (
          <li key={key}>{item.title}</li>
        ))}
      </div>
    </motion.div>
  );
};

export default Menu;
