import React from "react";
import { Grid, Row, Col } from "react-flexbox-grid";
import styled from "styled-components";
import photo1 from "./images/r.jpg";
import photo2 from "./images/rr.jpg";
import photo3 from "./images/rrrr.jpg";

export const Section2 = (props) => {
  return (
    <>
      <ImageWrapper>
        <Image src={photo3} />
      </ImageWrapper>
      <Grid>
        <Row center="xs">
          <Col xs={12} id="S2Container">
            <H2Wrapper> {props.Drugazakładka}</H2Wrapper>
          </Col>
          <InfoWrapper>
            <Col>
              Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a
              pellentesque dui, non felis. Maecenas malesuada elit lectus felis,
              malesuada ultricies. Curabitur et ligula. Ut molestie a, ultricies
              <div>
                porta urna. Vestibulum commodo volutpat a, Lorem ipsum dolor sit
                amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui,
                non felis. Maecenas malesuada elit lectus felis, malesuada
                ultricies. Curabitur et ligula. Ut molestie a, ultricies porta
                urna. Vestibulum commodo volutpat a,
              </div>
              <div>
                porta urna. Vestibulum commodo volutpat a, Lorem ipsum dolor sit
                amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui,
              </div>
              <InfoButton>Dowiedz się Więcej</InfoButton>
            </Col>
          </InfoWrapper>
        </Row>
        <Restauracja>
          <Row center="xs">
            <Col xs={12} sm={5} md={4} lg={5}>
              <PhotoColumn src={photo1} />
            </Col>
            <Col xs={12} sm={7} md={4} lg={7}>
              <H2Wrapper>Restauracja</H2Wrapper>
              Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a
              pellentesque dui, non felis. Maecenas malesuada elit lectus felis,
              malesuada ultricies. Curabitur et ligula. Ut molestie a, ultricies
              <div>
                porta urna. Vestibulum commodo volutpat a, Lorem ipsum dolor sit
                amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui,
                non urna. Vestibulum commodo volutpat a,
              </div>
              <InfoButton>Dowiedz się Więcej</InfoButton>
            </Col>
          </Row>
          <Row center="xs">
            <Col xs={6} id="S2Container"></Col>
          </Row>
        </Restauracja>
        <Domki>
          <Row center="xs">
            <Col xs={12} sm={7} md={4} lg={7}>
              <H2Wrapper>Domki</H2Wrapper>
              Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a
              pellentesque dui, non felis. Maecenas malesuada elit lectus felis,
              malesuada ultricies. Curabitur et ligula. Ut molestie a, ultricies
              <div>
                porta urna. Vestibulum commodo volutpat a, Lorem ipsum dolor sit
                amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui,
                non felis urna. Vestibulum commodo volutpat a,
              </div>
              <InfoButton>Dowiedz się Więcej</InfoButton>
            </Col>
            <Col xs={12} sm={5} md={4} lg={5}>
              <PhotoColumn src={photo2} />
            </Col>
          </Row>
        </Domki>
      </Grid>
    </>
  );
};

const PhotoColumn = (props) => {
  return (
    <>
      <PhotoWrapper>
        <Photo src={props.src} />
      </PhotoWrapper>
    </>
  );
};

const Photo = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
  border-radius: 12px;
  box-shadow: 0 0px 6px rgba(0, 0, 0, 0.12), 0 0px 6px rgba(0, 0, 0, 0.12);
  transition: 0.5s;
  :hover {
    box-shadow: 0 0px 12px rgba(0, 0, 0, 0.24), 0 0px 12px rgba(0, 0, 0, 0.24);
    cursor: pointer;
  }
`;

const PhotoWrapper = styled.div`
  width: 100%;
  height: 200px;
`;

const Image = styled.img`
  height: 600px;
  width: 100%;
  object-fit: cover;
`;
const ImageWrapper = styled.div``;
const InfoWrapper = styled.a`
  height: 200px;
`;
const InfoButton = styled.button`
  padding: 7px;
  border-radius: 10px;
  cursor: pointer;
  color: white;
  background-color: #006633;
  
  1.1px -0.9px 0px #848484;
  border: none;
  :hover {
    box-shadow: 0 0px 2px  #848484, 0 0px 2px  #848484;
`;
const H2Wrapper = styled.h2`
  color: black;
  padding-top: 30px;
`;
const Domki = styled.div`
  padding-top: 50px;
  padding-bottom: 200px;
`;
const Restauracja = styled.div`
  padding-top: 30px;
`;
