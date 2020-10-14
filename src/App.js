import React from "react";
import "./App.css";
import { Navigation } from "./Navigation";
import { Pict } from "./Pict";
import { Section1 } from "./Section1";
import { Section2 } from "./Section2";
import { Section3 } from "./Section3";

import { Grid, Row, Col } from 'react-flexbox-grid';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Switch>
          <Route path="/offer">
            <Pict zdjecie="Tutaj bedzie nasza oferta" />
          </Route>
          <Route path="/contact">
            <Section1 title="Tutaj beda wskazowki dojazdu i kontakt"
              FirstN="photo" SecondN="photo2" ThirdN="photo3" />
          </Route>
          <Route path="/gallery">
            <Section2 Drugazakładka="tutaj bedzie galeria" />
          </Route>
          <Route path="/">
            <Section3 S3="HOME WITAJ NA MOJEJ STRONIE GLOWNEJ" />
          </Route>
        </Switch>

      </Router>
    </div>
  );
}
export default App;
