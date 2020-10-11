import React from "react";
import "./App.css";
import { Navigation } from "./Navigation";
import { Pict } from "./Pict";
import {Section1} from "./Section1";
function App() {
  return (
    <div className="App">
      <Navigation
        zdj="tuBedzieLogo"
        menu="galeria"
        byk="menu"
        dzik="okolica"
        jeleń="klikja"
        sarna="to_niezła_sarna"
         />
      <Pict zdjecie="xd" />
      <Section1 title="witamy w restauracji kurwy" 
      FirstN="photo" SecondN="photo2" ThirdN="photo3"/>
      

    </div>
  );
}
export default App;
