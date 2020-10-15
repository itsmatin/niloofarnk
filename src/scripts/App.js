import React, { createRef, useState } from "react";
import clsx from "clsx";
import { AnimatePresence } from "framer-motion";
import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Menu from "./pages/Menu";
import Cursor from "./components/Cursor";
import Scrollbar from "./components/Scrollbar";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const ref = createRef();

  return (
    <div ref={ref} className={clsx(["app", menuOpen && "no-scroll"])}>
      <Navbar menuOpen={menuOpen} handleMenu={setMenuOpen} />
      {/* <Scrollbar pageRef={ref} /> */}
      <AnimatePresence>{menuOpen && <Menu />}</AnimatePresence>
      <Switch>
        <Route path="/" render={() => <Home />} />
      </Switch>
      <Cursor />
    </div>
  );
}

export default App;
