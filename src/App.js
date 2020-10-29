import React from "react";
import "./App.css";
import { Navigation } from "./Navigation";
import { Pict } from "./Pict";
import { Section1 } from "./Section1";
import { Section2 } from "./Section2";
import { Section3 } from "./Section3";
import { Domki } from "./Domki";
import { Restauracja } from "./Restauracja";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Switch>
          <Route path="/gallery">
            <Pict zdjecie="tutaj bedzie galeria" />
          </Route>

          <Route path="/contact">
            <Section1 />
          </Route>
          <Route path="/Domki">
            <Domki />
          </Route>
          <Route path="/Restauracja">
            <Restauracja />
          </Route>

          <Route path="/">
            <Section2 Drugazakładka="O NAS" />
            <Section3 />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
export default App;
