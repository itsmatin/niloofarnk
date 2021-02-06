import React from "react";
import { useInView } from "react-intersection-observer";
import { useWindowSize } from "react-use";
import {
  motion,
  useViewportScroll,
  useTransform,
  useSpring,
} from "framer-motion";
import AnimatedText from "../utils/AnimatedText";
import database from "../utils/database";

const AboutExperience = () => {
  const { width } = useWindowSize();
  const { work } = database;
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
        <motion.div
          style={{ x: width > 725 ? boxOneX : "initial" }}
          className="about__work__boxes__box"
        >
          <h1>{work[0].title}</h1>
          <span>
            {work[0].position} - {work[0].time}
          </span>
          <p>{work[0].description}</p>
        </motion.div>
        <motion.div
          style={{ x: width > 725 ? boxTwoY : "initial" }}
          className="about__work__boxes__box"
        >
          <h1>{work[1].title}</h1>
          <span>
            {work[1].position} - {work[1].time}
          </span>
          <p>{work[1].description}</p>
        </motion.div>
        <motion.div
          style={{ x: width > 725 ? boxThreeY : "initial" }}
          className="about__work__boxes__box"
        >
          <h1>{work[2].title}</h1>
          <span>
            {work[2].position} - {work[2].time}
          </span>
          <p>{work[2].description}</p>
        </motion.div>
        <motion.div style={{ x: boxFourX }} className="about__work__boxes__box">
          <h1>{work[3].title}</h1>
          <span>
            {work[3].position} - {work[3].time}
          </span>
          <p>{work[3].description}</p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutExperience;
