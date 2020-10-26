import React from "react";
import { Grid, Row, Col } from "react-flexbox-grid";
import styled from "styled-components";
import photo1 from "./images/r.jpg";
import photo2 from "./images/rr.jpg";
// import photo3 from "./images/rrr.jpg";

export const Section2 = (props) => {
  return (
    <Grid>
      <Row center="xs">
        <Col xs={6} id="S2Container">
          {props.Drugazakładka}
        </Col>
      </Row>
      <Row center="xs">
        <Col xs={12} sm={6} md={4} lg={4}>
          <PhotoColumn
            src={photo1}
            title="Pierwsze zdjecie"
            description="Pierwszy opis"
          />
        </Col>
        <Col xs={12} sm={6} md={4} lg={4}>
          OPIS OPIS OPIS OPIS
        </Col>
      </Row>
      <Row center="xs">
        <Col xs={6} id="S2Container">
          {props.Drugazakładka}
        </Col>
      </Row>
      <Row center="xs">
        <Col xs={12} sm={6} md={4} lg={8} style={{ border: "1px solid black" }}>
          OPIS OPIS OPIS OPIS
        </Col>
        <Col xs={12} sm={6} md={4} lg={4}>
          <PhotoColumn
            src={photo2}
            title="Pierwsze zdjecie"
            description="Pierwszy opis"
          />
        </Col>
      </Row>
    </Grid>
  );
};

const PhotoColumn = (props) => {
  return (
    <>
      <PhotoWrapper>
        <Photo src={props.src} />
      </PhotoWrapper>
      <PhotoTitle>{props.title}</PhotoTitle>
      <PhotoDescription>{props.description}</PhotoDescription>
    </>
  );
};

const Photo = styled.img`
  width: 100%;
  max-height: 200px;
  object-fit: cover;
  border-radius: 12px;
  box-shadow: 0 0px 6px rgba(0, 0, 0, 0.12), 0 0px 6px rgba(0, 0, 0, 0.12);
  transition: 0.5s;
  :hover {
    box-shadow: 0 0px 12px rgba(0, 0, 0, 0.24), 0 0px 12px rgba(0, 0, 0, 0.24);
    cursor: pointer;
  }
`;

const PhotoWrapper = styled.div`
  width: 100%;
  height: 200px;
`;

const PhotoTitle = styled.h3``;

const PhotoDescription = styled.p``;
