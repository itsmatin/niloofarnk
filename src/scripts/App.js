import React, { createRef, useEffect, useState } from "react";
import clsx from "clsx";
import { AnimatePresence } from "framer-motion";
import { Route, Switch, useHistory } from "react-router-dom";
import Navbar from "./components/Navbar";
import Cursor from "./components/Cursor";
import Scrollbar from "./components/Scrollbar";
import Curtain from "./components/Curtain";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Project from "./pages/Project";

function App() {
  const ref = createRef();
  const history = useHistory();
  const [menuOpen, setMenuOpen] = useState(false);
  const [transition, setTransition] = useState(false);

  useEffect(() => {
    history.listen(() => {
      setTransition(true);
      setMenuOpen(false);
      setTimeout(() => setTransition(false), 1000);
    });
  }, [history]);

  return (
    <div ref={ref} className={clsx(["app", menuOpen && "no-scroll"])}>
      <Navbar menuOpen={menuOpen} handleMenu={setMenuOpen} />
      {/* <Scrollbar pageRef={ref} /> */}
      <AnimatePresence>{menuOpen && <Menu />}</AnimatePresence>
      <Route
        render={({ location }) => (
          <AnimatePresence exitBeforeEnter>
            <Switch location={location} key={location.pathname}>
              <Route exact path="/" render={() => <Home />} />
              <Route path="/contact" render={() => <Contact />} />
              <Route path="/about" render={() => <About />} />
              <Route path="/project/" render={() => <Project />} />
            </Switch>
          </AnimatePresence>
        )}
      />
      <Cursor />
      <Curtain transition={transition} />
    </div>
  );
}

export default App;
