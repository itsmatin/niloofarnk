import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Loading from "./Loading";
import AnimatedText from "../utils/AnimatedText";

const Home = () => {
  const [initialLoading, setInitialLoading] = useState(true);

  return (
    <div className={"home"}>
      <AnimatePresence>
        {initialLoading && (
          <Loading handleInitialLoading={() => setInitialLoading(false)} />
        )}
      </AnimatePresence>
      {!initialLoading && (
        <h1 className="home__title">
          <AnimatedText>
            NILOOFAR NIKOOKAR IS A DESIGNER BASED IN LOS ANGELES CA.
          </AnimatedText>
        </h1>
      )}
    </div>
  );
};

export default Home;
