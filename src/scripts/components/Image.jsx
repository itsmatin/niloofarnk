import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import ProgressiveImage from "react-progressive-image";
import clsx from "clsx";

const Image = ({
  drag = false,
  text = false,
  title = false,
  captionVariants,
  imageVariants,
  containerVariants,
  containerStyle,
  viewOptions = {},
  main,
  compressed,
  props,
  alt,
  imageStyle,
  imageClass,
  captionClass,
  containerClass,
}) => {
  const { ref, inView } = useInView(viewOptions);
  useEffect(() => {
    if (inView) console.log("inView");
  }, [inView]);

  return (
    <motion.div
      variants={containerVariants}
      ref={ref}
      style={containerStyle}
      animate={inView ? "animate" : "initial"}
      initial="initial"
      className={clsx(["image--container", containerClass])}
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
