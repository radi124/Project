import React from "react";
import { Grid, Row, Col } from "react-flexbox-grid";
import styled from "styled-components";
import photo1 from "../../images/src9.jpg";
import photo2 from "../../images/src12.jpg";
import { Link } from "react-router-dom";

import photo4 from "../../images/sadyba.jpg";

export const Main = (props) => {
  return (
    <>
      <Image src={photo4} />
      <Grid>
        <Row center="xs">
          <Col xs={12}>
            <H1Wrapper> {props.Drugazakładka}</H1Wrapper>
          </Col>
          <Col
            xs={12}
            sm={10}
            smofset={1}
            md={10}
            mdofset={1}
            lg={8}
            lgofset={2}
          >
            <FirstTextWrapper>
              Obiekt MYCZKOWCE SADYBA położony jest w miejscowości Uherce
              Mineralne. Wszystkie domy obejmują salon z sofą oraz w pełni
              wyposażoną kuchnię. W łazience znajduje się wanna lub prysznic.
              Obiekt MYCZKOWCE SADYBA jest oddalony o 13 km od Polańczyka i o 38
              km od Arłamowa. Obiekt MYCZKOWCE SADYBA położony jest w
              miejscowości Uherce Mineralne. Wszystkie domy obejmują salon z
              sofą oraz w pełni wyposażoną kuchnię. W łazience znajduje się
              wanna lub prysznic. Obiekt MYCZKOWCE SADYBA jest oddalony o 13 km
              od Polańczyka i o 38 km od Arłamowa. Obiekt MYCZKOWCE SADYBA
              położony jest w miejscowości Uherce Mineralne. Wszystkie domy
              obejmują salon z sofą oraz w pełni wyposażoną kuchnię. W łazience
              znajduje się wanna lub prysznic. Obiekt MYCZKOWCE SADYBA jest
              oddalony o 13 km od Polańczyka i o 38 km od Arłamowa.
            </FirstTextWrapper>
          </Col>
          <Col xs={12}>
            <InfoButton>
              <Link to="../contact">kontakt</Link>
            </InfoButton>
          </Col>
        </Row>
        <Offset />
        <Row center="xs">
          <Col xs={12} sm={12} md={4} lg={5}>
            <PhotoColumn src={photo1} />
          </Col>
          <Col xs={12} sm={12} md={8} lg={7}>
            <H1Wrapper>RESTAURACJA</H1Wrapper>
            <TextWrapper>
              Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a
              pellentesque dui, non felis. Maecenas malesuada elit lectus felis,
              malesuada ultricies. Curabitur et ligula. Ut molestie a, ultricies
              porta urna. Vestibulum commodo volutpat a, Lorem ipsum dolor sit
              amet enim. Etiam ullamcorper. Slutpat a,
            </TextWrapper>
            <InfoButton>
              <Link to="../restaurant">więcej</Link>
            </InfoButton>
          </Col>
        </Row>
        <Row center="xs">
          <Col xs={6} id="S2Container"></Col>
        </Row>
        <Offset />
        <Row center="xs">
          <Col xs={12} sm={12} md={8} lg={7}>
            <H1Wrapper>Domki</H1Wrapper>
            <TextWrapper>
              Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a
              pellentesque dui, non felis. Maecenas malesuada elit lectus felis,
              malesuada ultricies. Curabitur et ligula. Ut molestie a, ultricies
              porta urna. Vestibulum commodo volutpat a, Lorem ipsum dolor sit
              amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui, non
              felis urna. Vestibulum commodo volutpat a,
            </TextWrapper>
            <InfoButton>
              <Link to="../cottages">więcej</Link>
            </InfoButton>
          </Col>
          <Col xs={12} sm={12} md={4} lg={5}>
            <PhotoColumn src={photo2} />
          </Col>
        </Row>
        <Offset />
      </Grid>
    </>
  );
};

const PhotoColumn = (props) => {
  return (
    <PhotoWrapper>
      <Photo src={props.src} />
    </PhotoWrapper>
  );
};

const Photo = styled.img`
  width: 100%;
  height: 230px;
  margin-top: 14px;
  object-fit: cover;
  border-radius: 12px;
  box-shadow: 1px 0px 4px 1px rgba(119, 119, 119, 0.4);
`;

const PhotoWrapper = styled.div`
  width: 100%;
`;

const Image = styled.img`
  height: 600px;
  width: 100%;
  object-fit: cover;
  margin-bottom: 40px;
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
    :hover {
      cursor: pointer;
      box-shadow: 0 0px 2px #848484, 0 0px 2px #848484;
    }
  }
`;

const H1Wrapper = styled.h1``;

const Offset = styled.div`
  margin-top: 100px;
`;

const TextWrapper = styled.div`
  text-align: left;
  margin: 0px 15px 40px 15px;
  line-height: 1.4;
  font-size: 18px;
`;

const FirstTextWrapper = styled.div`
  text-align: justify;
  margin-bottom: 25px;
  font-size: 18px;
  line-height: 1.4;
  margin-right: 20px;
  margin-left: 20px;
`;
