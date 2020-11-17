import React from "react";
import { Grid, Row, Col } from "react-flexbox-grid";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { slide as Menu } from "react-burger-menu";

export const Navigation = () => {
  return (
    <NavigationWrapper>
      <BurgerButtonWrapper style={{ height: "50px" }}>
        <BurgerButtonCross>
          <Menu id="burger-menu" right>
            <ButtonWrapper>
              <Link to="/">Strona główna</Link>
            </ButtonWrapper>
            <ButtonWrapper>
              <Link to="/Restauracja">Restauracja</Link>
            </ButtonWrapper>
            <ButtonWrapper>
              <Link to="/gallery">Galeria</Link>
            </ButtonWrapper>
            <ButtonWrapper>
              <Link to="/Domki">Domki</Link>
            </ButtonWrapper>
            <ButtonWrapper>
              <Link to="/contact">Kontakt</Link>
            </ButtonWrapper>
          </Menu>
        </BurgerButtonCross>
      </BurgerButtonWrapper>
      <Grid>
        <Row center="xs">
          <Col xs={12} sm={12} md={4} lg={5}>
            <LogoWrapper>
              <Link to="/">
                MYCZKOWCE <div>SADYBA</div>
              </Link>
            </LogoWrapper>
          </Col>
          <Col xs={12} sm={10} md={8} lg={7} id="SecondCol">
            <MenuWrapper>
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
                    <Link to="/contact">Kontakt</Link>
                  </ButtonWrapper>
                </Col>
                <Col>
                  <ButtonWrapper>
                    <Link to="/Domki">Domki</Link>
                  </ButtonWrapper>
                </Col>
              </Row>
            </MenuWrapper>
          </Col>
        </Row>
      </Grid>
    </NavigationWrapper>
  );
};

const BurgerButtonWrapper = styled.div`
  height: 38px !important;
  width: 44px;
  position: absolute;
  right: 40px;

  #react-burger-menu-btn {
    width: 44px !important;
    height: 38px !important;
  }
  .bm-burger-bars {
    border-radius: 12px;
    height: 6px !important;
    background: white !important;
    width: 44px !important;
    z-index: 50 !important;
    transition: 0.3s;
    :hover {
      cursor: pointer;
    }
  }
  display: block;
  @media only screen and (min-width: 768px) {
    display: none;
  }
`;

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
  width: 100vw;
  text-transform: uppercase;
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
    font-size: 18px;
    font-weight: 500;
  }
`;
const LogoWrapper = styled.div`
  a {
    text-decoration: none;
    color: rgb(236, 159, 14);
    font-size: 27px;
    font-family: Courier New;
  }
`;
const BurgerButtonCross = styled.div`
  background-color: black;
`;
const MenuWrapper = styled.div`
  display: none;
  @media only screen and (min-width: 768px) {
    display: block;
  }
`;
