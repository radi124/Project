import React from "react";
import { Grid, Row, Col } from 'react-flexbox-grid';
import { Link } from "react-router-dom";

export const Navigation = () => {
  return (
    <Grid>
      <Row center="xs">
        <Col xs={12} sm={12} md={4} lg={5}>
          <div id="Navigation">Logo</div>
        </Col>
        <Col xs={12} sm={10} md={8} lg={7}>
          <Row around="xs">
            <Col>
              <Link id="Navigation" to="/">Home Page</Link>
            </Col>
            <Col>
              <Link id="Navigation" to="/gallery">Gallery</Link>
            </Col>
            <Col>
              <Link id="Navigation" to="/offer">Offer</Link>
            </Col>
            <Col>
              <Link className="Navigations" to="/contact">Contact</Link>
            </Col>
            <Col>
              <Link id="Navigation" to="/News">News</Link>
            </Col>
          </Row>
        </Col>
      </Row>
    </Grid>
  );
};
