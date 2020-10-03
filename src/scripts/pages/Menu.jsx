import React from "react";
import { motion } from "framer-motion";
import { ease, white, black } from "../utils/config";
import database from "../utils/database";
import { Link } from "react-router-dom";

const { researches, designs } = database;

const transition = { duration: 1, ease };

const containerVariants = {
  initial: {
    background: white,
    height: 0,
  },
  animate: {
    background: black,
    height: "100vh",
  },
  exit: {
    background: black,
    height: 0,
  },
};

function ListItem({ ...props }) {
  return (
    <motion.li className="menu__list--item">
      <Link to={props.id} key={props.index}>
        {`0${props.index + 1}. ${props.title}`}
      </Link>
    </motion.li>
  );
}

const Menu = () => {
  return (
    <motion.div
      variants={containerVariants}
      transition={transition}
      initial="initial"
      animate="animate"
      exit="exit"
      className="menu"
    >
      <div className="menu--container">
        <div className="menu__list menu__list--designs">
          <h2 className="menu--subtitle">DESIGNS</h2>
          {designs.map((item, index) => (
            <ListItem title={item.title} id={item.id} index={index} />
          ))}
        </div>
        <motion.h1
          whileHover={{ backgroundColor: "#BFD2CF", color: black }}
          className="menu__title menu__title--about"
        >
          <Link to="/">ABOUT</Link>
        </motion.h1>
      </div>

      <div className="menu--container">
        <motion.h1
          whileHover={{ backgroundColor: "#EBEACF", color: black }}
          className="menu__title menu__title--home"
          to="/"
        >
          <Link to="/">HOME</Link>
        </motion.h1>

        <div className="menu__list menu__list--researches">
          <h2 className="menu--subtitle">RESEARCHES</h2>
          {researches.map((item, index) => (
            <ListItem title={item.title} id={item.id} index={index} />
          ))}

          <motion.h1
            whileHover={{ backgroundColor: "#E4D8DF", color: black }}
            className="menu__title menu__title--contact"
            to="/contact"
          >
            <Link to="/">CONTACT</Link>
          </motion.h1>
        </div>
      </div>
    </motion.div>
  );
};

export default Menu;
