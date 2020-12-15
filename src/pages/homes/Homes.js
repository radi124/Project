import React from "react";
import { Grid, Row, Col } from "react-flexbox-grid";
import styled from "styled-components";
import photo2 from "../galery/images/src13.jpg";

let elements = [
  "ręczniki",
  "prywatna łazienka",
  "wanna lub prysznic",
  "szafa lub garderoba",
  "bezpłatny parking",
  "część wypoczynkowa",
  "bar",
  "restauracja",
  "bar z przekąskami",
  "bezpłatny parking",
  "pokój gier",
  "plac zabaw",
  "całość dostępna dla wózków inwalidzkich",
  "miejsce na ognisko",
  "sklep na miejscu",
  "sklep z upominkami",
  "biblioteka",
];

export const Homes = () => {
  return (
    <>
      <ImageWrapper>
        <Image src={photo2} />
      </ImageWrapper>

      <Grid>
        <Row center="xs">
          <Col xs={12}>
            <H1Wrapper>Domki</H1Wrapper>
          </Col>
        </Row>

        <Row>
          <Col
            xs={12}
            sm={10}
            smOffset={1}
            md={10}
            mdOffset={1}
            lg={8}
            lgOffset={2}
          >
            Wszystkie domy obejmują salon z sofą oraz w pełni wyposażoną
            kuchnię. W łazience znajduje się wanna lub prysznic. Mieszczą one
            również jadalnię i część wypoczynkową. Codziennie rano na miejscu
            serwowane jest śniadanie w formie bufetu. Do dyspozycji Gości jest
            taras. W okolicy panują dobre warunki do uprawiania turystyki
            pieszej. Na miejscu można wypożyczyć rowery.
          </Col>
        </Row>

        <Row center="xs">
          <Col>
            <H2Wrapper>UDOGODNIENIA</H2Wrapper>
          </Col>
        </Row>

        <Row center="xs">
          {elements.map((element, index) => (
            <Col>
              <Element
                style={{
                  background:
                    index % 2 === 0 ? "#fffcf0" : "rgba(255, 231, 187, 0.82)",
                }}
              >
                {element}
              </Element>
            </Col>
          ))}
        </Row>
        <Margin></Margin>
      </Grid>
    </>
  );
};
const Image = styled.img`
  height: 600px;
  width: 100%;
  object-fit: cover;
`;
const ImageWrapper = styled.div``;

const H1Wrapper = styled.h1`
  color: rgb(236, 159, 14);
  margin-top: 50px;
`;

const H2Wrapper = styled.h1`
  color: rgb(236, 159, 14);
  margin-top: 50px;
  margin-bottom: 50px;
`;

const Element = styled.div`
  padding: 10px 20px;
  margin: 15px 15px;
  color: black;
  border-radius: 8px;
  text-align: center;
  text-transform: uppercase;
  font-weight: 500;
  font-size: 18px;
  letter-spacing: 1.2px;
`;
const Margin = styled.div`
  margin-bottom: 80px;
`;
