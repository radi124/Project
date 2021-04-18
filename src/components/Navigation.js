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
            <Link to="/">Strona główna</Link>

            <Link to="/offer">Oferta</Link>

            <Link to="/gallery">Galeria</Link>

            <Link to="/cottages">Domki</Link>

            <Link to="/contact">Kontakt</Link>
          </Menu>
        </BurgerButtonCross>
      </BurgerButtonWrapper>
      <Grid>
        <Row center="xs" start="sm">
          <Col xs={12} sm={12} md={3} lg={4}>
            <LogoWrapper>
              <Link to="/">
                MYCZKOWCE <br />
                SADYBA
              </Link>
            </LogoWrapper>
          </Col>
          <Col xs={12} sm={10} md={9} lg={8} id="SecondCol">
            <MenuWrapper>
              <Row around="xs">
                <Col>
                  <ButtonWrapper>
                    <Link to="/">Strona główna</Link>
                  </ButtonWrapper>
                </Col>
                <Col>
                  <ButtonWrapper>
                    <Link to="/offer">Oferta</Link>
                  </ButtonWrapper>
                </Col>
                <Col>
                  <ButtonWrapper>
                    <Link to="/gallery">Galeria</Link>
                  </ButtonWrapper>
                </Col>
                <Col>
                  <ButtonWrapper>
                    <Link to="/cottages">Domki</Link>
                  </ButtonWrapper>
                </Col>
                <Col>
                  <InfoButton>
                    <Link to="../contact">Kontakt</Link>
                  </InfoButton>
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
  right: 50px;

  #react-burger-menu-btn {
    width: 44px !important;
    height: 38px !important;
  }
  .bm-burger-bars {
    border-radius: 12px;
    height: 6px !important;
    background: white !important;
    width: 44px !important;

    transition: 0.3s;
    :hover {
      cursor: pointer;
    }
  }
  display: block;
  @media only screen and (min-width: 992px) {
    display: none;
  }
  #burger-menu {
    background-color: rgba(0, 0, 0, 0.6);
    top: 80px;
    a {
      text-decoration: none;
      color: #ffff;
      padding: 10px 0px;
      padding-left: 20px;
      font-size: 18px;
      font-weight: 500;
    }
  }
  .bm-overlay {
    background-color: rgba(0, 0, 0, 0) !important;
    position: absolute !important;
    height: 100vh !important;
    width: 100vw !important;
    right: 0px;
    top: 50px;
  }
  .bm-menu {
    overflow: hidden !important;
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

    :hover {
      text-shadow: 3px 3px 5px #000000;
      color: #a3a09f;
      position: relative;
      top: -6px;
    }
  }
`;
const LogoWrapper = styled.div`
  a {
    text-decoration: none;
    color: rgb(236, 159, 14);
    font-size: 27px;
    font-family: Courier New;
    :hover {
      text-shadow: 1px 1px 1px #f2ae30;
    }
  }
`;
const BurgerButtonCross = styled.div`
  background-color: black;
`;
const MenuWrapper = styled.div`
  display: none;
  @media only screen and (min-width: 992px) {
    display: block;
  }
`;
const InfoButton = styled.div`
  a {
    letter-spacing: 1px;
    text-decoration: none;
    padding: 10px 16px;
    border-radius: 10px;
    font-weight: 900;
    font-size: 18px;
    background-color: rgb(236, 159, 14);
    color: #fff;
    text-transform: uppercase;
    border: none;
    margin-right: 20px;
    :hover {
      cursor: pointer;
      box-shadow: 0 0px 2px #848484, 0 0px 2px #848484;
    }
  }
`;
const ButtonsWrappers = styled.div`
  margin: 85px 0px;
`;
