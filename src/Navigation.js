import React from "react";
import { Grid, Row, Col } from "react-flexbox-grid";
import { Link } from "react-router-dom";
import styled from "styled-components";
// import "./navigation.css";

export const Navigation = () => {
  return (
    <NavigationWrapper>
      <Grid>
        <Row center="xs">
          <Col xs={12} sm={12} md={4} lg={5}>
            {/* <div id="logo"> */}
            {/* <div id="Navigation"> */}
            MYCZKOWCE SADYBA
            {/* </div> */}
            {/* </div> */}
          </Col>
          <Col xs={12} sm={10} md={8} lg={7} id="SecondCol">
            <Row around="xs">
              <Col>
                <Link id="Navigation" to="/">
                  Home Page
                </Link>
              </Col>
              <Byk>
                <Col>
                  <Link to="/gallery">Gallery</Link>
                </Col>
              </Byk>
              <Col>
                <Link id="Navigation" to="/offer">
                  Offer
                </Link>
              </Col>
              <Col>
                <Link id="Navigation" to="/contact">
                  Contact
                </Link>
              </Col>
              <Col>
                <Link id="Navigation" to="/News">
                  News
                </Link>
              </Col>
            </Row>
          </Col>
        </Row>
      </Grid>
    </NavigationWrapper>
  );
};

const NavigationWrapper = styled.div`
  position: fixed;
  background-color: rgba(0, 0, 0, 0.6);
  width: 100%;
  height: 80px;
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
const Byk = styled.a`
  color: white;
`;
