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
        <AnimatedText>My beard grows to my toes,</AnimatedText>
        <br />
        <AnimatedText>I never wears no clothes,</AnimatedText>
        <br />
        <AnimatedText>I wraps my hair around my bare,</AnimatedText>
        <br />
        <AnimatedText>and down the road i goes. . .</AnimatedText>
      </motion.h1>
    </motion.header>
  );
};

export default AboutHeader;
