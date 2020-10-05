import React, { useState, useEffect } from "react";
import ProgressiveImage from "react-progressive-image";
import AnimatedText from "../utils/AnimatedText";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { ease } from "../utils/config";

const transition = { delay: 1.2, ease, duration: 1 };

const imageVariants = {
  initial: {
    scaleY: 0,
    opacity: 0,
  },
  animate: {
    scaleY: 1,
    opacity: [0, 1],
  },
};

const HomeHeader = ({ initialLoading, props }) => {
  const { ref, inView, entry } = useInView();

  return (
    <header className="home__header" {...props} ref={ref}>
      <h1 className="home__header--title">
        <AnimatedText>I'M NILOOFAR NIKOOKAR,</AnimatedText>
        <br />
        <AnimatedText>AN ARCHITECTURAL DESIGNER AND RESEARCHER</AnimatedText>
      </h1>

      <ProgressiveImage placeholder="main-compressed.jpg" src="main.jpg">
        {(src) => (
          <motion.img
            variants={imageVariants}
            transition={transition}
            animate="animate"
            initial="initial"
            src={src}
            alt="Niloofar Nikookar Portfolio"
            className="home__header--image"
          />
        )}
      </ProgressiveImage>
    </header>
  );
};

export default HomeHeader;
