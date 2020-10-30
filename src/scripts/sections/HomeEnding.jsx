import React, { useState } from "react";
import { motion, useTransform, useViewportScroll } from "framer-motion";
import { Link } from "react-router-dom";
import AnimatedText from "../utils/AnimatedText";
import { useInView } from "react-intersection-observer";
import { black, ease, white } from "../utils/config";

const textVariants = {
  initial: {
    color: white,
    borderBottom: `1px solid ${white}`,
    scale: 1,
    marginRight: "0rem",
  },
  animate: {
    color: black,
    borderBottom: `1px solid ${black}`,
    scale: 1.2,
    marginRight: "3rem",
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
  animate: { opacity: 0.7 },
};

const HomeEnding = () => {
  const { ref, inView } = useInView({ threshold: 0.5 });
  const { scrollYProgress } = useViewportScroll();
  const x = useTransform(scrollYProgress, [0.7, 1], [-200, 0]);
  const [hover, setHover] = useState(false);

  return (
    <motion.section
      transition={{ ease }}
      animate={inView ? "animate" : "initial"}
      initial="initial"
      exit="initial"
      ref={ref}
      className="home__end"
    >
      <motion.div
        transition={{ ease }}
        variants={noiseBgVariants}
        animate={hover ? "animate" : "initial"}
        className="home__end--noise-bg"
      />

      <motion.span
        transition={{ ease, delay: 0.1 }}
        style={{ x }}
        variants={textVariants}
        animate={hover ? "animate" : "initial"}
        onHoverStart={() => setHover(true)}
        onHoverEnd={() => setHover(false)}
      >
        <Link className="home__end--title" to="/contact">
          <AnimatedText style={{ fontWeight: "inherit" }}>
            ABOUT NILOOFAR
          </AnimatedText>
        </Link>
      </motion.span>

      <motion.span
        animate={hover ? "animate" : "initial"}
        style={{ border: "none" }}
        variants={creditVariants}
        className="home__end--credit"
      >
        <AnimatedText>Designed and Developed By</AnimatedText> <br />
        <a href="https://matin.dev">
          <AnimatedText>Matin.dev</AnimatedText>
        </a>
      </motion.span>
    </motion.section>
  );
};

export default HomeEnding;
