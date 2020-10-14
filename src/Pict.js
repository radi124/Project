import React from "react";
import "./Pict.css";
import { Grid, Row, Col } from "react-flexbox-grid";

export const Pict = (props) => {
  return (
    <Grid>
      <Row>
        <Col>
          <div id="thatIsFirstPhoto">{props.zdjecie}</div>
        </Col>
      </Row>
    </Grid>
  );
};
