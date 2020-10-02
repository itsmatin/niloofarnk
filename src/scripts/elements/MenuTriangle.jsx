import React, { useEffect, useState } from "react";
import { motion, useViewportScroll } from "framer-motion";

const transition = {
  duration: 0.5,
  ease: [0.6, 0.1, -0.05, 0.9],
};

const triangleVariants = {
  open: {
    rotate: 180,
  },
  closed: {
    rotate: 0,
  },
};

const linesVariants = {
  open: {
    rotate: -270,
  },
  closed: {
    rotate: 0,
  },
};

const MenuTriangle = ({}) => {
  const [isOpen, setIsopen] = useState(false);
  const { scrollYProgress } = useViewportScroll();

  return (
    <motion.div
      className="triangle-menu"
      variants={triangleVariants}
      transition={transition}
      animate={isOpen ? "open" : "closed"}
      drag
      dragElastic={1}
      dragConstraints={{ top: 0, left: -50, right: 0, bottom: 50 }}
      whileHover={{ scale: 1.1 }}
      onClick={() => setIsopen(!isOpen)}
    >
      <svg style={{ transform: "scale(0.8)" }} width="68.327" height="61.732">
        <svg width="68.327" height="61.732">
          <motion.path
            d="M34.164 4.13l-30.77 55.6h61.542l-30.77-55.6m0-4.13l34.164 61.732H0L34.164 0z"
            fill="#eee"
            transition={transition}
            transform="matrix(-1 0 0 -1 68.327 61.732)"
          />
          <motion.path
            d="M15.002 15.636h38.77M25.12 31.14h18.274"
            transition={transition}
            variants={linesVariants}
            style={{ pathLength: scrollYProgress }}
            fill="none"
            stroke="#eee"
            stroke-width="2"
          />
        </svg>
      </svg>
    </motion.div>
  );
};

export default MenuTriangle;
