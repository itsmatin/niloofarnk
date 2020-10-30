import React from "react";
import {
  motion,
  useSpring,
  useTransform,
  useViewportScroll,
} from "framer-motion";
import AnimatedText from "../utils/AnimatedText";

const AboutHeader = () => {
  const { scrollYProgress } = useViewportScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const opacitySpring = useSpring(opacity, { stiffness: 200, bounce: 0 });

  return (
    <motion.header style={{ opacity: opacitySpring }} className="about__header">
      <motion.h1 className="about__header--title">
        <AnimatedText>
          "Some inspiring shit or personal statement goes right here..."
        </AnimatedText>
      </motion.h1>
    </motion.header>
  );
};

export default AboutHeader;
