import React, { useEffect } from "react";
import {
  motion,
  useTransform,
  useSpring,
  useViewportScroll,
} from "framer-motion";
import { useWindowSize } from "react-use";
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
  initial: { opacity: 0, transition: { opacity: { ease } } },
  animate: { opacity: 1, transition: { opacity: { ease, delay: 0.2 } } },
};

const ProjectProcess = ({ setBgColor, project }) => {
  const { width } = useWindowSize();
  const { ref, inView } = useInView({ threshold: width > 768 ? 0.3 : 0 });
  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0.35, 0.5], [1, 0.5]);
  const x = useTransform(scrollYProgress, [0.35, 0.5], [0, 600]);
  const scaleSpring = useSpring(scale, { stiffness: 200, bounce: 0 });
  const xSpring = useSpring(x, { stiffness: 200, bounce: 0 });

  useEffect(() => {
    setBgColor(inView ? "white" : "black");
  }, [inView]);

  return (
    <div className="project__process">
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
      <div ref={ref} className="project__process__images">
        {project.images.process.map((imageLink, index) => {
          return (
            <Image
              containerVariants={imageVariants}
              initial="initial"
              animate={inView ? "animate" : "initial"}
              alt={project.title}
              main={imageLink}
              compressed={project.images.process[index]}
              containerClass="project__process__images--image"
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProjectProcess;
