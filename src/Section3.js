import React from "react";
import styled from "styled-components";
import { Grid, Row, Col } from "react-flexbox-grid";

export const Section3 = () => {
  return (
    <Grid>
      <NavigationWrapper>
        <Row>
          <Col>nazwa</Col>
        </Row>
      </NavigationWrapper>
    </Grid>
  );
};

const NavigationWrapper = styled.div`
  height: 200px;
`;
