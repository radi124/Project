import React, { useState } from "react";
import { Grid, Row, Col } from "react-flexbox-grid";
import styled from "styled-components";

const PhotoColumn = (props) => {
  return (
    <>
      <PhotoWrapper>{props.src}</PhotoWrapper>
      <PhotoTitle>{props.title}</PhotoTitle>
      <PhotoDescription>{props.description}</PhotoDescription>
    </>
  );
};

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
            src={"src"}
            title="Pierwsze zdjecie"
            description="Pierwszy opis"
          />
        </Col>
        <Col xs={12} sm={6} md={4} lg={4}>
          <PhotoColumn
            src={"src"}
            title="Drugie zdjecie"
            description="Drugi opis"
          />
        </Col>
        <Col xs={12} sm={6} md={4} lg={4}>
          <PhotoColumn
            src={"src"}
            title="Trzecie zdjecie"
            description="Trzeci opis"
          />
        </Col>
      </Row>
    </Grid>
  );
};

const PhotoWrapper = styled.div`
  border: 1px solid black;
  width: 100%;
  height: 200px;
`;

const PhotoTitle = styled.h3``;

const PhotoDescription = styled.p``;

const Button = styled.button`
  background: white;
`;
