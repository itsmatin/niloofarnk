import React from "react";
import { motion } from "framer-motion";
import ProgressiveImage from "react-progressive-image";
import clsx from "clsx";

const Image = ({
  variants,
  transition,
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
        <small className={clsx(["image--caption", captionClass])}>{text}</small>
      )}
      <ProgressiveImage placeholder={compressed} src={main}>
        {(src) => (
          <motion.img
            {...props}
            variants={variants}
            transition={transition}
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
