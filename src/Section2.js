import React from "react";
import { Grid, Row, Col } from "react-flexbox-grid";
import styled from "styled-components";
import photo1 from "./images/r.jpg";
import photo2 from "./images/rr.jpg";
import photo3 from "./images/rrr.jpg";

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
          <PhotoColumn
            src={photo2}
            title="Drugie zdjecie"
            description="Drugi opis"
          />
        </Col>
        <Col xs={12} sm={6} md={4} lg={4}>
          <PhotoColumn
            src={photo3}
            title="Trzecie zdjecie"
            description="Trzeci opis"
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

const Photo = styled.img``;

const PhotoWrapper = styled.div`
  border: 1px solid black;
  width: 100%;
  height: 200px;
`;

const PhotoTitle = styled.h3``;

const PhotoDescription = styled.p``;
