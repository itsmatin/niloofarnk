import React from "react";
import { motion } from "framer-motion";
import { ease } from "../utils/config";
import AnimatedText from "../utils/AnimatedText";
import LinkButton from "../components/LinkButton";

const NotFound = () => {
  return (
    <motion.div
      exit={{ opacity: 0 }}
      transition={{ ease: ease }}
      className="not-found"
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="5 1 14 8">
        <motion.path
          initial={{ opacity: 0, pathLength: 0, strokeWidth: "0.05px" }}
          animate={{ opacity: 1, pathLength: 1, strokeWidth: "0.05px" }}
          transition={{ delay: 0.5, duration: 3 }}
          d="M 5 1 L 5 6 L 5 6 L 5 6 L 5 6 M 7 6 L 7 6 L 5 6 M 5 1 Z L 9 6 M 15 1 L 15 1 V 1 M 15 1 L 15 6 M 15 6 L 17 6 L 17 6 M 17 9 L 17 6 M 19 6 L 15 1 M 7 9 L 7 6 M 10 1 L 10 9 Q 14 9 13 1 H 10"
          stroke="#eeeeee"
          fill="none"
        />
      </svg>
      <h1>
        <AnimatedText transition={{ ease, delay: 0.5 }}>
          whoops... Forgot to design this one!
        </AnimatedText>
      </h1>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 3 }}
      >
        <LinkButton
          className="not-found--button"
          to="/"
          title="Checkout Available Designs!"
        />
      </motion.div>
    </motion.div>
  );
};

export default NotFound;
