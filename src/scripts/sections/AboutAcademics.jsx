import React, { useState } from "react";
import {
  motion,
  useSpring,
  useTransform,
  useViewportScroll,
} from "framer-motion";
import { useInView } from "react-intersection-observer";
import AnimatedText from "../utils/AnimatedText";
import Image from "../components/Image";
import { black, ease, transparent, white, grey } from "../utils/config";
import database from "../utils/database";

const { academics } = database;

const listItemVariants = {
  initial: {
    borderColor: white,
    backgroundColor: transparent,
    color: white,
  },
  animate: {
    borderColor: black,
    backgroundColor: white,
    color: black,
  },
};
const spanVariants = {
  initial: {
    color: grey,
  },
  animate: {
    color: black,
  },
};

const AboutAcademics = () => {
  const { scrollYProgress } = useViewportScroll();
  const { ref, inView } = useInView({ threshold: 0.5, triggerOnce: true });
  const [currentImage, setCurrentImage] = useState(academics[0].image);
  const [currentYear, setCurrentYear] = useState(academics[0].year);
  const containerY = useTransform(scrollYProgress, [0, 1], [200, -300]);
  const containerYSpring = useSpring(containerY, {
    stiffness: 30,
    bounce: 0,
    damping: 20,
  });

  const rotate = useTransform(
    scrollYProgress,
    [0, 0.5, 0.75, 1],
    [0, 360, 270, 0]
  );
  const rotateSpring = useSpring(rotate, { stiffness: 15, bounce: 0 });

  return (
    <motion.section className="about__academics">
      <motion.h1
        style={{ x: containerYSpring }}
        ref={ref}
        className="about__academics--title"
      >
        <AnimatedText isVisible={inView}>ACADEMICS</AnimatedText>
      </motion.h1>
      <motion.ul
        style={{ y: containerYSpring }}
        className="about__academics__list"
      >
        {academics.map(({ id, image, title, degree, year }) => {
          return (
            <motion.li
              key={id}
              transition={{ ease: ease, duration: 0.5 }}
              variants={listItemVariants}
              initial="initial"
              animate={currentImage === image ? "animate" : "initial"}
              onHoverStart={() => {
                setCurrentImage(image);
                setCurrentYear(year);
              }}
            >
              {id}) {title}
              <motion.span
                transition={{ ease: ease, duration: 0.5 }}
                variants={spanVariants}
              >
                {degree}
              </motion.span>
            </motion.li>
          );
        })}
      </motion.ul>
      <Image
        transition={{ ease }}
        containerStyle={{ rotate: rotateSpring }}
        containerClass="about__academics--logo-container"
        main={currentImage}
        compressed={currentImage}
      />
      <motion.span className="about__academics--year">
        {currentYear}
      </motion.span>
    </motion.section>
  );
};

export default AboutAcademics;
