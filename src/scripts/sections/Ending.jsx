import React, { useState } from "react";
import {
  motion,
  useTransform,
  useViewportScroll,
  useSpring,
} from "framer-motion";
import { Link } from "react-router-dom";
import AnimatedText from "../utils/AnimatedText";
import { useInView } from "react-intersection-observer";
import { black, ease, white } from "../utils/config";

const textVariants = {
  initial: {
    color: white,
    borderBottom: `1px solid ${white}`,
  },
  animate: {
    color: black,
    borderBottom: `1px solid ${black}`,
  },
};
const creditVariants = {
  initial: {
    color: white,
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
  const { ref, inView } = useInView({ threshold: 0.5 });
  const { scrollYProgress } = useViewportScroll();
  const x = useTransform(scrollYProgress, [0.7, 1], [-200, 0]);
  const opacity = useTransform(scrollYProgress, [0.9, 1], [0, 1]);
  const opacitySpring = useSpring(opacity, { stiffness: 200, bounce: 0 });
  const [hover, setHover] = useState(false);

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
        animate={hover ? "animate" : "initial"}
        className="end--noise-bg"
      />

      <motion.span
        transition={{ ease, delay: 0.1 }}
        style={{ x, display: "flex" }}
        variants={textVariants}
        animate={hover ? "animate" : "initial"}
        onHoverStart={() => setHover(true)}
        onHoverEnd={() => setHover(false)}
      >
        <Link className="end--title" to={to}>
          <AnimatedText style={{ fontWeight: "inherit" }}>{title}</AnimatedText>
        </Link>
      </motion.span>

      <motion.span
        animate={hover ? "animate" : "initial"}
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
