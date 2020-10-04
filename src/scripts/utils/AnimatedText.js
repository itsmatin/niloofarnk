import React from "react";
import { motion } from "framer-motion";
import { ease } from "./config";

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
};

// Handles the deconstruction of each word and character to setup for the
// individual character animations
const AnimatedText = ({
  props,
  children,
  addSpace = true,
  transition = {},
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
    <span key={index} className="word-wrapper">
      {words[index].flat().map((character, index) => {
        return (
          <motion.span
            {...props}
            key={index}
            variants={spanVariants}
            transition={{ ...defaultTransition, ...transition }}
            initial="hidden"
            animate="visible"
            style={{ display: "inline-block" }}
          >
            {character}
          </motion.span>
        );
      })}
    </span>
  ));
};

export default AnimatedText;
