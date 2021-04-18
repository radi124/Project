import React from "react";
import styled from "styled-components";
import { Grid, Row, Col } from "react-flexbox-grid";
import photo1 from "./images/cover_top.jpg";

export const Navigation = () => {
  return (
    <>
      <ImageWrapper>
        <Image src={photo1} />
      </ImageWrapper>
      <Grid>
        <Row>
          <Col></Col>
        </Row>
      </Grid>
    </>
  );
};

const Image = styled.img`
  height: 600px;
  width: 100%;
  object-fit: cover;
`;
const ImageWrapper = styled.div``;
