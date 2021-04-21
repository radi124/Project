import React from "react";
import styled from "styled-components";
import { Grid, Row, Col } from "react-flexbox-grid";
import topPhoto from "../galery/images/src13.jpg";
import img1 from "./images/house2.jpg";
import img2 from "./images/house3.jpg";
import img3 from "./images/house1.jpg";

export const MyczkowceSadyba = () => {
  return (
    <>
      <ImageWrapper>
        <Image src={topPhoto} />
      </ImageWrapper>
      <Grid>
        <Row center="xs">
          <Col xs={12} sm={12} md={8} lg={6}>
            <H1wrapper>Domki</H1wrapper>
            <TextWrapper>
              <H2wrapper>
                {" "}
                Do wyboru mamy Domek Lniany, Makowy, Lawendowy, Różany
              </H2wrapper>
              Oferujemy wypoczynek w całorocznych max 7 os domach. Domki
              posiadają kominki oraz ogrzewanie elektryczne. W domku znajduję
              się jedna sypialnia z łóżkiem podwójnym. W drugiej sypialni
              znajduję się łóżko piętrowe ułożone w literę „L”, a na antresoli
              dodatkowo znajdują się 3 miejsca do spania. Kuchnia wyposażona
              jest w podstawowe naczynia i akcesoria. W domkach znajduje się
              przestronna łazienka z kabiną prysznicową, ogrzewaniem podłogowym
              i oczywiście z ręcznikami dla Państwa. Każdy domek posiada
              prywatny zadaszony taras z grillem, hamakami oraz leżakami. Do
              Państwa dyspozycji: palenisko, biesiadna stodoła z możliwością
              skorzystania z pieca do pizzy opalanego drewnem. Na posesji
              dostępny parking, cały teren jest ogrodzony i monitorowany. W
              ogrodzie na najmłodszych czeka plac zabaw (huśtawki, bocianie
              gniazdo, piaskownica, zjeżdżalnia oraz domek), trampolina i
              hamaki. A przy naszej restauracji dodatkowo czeka małpi gaj z
              kulkami (dla naszych gości całodnionwy bezpłatny karnet). Do
              Państwa dyspozycji, także odkryty basen. Dysponujemy siecią WiFi.{" "}
            </TextWrapper>
          </Col>
          <Col xs={12} sm={12} md={4} lg={6}>
            <Image1 src={img1} />
          </Col>
        </Row>
        <Break />
        <Row center="xs">
          <Col xs={12} sm={12} md={4} lg={6}>
            <Image2 src={img2} />
          </Col>
          <Col xs={12} sm={12} md={8} lg={6}>
            <H1wrapper>Stajnia</H1wrapper>
            <TextWrapper>
              Do zaoferowania posiadamy duży dom max 9 os. Dom całoroczny z
              przestronnym salonem z kominkiem i kuchnią. Znajdują się dwie
              sypialnie 3 osobowe z jednym podwójnym łóżkiem i jednym
              pojedynczym, w trzeciej sypialni znajduje się jedno łóżko
              podwójne. W domu znajduje się przestronna łazienka z kabiną
              prysznicową, oczywiście z ręcznikami dla Państwa. Do Państwa
              dyspozycji: palenisko, biesiadna stodoła z możliwością
              skorzystania z pieca do pizzy opalanego drewnem, hamaki i leżaki.
              Na posesji dostępny parking, cały teren jest ogrodzony i
              monitorowany. W ogrodzie na najmłodszych czeka plac zabaw
              (huśtawki, bocianie gniazdo, piaskownica, zjeżdżalnia oraz domek),
              trampolina i hamaki. A przy naszej restauracji dodatkowo czeka
              małpi gaj z kulkami (dla naszych gości całodniowy bezpłatny
              karnet). Do Państwa dyspozycji, także odkryty basen. Dysponujemy
              siecią WiFi.
            </TextWrapper>
            <Col xs={12} sm={12}>
              <Image4 src={img2} />
            </Col>
          </Col>
        </Row>

        <Break />
        <Row center="xs">
          <Col xs={12} sm={12} md={8} lg={6}>
            <H1wrapper>Sadyba</H1wrapper>
            <TextWrapper>
              Oferujemy starą, wyremontowaną chałupę max 8 os, w której czas się
              zatrzymał. Dom z przestronną kuchnią, w której dodatkowo znajduje
              się stary piec kaflowy. W pierwszej izbie znajduje się jedno łóżko
              podwójne oraz dwa łóżka pojedyncze. Na poddaszu znajdują się
              cztery pojedyncze łóżka. Kuchnia wyposażona jest w podstawowe
              naczynia i akcesoria. W domkach znajduje się przestronna łazienka
              z kabiną prysznicową i oczywiście z ręcznikami dla Państwa. Każdy
              domek posiada prywatny zadaszony taras z grillem, hamakami oraz
              leżakami. Do Państwa dyspozycji: palenisko, biesiadna stodoła z
              możliwością skorzystania z pieca do pizzy opalanego drewnem. Na
              posesji dostępny parking, cały teren jest ogrodzony i
              monitorowany. W ogrodzie na najmłodszych czeka plac zabaw
              (huśtawki, bocianie gniazdo, piaskownica, zjeżdżalnia oraz domek),
              trampolina i hamaki. A przy naszej restauracji dodatkowo czeka
              małpi gaj z kulkami (dla naszych gości całodnionwy bezpłatny
              karnet). Do Państwa dyspozycji, także odkryty basen. Dysponujemy
              siecią WiFi.{" "}
            </TextWrapper>
          </Col>
          <Col xs={12} sm={12} md={4} lg={6}>
            <Image3 src={img3} />
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={12} md={5} lg={6}>
            <Break />
            {/* czemu sie nie stackuje */}
            <PrizeWrapper>
              <Offerwrapper>
                Cennik pobytu (w cenie noclegu jest śniadanie w formie
                szwedzkiego stołu w naszej restauracji) :
              </Offerwrapper>
              <Offerwrapper>
                {" "}
                <H2wrapper>Domki :</H2wrapper>
                Cennik pobytu w sezonie letnim
              </Offerwrapper>
              <Offset />
              <Offset /> 1-4 osób w naszych Domkach 450 zł
              <Offset /> 5-6 osób 580 zł
              <Offset /> 7 osób 650 zł
              <Biggeroffset />
              <Offerwrapper> Cennik pobytu poza sezonem :</Offerwrapper>
              <Offset />
              <Offset /> 1-4 osób w naszych Domkach 400 zł
              <Offset /> 5-6 osób 550 zł
              <Offset /> 7 osób 600 zł
              <Offerwrapper>
                {" "}
                <Bigestoffset />
                <H2wrapper>Stajnia :</H2wrapper>
                Cennik pobytu w sezonie letnim
              </Offerwrapper>
              <Offset />
              <Offset /> 1-4 osób 500 zł
              <Offset /> 5-6 osób 650 zł
              <Offset /> 7-8 osób 800 zł
              <Biggeroffset />
              <Offerwrapper> Cennik pobytu poza sezonem :</Offerwrapper>
              <Offset />
              <Offset /> 1-4 osób 450 zł
              <Offset /> 5-6 osób 600 zł
              <Offset /> 6-7 osób 750 zł
              <Offerwrapper>
                {" "}
                <Bigestoffset />
                <H2wrapper>Sadyba :</H2wrapper>
                Cennik pobytu w sezonie letnim
              </Offerwrapper>
              <Offset />
              <Offset /> 1-4 osób 500 zł
              <Offset /> 5-6 osób 650 zł
              <Offset /> 6-7 osób 750 zł
              <Biggeroffset />
              <Offerwrapper> Cennik pobytu poza sezonem :</Offerwrapper>
              <Offset />
              <Offset /> 1-4 osób 400 zł
              <Offset /> 5-6 osób 600 zł
              <Offset /> 6-7 osób 700 zł
            </PrizeWrapper>
          </Col>

          <Col xs={12} sm={12} md={7} lg={6}>
            <LImageWrapper>
              <Image5 src={img3} />
              <Image5 src={img2} />
              <Image5 src={img1} />
            </LImageWrapper>
          </Col>
        </Row>
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
const H1wrapper = styled.h1``;
const Image1 = styled.img`
  width: 100%;
  height: 600px;
  margin-top: 30px;
  border-radius: 10px;
`;
const H2wrapper = styled.h3``;
const TextWrapper = styled.div`
  text-align: left;
  margin: 0px 15px 40px 15px;
  line-height: 1.4;
  font-size: 18px;
`;
const Break = styled.div`
margin-top 100px

`;
const Image2 = styled.img`
  width: 100%;
  height: 450px;
  margin-top: 30px;
  border-radius: 10px;
  display: block;
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;
const Image3 = styled.img`
  width: 100%;
  height: 450px;
  margin-top: 30px;
  border-radius: 10px;
`;
const Image4 = styled.img`
  width: 100%;
  height: 450px;
  margin-top: 30px;
  border-radius: 10px;
  display: block;
  @media only screen and (min-width: 768px) {
    display: none;
`;
const Offset = styled.div`
  margin-top: 10px;
`;
const PrizeWrapper = styled.div`
  margin-top: 230px;
`;
const Biggeroffset = styled.div`
  margin-top: 30px;
`;
const Bigestoffset = styled.div`
  margin-top: 60px;
`;
const Offerwrapper = styled.div`
  font-weight: bolder;
`;
const Image5 = styled.img`
  width: 100%;
  margin-top: 40px;
  border-radius: 10px;
  height: 350px;
`;
const LImageWrapper = styled.div`
  margin-top: 180px;
  margin-bottom: 40px;
`;
