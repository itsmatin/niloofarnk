import React from "react";
import {
  motion,
  useSpring,
  useTransform,
  useViewportScroll,
} from "framer-motion";
import { useInView } from "react-intersection-observer";
import AnimatedText from "../utils/AnimatedText";
import { transparent, white, ease } from "../utils/config";

const AboutHeader = () => {
  const { scrollYProgress } = useViewportScroll();
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const opacitySpring = useSpring(opacity, { stiffness: 200, bounce: 0 });
  const pathLength = useTransform(scrollYProgress, [0, 0.2], [0.25, 1]);

  return (
    <motion.header style={{ opacity: opacitySpring }} className="about__header">
      <motion.h1 ref={ref} className="about__header--title">
        <AnimatedText isVisible={inView}>I am a hybrid!</AnimatedText>
        <br />
        <AnimatedText isVisible={inView}>
          I research and design with a focus on
        </AnimatedText>
        <strong>
          <AnimatedText isVisible={inView}>human</AnimatedText>
        </strong>
        <AnimatedText isVisible={inView}>
          experience and interactive dialogue with the
        </AnimatedText>
        <strong>
          <AnimatedText isVisible={inView}>built environment</AnimatedText>
        </strong>
        <AnimatedText isVisible={inView}>and</AnimatedText>
        <strong>
          <AnimatedText isVisible={inView}>systems.</AnimatedText>
        </strong>
        <motion.svg
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ease, duration: 1.3, delay: 0.25 }}
          className="about__header__drawing"
          width="830"
          height="800"
        >
          <motion.path
            transition={{ damping: 20 }}
            d="M 800 800 L 800 250 Q 750 150 700 250 L 700 500 L 600 500 C 500 300 600 50 600 50 L 400 50 C 400 50 500 300 400 500 L 350 500 L 350 100 L 250 100 L 250 500 L 200 500 L 100 150 L 50 150 L 50 500 L 0 500"
            style={{
              pathLength: pathLength,
              opacity: 0.2,
              scale: 1.2,
            }}
            fill={transparent}
            stroke={white}
            strokeWidth="4"
          />
        </motion.svg>
      </motion.h1>
    </motion.header>
  );
};

export default AboutHeader;
