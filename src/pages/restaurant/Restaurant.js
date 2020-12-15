import React from "react";
import styled from "styled-components";
import { Grid, Row, Col } from "react-flexbox-grid";
import photo2 from "../../images/src16.jpg";
import photo3 from "../../images/menu.jpg";
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
            <H1Wrapper>
              {" "}
              MYCZKOWCE <div>SADYBA</div>
            </H1Wrapper>
          </Col>
          <Break></Break>
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
          <H2Wrapper>OFERUJEMY</H2Wrapper>
          <Row center="xs">
            <UlWrapper>
              <Col xs={12} lgOffset={1} lg={10}>
                <OffertsWrapper>
                  <Row>
                    <Col xs={12} sm={12} md={4} lg={4}>
                      <OfferWrapper>
                        {" "}
                        Indywidualne podejście do klienta{" "}
                      </OfferWrapper>
                    </Col>
                    <Col xs={12} sm={12} md={4} lg={4}>
                      <OfferWrapper> Różnorodność oferty</OfferWrapper>
                    </Col>
                    <Col xs={12} sm={12} md={4} lg={4}>
                      <OfferWrapper>
                        {" "}
                        Doświadczenie w realizacji nietypowych imprez
                      </OfferWrapper>
                    </Col>
                    <Col xs={12} sm={12} md={4} lg={4}>
                      <OfferWrapper> Miła i sprawna obsługa</OfferWrapper>
                    </Col>
                    <Col xs={12} sm={12} md={4} lg={4}>
                      <OfferWrapper> Wysoka jakość potraw</OfferWrapper>
                    </Col>
                    <Col xs={12} sm={12} md={4} lg={4}>
                      <OfferWrapper> Przyjazna i miła atmosfera</OfferWrapper>
                    </Col>
                  </Row>
                </OffertsWrapper>
              </Col>
            </UlWrapper>
          </Row>
          <Row center="xs">
            <Col xs={12}>
              <Image1 src={photo3} />
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
  margin-left: 20px;
  margin-right: 20px;
  font-size: 18px;
  line-height: 1.3;
  font-weight: 500;
`;
const H1Wrapper = styled.h1`
  color: rgb(236, 159, 14);
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  margin-top: 70px;
`;
const TextWrapper = styled.div`
  text-align: left;
  padding-left: 18px;
  padding-top: 20px;
  .info {
    padding-top: 25px;
  }
`;

const Image1 = styled.img`
  max-width: 100%;
  max-height: 100vh;
  margin-top: 50px;
  border-radius: 8px;
  margin-bottom: 90px;
`;
const Image2 = styled.img`
  height: 300px;
  width: 100%;
  border-radius: 10px;
  box-shadow: 0 0px 6px rgba(0, 0, 0, 0.12), 0 0px 6px rgba(0, 0, 0, 0.12);
  -webkit-transition: 0.5s;
  transition: 0.5s;
`;

const UlWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  color: white;
  margin-bottom: 40px;
  margin-top: 40px;
`;
const H2Wrapper = styled.h2`
  color: rgb(236, 159, 14);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  margin-top: 55px;
`;
const OffertsWrapper = styled.div`
  margin-top: 5px;
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  text-align: left;
`;
const OfferWrapper = styled.div`
  padding: 15px 0px;
  display: flex;
  flex-direction: column;
`;
const Break = styled.div`
  margin-top: 40px;
`;
