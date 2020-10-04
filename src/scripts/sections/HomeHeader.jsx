import React, { useState, useEffect } from "react";
import ProgressiveImage from "react-progressive-image";
import AnimatedText from "../utils/AnimatedText";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const HomeHeader = ({ initialLoading, props }) => {
  const { ref, inView, entry } = useInView();

  return (
    <header className="home__header" {...props} ref={ref}>
      <h1 className="home__header--title">
        <AnimatedText style={{ borderBottom: "1px solid white" }}>
          I'M NILOOFAR NIKOOKAR,
        </AnimatedText>
        <br />
        <AnimatedText>AN ARCHITECTURAL DESIGNER AND RESEARCHER</AnimatedText>
      </h1>

      <ProgressiveImage placeholder="main-compressed.jpg" src="main.jpg">
        {(src) => (
          <motion.img
            src={src}
            alt="Niloofar Nikookar Portfolio"
            className="home__header--image"
          ></motion.img>
        )}
      </ProgressiveImage>
    </header>
  );
};

export default HomeHeader;
