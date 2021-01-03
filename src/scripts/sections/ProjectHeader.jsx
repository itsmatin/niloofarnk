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

const ProjectHeader = ({ project }) => {
  const { scrollYProgress } = useViewportScroll();
  const { ref } = useInView({ threshold: 0.2, triggerOnce: true });
  const opacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);
  const opacitySpring = useSpring(opacity, { stiffness: 200, bounce: 0 });

  return (
    <motion.header
      style={{ opacity: opacitySpring }}
      className="project__header"
    >
      <Image
        imageClass="project__header--image"
        containerClass="project__header--image-container"
        animate="animate"
        compressed={project.compressedImages.header}
        main={project.images.header}
        alt={project.title}
        text={`${project?.time} ${project?.year}`}
        captionVariants={imageCaptionVariants}
        imageVariants={imageVariants}
        viewOptions={{ triggerOnce: true }}
      />
      <h1 ref={ref} className="project__header__title">
        <AnimatedText>{project.title}</AnimatedText>
        <br />
        <small>{project.headerDescription}</small>
      </h1>
    </motion.header>
  );
};

export default ProjectHeader;
