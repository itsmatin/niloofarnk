import React from "react";
import { motion } from "framer-motion";
import { white, black, ease } from "../config";

const spanVariants = {
  hidden: {
    y: "200%",
    color: "#0055FF",
    transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.85 },
  },
  visible: {
    y: 0,
    color: "#FF0088",
    transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.75 },
  },
};

// Handles the deconstruction of each word and character to setup for the
// individual character animations
const AnimatedCharacters = (props) => {
  //  Split each word of props.text into an array
  const splitWords = props.text.split(" ");

  // Create storage array
  const words = [];

  // Push each word into words array
  for (const [index, item] of splitWords.entries()) {
    words.push(item.split(""));
  }

  // Add a space ("\u00A0") to the end of each word
  words.map((word) => {
    return word.push("\u00A0");
  });

  return words.map((word, index) => {
    return (
      // Wrap each word in the Wrapper component
      <span key={index} className="word-wrapper">
        {words[index].flat().map((element, index) => {
          return (
            <span
              style={{
                overflow: "hidden",
                display: "inline-block",
              }}
              key={index}
            >
              <motion.span
                style={{ display: "inline-block" }}
                variants={spanVariants}
              >
                {element}
              </motion.span>
            </span>
          );
        })}
      </span>
    );
  });
};

export default AnimatedCharacters;
