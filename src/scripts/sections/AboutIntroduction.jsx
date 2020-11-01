import React from "react";
import { motion, useTransform, useViewportScroll } from "framer-motion";
import Image from "../components/Image";
import { ease } from "../utils/config";

const AboutIntroduction = () => {
  const { scrollYProgress } = useViewportScroll();
  // const imageY = useTransform(scrollYProgress, [0.2, 0.6, 0.7], [-200, 0, 100]);
  const textY = useTransform(scrollYProgress, [0.1, 0.8], [-400, 0]);

  return (
    <motion.section className="about__introduction">
      <Image
        transition={{ ease }}
        containerClass="about__introduction--image"
        main="/niloofar.jpg"
      />

      <motion.div className="about__introduction--triangle" />
      <motion.div
        transition={{ ease }}
        style={{ y: textY }}
        className="about__introduction__text"
      >
        <h1>Hey there,</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto autem
          tenetur quisquam accusamus vero vitae enim, modi at quo consequuntur
          optio eum. Culpa repellendus sapiente odio asperiores excepturi quo,
          cumque quia necessitatibus cum expedita deleniti eos velit ipsum
          libero, quasi ducimus neque nam tenetur iste voluptatibus temporibus
          tempore! Ut, quidem libero.
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum
          corrupti ab ea provident officia culpa fuga quae obcaecati quo, omnis
          at repellat laborum nemo eius voluptas voluptate quasi fugiat
          cupiditate. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Perspiciatis cum nemo fuga, minus voluptates sequi? Lorem, ipsum dolor
          sit amet consectetur adipisicing elit. Harum corrupti ab ea provident
          officia culpa fuga quae obcaecati quo, omnis at repellat laborum nemo
          eius voluptas voluptate quasi fugiat cupiditate.
        </p>
      </motion.div>
    </motion.section>
  );
};

export default AboutIntroduction;
