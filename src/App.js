import React from "react";
import "./App.css";
import { Navigation } from "./Navigation";
import { Pict } from "./Pict";
import { Section1 } from "./Section1";
import { Section2 } from "./Section2";
import { Section3 } from "./Section3";
import { News } from "./News";
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
          <Route path="/gallery">
            <Pict zdjecie="tutaj bedzie galeria" />
          </Route>


          <Route path="/contact">
            <Section1 title="Tutaj beda wskazowki dojazdu i kontakt"
              /*FirstN="photo" */ SecondN="photo2" ThirdN="photo3" />
          </Route>
          <Route path="/News">
            <News news=" Informacje O NAS " />
          </Route>


          <Route path="/offer">
            <Section2 Drugazakładka="Tutaj bedzie nasza oferta" />
          </Route>
          <Route path="/">
            <Section3 S3="HOME WITAJ NA MOJEJ STRONIE GLOWNEJ" />
            <Section2 Drugazakładka="Tutaj bedzie nasza oferta" />
            <News news=" Informacje O NAS " />

          </Route>


        </Switch>

      </Router>
    </div>
  );
}
export default App;
