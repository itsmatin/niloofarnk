import React from "react";
import { Route, Switch } from "react-router-dom";
import "../stylesheets/main.scss";
import Home from "./pages/Home";

function App() {
  return (
    <Switch>
      <Route path="/" render={() => <Home />} />
    </Switch>
  );
}

export default App;
