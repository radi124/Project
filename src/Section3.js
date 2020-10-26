import React from "react";
import styled from "styled-components";
import { Grid, Row, Col } from "react-flexbox-grid";
import photo from "./images/rrrr.jpg";

export const Section3 = () => {
  return (
    <div>
      <ImageWrapper>
        {/* <Grid>
          <Row>
            <Col xs={12} sm={12} md={12} lg={12}> */}
        <Image src={photo} />
        {/* </Col>
          </Row>
        </Grid> */}
      </ImageWrapper>
    </div>
  );
};

const ImageWrapper = styled.div``;

const Image = styled.img`
  height: 600px;
  width: 100%;
  object-fit: cover;
`;
