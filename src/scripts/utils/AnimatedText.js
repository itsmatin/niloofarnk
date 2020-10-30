import React from "react";
import { motion } from "framer-motion";
import { ease } from "./config";
import clsx from "clsx";

// function random(min, max) {
//   // min and max included
//   return Math.floor(Math.random() * (max - min + 1) + min);
// }

const defaultTransition = { ease, duration: 1.3, delay: 0.25 };
const spanVariants = {
  hidden: {
    x: "-300%",
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
  },
  exit: {
    x: "-300%",
    opacity: 0,
    transition: { ...defaultTransition, delay: 0 },
  },
};

// Handles the deconstruction of each word and character to setup for the
// individual character animations
const AnimatedText = ({
  style,
  props,
  children,
  addSpace = true,
  transition = {},
  isVisible = true,
  className,
  onClick,
}) => {
  //  Split each word of props.text into an array
  const splitWords = children.split(" ");

  // Create storage array
  const words = [];

  // Push each word into words array
  for (const [index, item] of splitWords.entries()) {
    words.push(item.split(""));
  }

  // Add a space ("\u00A0") to the end of each word
  if (addSpace) words.map((word) => word.push("\u00A0"));

  return words.map((word, index) => (
    <span
      c
      onClick={onClick}
      style={style}
      key={index}
      className={clsx(["word-wrapper", className])}
    >
      {words[index].flat().map((character, index) => {
        return (
          <motion.span
            {...props}
            key={index}
            variants={spanVariants}
            transition={{ ...defaultTransition, ...transition }}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            exit="exit"
            style={{
              display: "inline-block",
              textDecoration: "inherit",
              transform: "inherit",
            }}
          >
            {character}
          </motion.span>
        );
      })}
    </span>
  ));
};

export default AnimatedText;
