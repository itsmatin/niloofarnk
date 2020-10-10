import React, { useState, useEffect, createRef } from "react";
import { useInView, InView } from "react-intersection-observer";
import {
  motion,
  useTransform,
  useSpring,
  useViewportScroll,
} from "framer-motion";
import AnimatedText from "../utils/AnimatedText";
import Image from "../components/Image";
import database from "../utils/database";
import { ease } from "../utils/config";

const transition = { ease };
const circularImageVariants = {
  initial: {
    opacity: 0,
    rotate: 360,
  },
  animate: {
    opacity: 1,
    rotate: 360,
  },
};
const imageContainerVariants = {
  initial: {
    opacity: 1,
  },
  // animate: {
  //   opacity: 1,
  //   scale: 1,
  //   transition: transition,
  // },
  whileHover: {
    opacity: 1,
  },
  othersNotHover: {
    opacity: 0.1,
  },
};

const HomeDesigns = () => {
  const [hovered, setHovered] = useState(false);
  const { mainRef, inView } = useInView({ threshold: 0.3, triggerOnce: true });
  const { scrollYProgress } = useViewportScroll();
  const y = useTransform(scrollYProgress, [0, 1], [1200, 200]);
  const rotate = useTransform(scrollYProgress, [0, 1], [30, 90]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.5, 1]);
  const springRotate = useSpring(rotate, {
    bounce: 0,
    velocity: 0.1,
    damping: 25,
    stiffness: 50,
  });

  function handleHover(key) {
    setHovered(key);
  }

  return (
    <motion.section ref={mainRef} className="home__designs">
      <h1 className="home__designs--title">
        <AnimatedText>DESIGNS</AnimatedText>
      </h1>
      <motion.div className="home__designs__container">
        {/* <motion.span className="home__designs--counter">01 / 04</motion.span> */}
        {database.designs.map((design, index) => {
          return (
            <Image
              containerVariants={imageContainerVariants}
              imageClass="home__designs--image"
              onHoverStart={() => handleHover(index)}
              onHoverEnd={() => setHovered(false)}
              animate={hovered === false ? "initial" : "othersNotHover"}
              whileHover={hovered === index ? "whileHover" : "othersNotHover"}
              containerClass="home__designs--image-container"
              title={design.title}
              main={design.image}
              text="2019 - 2020"
              key={index}
            />
          );
        })}
      </motion.div>
      <motion.div
        transition={transition}
        style={{ y, scale, rotate: springRotate }}
        className="home__designs__triangle"
        animate={{ opacity: hovered !== false ? 0.3 : 0.1 }}
      >
        <motion.img
          variants={circularImageVariants}
          animate={hovered !== false ? "animate" : "initial"}
          className="home__designs__triangle--title"
          src="no-circle.png"
          transition={{
            rotate: {
              loop: Infinity,
              duration: 15,
              repeatDelay: 0,
              ease: "linear",
            },
          }}
        />
      </motion.div>
    </motion.section>
  );
};

export default HomeDesigns;
