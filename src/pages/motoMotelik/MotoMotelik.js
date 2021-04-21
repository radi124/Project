import React from "react";
import styled from "styled-components";
import { Grid, Row, Col } from "react-flexbox-grid";
import topPhoto from "./images/zachódSłońca.jpg";
import img1 from "./images/img1.jpg";
import img2 from "./images/img2.jpg";
import img3 from "./images/img3.jpg";

export const MotoMotelik = () => {
  return (
    <>
      <ImageWrapper>
        <Image src={topPhoto} />
      </ImageWrapper>
      <Grid>
        <Row>
          <Col xs={12} sm={12} md={7} lg={6}>
            <H1wrapper>MotoMotelik</H1wrapper>
            <TextWrapper>
              {" "}
              Specjalnie dla zmotoryzowanych i oczywiście nie tylko! do
              zaoferowania mamy nowo powstały MotoMotelik. Z monitorowanym
              parkingiem! Nieograniczony dostęp do sieci WiFi.
            </TextWrapper>
            <H2wrapper>Oferujemy</H2wrapper>
            <Break />
            <H3wrapper> Pokój 1:</H3wrapper>
            <Offset />
            <TextWrapper>
              3 osobowy pokój oczywiście z osobnym wejściem, łazienką na
              wyłączność z prysznicem i ręcznikami, w pokoju znajdują się trzy
              łóżka pojedyncze.
            </TextWrapper>
            <Break />
            <Offset />{" "}
            <TextWrapper>
              <H3wrapper> Pokój 2:</H3wrapper> <Offset />3 osobowy pokój
              oczywiście z osobnym wejściem, łazienką na wyłączność z prysznicem
              i ręcznikami, w pokoju znajduję się jedno łóżko podwójne i jedno
              pojedyncze.
            </TextWrapper>
            <Break />
            <H3wrapper> Pokój 3:</H3wrapper> <Offset />{" "}
            <TextWrapper>
              4 osobowy pokój z osobnym wejściem, łazienką na wyłączność z
              prysznicem i ręcznikami, w pokoju znajdują się cztery łóżka
              pojedyncze.
            </TextWrapper>
            <Break />
            <H3wrapper> Pokój 4:</H3wrapper> <Offset />
            <TextWrapper>
              4 osobowy pokój z osobnym wejściem, łazienką na wyłączność z
              prysznicem i ręcznikami, w pokoju znajdują się cztery łóżka
              pojedyncze.
            </TextWrapper>
            <Break />
            <H2wrapper>Cena</H2wrapper>
            85 zł osoba za dobę (więcej niż jedna noc)
            <Offset />
            100 zł osoba za dobę (za jedną noc)
          </Col>
          <Col xs={12} sm={12} md={5} lg={6}>
            <PictureWrapper>
              <Picture src={img1} />
              <Picture src={img2} />
              <Picture src={img3} />
            </PictureWrapper>
          </Col>
        </Row>
        <Mbot />
      </Grid>
    </>
  );
};
const Image = styled.img`
  height: 600px;
  width: 100%;
  object-fit: cover;
`;
const ImageWrapper = styled.div`
  margin-bottom: 60px;
`;
const H1wrapper = styled.h1`
  color: white;
`;
const H2wrapper = styled.h2`
  color: white;
`;
const Offset = styled.div`
  margin-top: 10px;
`;
const H3wrapper = styled.div`
  font-weight: bold;
  color: white;
`;
const Break = styled.div`
  margin-top: 45px;
`;
const TextWrapper = styled.div`
  color: #dbdbdb;
`;
const PictureWrapper = styled.div``;
const Picture = styled.img`
  width: 100%;
  height: 250px;
  margin-top: 20px;
  border-radius: 10px;
`;
const Mbot = styled.div`
  margin-bottom: 50px;
`;
