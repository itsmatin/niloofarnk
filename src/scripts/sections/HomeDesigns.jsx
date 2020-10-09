import React, { useState, useEffect, createRef } from "react";
import { useInView, InView } from "react-intersection-observer";
import {
  motion,
  useElementScroll,
  useTransform,
  useSpring,
  useViewportScroll,
} from "framer-motion";
import AnimatedText from "../utils/AnimatedText";
import Image from "../components/Image";
import database from "../utils/database";
import { ease } from "../utils/config";

function getRandom(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const transition = { ease, delay: 0.3 };
// const imageContainerVariants = {
//   initial: {
//     opacity: 0.4,
//     scale: 0.7,
//     transition: transition,
//   },
//   animate: {
//     opacity: 1,
//     scale: 1,
//     transition: transition,
//   },
// };

const HomeDesigns = () => {
  const { mainRef, inView } = useInView({ threshold: 0.3, triggerOnce: true });
  const { scrollY } = useViewportScroll();
  const y = useTransform(scrollY, [0, 0.9], [0, 100]);

  return (
    <motion.section ref={mainRef} className="home__designs">
      <h1 className="home__designs--title">
        <AnimatedText>DESIGNS</AnimatedText>
      </h1>
      <motion.div className="home__designs__container">
        {/* <motion.span className="home__designs--counter">01 / 04</motion.span> */}
        {database.designs.map((design) => {
          var random = getRandom(-2, 2);
          return (
            <Image
              // containerVariants={imageContainerVariants}
              containerStyle={{ y: y * random }}
              imageClass="home__designs--image"
              containerClass="home__designs--image-container"
              title={design.title}
              main={design.image}
              text="2019 - 2020"
            />
          );
        })}
      </motion.div>
    </motion.section>
  );
};

export default HomeDesigns;
