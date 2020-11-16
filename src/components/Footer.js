import React from "react";
import styled from "styled-components";
import { Grid, Row, Col } from "react-flexbox-grid";
import phoneIcon from "../images/phone.svg";
import facebookLogo from "../images/facebook.svg";
import emailLogo from "../images/email.svg";
import instalogo from "../images/instagram.svg";

export const Footer = () => {
  return (
    <NavigationWrapper>
      <Grid>
        <Row center="xs">
          <Col>
            <H2Wrapper>
              Myczkowce
              <br />
              Sadyba
            </H2Wrapper>
            Myczkowce 82 38-623 Solina ,Polska
          </Col>
        </Row>
      </Grid>
      <Hr />
      <Grid>
        <Row center="xs">
          <Col xs={6} sm={4} md={4} lg={4}>
            Copyright © 2018-2020 Sadyba Sp. z o.o. All rights reserved.
          </Col>
          <Col xs={6} sm={4} md={4} lg={4}>
            <PhoneWrapper href="tel:609-470-676">
              <Photo src={phoneIcon} />
              609 470 676
            </PhoneWrapper>
          </Col>
          <Col xs={12} sm={4} md={4} lg={4}>
            <IconsWrapper>
              <Link
                href="https://www.facebook.com/myczkowcesadyba/?epa=SEARCH_BOX"
                target="_blank"
              >
                <Photo src={facebookLogo} />
              </Link>
              <Link
                href=" https://www.instagram.com/explore/locations/226554641416824/myczkowce-sadyba/?hl=pl  "
                target="_blank"
              >
                <Photo src={emailLogo} />
              </Link>
              <Link
                href=" https://www.instagram.com/myczkowce_sadyba/?hl=pl"
                target="_blank"
              >
                <Photo src={instalogo} />
              </Link>
            </IconsWrapper>
          </Col>
        </Row>
      </Grid>
    </NavigationWrapper>
  );
};

const Link = styled.a`
  margin: 0px 5px;
`;
const Hr = styled.hr`
  margin-bottom: 30px;
`;
const NavigationWrapper = styled.div`
  padding: 20px 0px 40px 0px;
  background-color: rgba(0, 0, 0, 0.6);
`;
const H2Wrapper = styled.h2`
  color: rgb(255, 255, 255);
`;
const Photo = styled.img`
  width: 30px;
`;
const PhoneWrapper = styled.a`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  text-decoration: none;
  color: rgb(255, 255, 255);
  :hover {
    cursor: pointer;
  }
`;
const IconsWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
