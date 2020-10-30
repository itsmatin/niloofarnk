import React, { useContext } from "react";
import { motion } from "framer-motion";
import TransitionContext from "../contexts/TransitionContext";
import { ease } from "../utils/config";

const transitionOptions = { ease, duration: 1.5 };
const curtainVariants = {
  initial: {
    y: "100%",
  },
  animate: {
    y: ["-100%", "0%", "0%", "100%"],
  },
};

const Curtain = () => {
  const { transition } = useContext(TransitionContext);
  return (
    <motion.div
      transition={transitionOptions}
      variants={curtainVariants}
      initial="initial"
      animate={transition ? "animate" : "initial"}
      className="curtain"
    />
  );
};

export default Curtain;
