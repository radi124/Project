import React from "react";
import styled from "styled-components";
import { Grid, Row, Col } from "react-flexbox-grid";
import photo2 from "../../images/rr.jpg";

export const Restaurant = () => {
  return (
    <>
      <ImageWrapper>
        <Image src={photo2} />
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
