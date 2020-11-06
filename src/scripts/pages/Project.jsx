import React from "react";
import ProjectHeader from "../sections/ProjectHeader";
import { motion } from "framer-motion";
import Image from "../components/Image";

const Project = () => {
  return (
    <div className="project">
      <ProjectHeader />
      <div className="project__info">
        <p className="project__info--description">
          A super short description goes right here, almost exactly as long as
          this sample text
        </p>
        <div className="project__info__box">
          <span>Type</span>
          <h5>Commercial</h5>
        </div>
        <div className="project__info__box">
          <span>Duration</span>
          <h5>6 Months</h5>
        </div>
        <div className="project__info__box">
          <span>Type</span>
          <h5>Commercial</h5>
        </div>
      </div>

      <div className="project__process">
        <h2 className="project__process--title">DESIGN PROCESS</h2>
        <img src="./process.jpg" className="project__process--image" />
        <img src="./process2.jpg" className="project__process--image" />
        <img src="./process3.jpg" className="project__process--image" />
      </div>

      <div className="project__details">
        <motion.div className="project__details--triangle" />
        <motion.div className="project__details__text">
          <h1>More details</h1>
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
        <Image containerClass="about__details --image" main="/niloofar.jpg" />
      </div>
    </div>
  );
};

export default Project;
