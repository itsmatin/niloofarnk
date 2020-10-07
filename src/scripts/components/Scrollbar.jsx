import React, { useState, createRef, useEffect } from "react";
import { motion } from "framer-motion";
import { ease } from "../utils/config";

const thumbMinHeight = 20;

const transition = {
  delay: 0.1,
};

const variants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
};

const Scrollbar = ({ pageRef }) => {
  //   const ref = createRef();
  const [thumbHeight, setThumbHeight] = useState(thumbMinHeight);
  const [thumbTop, setThumbTop] = useState(0);

  useEffect(() => {
    const {
      clientHeight,
      scrollHeight,
      scrollTop,
      offsetHeight,
    } = pageRef.current;
    console.log(clientHeight, scrollHeight, scrollTop, offsetHeight);
    const scrollThumbPercentage = clientHeight / scrollHeight;
    const scrollThumbHeight = Math.max(
      scrollThumbPercentage * clientHeight,
      thumbMinHeight
    );
    setThumbHeight(scrollThumbHeight);
  }, []);

  useEffect(() => {}, []);

  return (
    <motion.div
      variants={variants}
      transition={transition}
      initial="initial"
      whileHover={{ opacity: 1 }}
      className="scrollbar"
    >
      <motion.div
        // ref={ref}
        style={{ height: thumbHeight, top: thumbTop }}
      ></motion.div>
    </motion.div>
  );
};

export default Scrollbar;
