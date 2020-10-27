import React from "react";
import "./domki.css";
import { Grid, Row, Col } from "react-flexbox-grid";
export const Domki = (props) => {
  return (
    <Grid>
      <Row id="ONas">
        <Col>
          <div id="ss">{props.Domki}</div>
        </Col>
      </Row>
      <Row>
        <Col id="t">
          <div>
            Uciszcie się! woła. Marząc i rzekł: Muszę ja i kończąc pacierz po
            deszczu żabki po kryjomu kazał stoły z woźnym Protazym ze cztery.
            Tymczasem na jutro na niem noty i z urzędu ten tylko chodzić zwykła
            z kim był, opisywać długo. Dosyć, że{" "}
          </div>
          <div> tutaj bedzie zdjecie</div>{" "}
        </Col>
      </Row>
    </Grid>
  );
};
