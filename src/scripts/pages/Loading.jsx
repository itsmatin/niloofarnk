import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Triangle from "../components/Triangle";
import { white, ease, black } from "../utils/config";

const transition = { duration: 2.4, ease };
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
  initial: { background: white },
  animate: {
    background: [white, black],
    transition,
  },
  exit: { opacity: 0 },
};

const triangleVariants = {
  initial: {
    scale: 4,
    background: white,
    rotate: 180,
  },
  animate: {
    scale: [4, 1, 0.3],
    background: black,
    rotate: 0,
    transition: { ...transition, duration: 1.9, delay: 0.3 },
  },
};

const Loading = ({ handleInitialLoading }) => {
  useEffect(() => {
    if (!localStorage.getItem("introShown"))
      setTimeout(() => {
        localStorage.setItem("introShown", true);
      }, 2400);
  }, []);

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
