import React from "react";
import { Grid, Row, Col } from "react-flexbox-grid";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const Navigation = () => {
  return (
    <NavigationWrapper>
      <Grid>
        <Row center="xs">
          <Col xs={12} sm={12} md={4} lg={5}>
            <Link to="/">
              <LogoWrapper>
                MYCZKOWCE <div>SADYBA</div>
              </LogoWrapper>
            </Link>
          </Col>
          <Col xs={12} sm={10} md={8} lg={7} id="SecondCol">
            <Row around="xs">
              <Col>
                <ButtonWrapper>
                  <Link to="/">Strona główna</Link>
                </ButtonWrapper>
              </Col>
              <Col>
                <ButtonWrapper>
                  <Link to="/Restauracja">Restauracja</Link>
                </ButtonWrapper>
              </Col>
              <Col>
                <ButtonWrapper>
                  <Link to="/gallery">Galeria</Link>
                </ButtonWrapper>
              </Col>
              <Col>
                <ButtonWrapper>
                  <Link to="/contact">kontakt</Link>
                </ButtonWrapper>
              </Col>
              <Col>
                <ButtonWrapper>
                  <Link to="/Domki">Domki</Link>
                </ButtonWrapper>
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
  text-decoration: none;
  .center-xs {
    justify-content: center;
    text-align: center;
    align-items: center;
    display: flex;
    flex-direction: row;
  }
`;
const ButtonWrapper = styled.div`
  a {
    color: rgb(255, 255, 255);
    text-decoration: none;
  }
`;
const LogoWrapper = styled.a`
  color: rgb(236, 159, 14);
  font-size: 27px;
  font-family: Courier New;
`;
