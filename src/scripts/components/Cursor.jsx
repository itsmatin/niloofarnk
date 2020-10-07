import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import React, { useEffect, createRef } from "react";
import { ease, pink, transparent } from "../utils/config";

function isMobile() {
  return /Android|Mobi/i.test(navigator.userAgent);
}

const Cursor = () => {
  const ref = createRef(null);
  const opacity = useMotionValue(0);
  const bgColor = useSpring(transparent);
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
  const velocity = useSpring(50, { damping: 5, bounce: 0 });
  const scale = useTransform(velocity, [50, 1000], [1, 0.7]);

  function handleMouseEnter() {
    opacity.set(1);
  }

  function handleEnterAreas() {
    velocity.set(50);
    bgColor.set(pink);
  }

  function handleLeaveAreas() {
    velocity.set(1000);
    bgColor.set(transparent);
  }

  function handleMouseLeave() {
    opacity.set(0);
  }

  function handleMouseDown() {
    velocity.set(1000);
    bgColor.set(pink);
  }

  function handleMouseUp() {
    velocity.set(50);
    bgColor.set(transparent);
  }

  function handleMovement(event) {
    cursorX.set(event.clientX - 25);
    cursorY.set(event.clientY - 25);
    velocity.set(
      Math.abs(cursorX.getVelocity()) + Math.abs(cursorY.getVelocity())
    );
  }

  useEffect(() => {
    window.addEventListener("mousemove", handleMovement);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mouseup", handleMouseUp);
    document.querySelectorAll("img").forEach((element) => {
      // Areas consist of <a> and <button> tags
      element.addEventListener("mouseover", handleEnterAreas);
      element.addEventListener("mouseout", handleLeaveAreas);
    });
    return () => {
      window.removeEventListener("mousemove", handleMovement);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  return typeof navigator !== "undefined" && isMobile() ? null : (
    <motion.div
      ref={ref}
      className="cursor"
      style={{
        translateX: cursorX,
        translateY: cursorY,
        backgroundColor: bgColor,
        scale,
        opacity,
      }}
    />
  );
};

export default Cursor;
