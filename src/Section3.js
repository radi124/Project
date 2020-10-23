import React from "react";
import styled from "styled-components";
import { Grid, Row, Col } from "react-flexbox-grid";
// import photo from "./images/trzecieautko.jpg";

export const Section3 = (props) => {
  return (
    <div>
      <Grid>
        <Row center="xs">
          <Col>{props.S3}</Col>
        </Row>
      </Grid>
      {/* <ImageWrapper>
        <Image src={photo} />
      </ImageWrapper> */}
    </div>
  );
};

const ImageWrapper = styled.div``;

const Image = styled.img`
  height: 400px;
  width: 100%;
`;
