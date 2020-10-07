import React from "react";
import { motion } from "framer-motion";
import ProgressiveImage from "react-progressive-image";
import clsx from "clsx";

const Image = ({
  imageVariants,
  captionVariants,
  text = false,
  isVisible = true,
  main,
  compressed,
  props,
  alt,
  style,
  imageClass,
  captionClass,
  containerClass,
}) => {
  return (
    <div className={clsx(["image--container", containerClass])}>
      {text && (
        <motion.small
          variants={captionVariants}
          animate={isVisible ? "animate" : "initial"}
          initial="initial"
          className={clsx(["image--caption", captionClass])}
        >
          {text}
        </motion.small>
      )}
      <ProgressiveImage placeholder={compressed} src={main}>
        {(src) => (
          <motion.img
            {...props}
            style={style}
            variants={imageVariants}
            animate={isVisible ? "animate" : "initial"}
            initial="initial"
            src={src}
            alt={alt}
            className={clsx(["image", imageClass])}
          />
        )}
      </ProgressiveImage>
    </div>
  );
};

export default Image;
