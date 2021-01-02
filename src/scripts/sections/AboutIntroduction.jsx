import React from "react";
import { motion, useTransform, useViewportScroll } from "framer-motion";
import Image from "../components/Image";
import { ease, transparent, white } from "../utils/config";

const AboutIntroduction = () => {
  const { scrollYProgress } = useViewportScroll();
  const imageY = useTransform(scrollYProgress, [0.1, 0.6], [0, -100]);
  const textY = useTransform(scrollYProgress, [0.1, 0.6], [0, 200]);
  const pathLength = useTransform(scrollYProgress, [0, 0.4], [0, 1]);

  return (
    <motion.section className="about__introduction">
      <Image
        containerStyle={{ y: imageY }}
        transition={{ ease }}
        containerClass="about__introduction--image"
        main="/niloofar.png"
        compressed="/niloofar-compressed.png"
      />
      <motion.div className="about__introduction--triangle" />
      <motion.div
        transition={{ ease }}
        style={{ y: textY }}
        className="about__introduction__text"
      >
        <svg width="1000" height="300">
          <motion.path
            transition={{ damping: 20 }}
            style={{ pathLength: pathLength, opacity: 0.5 }}
            d="M -2000 100 50 100 L 50 50 L 70 50 L 70 100 L 90 100 L 90 50 L 110 50 L 110 100 L 130 100 L 130 50 L 150 50 L 150 100 L 170 100 L 170 50 L 190 50 L 190 100 L 210 50 L 210 100 L 230 50 L 230 100 L 250 50 L 250 100 L 2000 100"
            fill={transparent}
            stroke={white}
            strokeWidth="3"
          />
        </svg>
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
