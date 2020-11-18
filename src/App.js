import React from "react";
import * as Pages from "./pages";
import * as Components from "./components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Components.Navigation />
        <Switch>
          <Route path="/gallery">
            <Pages.Galery zdjecie="tutaj bedzie galeria" />
          </Route>
          <Route path="/contact">
            <Pages.Contact />
          </Route>
          <Route path="/cottages">
            <Pages.Homes />
          </Route>
          <Route path="/restaurant">
            <Pages.Restaurant />
          </Route>
          <Route path="/">
            <Pages.Main Drugazakładka="O NAS" />
          </Route>
        </Switch>
        <Components.Footer />
      </Router>
    </div>
  );
}
export default App;
