import React from "react";
import { Grid, Row, Col } from "react-flexbox-grid";
import styled from "styled-components";
import photo1 from "../../images/src9.jpg";
import photo2 from "../../images/src12.jpg";
import { Link } from "react-router-dom";
import photo4 from "../../images/sadyba.jpg";
import motel from "./images/motomotelik_main.jpg";
import motor from "./images/motomyczki_main.jpg";
import imprezy from "./images/imprezy_okolicznościowe_main.jpg";
export const Main = (props) => {
  return (
    <>
      <Image src={photo4} />
      <Grid>
        <Row center="xs">
          <Col xs={12}>
            <H1Wrapper> {props.Drugazakładka}</H1Wrapper>
          </Col>
          <Col xs={12} sm={10} md={10} lg={8}>
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
              Zapraszamy strudzonych wędrowców do cichej i przytulnej
              restauracji na pyszne domowe obiady przyrządzane w tradycyjny
              sposób.
            </TextWrapper>
            <InfoButton>
              <Link to="../restaurant">więcej</Link>{" "}
              {/* trzeba zmienic link na podstrone  */}
            </InfoButton>
          </Col>
        </Row>
        <Row center="xs">
          <Col xs={6} id="S2Container"></Col>
        </Row>
        <Offset />
        <Row center="xs">
          <Col xs={12} sm={12} md={8} lg={7}>
            <H1Wrapper>MYCZKOWCE SADYBA</H1Wrapper>
            <TextWrapper>
              Domek Lniany, Makowy, Lawendowy, RóżanyOferujemy wypoczynek w
              całorocznych max 7 os domach. Domki posiadają kominki oraz
              ogrzewanie elektryczne. Do zaoferowania posiadamy duży dom max 9
              os. Dom całoroczny z przestronnym salonem z kominkiem i kuchnią.
              Oferujemy starą, wyremontowaną chałupę max 8 os, w której czas się
              zatrzymał. Dom z przestronną kuchnią, w której dodatkowo znajduje
              się stary piec kaflowy.
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
        <Offset />
        <Row center="xs">
          <Col xs={12} sm={12} md={4} lg={5}>
            <PhotoColumn src={motel} />
          </Col>
          <Col xs={12} sm={12} md={8} lg={7}>
            <H1Wrapper>MotoMotelik</H1Wrapper>
            {/* zeby bylo na odwrot na minimalu */}
            <TextWrapper>
              Specjalnie dla zmotoryzowanych i oczywiście nie tylko! do
              zaoferowania mamy nowo powstały MotoMotelik. Z monitorowanym
              parkingiem! Nieograniczony dostęp do sieci WiFi.Oferujemy
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
        <DoubleName>
          <Row center="xs">
            <Col xs={12} sm={12} md={4} lg={6}>
              <H1Wrapper>MotoMyczki</H1Wrapper>
              <TextWrapper>
                Miejsce, które powstało z pasji do motocykli. Znajdziesz tu
                zawsze pomoc oraz dach nad głową i najesz się do syta a przy
                kuflu zimnego piwka przegadasz cała noc! W tym miejscu możesz
                podzielić się z nami swoimi opowieściami z podróży. Zajmujemy
                się pomocą w organizacji zlotów oraz podajemy pomocną dłon i
                wskazujemy ciekawe i warte przejechania trasy. Dla naszych gości
                organizujemy safari po okolicy.
              </TextWrapper>
              <PhotoColumnv2 src={motor} />
              <InfoButton>
                <Link to="../cottages">więcej</Link>
              </InfoButton>
            </Col>
            <Col xs={12} sm={12} md={4} lg={6}>
              <H1Wrapper> Imprezy okolicznościowe</H1Wrapper>
              <TextWrapper>
                W naszej ofercie można też znaleźć organizację imprez
                okolicznościowych takich jak chrzciny, komunia, urodziny czy
                spotkanie integracyjne. Sami lubimy uczestniczyć w takich
                wydarzeniach, dlatego chętnie przygotujemy je specjalnie dla
                Ciebie! Menu i forma przyjęcia omawiana jest indywidualnie
                telefonicznie lub osobiście (po wcześniej umówionym spotkaniu).
                Ceny uzależnione są od terminu i ilości osób.
              </TextWrapper>
              <PhotoColumnv2 src={imprezy} />
              <InfoButton>
                <Link to="../cottages">więcej</Link>
              </InfoButton>
            </Col>
          </Row>
        </DoubleName>
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
const PhotoColumnv2 = (props) => {
  return (
    <PhotoWrapperv2>
      <Photov2 src={props.src} />
    </PhotoWrapperv2>
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
  margin-top: 20px;
`;

const Image = styled.img`
  height: 600px;
  width: 100%;
  object-fit: cover;
  margin-bottom: 40px;
`;

const InfoButton = styled.div`
  margin-top: 30px;
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
const DoubleName = styled.div`
  margin-top: 100px;
  margin-bottom: 100px;
`;
const Photov2 = styled.img`
  width: 80%;
  justify-content: center;
  text-align: center;
  height: 250px;
  margin-top: 14px;
  object-fit: cover;
  border-radius: 30px;
  box-shadow: 1px 0px 4px 1px rgba(119, 119, 119, 0.4);
`;

const PhotoWrapperv2 = styled.div`
  width: 100%;
`;
