import React from "react";
import {
  useTransform,
  useViewportScroll,
  motion,
  useSpring,
} from "framer-motion";
import { useInView } from "react-intersection-observer";
import AnimatedText from "../utils/AnimatedText";
import { ease, white } from "../utils/config";
import Image from "../components/Image";

const transition = { delay: 1.2, ease, duration: 1 };

const arrowVariants = {
  // initial: {
  //   pathLength: 0,
  //   scale: 0.5,
  // },
  // animate: {
  //   pathLength: 1,
  //   scale: 1,
  // },
};

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
  const svgProgress = useTransform(scrollYProgress, [0, 0.9], [0, 1]);

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
        fill-rule="evenodd"
        clip-rule="evenodd"
      >
        <motion.path
          initial="initial"
          animate="animate"
          fill={white}
          style={{ pathLength: svgProgress }}
          transition={transition}
          variants={arrowVariants}
          d="M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12-12-5.377-12-12 5.377-12 12-12zm0 1c6.071 0 11 4.929 11 11s-4.929 11-11 11-11-4.929-11-11 4.929-11 11-11zm5.247 8l-5.247 6.44-5.263-6.44-.737.678 6 7.322 6-7.335-.753-.665z"
        />
      </svg> */}

      {/* <svg className="home__header--arrow" viewBox="0 0 294.997 294.997">
        <motion.path
          initial="initial"
          animate="animate"
          fill={white}
          style={{ pathLength: svgProgress }}
          transition={transition}
          variants={arrowVariants}
          strokeWidth="1"
          d="M286.36 98.016c-13.223-37.1-40.098-66.813-75.675-83.7S135.088-4.567 97.997 8.656 31.183 48.754 14.305 84.33s-18.9 75.597-5.668 112.7c1.113 3.122 4.547 4.748 7.667 3.637a6 6 0 0 0 3.637-7.667C7.794 158.918 9.643 122.155 25.147 89.474s42.807-57.37 76.88-69.515 70.836-10.296 103.516 5.207 57.37 42.807 69.516 76.88 10.297 70.835-5.207 103.516-42.807 57.37-76.88 69.515c-38.2 13.613-80.082 9.493-114.935-11.304a6 6 0 1 0-6.149 10.305c23.207 13.848 49.276 20.903 75.54 20.902 16.674 0 33.43-2.845 49.572-8.6 37.092-13.223 66.813-40.098 83.7-75.675s18.9-75.598 5.668-112.7zm-72.86 49.502c0-3.313-2.687-6-6-6H58.07a6 6 0 1 0 0 12H207.5c3.313 0 6-2.687 6-6zm-47.814 62.757a6 6 0 0 0 0 8.485 5.98 5.98 0 0 0 8.484 0l67-67a6 6 0 0 0 0-8.485l-67-67a6 6 0 0 0-8.484 8.485l62.757 62.757-62.757 62.758z"
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
