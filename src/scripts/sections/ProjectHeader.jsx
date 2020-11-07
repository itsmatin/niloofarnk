import React from "react";
import {
  motion,
  useViewportScroll,
  useTransform,
  useSpring,
} from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "../components/Image";
import AnimatedText from "../utils/AnimatedText";
import { ease } from "../utils/config";

const transition = { ease, duration: 1 };

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

const ProjectHeader = () => {
  const { scrollYProgress } = useViewportScroll();
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });
  const opacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);
  const opacitySpring = useSpring(opacity, { stiffness: 200, bounce: 0 });

  return (
    <motion.header
      style={{ opacity: opacitySpring }}
      className="project__header"
    >
      <Image
        imageClass="home__header--image"
        containerClass="project__header--image-container"
        compressed="main-compressed.jpg"
        animate="animate"
        main="main.jpg"
        alt="Niloofar Nikookar Portfolio"
        text="Spring 2020"
        captionVariants={imageCaptionVariants}
        imageVariants={imageVariants}
        viewOptions={{ triggerOnce: true }}
      />
      <h1 ref={ref} className="project__header__title">
        <AnimatedText>
          Consolidated Correctional Treatment Facility
        </AnimatedText>
        <br />
        <small>
          A super short description goes right here, almost exactly as long as
          this sample text
        </small>
      </h1>
    </motion.header>
  );
};

export default ProjectHeader;
