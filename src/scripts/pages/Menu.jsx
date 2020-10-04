import React from "react";
import { motion } from "framer-motion";
import { ease, white, black } from "../utils/config";
import database from "../utils/database";
import { Link } from "react-router-dom";
import AnimatedText from "../utils/AnimatedText";

const { researches, designs } = database;

const transition = { duration: 1, ease };

const containerVariants = {
  initial: {
    background: white,
    height: 0,
    opacity: 0,
  },
  animate: {
    background: black,
    height: "100vh",
    opacity: 1,
    overflowY: "initial",
  },
  exit: {
    background: black,
    height: 0,
    opacity: 0,
    overflowY: "hidden",
  },
};

function ListItem({ ...props }) {
  return (
    <motion.li
      animate={{ opacity: 0.25, transition: { delay: 0.85 } }}
      initial={{ borderBottom: `1px solid ${black}`, opacity: 0 }}
      exit={{ borderBottom: `1px solid ${black}`, opacity: 0 }}
      whileHover={{ opacity: 1, borderBottom: `1px solid ${white}` }}
      className="menu__list--item"
    >
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
        <div className="menu__list">
          <motion.h2
            exit={{ opacity: 0 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 0.85 } }}
            className="menu--subtitle"
          >
            DESIGNS
          </motion.h2>
          {designs.map((item, index) => (
            <ListItem title={item.title} id={item.id} index={index} />
          ))}
        </div>
        <motion.h1
          whileHover={{ backgroundColor: "#BFD2CF", color: black }}
          className="menu__title menu__title--about"
        >
          <Link to="/">
            <AnimatedText transition={{ delay: 0.85 }} addSpace={false}>
              ABOUT
            </AnimatedText>
          </Link>
        </motion.h1>
      </div>

      <div className="menu--container">
        <motion.h1
          whileHover={{ backgroundColor: "#EBEACF", color: black }}
          className="menu__title menu__title--home"
          to="/"
        >
          <Link to="/">
            <AnimatedText transition={{ delay: 0.85 }} addSpace={false}>
              HOME
            </AnimatedText>
          </Link>
        </motion.h1>

        <div className="menu__list menu__list--researches">
          <motion.h2
            exit={{ opacity: 0 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 0.85 } }}
            className="menu--subtitle"
          >
            RESEARCHES
          </motion.h2>
          {researches.map((item, index) => (
            <ListItem title={item.title} id={item.id} index={index} />
          ))}

          <motion.h1
            whileHover={{ backgroundColor: "#E4D8DF", color: black }}
            className="menu__title menu__title--contact"
            to="/contact"
          >
            <Link to="/">
              <AnimatedText transition={{ delay: 0.85 }} addSpace={false}>
                CONTACT
              </AnimatedText>
            </Link>
          </motion.h1>
        </div>
      </div>
    </motion.div>
  );
};

export default Menu;
