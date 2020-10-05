import React from "react";
import clsx from "clsx";
import { motion } from "framer-motion";

const Triangle = ({
  width = 3,
  height = 3,
  style,
  className = "",
  variants,
}) => {
  return (
    <motion.div
      variants={variants}
      initial="initial"
      exit="exit"
      animate="animate"
      style={{ width: `${width}rem`, height: `${height}rem`, ...style }}
      className={clsx(["triangle", className])}
    />
  );
};

export default Triangle;
