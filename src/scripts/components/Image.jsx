import React from "react";
import { motion } from "framer-motion";
import ProgressiveImage from "react-progressive-image";
import clsx from "clsx";

const Image = ({
  imageVariants,
  captionVariants,
  text = false,
  main,
  compressed,
  props,
  alt,
  imageClass,
  captionClass,
  containerClass,
}) => {
  return (
    <div className={clsx(["image--container", containerClass])}>
      {text && (
        <motion.small
          variants={captionVariants}
          animate="animate"
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
            variants={imageVariants}
            animate="animate"
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
