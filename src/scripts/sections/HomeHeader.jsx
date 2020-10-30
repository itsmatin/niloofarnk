import React from "react";
import {
  useTransform,
  useViewportScroll,
  motion,
  useSpring,
} from "framer-motion";
import { useInView } from "react-intersection-observer";
import AnimatedText from "../utils/AnimatedText";
import { ease } from "../utils/config";
import Image from "../components/Image";

const transition = { ease, duration: 1 };

// const arrowVariants = {
//   initial: {
//     opacity: 0,
//     pathLength: 0,
//     scale: 0.5,
//     rotate: 0,
//   },
//   animate: {
//     opacity: 1,
//     pathLength: 1,
//     scale: 0.9,
//     rotate: 90,
//   },
// };

const imageCaptionVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: { delay: 1, duration: 0.5 },
  },
};

const imageVariants = {
  initial: {
    scaleY: 0,
    opacity: 0,
  },
  animate: {
    scaleY: 1,
    opacity: [0, 1],
    transition: transition,
  },
};

const HomeHeader = ({ props }) => {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });
  const { scrollYProgress } = useViewportScroll();
  const titleY = useTransform(scrollYProgress, [0, 0.9], [0, -200]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const opacitySpring = useSpring(opacity, { stiffness: 200, bounce: 0 });
  // const svgProgress = useTransform(scrollYProgress, [0, 0.9], [0, 1]);

  return (
    <motion.header
      style={{ opacity: opacitySpring }}
      className="home__header"
      ref={ref}
      {...props}
    >
      <motion.h1 style={{ y: titleY }} className="home__header--title">
        <AnimatedText isVisible={inView}>I'M NILOOFAR NIKOOKAR,</AnimatedText>
        <br />
        <AnimatedText isVisible={inView}>
          AN ARCHITECTURAL DESIGNER AND RESEARCHER
        </AnimatedText>
      </motion.h1>

      {/* <svg
        className="home__header--arrow"
        viewBox="0 0 50 50"
        xmlSpace="preserve"
      >
        <motion.path
          initial="initial"
          animate="animate"
          transition={transition}
          variants={arrowVariants}
          stroke={white}
          color={"red"}
          strokeWidth="1"
          d="M16.8 29c-.3 0-.5-.1-.7-.3-.4-.4-.4-1 0-1.4l7.3-7.3-7.3-7.3c-.4-.4-.4-1 0-1.4s1-.4 1.4 0l8 8c.4.4.4 1 0 1.4l-8 8c-.2.2-.5.3-.7.3z"
        />
        <motion.path
          initial="initial"
          animate="animate"
          transition={transition}
          variants={arrowVariants}
          stroke={white}
          color={"red"}
          strokeWidth="1"
          d="M20 40C9 40 0 31 0 20S9 0 20 0c4.5 0 8.7 1.5 12.3 4.2.4.3.5 1 .2 1.4-.3.4-1 .5-1.4.2C27.9 3.3 24 2 20 2 10.1 2 2 10.1 2 20s8.1 18 18 18 18-8.1 18-18c0-3.2-.9-6.4-2.5-9.2-.3-.5-.1-1.1.3-1.4.5-.3 1.1-.1 1.4.3C39 12.9 40 16.4 40 20c0 11-9 20-20 20z"
        />
      </svg> */}
      <Image
        imageClass="home__header--image"
        containerClass="home__header--image-container"
        compressed="main-compressed.jpg"
        animate="animate"
        main="main.jpg"
        alt="Niloofar Nikookar Portfolio"
        text="Spring 2020"
        captionVariants={imageCaptionVariants}
        imageVariants={imageVariants}
        viewOptions={{ triggerOnce: true }}
      />
    </motion.header>
  );
};

export default HomeHeader;
