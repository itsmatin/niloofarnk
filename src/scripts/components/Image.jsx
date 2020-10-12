import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import ProgressiveImage from "react-progressive-image";
import clsx from "clsx";

const Image = ({
  drag = false,
  text = false,
  title = false,
  viewActive = true,
  viewOptions = {},
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
  main,
  compressed,
  props,
  alt,
  key,
  imageStyle,
  imageClass,
  captionClass,
  containerClass,
}) => {
  const { ref, inView } = useInView(viewOptions);

  return (
    <motion.div
      ref={ref}
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
      key={key}
    >
      {text && (
        <motion.small
          variants={captionVariants}
          className={clsx(["image--caption", captionClass])}
        >
          {text}
        </motion.small>
      )}
      <ProgressiveImage placeholder={compressed} src={main}>
        {(src) => (
          <motion.img
            {...props}
            drag={drag}
            draggable={drag}
            style={imageStyle}
            variants={imageVariants}
            src={src}
            alt={alt}
            className={clsx(["image", imageClass])}
          />
        )}
      </ProgressiveImage>
      {title && <motion.h2 className="image--title">{title}</motion.h2>}
    </motion.div>
  );
};

export default Image;
