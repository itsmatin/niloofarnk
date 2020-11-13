import React from "react";
import {
  motion,
  useViewportScroll,
  useTransform,
  useSpring,
} from "framer-motion";
import { grey, black, ease, white } from "../utils/config";
import Image from "../components/Image";

const shapeVariants = {
  grey: { backgroundColor: grey },
  black: { backgroundColor: black },
};

const textVariants = {
  white: { color: white },
  black: { color: black },
};
const ProjectDetails = ({ bgColor }) => {
  const { scrollYProgress } = useViewportScroll();
  const triangleY = useTransform(scrollYProgress, [0.2, 0.6], [400, -400]);
  const scale = useTransform(scrollYProgress, [0.4, 0.8], [0.9, 1.1]);
  const scaleSecond = useTransform(scrollYProgress, [0.4, 0.8], [1.1, 0.9]);
  const scaleSpring = useSpring(scale, { stiffness: 200, bounce: 0 });
  const scaleSecondSpring = useSpring(scaleSecond, {
    stiffness: 200,
    bounce: 0,
  });
  return (
    <>
      <div className="project__details">
        <motion.div
          transition={{ ease: ease }}
          variants={shapeVariants}
          style={{ y: triangleY }}
          initial="grey"
          animate={bgColor === "white" ? "black" : "grey"}
          className="project__shape project__shape--triangle"
        />
        <motion.div
          initial="white"
          animate={bgColor === "white" ? "black" : "white"}
          variants={textVariants}
          className="project__details__text"
        >
          <h1 className="project__details--title">More details</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto
            autem tenetur quisquam accusamus vero vitae enim, modi at quo
            consequuntur optio eum. Culpa repellendus sapiente odio asperiores
            excepturi quo, cumque quia necessitatibus cum expedita deleniti eos
            velit ipsum libero, quasi ducimus neque nam tenetur iste
            voluptatibus temporibus tempore! Ut, quidem libero.
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum
            corrupti ab ea provident officia culpa fuga quae obcaecati quo,
            omnis at repellat laborum nemo eius voluptas voluptate quasi fugiat
            cupiditate. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis cum nemo fuga, minus voluptates sequi? Lorem, ipsum
            dolor sit amet consectetur adipisicing elit. Harum corrupti ab ea
            provident officia culpa fuga quae obcaecati quo, omnis at repellat
            laborum nemo eius voluptas voluptate quasi fugiat cupiditate.
          </p>
        </motion.div>
        <Image
          containerStyle={{ scale: scaleSpring }}
          containerClass="project__details--image"
          main="/capstone/void.jpg"
        />
      </div>
      <div className="project__details" style={{ alignItems: "center" }}>
        <Image
          containerStyle={{ scale: scaleSecondSpring }}
          transition={{ delay: 2 }}
          containerClass="project__details--image"
          main="/capstone/topView.jpg"
        />
        <div className="project__shape project__shape--octagon" />
        <motion.div
          initial="white"
          animate={bgColor === "white" ? "black" : "white"}
          variants={textVariants}
          className="project__details__text"
        >
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto
            autem tenetur quisquam accusamus vero vitae enim, modi at quo
            consequuntur optio eum. Culpa repellendus sapiente odio asperiores
            excepturi quo, cumque quia necessitatibus cum expedita deleniti eos
            velit ipsum libero, quasi ducimus neque nam tenetur iste
            voluptatibus temporibus tempore! Ut, quidem libero.
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum
            corrupti ab ea provident officia culpa fuga quae obcaecati quo,
            omnis at repellat laborum nemo eius voluptas voluptate quasi fugiat
            cupiditate. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis cum nemo fuga, minus voluptates sequi? Lorem, ipsum
            dolor sit amet consectetur adipisicing elit. Harum corrupti ab ea
            provident officia culpa fuga quae obcaecati quo, omnis at repellat
            laborum nemo eius voluptas voluptate quasi fugiat cupiditate.
          </p>
        </motion.div>
      </div>
    </>
  );
};

export default ProjectDetails;
