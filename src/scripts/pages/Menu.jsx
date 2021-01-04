import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import database from "../utils/database";
import { ease, white, black } from "../utils/config";
import AnimatedText from "../utils/AnimatedText";
import Image from "../components/Image";

const { researches, designs } = database;

const transition = { duration: 1, ease };
const imageTransition = { duration: 0.4, ease };
const imageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

const containerVariants = {
  initial: {
    height: 0,
    opacity: 0,
  },
  animate: {
    background: black,
    height: "100vh",
    opacity: [0, 1],
  },
  exit: {
    // height: 0,
    opacity: 0,
    transition: {
      delay: 0.2,
      duration: 0.5,
      ease,
    },
  },
};

const Menu = () => {
  const [currentResearch, setCurrentResearch] = useState(false);
  const [currentDesign, setCurrentDesign] = useState(false);

  function handleHoverStart(type, image) {
    if (type === "design") setCurrentDesign(image);
    else setCurrentResearch(image);
  }

  function handleHoverEnd() {
    setCurrentDesign(false);
    setCurrentResearch(false);
  }

  function ListItem({ type, image, ...props }) {
    return (
      <motion.li
        animate={{ opacity: 0.25, transition: { delay: 0.85 } }}
        exit={{ borderBottom: `1px solid ${black}`, opacity: 0 }}
        whileHover={{ opacity: 1, borderBottom: `1px solid ${white}` }}
        onHoverStart={() => handleHoverStart(type, image)}
        onHoverEnd={handleHoverEnd}
        className="menu__list--item"
      >
        <Link to={props.id} key={props.index}>
          {`0${props.index + 1}. ${props.title}`}
        </Link>
      </motion.li>
    );
  }
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
            <ListItem
              type="design"
              image={item.image}
              title={item.title}
              id={item.id}
              index={index}
            />
          ))}
          <AnimatePresence>
            {currentResearch !== false && (
              <Image
                containerClass="menu__list--image-container"
                imageClass="menu__list--image"
                containerVariants={imageVariants}
                initial="initial"
                animate="animate"
                src={currentResearch}
                transition={imageTransition}
              />
            )}
          </AnimatePresence>
        </div>
        <motion.h1
          whileHover={{ backgroundColor: "#BFD2CF", color: black }}
          className="menu__title menu__title--about"
        >
          <Link to="/about">
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

        <div className="menu__list menu__list__researches">
          <motion.h2
            exit={{ opacity: 0 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 0.85 } }}
            className="menu--subtitle"
          >
            RESEARCHES
          </motion.h2>
          {researches.map((item, index) => (
            <ListItem
              type="researches"
              title={item.title}
              image={item.image}
              id={item.id}
              index={index}
            />
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
          <AnimatePresence>
            {currentDesign !== false && (
              <Image
                containerClass="menu__list--image-container"
                imageClass="menu__list--image"
                containerVariants={imageVariants}
                initial="initial"
                animate="animate"
                src={currentDesign}
                transition={imageTransition}
              />
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
};

export default Menu;
