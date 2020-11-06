import React from "react";
import styled from "styled-components";
import { Grid, Row, Col } from "react-flexbox-grid";
import photo1 from "../images/phone.svg";
import FacebookLogo from "../images/facebook.svg";
import EmailLogo from "../images/email.svg";
import Instalogo from "../images/instagram.svg";

export const Footer = () => {
  return (
    <NavigationWrapper id="xd">
      <Grid>
        <Container>
          <NavigationWrapper2>
            <Row>
              <Col>
                <Line>
                  <H2Wrapper>
                    Myczkowce
                    <div>Sadyba</div>
                  </H2Wrapper>
                  Myczkowce 82 38-623 Solina ,Polska
                </Line>
              </Col>
            </Row>
            <Row>
              <Col>
                <Border></Border>
              </Col>
            </Row>

            <Row center="xs">
              <Col xs={12}>
                <Row>
                  <Col xs={6} sm={4} md={4} lg={4}>
                    <CopyRightWrapper>
                      Copyright © 2018-2020 Sadyba Sp. z o.o. All rights
                      reserved.
                    </CopyRightWrapper>
                  </Col>
                  <Col xs={6} sm={4} md={4} lg={4}>
                    <PhotoWrapper>
                      <Photo src={photo1} />
                      609 470 676
                    </PhotoWrapper>
                  </Col>

                  <Col xs={12} sm={4} md={4} lg={4}>
                    <IconsWrapper>
                      <FbWrapper>
                        {" "}
                        <a
                          href="https://www.facebook.com/myczkowcesadyba/?epa=SEARCH_BOX"
                          target="_blank"
                        >
                          <img src={FacebookLogo} />
                        </a>
                      </FbWrapper>
                      <EMailWrapper>
                        <a
                          href=" https://www.instagram.com/explore/locations/226554641416824/myczkowce-sadyba/?hl=pl  "
                          target="_blank"
                        >
                          <img src={EmailLogo} />
                        </a>
                      </EMailWrapper>
                      <InstaWrapper>
                        <a
                          href=" https://www.instagram.com/myczkowce_sadyba/?hl=pl"
                          target="_blank"
                        >
                          <img src={Instalogo} />
                        </a>
                      </InstaWrapper>
                    </IconsWrapper>
                  </Col>
                </Row>
              </Col>
            </Row>
          </NavigationWrapper2>
        </Container>
      </Grid>
    </NavigationWrapper>
  );
};

const NavigationWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: 300px;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.6);
`;
const NavigationWrapper2 = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  a {
    text-decoration: none;
    color: rgb(255, 255, 255);
  }
`;
const Line = styled.div`
  align-items: center;

  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const H2Wrapper = styled.h2`
  color: rgb(255, 255, 255);
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const Border = styled.tr`
  border-bottom: 1px solid grey;
  width: 800px;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100vw;
`;

const Photo = styled.img`
  width: 30px;
`;
const PhotoWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-top: 20px;
`;

const FbWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-right: 10px;
`;
const EMailWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-right: 10px;
`;
const InstaWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-right: 10px;
`;

const IconsWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-top: 20px;
`;
const CopyRightWrapper = styled.div`
  padding-top: 20px;
`;
const Container = styled.div``;
