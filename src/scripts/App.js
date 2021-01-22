import React, { createRef, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Route, Switch, useHistory } from "react-router-dom";
import Navbar from "./components/Navbar";
import Cursor from "./components/Cursor";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Project from "./pages/Project";
import NotFound from "./pages/404";
import ScrollToTop from "./utils/ScrollToTop";
import { ease, transparent, whiteWhite } from "./utils/config";

const bgVariants = {
  black: { backgroundColor: transparent },
  white: { backgroundColor: whiteWhite },
};

function App() {
  const ref = createRef();
  const history = useHistory();
  const [menuOpen, setMenuOpen] = useState(false);
  const [bgColor, setBgColor] = useState("black");
  const [intro, setIntro] = useState(false);

  useEffect(() => {
    // setIntro(!localStorage.getItem("introShown"));
  }, []);
  useEffect(() => {
    if ((window.location.pathname === "/" && intro) || menuOpen)
      document.body.style.overflow = "hidden";
    else document.body.style.overflow = "unset";
  }, [intro, menuOpen]);

  useEffect(() => {
    history.listen(() => {
      setMenuOpen(false);
    });
  }, [history]);

  return (
    <ScrollToTop>
      <motion.div
        animate={bgColor}
        variants={bgVariants}
        transition={{ ease: ease, duration: 0.3 }}
        ref={ref}
        className="app"
      >
        {!intro && <Navbar menuOpen={menuOpen} handleMenu={setMenuOpen} />}

        <AnimatePresence>{menuOpen && <Menu />}</AnimatePresence>
        <Route
          render={({ location }) => (
            <AnimatePresence exitBeforeEnter>
              <Switch location={location} key={location.pathname}>
                <Route
                  exact
                  path="/"
                  render={() => <Home intro={intro} setIntro={setIntro} />}
                />
                <Route exact path="/contact" render={() => <Contact />} />
                <Route exact path="/about" render={() => <About />} />
                <Route
                  path="/project/:id"
                  render={(props) => (
                    <Project
                      bgColor={bgColor}
                      setBgColor={setBgColor}
                      {...props}
                    />
                  )}
                />
                <Route exact component={NotFound} />
              </Switch>
            </AnimatePresence>
          )}
        />
        <Cursor />
      </motion.div>
    </ScrollToTop>
  );
}

export default App;
