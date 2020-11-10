import React from "react";
import styled from "styled-components";
import { Grid, Row, Col } from "react-flexbox-grid";
import photo2 from "../../images/src16.jpg";
import photo3 from "../../images/pict2.webp";
import photo1 from "../../images/logosadyba.jpg";

export const Restaurant = () => {
  return (
    <>
      <ImageWrapper>
        <Image src={photo2} />
      </ImageWrapper>
      <Grid>
        <Container>
          <Col>
            <H2Wrapper>
              {" "}
              MYCZKOWCE <div>SADYBA</div>
            </H2Wrapper>
          </Col>

          <InfoPicture>
            <Row center="xs">
              <Col xs={12} sm={12} md={5} lg={4}>
                <Image2 src={photo1} />
              </Col>
              <Col xs={12} sm={12} md={7} lg={8}>
                <TextWrapper>
                  Obiekt MYCZKOWCE SADYBA położony jest w miejscowości Uherce
                  Mineralne.
                  <div className="info">
                    {" "}
                    Oferuje on wspólny salon, ogród oraz sprzęt do grillowania.
                    Na miejscu działa bar i restauracja. Dla dzieci przygotowano
                    plac zabaw. Z okien roztaczają się widoki na rzekę.
                  </div>
                  {/* <div className="info">
                    Wszystkie domy obejmują salon z sofą oraz w pełni wyposażoną
                    kuchnię. W łazience znajduje się wanna lub prysznic.
                    Mieszczą one również jadalnię i część wypoczynkową.
                    Codziennie rano na miejscu serwowane jest śniadanie w formie
                    bufetu. Do dyspozycji Gości jest taras. W okolicy panują
                    dobre warunki do uprawiania turystyki pieszej. Na miejscu
                    można wypożyczyć rowery.
                  </div> */}
                  <div className="info">
                    Obiekt MYCZKOWCE SADYBA jest oddalony o 13 km od Polańczyka
                    i o 38 km od Arłamowa. Odległość od lotniska
                    Rzeszów-Jasionka wynosi 114 km. Transfer lotniskowy dostępny
                    jest za dodatkową opłatą. Mówimy w Twoim języku! Obiekt
                    MYCZKOWCE SADYBA obsługuje Gości Booking.com od 8 PAŹ 2019.
                  </div>
                </TextWrapper>
              </Col>
            </Row>
          </InfoPicture>
          <H3Wrapper>OFERUJEMY</H3Wrapper>
          <Row center="xs">
            <UlWrapper>
              <Col xs={12} lgOffset={1} lg={10}>
                <Row>
                  <Col xs={12} sm={12} md={4} lg={4}>
                    <Ul>
                      <Li>Indywidualne podejście do klienta</Li>
                    </Ul>
                  </Col>
                  <Col xs={12} sm={12} md={4} lg={4}>
                    <Ul>
                      <Li>Różnorodność oferty</Li>
                    </Ul>
                  </Col>
                  <Col xs={12} sm={12} md={4} lg={4}>
                    <Ul>
                      {" "}
                      <Li>Doświadczenie w realizacji nietypowych imprez</Li>
                    </Ul>
                  </Col>
                  <Col xs={12} sm={12} md={6} lg={6}>
                    <Ul>
                      {" "}
                      <Li>Miła i sprawna obsługa</Li>
                    </Ul>
                  </Col>
                  <Col xs={12} sm={12} md={6} lg={6}>
                    <Ul>
                      {" "}
                      <Li> Wysoka jakość potraw</Li>
                    </Ul>
                  </Col>
                </Row>
              </Col>
            </UlWrapper>
          </Row>
          <Row>
            <Col>
              <MenuWrapper>
                <ImageWrapper>
                  to bedzie menu
                  <Image1 src={photo3} />
                </ImageWrapper>
              </MenuWrapper>
            </Col>
          </Row>
        </Container>
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
const InfoPicture = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
const Container = styled.div`
  padding-left: 40px;
  padding-right: 40px;
`;
const H2Wrapper = styled.h2`
  color: rgb(236, 159, 14);
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
`;
const TextWrapper = styled.div`
  text-align: left;
  .info {
    padding-top: 25px;
  }
`;
const MenuWrapper = styled.div`
  height: 700px;
  padding-top: 50px;
`;
const Image1 = styled.img`
  height: 600px;
  width: 100%;
`;
const Image2 = styled.img`
  height: 300px;
  width: 100%;
  border-radius: 10px;
  box-shadow: 0 0px 6px rgba(0, 0, 0, 0.12), 0 0px 6px rgba(0, 0, 0, 0.12);
  -webkit-transition: 0.5s;
  transition: 0.5s;
`;
const Ul = styled.ul``;
const Li = styled.li`
  padding-top: 15px;
`;
const UlWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  color: white;
`;
const H3Wrapper = styled.h3`
  color: rgb(236, 159, 14);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
`;
