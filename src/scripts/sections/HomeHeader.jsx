import React, { useState, useEffect } from "react";
import AnimatedText from "../utils/AnimatedText";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { ease } from "../utils/config";
import Image from "../components/Image";

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

      <Image
        imageClass="home__header--image"
        containerClass="home__header--image-container"
        compressed="main-compressed.jpg"
        main="main.jpg"
        alt="Niloofar Nikookar Portfolio"
        text="Spring 2020"
        variants={imageVariants}
        transition={transition}
      />
    </header>
  );
};

export default HomeHeader;
