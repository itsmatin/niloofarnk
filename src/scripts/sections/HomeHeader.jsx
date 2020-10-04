import React, { useState, useEffect } from "react";
import ProgressiveImage from "react-progressive-image";
import AnimatedText from "../utils/AnimatedText";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const HomeHeader = ({ initialLoading, props }) => {
  const { ref, inView, entry } = useInView();
  useEffect(() => {
    console.log(inView);
  }, [inView]);

  return (
    <header className="home__header" {...props} ref={ref}>
      <h1 className="home__header--title">
        <AnimatedText isVisible={inView}>
          NILOOFAR NIKOOKAR IS A DESIGNER BASED IN LOS ANGELES CA.
        </AnimatedText>
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
