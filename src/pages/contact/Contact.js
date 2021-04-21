import React from "react";
import { Grid, Row, Col } from "react-flexbox-grid";
import styled from "styled-components";
import img1 from "./images/img1.webp";
import { withGoogleMap, GoogleMap, Marker } from "react-google-maps";
import img2 from "../../pages/motoMotelik/images/zachódSłońca.jpg";
import img3 from "../../pages/motoMotelik/images/zachódSłońca.jpg";

export const Contact = () => {
  return (
    <>
      <ImageWrapper>
        <Image src={img1} />
      </ImageWrapper>

      <Grid>
        <Row>
          <Col xs={12} sm={12} md={4} lg={5}>
            <H2Wrapper>Zapraszamy do kontaktu!</H2Wrapper>
            Marta tel. 609 470 676 <Offset />
            Marcin tel. 514 789 715
            <Offset />
            email: mecajan@wp.pl
            <Offset />
            <H2Wrapper>REZERWACJA MIEJSC</H2Wrapper>
            <a
              href="https://www.booking.com/hotel/pl/myczkowce-sadyba.pl.html?label=gen173nr-1FCAEoggI46AdIM1gEaLYBiAEBmAEeuAEXyAEP2AEB6AEB-AELiAIBqAIDuAKYk5X9BcACAdICJDhmMTE1OGQ1LTUwODktNDUxMy04OGNjLTExNDVmODBiZTRmM9gCBuACAQ;sid=8cbc453a049553240d842fb4b431525f;dest_id=-533901;dest_type=city;dist=0;group_adults=2;group_children=0;hapos=1;hpos=1;no_rooms=1;room1=A%2CA;sb_price_type=total;sr_order=popularity;srepoch=1605024105;srpvid=d5b270b49b0300f9;type=total;ucfs=1&#tab-main"
              target="_blank"
            >
              <ButtonContact>Zarezerwuj już teraz</ButtonContact>
            </a>
          </Col>

          <Col xs={12} sm={12} md={8} lg={7}>
            <PictureWrapper>
              <Picture src={img2} />
            </PictureWrapper>
          </Col>
        </Row>
        <Row center="xs">
          <Col xs={12} sm={12} md={12} lg={12}>
            <H2Wrapper>NASZ ADRES:</H2Wrapper>
            Myczkowce 82
            <Offset />
            38-623 Uherce Mineralna
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <Map src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7775.050433719672!2d22.409332438849347!3d49.435153191285096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473bf5a0643c8783%3A0xe43319d4fb7cbf42!2sMyczkowce%2082%2C%2038-623%20Uherce%20Mineralne!5e0!3m2!1spl!2spl!4v1606343214696!5m2!1spl!2spl" />
          </Col>
        </Row>
        <Row center="xs">
          <Col xs={12} sm={12} md={12} lg={12}>
            <H2Wrapper>NASZ ADRES:</H2Wrapper>
            Myczkowce 98
            <Offset />
            38-623 Uherce Mineralna
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <Map src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3669.3897590777187!2d22.40742177092419!3d49.434423460564155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473bf5a08a60eacd%3A0x5d06d073ef96008!2sMyczkowce%2098%2C%2038-623%20Myczkowce!5e0!3m2!1spl!2spl!4v1619017276757!5m2!1spl!2spl" />
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={12} md={6} lg={6}>
            <H2Wrapper>Okolica i atrakcje</H2Wrapper>
            Zapora wodna w Myczkowcach
            <Offset />
            Ośrodek Caritas w Myczkowcach (Mini zoo, Ogród Biblijny)
            <Offset />
            Cudowne źródełko w Zwierzyniu
            <Offset />
            Drezyny rowerowe w Uhercach Mineralnych
            <Offset />
            Szkoła Rzemiosła w Uhercach Mineralnych
            <Offset />
            Degustacja regionalnego piwa w Wytwórni Ursa Maior
            <Offset />
            Kamieniołom w Bóbrce
            <Offset />
            Zwiedzanie największej Polskiej zapory wodnej w Solinie
            <Offset />
            Przejażdżka Bieszczadzka kolejką wąskotorową
          </Col>

          <Col xs={12} sm={12} md={6} lg={6}>
            <PictureWrapper>
              <Picture2 src={img2} />
            </PictureWrapper>
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
const H2Wrapper = styled.h2`
  color: rgb(236, 159, 14);
  flex-direction: column;
  display: flex;
  margin-top: 40px;
`;

const ButtonContact = styled.button`
padding: 7px;
  border-radius: 10px;
  cursor: pointer;
  color: white;
  background-color: rgb(236, 159, 14);
  text-transform: uppercase;
  font-weight:bold;
  
  a {
    color: #ffff;
    text-decoration: none;
  }
  margin-bottom:40px;
  1.1px -0.9px 0px #848484;
  border: none;
  :hover {
    box-shadow: 0 0px 2px  #848484, 0 0px 2px  #848484;
  }
`;

const Map = styled.iframe`
  height: 60vh;
  max-height: 500px;
  width: 100%;
  margin-bottom: 80px;
  border: none;
  border-radius: 20px;
  box-shadow: 1px 0px 4px 1px rgba(119, 119, 119, 0.4);
  margin-top: 40px;
`;
const Offset = styled.div`
  margin-top: 15px;
`;
const PictureWrapper = styled.div`
  margin-top: 30px;
  margin-bottom: 70px;
`;
const Picture = styled.img`
  width: 100%;
  height: 340px;
  border-radius: 10px;
`;
const Picture2 = styled.img`
  width: 100%;
  height: 400px;
  border-radius: 10px;
`;
