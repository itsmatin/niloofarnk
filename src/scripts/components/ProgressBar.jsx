import React, { useEffect } from "react";
import { useViewportScroll, useTransform, motion } from "framer-motion";
import { ease } from "../utils/config";

const ProgressBar = () => {
  const { scrollYProgress } = useViewportScroll();
  const yRange = useTransform(scrollYProgress, [0, 0.9], [0, 1]);

  return (
    <motion.div
      transition={{ delay: 1.2, ease, duration: 1 }}
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: "12rem", opacity: 1 }}
      className="progress-bar"
    >
      <motion.div
        style={{ scaleY: yRange }}
        className="progress-bar--progress"
      />
    </motion.div>
  );
};

export default ProgressBar;
