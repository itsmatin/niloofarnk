import React, { useEffect, useState, memo } from "react";
import {
  useViewportScroll,
  useTransform,
  motion,
  useMotionValue,
} from "framer-motion";
import { ease } from "../utils/config";

const ProgressBar = ({ intro }) => {
  const { scrollYProgress } = useViewportScroll();
  const y = useTransform(scrollYProgress, [0, 0.9], [0, 1]);
  const textMotion = useMotionValue(y);
  const [text, setText] = useState("Scroll Down");
  const [animate, setAnimate] = useState(true);
  const transition = {
    delay: intro ? 4.7 : 0.2,
    ease,
    duration: 1,
  };

  useEffect(() => {
    function updateText(yValue) {
      if (0.2 > yValue) textMotion.set("Scroll Down");
      else if (0.2 < yValue && yValue < 0.7) textMotion.set("Designs");
      else if (0.7 < yValue && yValue < 0.9) textMotion.set("Projects");
      else textMotion.set("Who is Niloofar");
    }

    const unsubscribeY = y.onChange(updateText);
    const unSubscribeTextMotion = textMotion.onChange((value) => {
      setText(value);
      setAnimate(true);
      setTimeout(() => {
        setAnimate(false);
      }, 500);
    });
    return () => {
      unsubscribeY();
      unSubscribeTextMotion();
    };
  }, []);

  return (
    <motion.div
      transition={transition}
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: "12rem", opacity: 1 }}
      className="progress-bar"
    >
      <motion.div style={{ scaleY: y }} className="progress-bar--progress" />
      <motion.small
        animate={{ opacity: animate ? [1, 0, 1] : 1 }}
        transition={{ ease, duration: 0.5 }}
        className="progress-bar--caption"
      >
        {text}
      </motion.small>
    </motion.div>
  );
};

export default memo(ProgressBar);
