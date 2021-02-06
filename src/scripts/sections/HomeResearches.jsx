import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  motion,
  useCycle,
  useTransform,
  useViewportScroll,
} from "framer-motion";
import Image from "../components/Image";
import database from "../utils/database";
import { ease, white, black } from "../utils/config";

const rhombus = "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)";
const pentagon = "polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)";
const hexagon = "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)";
const heptagon =
  "polygon(50% 0%, 90% 20%, 100% 60%, 75% 100%, 25% 100%, 0% 60%, 10% 20%)";
const octagon =
  "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)";

const { researches } = database;
const transition = { ease, delay: 0.2 };
const imageVariants = {
  initial: {
    scaleY: 0,
    opacity: 0,
  },

  animate: {
    scaleY: 1,
    opacity: [0, 1],
    transition,
  },

  animateAgain: {
    opacity: [0, 1],
    transition,
  },
  exit: {
    opacity: [1, 0],
    transition,
  },
};

function ListItem({ currentImage, ...props }) {
  return (
    <Link to={`/project/${props.id}`}>
      <motion.span
        animate={{ opacity: 0.55, transition: { delay: 0.85 } }}
        initial={{ borderBottom: `1px solid ${black}`, opacity: 0 }}
        exit={{ borderBottom: `1px solid ${black}`, opacity: 0 }}
        whileHover={{ opacity: 1, borderBottom: `1px solid ${white}` }}
        onHoverStart={props.onHoverStart}
        onHoverEnd={props.onHoverEnd}
        className="menu__list--item"
        style={{
          fontSize: "2.1rem",
          opacity: props.image === currentImage ? 0.55 : 0,
        }}
        key={props.index}
      >
        {`0${props.index + 1}. ${props.title}`}
      </motion.span>
    </Link>
  );
}

const HomeResearches = () => {
  const { scrollYProgress } = useViewportScroll();
  const [shape, cycleShape] = useCycle(
    rhombus,
    pentagon,
    hexagon,
    heptagon,
    octagon
  );
  const [shapeRotate, cycleShapeAngle] = useCycle(0, 90, 180, 270, 360);
  const [currentResearch, setCurrentResearch] = useState(researches[2]);
  const rectPath = useTransform(scrollYProgress, [0.3, 1], [0, 1]);
  const listPos = useTransform(scrollYProgress, [0.7, 0.9], [50, 0]);
  const shapePos = useTransform(scrollYProgress, [0, 1], [100, 0]);
  const imageScale = useTransform(scrollYProgress, [0.7, 1], [0.95, 1.1]);
  const imagePos = useTransform(scrollYProgress, [0.5, 1], [-200, 0]);
  const firstTitlePos = useTransform(scrollYProgress, [0.6, 1], [-200, 0]);
  const secondTitlePos = useTransform(scrollYProgress, [0.6, 1], [200, 0]);

  return (
    <motion.section
      transition={transition}
      animate="animate"
      initial="intial"
      className="home__researches"
    >
      <motion.h1
        style={{ x: firstTitlePos }}
        className="home__researches--title"
      >
        COMPUTATIONAL
      </motion.h1>
      <motion.h1
        style={{ textAlign: "left", x: secondTitlePos }}
        className="home__researches--title"
      >
        DESIGN
      </motion.h1>

      <div className="home__researches--container">
        <Image
          containerStyle={{ scale: imageScale, y: imagePos }}
          imageVariants={imageVariants}
          containerClass="home__researches__image-container"
          imageClass="home__researches__image"
          src={currentResearch.images.header}
          alt={currentResearch.title}
        />
        <motion.div style={{ y: listPos }} className="home__researches__list">
          {researches.map((item, index) => (
            <ListItem
              onHoverStart={() => {
                cycleShape();
                cycleShapeAngle();
                setCurrentResearch(item);
              }}
              key={index}
              title={item.title}
              id={item.id}
              index={index}
              image={item.images.header}
              currentImage={currentResearch.images.header}
            />
          ))}
        </motion.div>
        <motion.div
          transition={transition}
          style={{ clipPath: shape, rotate: shapeRotate, x: shapePos }}
          className="home__researches--shape"
        >
          {currentResearch.year}
        </motion.div>
        <svg className="home__researches__rect" width="600" height="600">
          <motion.path
            style={{ pathLength: rectPath }}
            d="M 10 10 H 500 V 500 H 10 Z"
            fill="none"
            stroke={white}
          />
        </svg>

        <svg
          className="home__researches__rect home__researches__rect--second"
          width="600"
          height="600"
        >
          <motion.path
            style={{ pathLength: rectPath }}
            d="M 10 10 H 500 V 500 H 10 Z"
            fill="none"
            stroke={white}
          />
        </svg>
      </div>
    </motion.section>
  );
};

export default HomeResearches;
