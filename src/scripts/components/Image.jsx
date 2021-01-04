import React from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

import clsx from "clsx";

const Image = ({
  drag = false,
  text = false,
  title = false,
  viewActive = true,
  viewOptions = {},
  textStyle = {},
  captionVariants,
  imageVariants,
  containerVariants,
  containerStyle,
  transition,
  onClick,
  onHoverStart,
  onHoverEnd,
  whileHover,
  animate,
  initial,
  src,
  props,
  alt,
  imageStyle,
  imageClass,
  captionClass,
  containerClass,
}) => {
  const { ref, inView } = useInView(viewOptions);

  return (
    <motion.div
      ref={ref}
      start
      onClick={onClick}
      transition={transition}
      variants={containerVariants}
      style={containerStyle}
      onHoverStart={onHoverStart}
      onHoverEnd={onHoverEnd}
      whileHover={whileHover}
      animate={inView && viewActive ? animate : initial}
      initial="initial"
      exit="exit"
      className={clsx(["image--container", containerClass])}
      {...props}
    >
      {text && (
        <motion.small
          style={textStyle}
          variants={captionVariants}
          className={clsx(["image--caption", captionClass])}
        >
          {text}
        </motion.small>
      )}
      <motion.img
        drag={drag}
        draggable={drag}
        style={imageStyle}
        variants={imageVariants}
        src={src}
        alt={alt}
        className={clsx(["image", imageClass])}
      />
      {title && <motion.h2 className="image--title">{title}</motion.h2>}
    </motion.div>
  );
};

export default Image;
