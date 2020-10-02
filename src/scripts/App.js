import React from "react";
import { AnimatePresence } from "framer-motion";
import { Route, Switch } from "react-router-dom";
import "../stylesheets/main.scss";
import Home from "./pages/Home";
import Loading from "./pages/Loading";
import Navbar from "./components/Navbar";
import Menu from "./pages/Menu";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Switch>
        <Route path="/" render={() => <Home />} />
        {/* <Loading /> */}
        <Menu />
      </Switch>
    </div>
  );
}

export default App;
