import React from "react";
import {
  motion,
  useTransform,
  useViewportScroll,
  useSpring,
} from "framer-motion";
import { Link } from "react-router-dom";
import AnimatedText from "../utils/AnimatedText";
import { useInView } from "react-intersection-observer";
import { black, ease, whiteWhite } from "../utils/config";

const textVariants = {
  initial: {
    color: whiteWhite,
    borderBottom: `1px solid ${whiteWhite}`,
  },
  animate: {
    color: black,
    borderBottom: `1px solid ${black}`,
  },
};
const creditVariants = {
  initial: {
    color: whiteWhite,
  },
  animate: {
    color: black,
  },
};
const noiseBgVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 0.9 },
};

const Ending = ({ title = "example", to = "/example" }) => {
  const { ref, inView } = useInView({ threshold: 0.6 });
  const { scrollYProgress } = useViewportScroll();
  const x = useTransform(scrollYProgress, [0.7, 1], [-200, 0]);
  const opacity = useTransform(scrollYProgress, [0.9, 1], [0, 1]);
  const opacitySpring = useSpring(opacity, { stiffness: 200, bounce: 0 });

  return (
    <motion.section
      style={{ opacity: opacitySpring }}
      transition={{ ease }}
      animate={inView ? "animate" : "initial"}
      initial="initial"
      exit="initial"
      ref={ref}
      className="end"
    >
      <motion.div
        transition={{ ease }}
        variants={noiseBgVariants}
        animate={inView ? "animate" : "initial"}
        className="end--noise-bg"
      />

      <motion.span
        transition={{ ease, delay: 0.1 }}
        style={{ x, display: "flex" }}
        variants={textVariants}
        animate={inView ? "animate" : "initial"}
      >
        <Link className="end--title" to={to}>
          <AnimatedText style={{ fontWeight: "inherit" }}>{title}</AnimatedText>
        </Link>
      </motion.span>

      <motion.span
        animate={inView ? "animate" : "initial"}
        style={{ border: "none" }}
        variants={creditVariants}
        className="end--credit"
      >
        <AnimatedText>Designed and Developed By</AnimatedText> <br />
        <a href="https://matin.dev">
          <AnimatedText>Matin.dev</AnimatedText>
        </a>
      </motion.span>
    </motion.section>
  );
};

export default Ending;
