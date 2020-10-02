import React from "react";
import { motion } from "framer-motion";
import Triangle from "../elements/Triangle";

const transition = { duration: 3, ease: [0.6, 0.1, -0.05, 0.9] };
const name = [
  "N",
  "I",
  "L",
  "O",
  "O",
  "F",
  "A",
  "R",
  " ",
  " ",
  "N",
  "I",
  "K",
  "O",
  "O",
  "K",
  "A",
  "R",
];

const nameVariants = {
  animate: {
    transition: {
      delayChildren: 0.6,
      staggerChildren: 0.04,
      staggerDirection: -1,
    },
  },
};

const letterVariants = {
  animate: {
    opacity: [0, 0.7, 0],
    transition,
  },
};

const containerVariants = {
  animate: {
    background: ["#eee", "#202020"],
    transition,
  },
};

const triangleVariants = {
  initial: {
    background: "#eee",
    rotate: 180,
  },
  animate: {
    scale: [4, 1, 0.3],
    background: "#202020",
    rotate: 0,
    transition: { ...transition, duration: 2.5, delay: 0.3 },
  },
};

const Loading = ({ handleInitialLoading }) => {
  return (
    <motion.div
      variants={containerVariants}
      animate="animate"
      initial="initial"
      exit="exit"
      className="loading"
      onAnimationComplete={handleInitialLoading}
    >
      <motion.h1 className="loading--title" variants={nameVariants}>
        {name.map((char) => (
          <motion.span variants={letterVariants}>{char}</motion.span>
        ))}
      </motion.h1>
      <Triangle
        width={12}
        height={11}
        style={{ marginLeft: "-2rem" }}
        variants={triangleVariants}
      />
    </motion.div>
  );
};

export default Loading;
