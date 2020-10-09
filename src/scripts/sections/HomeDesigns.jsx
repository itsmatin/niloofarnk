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
  const { scrollYProgress } = useViewportScroll();
  const y = useTransform(scrollYProgress, [0, 1], [1200, 200]);
  const rotate = useTransform(scrollYProgress, [0, 1], [30, 90]);
  const springRotate = useSpring(rotate, {
    bounce: 0,
    velocity: 0.1,
    damping: 25,
    stiffness: 50,
  });

  return (
    <motion.section ref={mainRef} className="home__designs">
      <h1 className="home__designs--title">
        <AnimatedText>DESIGNS</AnimatedText>
      </h1>
      <motion.div className="home__designs__container">
        {/* <motion.span className="home__designs--counter">01 / 04</motion.span> */}
        {database.designs.map((design) => {
          return (
            <Image
              // containerVariants={imageContainerVariants}

              imageClass="home__designs--image"
              containerClass="home__designs--image-container"
              title={design.title}
              main={design.image}
              text="2019 - 2020"
            />
          );
        })}
      </motion.div>
      <motion.div
        transition={transition}
        style={{ y, rotate: springRotate }}
        className="home__designs--triangle"
      />
    </motion.section>
  );
};

export default HomeDesigns;
