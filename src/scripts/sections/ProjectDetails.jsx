import React from "react";
import { motion, useViewportScroll, useTransform } from "framer-motion";
import { white, transparent } from "../utils/config";
import Image from "../components/Image";

const ProjectDetails = () => {
  const { scrollYProgress } = useViewportScroll();

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
    </>
  );
};

export default ProjectDetails;
