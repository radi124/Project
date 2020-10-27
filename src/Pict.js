import React from "react";
import { Grid, Row, Col } from "react-flexbox-grid";

export const Pict = (props) => {
  return (
    <Grid id="bm">
      <Row center="xs">
        <Col>
          <div id="Pict">{props.zdjecie}</div>
        </Col>
      </Row>
    </Grid>
  );
};
