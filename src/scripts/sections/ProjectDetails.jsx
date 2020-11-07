import React from "react";
import { motion, useViewportScroll, useTransform } from "framer-motion";
import { white, transparent } from "../utils/config";
import Image from "../components/Image";

const ProjectDetails = () => {
  const { scrollYProgress } = useViewportScroll();
  const pathLength = useTransform(scrollYProgress, [0.2, 0.6], [0, 1]);

  return (
    <>
      <div className="project__details">
        <motion.div className="project__shape project__shape--triangle" />
        <motion.div className="project__details__text">
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
          containerClass="project__details--image"
          main="/capstone/void.jpg"
        />
      </div>
      <div className="project__details" style={{ alignItems: "center" }}>
        <Image
          containerClass="project__details--image"
          main="/capstone/topView.jpg"
        />
        <motion.div className="project__shape project__shape--octagon" />
        <motion.div className="project__details__text">
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

      <svg className="project__showcase__drawing" width="830" height="800">
        <motion.path
          transition={{ damping: 20 }}
          d="M 800 800 L 800 250 Q 750 150 700 250 L 700 500 L 600 500 C 500 300 600 50 600 50 L 400 50 C 400 50 500 300 400 500 L 350 500 L 350 100 L 250 100 L 250 500 L 200 500 L 100 150 L 50 150 L 50 500 L 0 500"
          style={{ pathLength: pathLength, opacity: 0.5 }}
          fill={transparent}
          stroke={white}
          strokeWidth="3"
        />
      </svg>
    </>
  );
};

export default ProjectDetails;
