import React from "react";
import { useInView } from "react-intersection-observer";
import {
  motion,
  useViewportScroll,
  useTransform,
  useSpring,
} from "framer-motion";
import AnimatedText from "../utils/AnimatedText";
import { useWindowSize } from "react-use";
const AboutExperience = () => {
  const { width } = useWindowSize();
  const { ref, inView } = useInView({ threshold: 0.5, triggerOnce: true });
  const { scrollYProgress } = useViewportScroll();
  const boxOneX = useTransform(scrollYProgress, [0.7, 0.75], [-30, 0]);
  const boxTwoY = useTransform(scrollYProgress, [0.7, 0.75], [-30, 0]);
  const boxThreeY = useTransform(scrollYProgress, [0.7, 0.75], [30, 0]);
  const boxFourX = useTransform(scrollYProgress, [0.7, 0.75], [30, 0]);
  const titleX = useTransform(scrollYProgress, [0, 1], [-200, 300]);
  const titleXSpring = useSpring(titleX, {
    stiffness: 30,
    bounce: 0,
    damping: 20,
  });
  return (
    <section className="about__work">
      <motion.h1
        style={{ x: width > 725 ? titleXSpring : "initial" }}
        ref={ref}
        className="about__work--title"
      >
        <AnimatedText isVisible={inView}>WORK EXPERIENCE</AnimatedText>
      </motion.h1>
      <div className="about__work__boxes">
        <motion.div style={{ x: boxOneX }} className="about__work__boxes__box">
          <h1>I) SOME COMPANY LTD.</h1>
          <h3>Assistant something role</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis
            dicta rem voluptas doloremque numquam deleniti pariatur.
            Perspiciatis deserunt voluptatem aspernatur. Exercitationem quo
            aperiam repellat quae laboriosam assumenda iure, voluptatibus
            quaerat sint at! Eius ipsum voluptas unde saepe tempora odit? Nemo.
          </p>
        </motion.div>
        <motion.div style={{ y: boxTwoY }} className="about__work__boxes__box">
          <h1>I) SOME COMPANY LTD.</h1>
          <h3>Assistant something role</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis
            dicta rem voluptas doloremque numquam deleniti pariatur.
            Perspiciatis deserunt voluptatem aspernatur. Exercitationem quo
            aperiam repellat quae laboriosam assumenda iure, voluptatibus
            quaerat sint at! Eius ipsum voluptas unde saepe tempora odit? Nemo.
          </p>
        </motion.div>
        <motion.div
          style={{ y: boxThreeY }}
          className="about__work__boxes__box"
        >
          <h1>I) SOME COMPANY LTD.</h1>
          <h3>Assistant something role</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis
            dicta rem voluptas doloremque numquam deleniti pariatur.
            Perspiciatis deserunt voluptatem aspernatur. Exercitationem quo
            aperiam repellat quae laboriosam assumenda iure, voluptatibus
            quaerat sint at! Eius ipsum voluptas unde saepe tempora odit? Nemo.
          </p>
        </motion.div>
        <motion.div style={{ x: boxFourX }} className="about__work__boxes__box">
          <h1>I) SOME COMPANY LTD.</h1>
          <h3>Assistant something role</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis
            dicta rem voluptas doloremque numquam deleniti pariatur.
            Perspiciatis deserunt voluptatem aspernatur. Exercitationem quo
            aperiam repellat quae laboriosam assumenda iure, voluptatibus
            quaerat sint at! Eius ipsum voluptas unde saepe tempora odit? Nemo.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutExperience;
