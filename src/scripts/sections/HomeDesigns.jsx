import React, { useState, useEffect } from "react";
import ClickAwayListener from "react-click-away-listener";
import { useInView } from "react-intersection-observer";
import {
  motion,
  useTransform,
  useSpring,
  useViewportScroll,
} from "framer-motion";
import AnimatedText from "../utils/AnimatedText";
import Image from "../components/Image";
import database from "../utils/database";
import { ease } from "../utils/config";
import ProjectSidebar from "../components/ProjectSidebar";

const transition = { ease };
const circularImageVariants = {
  initial: {
    opacity: 0,
    rotate: 360,
  },
  animate: {
    opacity: 1,
    rotate: 360,
  },
};
const imageContainerVariants = {
  initial: {
    y: 200,
    opacity: 0,
    transition: { ...transition, delay: 0.3, duration: 0.7 },
  },

  animate: {
    y: 0,
    opacity: 1,
    scale: 1,
    borderRadius: "0%",
    transition: { ...transition, delay: 0.3, duration: 0.7 },
  },
  whileHover: {
    opacity: 1,
    borderRadius: "50%",
    scale: 1.2,
    y: [0, -15],
    transition: {
      y: {
        yoyo: Infinity,
        duration: 5,
      },
      ...transition,
    },
  },

  othersNotHover: {
    opacity: 0.1,
    transition: transition,
  },
};

const HomeDesigns = () => {
  const [hovered, setHovered] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const { ref, inView } = useInView({ threshold: 0.5 });
  const { ref: titleRef, inView: titleInView } = useInView({
    triggerOnce: true,
  });
  const { scrollYProgress } = useViewportScroll();
  const y = useTransform(scrollYProgress, [0, 1], [1200, 200]);
  const containerY = useTransform(scrollYProgress, [0, 1], [0, -400]);
  const rotate = useTransform(scrollYProgress, [0, 1], [30, 90]);
  const springRotate = useSpring(rotate, {
    bounce: 0,
    velocity: 0.1,
    damping: 25,
    stiffness: 50,
  });

  useEffect(() => {
    if (!inView) setSidebarOpen(false);
  }, [inView]);

  return (
    <>
      <ClickAwayListener
        onClickAway={() => sidebarOpen && setSidebarOpen(false)}
      >
        <ProjectSidebar isVisible={sidebarOpen} />
      </ClickAwayListener>
      <motion.section
        transition={transition}
        animate={{ opacity: sidebarOpen ? 0.3 : 1 }}
        ref={ref}
        className="home__designs"
      >
        <h1 ref={titleRef} className="home__designs--title">
          <AnimatedText isVisible={titleInView}>DESIGNS</AnimatedText>
        </h1>
        <motion.div
          style={{ y: containerY }}
          className="home__designs__container"
        >
          {database.designs.map((design, index) => {
            return (
              <Image
                onClick={() => setSidebarOpen(true)}
                containerVariants={imageContainerVariants}
                imageClass="home__designs--image"
                onHoverStart={() => setHovered(index)}
                onHoverEnd={() => setHovered(false)}
                viewOptions={{ triggerOnce: true, threshold: 0.5 }}
                initial="initial"
                animate={
                  hovered === false && !sidebarOpen
                    ? "animate"
                    : "othersNotHover"
                }
                whileHover={
                  hovered === index && !sidebarOpen
                    ? "whileHover"
                    : "othersNotHover"
                }
                containerClass="home__designs--image-container"
                title={design.title}
                main={design.image}
                text="2019 - 2020"
                key={index}
              />
            );
          })}
        </motion.div>

        <motion.div
          transition={transition}
          style={{ y, rotate: springRotate }}
          className="home__designs__triangle"
          animate={{ opacity: hovered !== false && !sidebarOpen ? 0.3 : 0.1 }}
        >
          <motion.img
            variants={circularImageVariants}
            animate={hovered !== false && !sidebarOpen ? "animate" : "initial"}
            className="home__designs__triangle--title"
            src="no-circle.png"
            transition={{
              rotate: {
                loop: Infinity,
                duration: 15,
                repeatDelay: 0,
                ease: "linear",
              },
            }}
          />
        </motion.div>
      </motion.section>
    </>
  );
};

export default HomeDesigns;
