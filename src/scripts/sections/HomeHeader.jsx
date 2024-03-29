import React from "react";
import {
  useTransform,
  useViewportScroll,
  motion,
  useSpring,
} from "framer-motion";
import { useHistory } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import AnimatedText from "../utils/AnimatedText";
import { ease } from "../utils/config";
import Image from "../components/Image";
import database from "../utils/database";

const HomeHeader = ({ props, intro }) => {
  const { push } = useHistory();
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });
  const { scrollYProgress } = useViewportScroll();
  const titleY = useTransform(scrollYProgress, [0, 0.3], [0, -100]);
  const imageY = useTransform(scrollYProgress, [0, 0.3], [0, 50]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const opacitySpring = useSpring(opacity, { stiffness: 200, bounce: 0 });
  const transition = { ease, duration: 1 };
  const imageVariants = {
    // initial: {
    //   scaleY: 0,
    //   opacity: 0,
    // },
    animate: {
      scaleY: 1,
      opacity: [0, 1],
      transition: { ...transition, delay: intro ? 4.5 : 0 },
    },
  };

  const imageCaptionVariants = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: { delay: intro ? 4.7 : 0.2, duration: 0.5 },
    },
  };

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
        onClick={() => push("/project/5")}
        imageClass="home__header--image"
        containerClass="home__header--image-container"
        animate="animate"
        src="/capstone/heterotopia-header.jpg"
        alt="Niloofar Nikookar Portfolio"
        text={database.researches.find((element) => element.id === 5).title}
        containerStyle={{ y: imageY }}
        captionVariants={imageCaptionVariants}
        imageVariants={imageVariants}
        viewOptions={{ triggerOnce: true }}
      />
    </motion.header>
  );
};

export default HomeHeader;
