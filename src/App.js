import React from "react";
import "./App.css";
import { Navigation } from "./Navigation";
import { Pict } from "./Pict";
const Drugi = (props) => {
  return (
    <div id="siema">
      {props.title} {props.subtitle}
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <Navigation
        zdj="tuBedzieZdj"
        menu="galeria"
        byk="menu"
        dzik="okolica"
        jeleń="klikja"
        sarna="to_niezła_sarna"
      />

      <Drugi title={5} subtitle="napis" />
      <Pict zdjecie="xd" />
    </div>
  );
}
export default App;
