import React from "react";
import { motion } from "framer-motion";
import { ease } from "../utils/config";

const transitionOptions = { ease, duration: 1 };
const curtainVariants = {
  initial: {
    y: "100%",
  },
  animate: {
    y: ["-100%", "0%", "100%"],
  },
};

const Curtain = ({ transition }) => (
  <motion.div
    transition={transitionOptions}
    variants={curtainVariants}
    initial="initial"
    animate={transition ? "animate" : "initial"}
    className="curtain"
  />
);

export default Curtain;
