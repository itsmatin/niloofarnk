import React, { useState, useEffect } from "react";
import ClickAwayListener from "react-click-away-listener";
import { useInView } from "react-intersection-observer";
import {
  motion,
  useTransform,
  useSpring,
  useViewportScroll,
} from "framer-motion";
import Image from "../components/Image";
import database from "../utils/database";
import { ease, white } from "../utils/config";
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
  const [sidebarData, setSidebarData] = useState({
    id: 100,
    title: "",
    images: { header: "" },
    year: "",
    time: "",
    headerDescription: "",
    infoDescription: "",
  });
  const { ref, inView } = useInView({ threshold: 0.5 });
  const { scrollYProgress } = useViewportScroll();
  const y = useTransform(scrollYProgress, [0, 1], [1200, 200]);
  const containerY = useTransform(scrollYProgress, [0, 1], [0, -400]);
  const rotate = useTransform(scrollYProgress, [0, 1], [30, 90]);
  const linePath = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const mazePath = useTransform(scrollYProgress, [0.05, 0.3], [0.1, 1]);
  const firstTitlePos = useTransform(scrollYProgress, [0.05, 0.3], [200, 0]);
  const secondTitlePos = useTransform(scrollYProgress, [0.05, 0.3], [-200, 0]);

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
        <ProjectSidebar data={sidebarData} isVisible={sidebarOpen} />
      </ClickAwayListener>
      <motion.section
        transition={transition}
        animate={{ opacity: sidebarOpen ? 0.3 : 1 }}
        ref={ref}
        className="home__designs"
      >
        <motion.svg width="950" height="950" className="home__designs--shape">
          <motion.path
            style={{ pathLength: mazePath }}
            d="M 50 100 L 650 100 A 50 50 0 1 1 650 100 L 650 450 L 350 450 L 350 150 L 600 150 L 600 400 L 400 400 L 400 200 L 550 200 L 550 350 L 450 350 L 450 250 L 500 250 L 500 300"
            stroke={white}
            fill="transparent"
            transition={transition}
            strokeWidth="1"
          />
        </motion.svg>
        <motion.h1
          style={{ x: firstTitlePos }}
          className="home__designs--title"
        >
          ARCHITECTURAL
        </motion.h1>
        <motion.h1
          style={{ textAlign: "right", x: secondTitlePos }}
          className="home__designs--title"
        >
          DESIGN
        </motion.h1>
        <svg>
          <motion.path
            transition={{ damping: 20 }}
            style={{ pathLength: linePath, opacity: "0.5" }}
            d="M 0,0 L 700,0 V 200,0"
            fill={white}
            stroke={white}
            strokeWidth="1"
          />
        </svg>
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
                onHoverStart={() => {
                  setSidebarData(design);
                  setHovered(index);
                }}
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
                src={design.images.header}
                alt={design.title}
                text={design.time + " " + design.year}
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
            alt="click to view more"
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
