import { motion, useMotionValue, useSpring } from "framer-motion";
import React, { useEffect, createRef } from "react";
import { ease } from "../utils/config";

const Cursor = () => {
  const ref = createRef(null);
  const cursorX = useMotionValue();
  const cursorY = useMotionValue();

  function handleMovement(event) {
    cursorX.set(event.clientX - 16);
    cursorY.set(event.clientY - 16);
  }

  useEffect(() => {
    window.addEventListener("mousemove", handleMovement);
    return () => window.removeEventListener("mousemove", handleMovement);
  }, []);

  return (
    <motion.div
      ref={ref}
      className="cursor"
      style={{ translateX: cursorX, translateY: cursorY }}
    />
  );
};

export default Cursor;
