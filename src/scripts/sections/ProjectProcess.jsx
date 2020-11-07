import React, { useEffect } from "react";
import {
  motion,
  useTransform,
  useSpring,
  useViewportScroll,
} from "framer-motion";
import { useInView } from "react-intersection-observer";
import { white, black, grey, ease } from "../utils/config";
import Image from "../components/Image";

const textVariants = {
  white: { color: white },
  black: { color: black },
};

const circleVariants = {
  white: { backgroundColor: grey },
  black: { backgroundColor: black },
};

const imageVariants = {
  initial: { opacity: 0, transition: { opacity: { ease, delay: 5 } } },
  animate: { opacity: 1, transition: { opacity: { ease, delay: 0 } } },
};

const ProjectProcess = ({ setBgColor }) => {
  const { ref, inView } = useInView({ threshold: 0.3 });
  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 0.3], [1, 0.5]);
  const x = useTransform(scrollYProgress, [0, 0.3], [0, 600]);
  const scaleSpring = useSpring(scale, { stiffness: 200, bounce: 0 });
  const xSpring = useSpring(x, { stiffness: 200, bounce: 0 });

  useEffect(() => {
    setBgColor(inView ? "white" : "black");
  }, [inView]);

  return (
    <div ref={ref} className="project__process">
      <motion.div
        transition={{ ease: ease }}
        variants={circleVariants}
        style={{ scale: scaleSpring, x: xSpring }}
        initial="white"
        animate={inView ? "black" : "white"}
        className="project__shape project__shape--circle"
      />
      <motion.h2
        transition={{ ease: ease }}
        variants={textVariants}
        initial="white"
        animate={inView ? "black" : "white"}
        className="project__process--title"
      >
        DESIGN PROCESS
      </motion.h2>
      <div className="project__process__images">
        <Image
          containerVariants={imageVariants}
          initial="initial"
          animate={inView ? "animate" : "initial"}
          main="./capstone/1.jpg"
          containerClass="project__process__images--image"
        />
        <Image
          containerVariants={imageVariants}
          initial="initial"
          animate={inView ? "animate" : "initial"}
          main="./capstone/2.jpg"
          containerClass="project__process__images--image"
        />
        <Image
          containerVariants={imageVariants}
          initial="initial"
          animate={inView ? "animate" : "initial"}
          main="./capstone/3.jpg"
          containerClass="project__process__images--image"
        />
      </div>
    </div>
  );
};

export default ProjectProcess;
