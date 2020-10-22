import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import AnimatedText from "../utils/AnimatedText";
import { useInView } from "react-intersection-observer";
import { black, ease, white } from "../utils/config";

const textVariants = {
  initial: {
    color: white,
    borderBottom: `1px solid ${white}`,
    fontSize: "5rem",
  },
  animate: {
    color: black,
    borderBottom: `1px solid ${black}`,
    fontSize: "6.5rem",
  },
};

const noiseBgVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
};

const HomeEnding = () => {
  const { ref, inView } = useInView({ threshold: 0.5 });
  const [hover, setHover] = useState(false);

  return (
    <motion.section
      transition={{ ease }}
      animate={inView ? "animate" : "initial"}
      ref={ref}
      className="home__end"
    >
      <motion.div
        transition={{ ease }}
        variants={noiseBgVariants}
        animate={hover ? "animate" : "initial"}
        initial="initial"
        className="home__end--noise-bg"
      />
      <Link className="home__end--title" to="/about">
        <motion.span
          transition={{ ease, delay: 0.1 }}
          variants={textVariants}
          initial="initial"
          animate={hover ? "animate" : "initial"}
          onHoverStart={() => setHover(true)}
          onHoverEnd={() => setHover(false)}
        >
          <AnimatedText style={{ fontWeight: "inherit" }}>
            ABOUT NILOOFAR
          </AnimatedText>
        </motion.span>
      </Link>
      <motion.span className="home__end--credit">
        <AnimatedText>Designed and Developed By</AnimatedText> <br />
        <a href="https://matin.dev">
          <AnimatedText>Matin.dev</AnimatedText>
        </a>
      </motion.span>
    </motion.section>
  );
};

export default HomeEnding;
