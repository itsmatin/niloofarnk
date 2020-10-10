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

const transition = { delay: 1.2, ease, duration: 1 };

const imageCaptionVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: { delay: 2, duration: 0.5 },
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
  const opacity = useTransform(scrollYProgress, [0, 0.9], [1, 0]);
  const opacitySpring = useSpring(opacity, { stiffness: 200, bounce: 0 });

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
